// Simple in-memory cache for performance optimization
class MemoryCache {
  private cache = new Map<string, { data: any; expiry: number }>()

  set(key: string, data: any, ttlSeconds: number = 300) {
    const expiry = Date.now() + ttlSeconds * 1000
    this.cache.set(key, { data, expiry })
  }

  get(key: string): any | null {
    const item = this.cache.get(key)
    if (!item) return null
    
    if (Date.now() > item.expiry) {
      this.cache.delete(key)
      return null
    }
    
    return item.data
  }

  delete(key: string) {
    this.cache.delete(key)
  }

  clear() {
    this.cache.clear()
  }

  // Clean up expired entries
  cleanup() {
    const now = Date.now()
    for (const [key, item] of this.cache.entries()) {
      if (now > item.expiry) {
        this.cache.delete(key)
      }
    }
  }
}

export const cache = new MemoryCache()

// Auto-cleanup every 5 minutes
setInterval(() => cache.cleanup(), 5 * 60 * 1000)