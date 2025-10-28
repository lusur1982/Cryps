import { db } from "@/lib/db"
import { ProductCard } from "@/components/product-card"
import { SectionHeader } from "@/components/section-header"
import { Icons } from "@/components/icons"

export async function NewProducts() {
  const newProducts = await db.product.findMany({
    where: {
      isNew: true,
      inStock: true,
    },
    take: 8,
    orderBy: {
      createdAt: "desc",
    },
  })

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900/20 rounded-full mb-4">
            <Icons.target className="h-4 w-4 text-green-600 dark:text-green-400 mr-2" />
            <span className="text-green-600 dark:text-green-400 text-sm font-medium">Just Landed</span>
          </div>
          <SectionHeader
            title="Latest Mining Equipment"
            subtitle="Cutting-edge technology with enhanced performance and efficiency"
            showViewAll
            viewAllLink="/shop?new=true"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}