import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const featured = searchParams.get('featured')
    const isNew = searchParams.get('new')
    const limit = searchParams.get('limit')
    const sort = searchParams.get('sort') || 'createdAt'

    const where: any = {
      inStock: true,
    }

    if (category) {
      where.category = category
    }

    if (featured === 'true') {
      where.featured = true
    }

    if (isNew === 'true') {
      where.isNew = true
    }

    const orderBy: any = {}
    const [sortField, sortOrder] = sort.split('-')
    orderBy[sortField] = sortOrder || 'desc'

    const products = await db.product.findMany({
      where,
      orderBy,
      take: limit ? parseInt(limit) : undefined,
    })

    return NextResponse.json(products)
  } catch (error) {
    console.error('Failed to fetch products:', error)
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    )
  }
}