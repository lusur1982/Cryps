"use client"

import { useState, useEffect } from "react"
import { db } from "@/lib/db"
import { ProductCard } from "@/components/product-card"
import { ProductFilters } from "@/components/shop/product-filters"
import { ActiveFilters } from "@/components/shop/active-filters"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/icons"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Product {
  id: string
  name: string
  slug: string
  price: number
  originalPrice?: number | null
  images: string | null
  category: string
  cooling: string
  type: string
  hashRate?: string | null
  inStock: boolean
  isNew?: boolean
  featured?: boolean
}

interface Filters {
  search: string
  category: string[]
  cooling: string[]
  type: string[]
  minPrice: number
  maxPrice: number
  featured: boolean
  isNew: boolean
}

const initialFilters: Filters = {
  search: "",
  category: [],
  cooling: [],
  type: [],
  minPrice: 0,
  maxPrice: 10000,
  featured: false,
  isNew: false,
}

export function ShopPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [filters, setFilters] = useState<Filters>(initialFilters)
  const [sortBy, setSortBy] = useState("name-asc")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts()
  }, [])

  useEffect(() => {
    applyFilters()
  }, [products, filters, sortBy])

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/products")
      const data = await response.json()
      setProducts(data)
      setLoading(false)
    } catch (error) {
      console.error("Failed to fetch products:", error)
      setLoading(false)
    }
  }

  const applyFilters = () => {
    let filtered = products.filter((product) => {
      // Search filter
      if (filters.search && !product.name.toLowerCase().includes(filters.search.toLowerCase())) {
        return false
      }

      // Category filter
      if (filters.category.length > 0 && !filters.category.includes(product.category)) {
        return false
      }

      // Cooling filter
      if (filters.cooling.length > 0 && !filters.cooling.includes(product.cooling)) {
        return false
      }

      // Type filter
      if (filters.type.length > 0 && !filters.type.includes(product.type)) {
        return false
      }

      // Price filter
      if (product.price < filters.minPrice || product.price > filters.maxPrice) {
        return false
      }

      // Featured filter
      if (filters.featured && !product.featured) {
        return false
      }

      // New filter
      if (filters.isNew && !product.isNew) {
        return false
      }

      return true
    })

    // Sort products
    filtered.sort((a, b) => {
      const [field, order] = sortBy.split("-")
      
      switch (field) {
        case "name":
          return order === "asc" 
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name)
        case "price":
          return order === "asc" 
            ? a.price - b.price
            : b.price - a.price
        case "createdAt":
          return order === "asc"
            ? new Date(a.createdAt || 0).getTime() - new Date(b.createdAt || 0).getTime()
            : new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime()
        default:
          return 0
      }
    })

    setFilteredProducts(filtered)
  }

  const updateFilter = (key: keyof Filters, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  const clearFilters = () => {
    setFilters(initialFilters)
  }

  const hasActiveFilters = Object.entries(filters).some(([key, value]) => {
    if (key === "search") return value !== ""
    if (key === "minPrice") return value !== 0
    if (key === "maxPrice") return value !== 10000
    if (key === "featured" || key === "isNew") return value === true
    return Array.isArray(value) && value.length > 0
  })

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <Icons.refreshCw className="h-8 w-8 animate-spin" />
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Shop Crypto Miners</h1>
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>{filteredProducts.length} products found</span>
            {hasActiveFilters && (
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                Clear all filters
              </Button>
            )}
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <Icons.search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={filters.search}
                onChange={(e) => updateFilter("search", e.target.value)}
                className="pl-10 w-64"
              />
            </div>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                <SelectItem value="price-asc">Price (Low to High)</SelectItem>
                <SelectItem value="price-desc">Price (High to Low)</SelectItem>
                <SelectItem value="createdAt-desc">Newest First</SelectItem>
                <SelectItem value="createdAt-asc">Oldest First</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Active Filters */}
      {hasActiveFilters && (
        <ActiveFilters filters={filters} updateFilter={updateFilter} />
      )}

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <ProductFilters filters={filters} updateFilter={updateFilter} />
        </div>

        {/* Products Grid */}
        <div className="lg:col-span-3">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <Icons.package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No products found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your filters or search terms
              </p>
              <Button onClick={clearFilters}>Clear filters</Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}