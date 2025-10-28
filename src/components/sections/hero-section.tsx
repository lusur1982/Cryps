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
      title: "Premium Crypto Mining Hardware",
      subtitle: "Top-of-the-line ASIC miners for maximum profitability",
      description: "Discover our curated selection of the most efficient and reliable cryptocurrency mining equipment",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=600&fit=crop",
      cta: "Shop Now",
      ctaLink: "/shop",
      badge: "New Arrivals",
    },
    {
      title: "Antminer S19 Pro",
      subtitle: "110 TH/s Hash Rate",
      description: "The most powerful Bitcoin miner with exceptional energy efficiency",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=600&fit=crop",
      cta: "View Product",
      ctaLink: "/shop/antminer-s19-pro",
      badge: "Best Seller",
    },
    {
      title: "Professional Mining Solutions",
      subtitle: "Scale your mining operation",
      description: "Bulk pricing and expert support for large-scale mining operations",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=600&fit=crop",
      cta: "Contact Sales",
      ctaLink: "/contact",
      badge: "B2B Available",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10" />
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="relative z-20 h-full flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl">
                  <Badge variant="secondary" className="mb-4">
                    {slide.badge}
                  </Badge>
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    {slide.title}
                  </h1>
                  <h2 className="text-xl md:text-2xl text-white/90 mb-6">
                    {slide.subtitle}
                  </h2>
                  <p className="text-lg text-white/80 mb-8 max-w-lg">
                    {slide.description}
                  </p>
                  <Button size="lg" asChild>
                    <Link href={slide.ctaLink}>
                      {slide.cta}
                      <Icons.chevronRight className="ml-2 h-4 w-4" />
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
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
        aria-label="Previous slide"
      >
        <Icons.chevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
        aria-label="Next slide"
      >
        <Icons.chevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}