// API Response Caching Middleware
import { NextRequest, NextResponse } from 'next/server'

// Cache configuration for different API routes
const cacheConfig = {
  // Static data - cache for 1 hour
  static: {
    'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=60',
  },
  // Product data - cache for 15 minutes
  products: {
    'Cache-Control': 'public, s-maxage=900, stale-while-revalidate=30',
  },
  // User-specific data - no cache
  user: {
    'Cache-Control': 'no-cache, no-store, must-revalidate',
  },
  // Default - 5 minutes
  default: {
    'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=10',
  }
}

export function addCacheHeaders(response: NextResponse, type: keyof typeof cacheConfig = 'default') {
  const headers = new Headers(response.headers)
  
  // Add cache headers
  Object.entries(cacheConfig[type]).forEach(([key, value]) => {
    headers.set(key, value)
  })
  
  // Add ETag for better caching
  headers.set('ETag', `"${Date.now()}"`)
  
  return new NextResponse(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  })
}

// Cache middleware for API routes
export function withCache(handler: (req: NextRequest) => Promise<NextResponse>, cacheType: keyof typeof cacheConfig = 'default') {
  return async (req: NextRequest) => {
    const response = await handler(req)
    return addCacheHeaders(response, cacheType)
  }
}