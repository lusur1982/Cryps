// Database connection pool and query optimization
import { PrismaClient } from '@prisma/client'

// Connection pool configuration
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const db = globalForPrisma.prisma ?? new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  // Connection pool settings
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db

// Query optimization utilities
export class QueryOptimizer {
  // Optimized product fetching with selective fields
  static async getOptimizedProducts(options: {
    category?: string
    featured?: boolean
    isNew?: boolean
    limit?: number
    offset?: number
    sortBy?: string
    sortOrder?: 'asc' | 'desc'
  } = {}) {
    const {
      category,
      featured,
      isNew,
      limit = 20,
      offset = 0,
      sortBy = 'createdAt',
      sortOrder = 'desc'
    } = options

    const where: any = {
      inStock: true,
    }

    if (category) {
      where.category = category
    }

    if (featured) {
      where.featured = true
    }

    if (isNew) {
      where.isNew = true
    }

    // Select only necessary fields to reduce payload
    const select = {
      id: true,
      name: true,
      slug: true,
      price: true,
      originalPrice: true,
      images: true,
      category: true,
      hashRate: true,
      inStock: true,
      isNew: true,
      featured: true,
      createdAt: true,
    }

    const orderBy: any = {}
    orderBy[sortBy] = sortOrder

    return await db.product.findMany({
      where,
      select,
      orderBy,
      take: limit,
      skip: offset,
    })
  }

  // Batch product fetching for multiple IDs
  static async getProductsByIds(ids: string[]) {
    if (!ids.length) return []

    return await db.product.findMany({
      where: {
        id: { in: ids },
        inStock: true,
      },
      select: {
        id: true,
        name: true,
        slug: true,
        price: true,
        originalPrice: true,
        images: true,
        category: true,
        hashRate: true,
        inStock: true,
        isNew: true,
        featured: true,
      },
    })
  }

  // Optimized product count for pagination
  static async getProductCount(category?: string) {
    const where = category ? { category, inStock: true } : { inStock: true }
    
    return await db.product.count({ where })
  }

  // Cached category list
  static async getCategories() {
    return await db.product.groupBy({
      by: ['category'],
      where: { inStock: true },
      _count: true,
    })
  }
}