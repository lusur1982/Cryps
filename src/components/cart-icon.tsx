"use client"

import Link from "next/link"
import { useCartStore } from "@/store/cart"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export function CartIcon() {
  const getTotalItems = useCartStore((state) => state.getTotalItems)
  const totalItems = getTotalItems()

  return (
    <Button variant="ghost" size="icon" asChild>
      <Link href="/cart" className="relative">
        <Icons.shoppingCart className="h-5 w-5" />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {totalItems > 99 ? "99+" : totalItems}
          </span>
        )}
        <span className="sr-only">Shopping cart</span>
      </Link>
    </Button>
  )
}