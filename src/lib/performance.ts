// Performance monitoring utilities
export class PerformanceMonitor {
  // Track page load performance
  static trackPageLoad() {
    if (typeof window === 'undefined') return

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    
    const metrics = {
      // Core Web Vitals
      LCP: this.getLCP(),
      FID: this.getFID(),
      CLS: this.getCLS(),
      
      // Navigation timing
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
      firstPaint: this.getFirstPaint(),
      firstContentfulPaint: this.getFirstContentfulPaint(),
      
      // Resource timing
      resourceCount: performance.getEntriesByType('resource').length,
    }

    // Send metrics to analytics (optional)
    this.sendMetrics(metrics)
    
    return metrics
  }

  // Get Largest Contentful Paint
  static getLCP() {
    const entries = performance.getEntriesByType('largest-contentful-paint')
    return entries.length > 0 ? entries[entries.length - 1].startTime : 0
  }

  // Get First Input Delay
  static getFID() {
    const entries = performance.getEntriesByType('first-input')
    return entries.length > 0 ? entries[0].processingStart - entries[0].startTime : 0
  }

  // Get Cumulative Layout Shift
  static getCLS() {
    let clsValue = 0
    const entries = performance.getEntriesByType('layout-shift')
    
    entries.forEach(entry => {
      if (!(entry as any).hadRecentInput) {
        clsValue += (entry as any).value
      }
    })
    
    return clsValue
  }

  // Get First Paint
  static getFirstPaint() {
    const entries = performance.getEntriesByType('paint')
    const firstPaint = entries.find(entry => entry.name === 'first-paint')
    return firstPaint ? firstPaint.startTime : 0
  }

  // Get First Contentful Paint
  static getFirstContentfulPaint() {
    const entries = performance.getEntriesByType('paint')
    const fcp = entries.find(entry => entry.name === 'first-contentful-paint')
    return fcp ? fcp.startTime : 0
  }

  // Send metrics to analytics (placeholder)
  static sendMetrics(metrics: any) {
    // Send to your analytics service
    console.log('Performance Metrics:', metrics)
    
    // Example: Send to Google Analytics
    if (typeof gtag !== 'undefined') {
      Object.entries(metrics).forEach(([name, value]) => {
        gtag('event', name, { value: Number(value) })
      })
    }
  }

  // Monitor API response times
  static trackAPICall(url: string, startTime: number, endTime: number) {
    const duration = endTime - startTime
    
    // Log slow API calls
    if (duration > 1000) {
      console.warn(`Slow API call: ${url} took ${duration}ms`)
    }
    
    return duration
  }

  // Initialize performance monitoring
  static init() {
    if (typeof window === 'undefined') return

    // Track page load
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.trackPageLoad()
      }, 0)
    })

    // Track visibility changes
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        // Track when user returns to page
        this.trackPageLoad()
      }
    })
  }
}

// Performance hooks for React components
export function usePerformanceTracking(componentName: string) {
  if (typeof window === 'undefined') return

  const startTime = performance.now()
  
  return {
    trackRender: () => {
      const endTime = performance.now()
      const renderTime = endTime - startTime
      
      if (renderTime > 100) {
        console.warn(`Slow render: ${componentName} took ${renderTime.toFixed(2)}ms`)
      }
      
      return renderTime
    }
  }
}