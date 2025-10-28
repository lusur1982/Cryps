"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useCartStore } from "@/store/cart"
import { Icons } from "@/components/icons"
import { useState } from "react"
import { toast } from "sonner"

export function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, getTotalPrice } = useCartStore()
  const [isUpdating, setIsUpdating] = useState<string | null>(null)
  
  const totalPrice = getTotalPrice()
  const shipping = totalPrice > 1000 ? 0 : 50
  const tax = totalPrice * 0.08 // 8% tax
  const finalTotal = totalPrice + shipping + tax

  const handleQuantityChange = async (productId: string, newQuantity: number) => {
    setIsUpdating(productId)
    try {
      updateQuantity(productId, newQuantity)
    } catch (error) {
      toast.error("Failed to update quantity")
    } finally {
      setIsUpdating(null)
    }
  }

  const handleRemoveItem = async (productId: string, productName: string) => {
    try {
      removeItem(productId)
      toast.success(`${productName} removed from cart`)
    } catch (error) {
      toast.error("Failed to remove item")
    }
  }

  const handleClearCart = async () => {
    try {
      clearCart()
      toast.success("Cart cleared")
    } catch (error) {
      toast.error("Failed to clear cart")
    }
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-md mx-auto">
          <Icons.shoppingCart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>
          <p className="text-muted-foreground mb-6">
            Looks like you haven't added any crypto miners to your cart yet.
          </p>
          <Button asChild>
            <Link href="/shop">
              <Icons.shoppingBag className="mr-2 h-4 w-4" />
              Continue Shopping
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Shopping Cart</h1>
        <p className="text-muted-foreground">
          {items.length} {items.length === 1 ? "item" : "items"} in your cart
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  {/* Product Image */}
                  <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold mb-1">
                          <Link 
                            href={`/shop/${item.slug}`}
                            className="hover:text-primary transition-colors"
                          >
                            {item.name}
                          </Link>
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          ${item.price.toLocaleString()} each
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemoveItem(item.productId, item.name)}
                        className="text-muted-foreground hover:text-destructive"
                      >
                        <Icons.trash className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">Quantity:</span>
                      <div className="flex items-center gap-1">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => handleQuantityChange(item.productId, item.quantity - 1)}
                          disabled={item.quantity <= 1 || isUpdating === item.id}
                        >
                          <Icons.minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center text-sm">
                          {isUpdating === item.id ? (
                            <Icons.refreshCw className="h-3 w-3 animate-spin mx-auto" />
                          ) : (
                            item.quantity
                          )}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => handleQuantityChange(item.productId, item.quantity + 1)}
                          disabled={isUpdating === item.id}
                        >
                          <Icons.plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <span className="text-sm font-medium ml-auto">
                        ${(item.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Cart Actions */}
          <div className="flex justify-between items-center pt-4">
            <Button
              variant="outline"
              onClick={handleClearCart}
              className="text-destructive hover:text-destructive"
            >
              <Icons.trash className="mr-2 h-4 w-4" />
              Clear Cart
            </Button>
            <Button variant="outline" asChild>
              <Link href="/shop">
                <Icons.arrowLeft className="mr-2 h-4 w-4" />
                Continue Shopping
              </Link>
            </Button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${totalPrice.toLocaleString()}</span>
              </div>
              
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>
                  {shipping === 0 ? (
                    <span className="text-green-600">FREE</span>
                  ) : (
                    `$${shipping.toLocaleString()}`
                  )}
                </span>
              </div>
              
              <div className="flex justify-between">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>

              <Separator />

              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>${finalTotal.toFixed(2)}</span>
              </div>

              {shipping > 0 && (
                <p className="text-sm text-muted-foreground">
                  Add ${(1000 - totalPrice).toLocaleString()} more for free shipping!
                </p>
              )}

              <Button size="lg" className="w-full" asChild>
                <Link href="/checkout">
                  Proceed to Checkout
                  <Icons.chevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <div className="text-center text-sm text-muted-foreground">
                <p>Secure checkout with</p>
                <div className="flex justify-center gap-2 mt-2">
                  <Icons.creditCard className="h-6 w-6" />
                  <span className="font-medium">PayPal & Revolut</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}