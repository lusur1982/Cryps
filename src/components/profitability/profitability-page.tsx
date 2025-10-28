"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Icons } from "@/components/icons"

interface Product {
  id: string
  name: string
  slug: string
  price: number
  hashRate: string
  powerConsumption: string
  efficiency: string
  algorithm: string
  category: string
  brand: string
  inStock: boolean
}

interface ProfitabilityData {
  product: Product
  dailyRevenue: number
  monthlyRevenue: number
  yearlyRevenue: number
  dailyProfit: number
  monthlyProfit: number
  yearlyProfit: number
  roi: number
  paybackPeriod: number
}

export function ProfitabilityPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [profitabilityData, setProfitabilityData] = useState<ProfitabilityData[]>([])
  const [loading, setLoading] = useState(true)
  const [electricityCost, setElectricityCost] = useState(0.10) // $0.10 per kWh
  const [btcPrice, setBtcPrice] = useState(45000) // $45,000 BTC
  const [networkDifficulty, setNetworkDifficulty] = useState(1) // Relative difficulty
  const [sortBy, setSortBy] = useState("yearlyProfit")
  const [filterCategory, setFilterCategory] = useState("all")

  // Crypto prices (simplified for demo)
  const cryptoPrices = {
    "SHA-256": btcPrice,
    "Scrypt": btcPrice * 0.01, // LTC ~ 1% of BTC
    "Equihash": btcPrice * 0.002, // ZEC ~ 0.2% of BTC
    "kHeavyHash": btcPrice * 0.0001, // KAS ~ 0.01% of BTC
    "Blake2S": btcPrice * 0.0005, // KDA ~ 0.05% of BTC
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  useEffect(() => {
    calculateProfitability()
  }, [products, electricityCost, btcPrice, networkDifficulty])

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

  const calculateProfitability = () => {
    const data = products.map(product => {
      if (!product.hashRate || !product.powerConsumption || !product.algorithm) {
        return null
      }

      // Parse hash rate (e.g., "110 TH/s" -> 110 * 10^12 H/s)
      const hashRateMatch = product.hashRate.match(/([\d.]+)\s*([KMGTP]?H)/s)
      if (!hashRateMatch) return null

      const hashRateValue = parseFloat(hashRateMatch[1])
      const hashRateUnit = hashRateMatch[2]
      const hashRateMultiplier = {
        'H': 1,
        'KH': 10**3,
        'MH': 10**6,
        'GH': 10**9,
        'TH': 10**12,
        'PH': 10**15,
      }[hashRateUnit] || 1

      const hashRate = hashRateValue * hashRateMultiplier

      // Parse power consumption (e.g., "3250W" -> 3250)
      const powerMatch = product.powerConsumption.match(/([\d.]+)\s*W/)
      if (!powerMatch) return null

      const powerConsumption = parseFloat(powerMatch[1]) // in watts

      // Calculate daily revenue (simplified calculation)
      const cryptoPrice = cryptoPrices[product.algorithm as keyof typeof cryptoPrices] || 0
      const blockReward = 6.25 // BTC block reward (simplified)
      const blocksPerDay = 144 // ~6 blocks per hour
      const networkHashRate = 200 * 10**18 // ~200 EH/s for Bitcoin network
      
      const dailyRevenue = (hashRate / networkHashRate) * blocksPerDay * blockReward * cryptoPrice / networkDifficulty

      // Calculate daily electricity cost
      const dailyPowerCost = (powerConsumption / 1000) * 24 * electricityCost

      // Calculate profits
      const dailyProfit = dailyRevenue - dailyPowerCost
      const monthlyProfit = dailyProfit * 30
      const yearlyProfit = dailyProfit * 365

      // Calculate ROI and payback period
      const roi = yearlyProfit > 0 ? (yearlyProfit / product.price) * 100 : 0
      const paybackPeriod = dailyProfit > 0 ? product.price / dailyProfit : Infinity

      return {
        product,
        dailyRevenue,
        monthlyRevenue: dailyRevenue * 30,
        yearlyRevenue: dailyRevenue * 365,
        dailyProfit,
        monthlyProfit,
        yearlyProfit,
        roi,
        paybackPeriod,
      }
    }).filter(Boolean) as ProfitabilityData[]

    // Sort data
    data.sort((a, b) => {
      switch (sortBy) {
        case "dailyProfit":
          return b.dailyProfit - a.dailyProfit
        case "monthlyProfit":
          return b.monthlyProfit - a.monthlyProfit
        case "yearlyProfit":
          return b.yearlyProfit - a.yearlyProfit
        case "roi":
          return b.roi - a.roi
        case "paybackPeriod":
          return a.paybackPeriod - b.paybackPeriod
        default:
          return b.yearlyProfit - a.yearlyProfit
      }
    })

    setProfitabilityData(data)
  }

  const filteredData = filterCategory === "all" 
    ? profitabilityData 
    : profitabilityData.filter(item => item.product.category === filterCategory)

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
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
        <h1 className="text-3xl font-bold mb-2">Miners Profitability Calculator</h1>
        <p className="text-muted-foreground">
          Compare the profitability of different crypto miners based on current market conditions
        </p>
      </div>

      {/* Configuration */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Market Configuration</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <Label htmlFor="electricity">Electricity Cost ($/kWh)</Label>
              <Input
                id="electricity"
                type="number"
                step="0.01"
                value={electricityCost}
                onChange={(e) => setElectricityCost(parseFloat(e.target.value) || 0)}
              />
            </div>
            <div>
              <Label htmlFor="btcPrice">Bitcoin Price ($)</Label>
              <Input
                id="btcPrice"
                type="number"
                step="100"
                value={btcPrice}
                onChange={(e) => setBtcPrice(parseFloat(e.target.value) || 0)}
              />
            </div>
            <div>
              <Label htmlFor="difficulty">Network Difficulty</Label>
              <Input
                id="difficulty"
                type="number"
                step="0.1"
                value={networkDifficulty}
                onChange={(e) => setNetworkDifficulty(parseFloat(e.target.value) || 1)}
              />
            </div>
            <div>
              <Label htmlFor="category">Filter by Category</Label>
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="BITCOIN_MINER">Bitcoin Miners</SelectItem>
                  <SelectItem value="LITECOIN_MINER">Litecoin Miners</SelectItem>
                  <SelectItem value="MONERO_MINER">Monero Miners</SelectItem>
                  <SelectItem value="OTHER">Other Miners</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sort Controls */}
      <div className="mb-6 flex justify-between items-center">
        <div className="text-sm text-muted-foreground">
          {filteredData.length} miners found
        </div>
        <div className="flex items-center gap-2">
          <Label>Sort by:</Label>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dailyProfit">Daily Profit</SelectItem>
              <SelectItem value="monthlyProfit">Monthly Profit</SelectItem>
              <SelectItem value="yearlyProfit">Yearly Profit</SelectItem>
              <SelectItem value="roi">ROI %</SelectItem>
              <SelectItem value="paybackPeriod">Payback Period</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Profitability Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Miner</TableHead>
                  <TableHead>Hash Rate</TableHead>
                  <TableHead>Power</TableHead>
                  <TableHead>Daily Profit</TableHead>
                  <TableHead>Monthly Profit</TableHead>
                  <TableHead>Yearly Profit</TableHead>
                  <TableHead>ROI</TableHead>
                  <TableHead>Payback</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.map((item) => (
                  <TableRow key={item.product.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{item.product.name}</div>
                        <div className="text-sm text-muted-foreground">
                          ${item.product.price.toLocaleString()}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{item.product.hashRate}</TableCell>
                    <TableCell>{item.product.powerConsumption}</TableCell>
                    <TableCell className={item.dailyProfit > 0 ? "text-green-600" : "text-red-600"}>
                      ${item.dailyProfit.toFixed(2)}
                    </TableCell>
                    <TableCell className={item.monthlyProfit > 0 ? "text-green-600" : "text-red-600"}>
                      ${item.monthlyProfit.toFixed(2)}
                    </TableCell>
                    <TableCell className={item.yearlyProfit > 0 ? "text-green-600" : "text-red-600"}>
                      ${item.yearlyProfit.toFixed(2)}
                    </TableCell>
                    <TableCell>
                      <Badge variant={item.roi > 50 ? "default" : "secondary"}>
                        {item.roi.toFixed(1)}%
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {item.paybackPeriod === Infinity ? (
                        "Never"
                      ) : item.paybackPeriod > 365 ? (
                        "> 1 year"
                      ) : (
                        `${Math.round(item.paybackPeriod)} days`
                      )}
                    </TableCell>
                    <TableCell>
                      {item.product.inStock ? (
                        <Badge variant="default" className="bg-green-500">
                          In Stock
                        </Badge>
                      ) : (
                        <Badge variant="secondary">Out of Stock</Badge>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Disclaimer */}
      <Card className="mt-8">
        <CardContent className="pt-6">
          <div className="flex items-start gap-2">
            <Icons.alertCircle className="h-5 w-5 text-muted-foreground mt-0.5" />
            <div className="text-sm text-muted-foreground">
              <p className="font-semibold mb-1">Disclaimer</p>
              <p>
                Profitability calculations are estimates based on current market conditions and may vary significantly. 
                Factors such as network difficulty changes, cryptocurrency price volatility, electricity costs, and 
                mining pool fees can affect actual profitability. Please do your own research before making any 
                investment decisions.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}