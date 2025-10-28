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
      <Card className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 bg-white dark:bg-slate-800 hover:scale-[1.02]">
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800">
          <Image
            src={primaryImage}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700 mix-blend-multiply"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && (
              <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                NEW
              </div>
            )}
            {discount > 0 && (
              <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                -{discount}%
              </div>
            )}
          </div>
          
          {/* Stock Status */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center">
              <div className="bg-white/90 dark:bg-slate-800/90 px-4 py-2 rounded-lg">
                <span className="text-gray-800 dark:text-white font-semibold">Out of Stock</span>
              </div>
            </div>
          )}
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <CardContent className="p-5">
          <div className="mb-3">
            <div className="inline-flex items-center px-2 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-md">
              <span className="text-xs font-medium text-blue-700 dark:text-blue-300">
                {product.category.replace('_', ' ')}
              </span>
            </div>
          </div>
          
          <h3 className="font-bold text-lg mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
            {product.name}
          </h3>
          
          {product.hashRate && (
            <div className="flex items-center text-sm text-muted-foreground mb-4">
              <Icons.zap className="h-4 w-4 mr-2 text-orange-500" />
              <span className="font-medium">{product.hashRate}</span>
            </div>
          )}
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                ${product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  ${product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
          </div>
          
          <Button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 transition-all hover:scale-[1.02] active:scale-[0.98]"
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