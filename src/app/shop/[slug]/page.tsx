import { notFound } from "next/navigation"
import { db } from "@/lib/db"
import { ProductPage } from "@/components/shop/product-page"

interface PageProps {
  params: {
    slug: string
  }
}

async function getProduct(slug: string) {
  const product = await db.product.findUnique({
    where: { slug },
  })

  if (!product) {
    notFound()
  }

  return product
}

export async function generateMetadata({ params }: PageProps) {
  const product = await getProduct(params.slug)

  return {
    title: `${product.name} - Cryps`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.images ? JSON.parse(product.images) : [],
    },
  }
}

export default async function ProductSlugPage({ params }: PageProps) {
  const product = await getProduct(params.slug)
  
  return <ProductPage product={product} />
}