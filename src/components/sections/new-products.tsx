import { db } from "@/lib/db"
import { ProductCard } from "@/components/product-card"
import { SectionHeader } from "@/components/section-header"

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
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="New Arrivals"
          subtitle="Latest crypto mining technology"
          showViewAll
          viewAllLink="/shop?new=true"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}