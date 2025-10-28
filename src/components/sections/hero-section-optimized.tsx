'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Shield, Truck } from 'lucide-react';
import { LazyImage } from '@/components/LazyImage';

export function HeroSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with lazy loading */}
      <div className="absolute inset-0 z-0">
        <LazyImage
          src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1920&h=1080&fit=crop"
          alt="Crypto mining farm background"
          className="w-full h-full object-cover"
          priority={true}
          fill
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Animated badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-8">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Premium Mining Hardware</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Unlock the Power of
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
              {' '}Crypto Mining
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Discover premium cryptocurrency mining hardware with competitive prices, 
            expert support, and fast worldwide shipping.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-xl"
              asChild
            >
              <Link href="/products">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300"
              asChild
            >
              <Link href="/about">
                Learn More
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          {isClient && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-3 text-white">
                <Shield className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium">2-Year Warranty</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-white">
                <Truck className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium">Fast Delivery</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-white">
                <Zap className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium">Expert Support</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
    </section>
  );
}