"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Icons } from "@/components/icons"
import Image from "next/image"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "CRYPS - Premium Crypto Mining",
      subtitle: "Next-Generation ASIC Miners",
      description: "Unlock maximum profitability with our cutting-edge cryptocurrency mining hardware and expert support",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=600&fit=crop",
      cta: "Start Mining",
      ctaLink: "/shop",
      badge: "🔥 Hot Deals",
    },
    {
      title: "Antminer S19 Pro+",
      subtitle: "121 TH/s Ultra Efficiency",
      description: "Industry-leading performance with 29.5 J/TH efficiency for maximum ROI",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=600&fit=crop",
      cta: "View Details",
      ctaLink: "/shop/antminer-s19-pro",
      badge: "⚡ Best Seller",
    },
    {
      title: "Enterprise Mining Solutions",
      subtitle: "Scale Your Operations",
      description: "Bulk pricing, custom configurations, and 24/7 technical support for large-scale operations",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=600&fit=crop",
      cta: "Contact Experts",
      ctaLink: "/contact",
      badge: "🏢 B2B Available",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative w-full h-[700px] md:h-[800px] overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-slate-900/60 to-blue-900/80 z-10" />
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover mix-blend-overlay"
              priority={index === 0}
            />
            <div className="relative z-20 h-full flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full mb-6">
                    <span className="text-blue-300 text-sm font-medium">{slide.badge}</span>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <h2 className="text-2xl md:text-3xl text-blue-300 mb-6 font-semibold">
                    {slide.subtitle}
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    {slide.description}
                  </p>
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg" asChild>
                    <Link href={slide.ctaLink}>
                      {slide.cta}
                      <Icons.chevronRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110"
        aria-label="Previous slide"
      >
        <Icons.chevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110"
        aria-label="Next slide"
      >
        <Icons.chevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all ${
              index === currentSlide 
                ? "bg-blue-400 w-8" 
                : "bg-white/50 w-3 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}