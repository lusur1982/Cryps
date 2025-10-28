import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

// Ultra-minimal hero section for fastest load
export function HeroSection() {
  return (
    <section className="relative w-full h-[500px] overflow-hidden bg-black">
      <Image
        src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=500&fit=crop"
        alt="Premium Crypto Mining Hardware"
        fill
        className="object-cover opacity-70"
        priority={true}
        sizes="100vw"
        quality={60}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Premium Crypto Mining Hardware
            </h1>
            <p className="text-lg text-white/90 mb-6">
              Top ASIC miners for maximum profitability
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" asChild>
                <Link href="/products">
                  Shop Now
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10" asChild>
                <Link href="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}