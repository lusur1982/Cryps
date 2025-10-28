import { HeroSection } from "@/components/sections/hero-section"
import { FeaturedProducts } from "@/components/sections/featured-products"
import { NewProducts } from "@/components/sections/new-products"
import { WhyChooseUs } from "@/components/sections/why-choose-us"

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <NewProducts />
      <WhyChooseUs />
    </>
  )
}