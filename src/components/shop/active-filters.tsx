"use client"

import { Badge } from "@/components/ui/badge"
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

interface ActiveFiltersProps {
  filters: Filters
  updateFilter: (key: keyof Filters, value: any) => void
}

const categoryLabels: Record<string, string> = {
  BITCOIN_MINER: "Bitcoin Miners",
  ETHEREUM_MINER: "Ethereum Miners",
  LITECOIN_MINER: "Litecoin Miners",
  MONERO_MINER: "Monero Miners",
  OTHER: "Other Miners",
}

const coolingLabels: Record<string, string> = {
  AIR_COOLING: "Air Cooling",
  LIQUID_COOLING: "Liquid Cooling",
  HYBRID: "Hybrid",
}

const typeLabels: Record<string, string> = {
  ASIC: "ASIC",
  GPU: "GPU",
  FPGA: "FPGA",
}

export function ActiveFilters({ filters, updateFilter }: ActiveFiltersProps) {
  const removeFilter = (key: keyof Filters, value?: string) => {
    switch (key) {
      case "search":
        updateFilter("search", "")
        break
      case "category":
        if (value) {
          updateFilter("category", filters.category.filter(c => c !== value))
        }
        break
      case "cooling":
        if (value) {
          updateFilter("cooling", filters.cooling.filter(c => c !== value))
        }
        break
      case "type":
        if (value) {
          updateFilter("type", filters.type.filter(t => t !== value))
        }
        break
      case "minPrice":
        updateFilter("minPrice", 0)
        break
      case "maxPrice":
        updateFilter("maxPrice", 10000)
        break
      case "featured":
        updateFilter("featured", false)
        break
      case "isNew":
        updateFilter("isNew", false)
        break
    }
  }

  const activeFilters = []

  // Search filter
  if (filters.search) {
    activeFilters.push({
      key: "search" as keyof Filters,
      label: `Search: "${filters.search}"`,
      onRemove: () => removeFilter("search"),
    })
  }

  // Category filters
  filters.category.forEach(category => {
    activeFilters.push({
      key: "category" as keyof Filters,
      value: category,
      label: categoryLabels[category] || category,
      onRemove: () => removeFilter("category", category),
    })
  })

  // Cooling filters
  filters.cooling.forEach(cooling => {
    activeFilters.push({
      key: "cooling" as keyof Filters,
      value: cooling,
      label: coolingLabels[cooling] || cooling,
      onRemove: () => removeFilter("cooling", cooling),
    })
  })

  // Type filters
  filters.type.forEach(type => {
    activeFilters.push({
      key: "type" as keyof Filters,
      value: type,
      label: typeLabels[type] || type,
      onRemove: () => removeFilter("type", type),
    })
  })

  // Price filters
  if (filters.minPrice > 0) {
    activeFilters.push({
      key: "minPrice" as keyof Filters,
      label: `Min: $${filters.minPrice.toLocaleString()}`,
      onRemove: () => removeFilter("minPrice"),
    })
  }

  if (filters.maxPrice < 10000) {
    activeFilters.push({
      key: "maxPrice" as keyof Filters,
      label: `Max: $${filters.maxPrice.toLocaleString()}`,
      onRemove: () => removeFilter("maxPrice"),
    })
  }

  // Featured filter
  if (filters.featured) {
    activeFilters.push({
      key: "featured" as keyof Filters,
      label: "Featured",
      onRemove: () => removeFilter("featured"),
    })
  }

  // New filter
  if (filters.isNew) {
    activeFilters.push({
      key: "isNew" as keyof Filters,
      label: "New Arrivals",
      onRemove: () => removeFilter("isNew"),
    })
  }

  if (activeFilters.length === 0) {
    return null
  }

  return (
    <div className="mb-6">
      <div className="flex flex-wrap gap-2 items-center">
        <span className="text-sm text-muted-foreground mr-2">Active filters:</span>
        {activeFilters.map((filter, index) => (
          <Badge key={index} variant="secondary" className="flex items-center gap-1">
            {filter.label}
            <Button
              variant="ghost"
              size="sm"
              className="h-auto p-0 hover:bg-transparent"
              onClick={filter.onRemove}
            >
              <Icons.x className="h-3 w-3" />
            </Button>
          </Badge>
        ))}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            updateFilter("search", "")
            updateFilter("category", [])
            updateFilter("cooling", [])
            updateFilter("type", [])
            updateFilter("minPrice", 0)
            updateFilter("maxPrice", 10000)
            updateFilter("featured", false)
            updateFilter("isNew", false)
          }}
        >
          Clear all
        </Button>
      </div>
    </div>
  )
}