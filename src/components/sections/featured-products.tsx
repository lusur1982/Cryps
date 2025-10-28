import { db } from "@/lib/db"
import { ProductCard } from "@/components/product-card"
import { SectionHeader } from "@/components/section-header"
import { Icons } from "@/components/icons"

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
    <section className="py-20 bg-gradient-to-b from-background to-slate-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/20 rounded-full mb-4">
            <Icons.zap className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">Top Performers</span>
          </div>
          <SectionHeader
            title="Featured Mining Rigs"
            subtitle="Hand-picked ASIC miners for maximum profitability and reliability"
            showViewAll
            viewAllLink="/shop?featured=true"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}