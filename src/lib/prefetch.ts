// Prefetching utility for critical resources
import { prefetch } from 'next/dist/client/components/router'

export class ResourcePrefetcher {
  // Prefetch pages that are likely to be visited
  static prefetchLikelyPages() {
    if (typeof window === 'undefined') return

    // Prefetch product pages when hovering over product cards
    const productCards = document.querySelectorAll('[data-product-slug]')
    productCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        const slug = card.getAttribute('data-product-slug')
        if (slug) {
          prefetch(`/shop/${slug}`)
        }
      }, { once: true })
    })

    // Prefetch shop page if not already on shop
    if (!window.location.pathname.includes('/shop')) {
      prefetch('/shop')
    }

    // Prefetch cart page
    prefetch('/cart')
  }

  // Preload critical CSS
  static preloadCriticalCSS() {
    if (typeof window === 'undefined') return

    const criticalCSS = [
      '/_next/static/css/app/layout.css',
    ]

    criticalCSS.forEach(href => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'style'
      link.href = href
      document.head.appendChild(link)
    })
  }

  // Preload critical fonts
  static preloadCriticalFonts() {
    if (typeof window === 'undefined') return

    const fonts = [
      // Add your critical fonts here
    ]

    fonts.forEach(font => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'font'
      link.type = 'font/woff2'
      link.crossOrigin = 'anonymous'
      link.href = font
      document.head.appendChild(link)
    })
  }

  // Initialize all prefetching strategies
  static init() {
    if (typeof window === 'undefined') return

    // Wait for idle time to prefetch
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        this.prefetchLikelyPages()
        this.preloadCriticalCSS()
        this.preloadCriticalFonts()
      })
    } else {
      // Fallback for browsers that don't support requestIdleCallback
      setTimeout(() => {
        this.prefetchLikelyPages()
        this.preloadCriticalCSS()
        this.preloadCriticalFonts()
      }, 1000)
    }
  }
}