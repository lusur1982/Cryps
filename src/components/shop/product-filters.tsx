"use client"

import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

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

interface ProductFiltersProps {
  filters: Filters
  updateFilter: (key: keyof Filters, value: any) => void
}

const categories = [
  { id: "BITCOIN_MINER", label: "Bitcoin Miners" },
  { id: "ETHEREUM_MINER", label: "Ethereum Miners" },
  { id: "LITECOIN_MINER", label: "Litecoin Miners" },
  { id: "MONERO_MINER", label: "Monero Miners" },
  { id: "OTHER", label: "Other Miners" },
]

const coolingTypes = [
  { id: "AIR_COOLING", label: "Air Cooling" },
  { id: "LIQUID_COOLING", label: "Liquid Cooling" },
  { id: "HYBRID", label: "Hybrid" },
]

const minerTypes = [
  { id: "ASIC", label: "ASIC" },
  { id: "GPU", label: "GPU" },
  { id: "FPGA", label: "FPGA" },
]

export function ProductFilters({ filters, updateFilter }: ProductFiltersProps) {
  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    const updatedCategories = checked
      ? [...filters.category, categoryId]
      : filters.category.filter(c => c !== categoryId)
    updateFilter("category", updatedCategories)
  }

  const handleCoolingChange = (coolingId: string, checked: boolean) => {
    const updatedCooling = checked
      ? [...filters.cooling, coolingId]
      : filters.cooling.filter(c => c !== coolingId)
    updateFilter("cooling", updatedCooling)
  }

  const handleTypeChange = (typeId: string, checked: boolean) => {
    const updatedTypes = checked
      ? [...filters.type, typeId]
      : filters.type.filter(t => t !== typeId)
    updateFilter("type", updatedTypes)
  }

  const handlePriceChange = (value: number[]) => {
    updateFilter("minPrice", value[0])
    updateFilter("maxPrice", value[1])
  }

  return (
    <div className="space-y-6">
      {/* Quick Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Quick Filters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="featured"
              checked={filters.featured}
              onCheckedChange={(checked) => updateFilter("featured", checked)}
            />
            <Label htmlFor="featured">Featured Products</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="new"
              checked={filters.isNew}
              onCheckedChange={(checked) => updateFilter("isNew", checked)}
            />
            <Label htmlFor="new">New Arrivals</Label>
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Category</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox
                id={category.id}
                checked={filters.category.includes(category.id)}
                onCheckedChange={(checked) => handleCategoryChange(category.id, checked as boolean)}
              />
              <Label htmlFor={category.id}>{category.label}</Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Cooling Type */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Cooling Type</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {coolingTypes.map((cooling) => (
            <div key={cooling.id} className="flex items-center space-x-2">
              <Checkbox
                id={cooling.id}
                checked={filters.cooling.includes(cooling.id)}
                onCheckedChange={(checked) => handleCoolingChange(cooling.id, checked as boolean)}
              />
              <Label htmlFor={cooling.id}>{cooling.label}</Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Miner Type */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Miner Type</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {minerTypes.map((type) => (
            <div key={type.id} className="flex items-center space-x-2">
              <Checkbox
                id={type.id}
                checked={filters.type.includes(type.id)}
                onCheckedChange={(checked) => handleTypeChange(type.id, checked as boolean)}
              />
              <Label htmlFor={type.id}>{type.label}</Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Price Range */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Price Range</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>${filters.minPrice.toLocaleString()}</span>
            <span>${filters.maxPrice.toLocaleString()}</span>
          </div>
          <Slider
            value={[filters.minPrice, filters.maxPrice]}
            onValueChange={handlePriceChange}
            max={10000}
            min={0}
            step={100}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>$0</span>
            <span>$10,000</span>
          </div>
        </CardContent>
      </Card>

      {/* Clear Filters */}
      <Button
        variant="outline"
        className="w-full"
        onClick={() => {
          updateFilter("category", [])
          updateFilter("cooling", [])
          updateFilter("type", [])
          updateFilter("minPrice", 0)
          updateFilter("maxPrice", 10000)
          updateFilter("featured", false)
          updateFilter("isNew", false)
        }}
      >
        <Icons.x className="mr-2 h-4 w-4" />
        Clear All Filters
      </Button>
    </div>
  )
}