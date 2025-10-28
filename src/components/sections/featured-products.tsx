import { db } from "@/lib/db"
import { ProductCard } from "@/components/product-card"
import { SectionHeader } from "@/components/section-header"

export async function FeaturedProducts() {
  const featuredProducts = await db.product.findMany({
    where: {
      featured: true,
      inStock: true,
    },
    take: 8,
    orderBy: {
      createdAt: "desc",
    },
  })

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Top Selling Products"
          subtitle="Our most popular and reliable crypto miners"
          showViewAll
          viewAllLink="/shop?featured=true"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}