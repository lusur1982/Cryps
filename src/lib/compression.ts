// Compression middleware for server responses
import compression from 'compression'
import { NextRequest } from 'next/server'

// Compression configuration
const compressionOptions = {
  level: 6, // Compression level (1-9)
  threshold: 1024, // Only compress responses larger than 1KB
  filter: (req: any, res: any) => {
    // Don't compress already compressed responses
    if (res.getHeader('Content-Encoding')) {
      return false
    }
    
    // Don't compress images and other binary files
    const type = res.getHeader('Content-Type')
    if (type && !type.startsWith('text/')) {
      return false
    }
    
    return compression.filter(req, res)
  }
}

// Apply compression to API responses
export function compressResponse(response: Response) {
  // Note: In Next.js App Router, compression is handled by the server
  // This is a placeholder for custom compression logic if needed
  return response
}

// Brotli compression configuration for static assets
export const brotliConfig = {
  // Enable Brotli compression for static assets
  enabled: true,
  quality: 11, // Maximum quality
  mode: 0, // Generic mode
}

// Gzip compression fallback
export const gzipConfig = {
  enabled: true,
  level: 6,
  memLevel: 8,
}