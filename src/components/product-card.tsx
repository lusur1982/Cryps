"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { useCartStore } from "@/store/cart"
import { useState } from "react"
import { toast } from "sonner"

interface ProductCardProps {
  product: {
    id: string
    name: string
    slug: string
    price: number
    originalPrice?: number | null
    images: string | null
    category: string
    hashRate?: string | null
    inStock: boolean
    isNew?: boolean
  }
}

export function ProductCard({ product }: ProductCardProps) {
  const [isLoading, setIsLoading] = useState(false)
  const addItem = useCartStore((state) => state.addItem)
  
  const images = product.images ? JSON.parse(product.images) : []
  const primaryImage = images[0] || "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop"
  
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (!product.inStock) return
    
    setIsLoading(true)
    
    try {
      addItem({
        productId: product.id,
        name: product.name,
        price: product.price,
        image: primaryImage,
        quantity: 1,
        slug: product.slug,
      })
      
      toast.success(`${product.name} added to cart`)
    } catch (error) {
      toast.error("Failed to add item to cart")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Link href={`/shop/${product.slug}`}>
      <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={primaryImage}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.isNew && (
              <Badge variant="secondary" className="bg-green-500 text-white">
                New
              </Badge>
            )}
            {discount > 0 && (
              <Badge variant="destructive">
                -{discount}%
              </Badge>
            )}
          </div>
          
          {/* Stock Status */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <Badge variant="secondary" className="text-lg px-3 py-1">
                Out of Stock
              </Badge>
            </div>
          )}
        </div>
        
        <CardContent className="p-4">
          <div className="mb-2">
            <Badge variant="outline" className="text-xs">
              {product.category.replace('_', ' ')}
            </Badge>
          </div>
          
          <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          
          {product.hashRate && (
            <p className="text-sm text-muted-foreground mb-2">
              {product.hashRate}
            </p>
          )}
          
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">
                ${product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ${product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
          </div>
          
          <Button
            className="w-full"
            onClick={handleAddToCart}
            disabled={!product.inStock || isLoading}
          >
            {isLoading ? (
              <>
                <Icons.refreshCw className="mr-2 h-4 w-4 animate-spin" />
                Adding...
              </>
            ) : !product.inStock ? (
              "Out of Stock"
            ) : (
              <>
                <Icons.shoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </>
            )}
          </Button>
        </CardContent>
      </Card>
    </Link>
  )
}