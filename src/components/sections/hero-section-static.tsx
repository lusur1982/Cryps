import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Icons } from "@/components/icons"
import Image from "next/image"

// Static server component for maximum performance
export function HeroSection() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      {/* Single static slide for fastest load */}
      <div className="relative h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=600&fit=crop"
          alt="Premium Crypto Mining Hardware"
          fill
          className="object-cover"
          priority={true}
          sizes="100vw"
          quality={75}
        />
        <div className="relative z-20 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <Badge variant="secondary" className="mb-4">
                New Arrivals
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Premium Crypto Mining Hardware
              </h1>
              <h2 className="text-xl md:text-2xl text-white/90 mb-6">
                Top-of-the-line ASIC miners for maximum profitability
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-lg">
                Discover our curated selection of the most efficient and reliable cryptocurrency mining equipment
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/products">
                    Shop Now
                    <Icons.chevronRight className="ml-2 h-4 w-4" />
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
      </div>
    </section>
  )
}