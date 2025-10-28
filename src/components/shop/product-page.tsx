"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Icons } from "@/components/icons"
import { useCartStore } from "@/store/cart"
import { toast } from "sonner"

interface ProductPageProps {
  product: {
    id: string
    name: string
    slug: string
    description: string
    price: number
    originalPrice?: number | null
    images: string | null
    category: string
    cooling: string
    type: string
    hashRate?: string | null
    powerConsumption?: string | null
    efficiency?: string | null
    algorithm?: string | null
    brand?: string | null
    model?: string | null
    weight?: number | null
    dimensions?: string | null
    inStock: boolean
    stockCount: number
    isNew?: boolean
    featured?: boolean
  }
}

export function ProductPage({ product }: ProductPageProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const addItem = useCartStore((state) => state.addItem)

  const images = product.images ? JSON.parse(product.images) : [
    "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop"
  ]

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  const handleAddToCart = async () => {
    if (!product.inStock) return
    
    setIsLoading(true)
    
    try {
      addItem({
        productId: product.id,
        name: product.name,
        price: product.price,
        image: images[0],
        quantity,
        slug: product.slug,
      })
      
      toast.success(`${product.name} added to cart`)
    } catch (error) {
      toast.error("Failed to add item to cart")
    } finally {
      setIsLoading(false)
    }
  }

  const specifications = [
    { label: "Brand", value: product.brand || "N/A" },
    { label: "Model", value: product.model || "N/A" },
    { label: "Hash Rate", value: product.hashRate || "N/A" },
    { label: "Power Consumption", value: product.powerConsumption || "N/A" },
    { label: "Efficiency", value: product.efficiency || "N/A" },
    { label: "Algorithm", value: product.algorithm || "N/A" },
    { label: "Cooling", value: product.cooling.replace('_', ' ') },
    { label: "Type", value: product.type },
    { label: "Weight", value: product.weight ? `${product.weight} kg` : "N/A" },
    { label: "Dimensions", value: product.dimensions || "N/A" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Images */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="relative aspect-square overflow-hidden rounded-lg border">
            <Image
              src={images[selectedImage]}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            
            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
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
              {product.featured && (
                <Badge variant="secondary">
                  Featured
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

          {/* Thumbnail Images */}
          {images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {images.map((image: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square overflow-hidden rounded border-2 transition-colors ${
                    selectedImage === index ? "border-primary" : "border-transparent"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          {/* Header */}
          <div>
            <div className="mb-2">
              <Badge variant="outline">
                {product.category.replace('_', ' ')}
              </Badge>
            </div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-muted-foreground">
              {product.brand && `${product.brand} `}
              {product.model && `- ${product.model}`}
            </p>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold">
              ${product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <>
                <span className="text-xl text-muted-foreground line-through">
                  ${product.originalPrice.toLocaleString()}
                </span>
                {discount > 0 && (
                  <Badge variant="destructive">
                    Save {discount}%
                  </Badge>
                )}
              </>
            )}
          </div>

          {/* Stock Info */}
          <div className="flex items-center gap-2">
            {product.inStock ? (
              <>
                <Icons.check className="h-5 w-5 text-green-500" />
                <span className="text-green-700 dark:text-green-400">
                  In Stock ({product.stockCount} available)
                </span>
              </>
            ) : (
              <>
                <Icons.x className="h-5 w-5 text-red-500" />
                <span className="text-red-700 dark:text-red-400">
                  Out of Stock
                </span>
              </>
            )}
          </div>

          <Separator />

          {/* Purchase Options */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="font-medium">Quantity:</span>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Icons.minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.min(product.stockCount, quantity + 1))}
                  disabled={quantity >= product.stockCount}
                >
                  <Icons.plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Button
              size="lg"
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
          </div>

          <Separator />

          {/* Key Features */}
          {product.hashRate && (
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <Icons.zap className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <div className="font-semibold">{product.hashRate}</div>
                  <div className="text-sm text-muted-foreground">Hash Rate</div>
                </CardContent>
              </Card>
              {product.powerConsumption && (
                <Card>
                  <CardContent className="p-4 text-center">
                    <Icons.thermometer className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <div className="font-semibold">{product.powerConsumption}</div>
                    <div className="text-sm text-muted-foreground">Power Usage</div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {/* Tabs */}
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-4">
              <div className="prose max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>
            </TabsContent>
            <TabsContent value="specifications" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between py-2 border-b">
                    <span className="font-medium">{spec.label}</span>
                    <span className="text-muted-foreground">{spec.value}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}