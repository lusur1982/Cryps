"use client"

import { useState } from "react"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Icons } from "@/components/icons"
import { cn } from "@/lib/utils"

// This would normally be in a separate file
const faqData = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "What is cryptocurrency mining?",
        a: "Cryptocurrency mining is the process of validating transactions and adding them to a blockchain ledger. Miners use specialized hardware to solve complex mathematical problems, and in return, they receive cryptocurrency rewards."
      },
      {
        q: "How do I start mining cryptocurrency?",
        a: "To start mining, you'll need: 1) Mining hardware (ASIC or GPU), 2) A crypto wallet, 3) Mining software, 4) Access to cheap electricity, and 5) A mining pool or solo mining setup. We offer complete starter kits and expert guidance."
      },
      {
        q: "Is mining still profitable in 2024?",
        a: "Yes, mining can still be profitable with the right equipment and strategy. Profitability depends on factors like electricity costs, hardware efficiency, cryptocurrency prices, and network difficulty. Use our profitability calculator to estimate potential returns."
      },
      {
        q: "What's the difference between ASIC and GPU mining?",
        a: "ASICs (Application-Specific Integrated Circuits) are specialized devices designed for mining specific cryptocurrencies, offering higher efficiency. GPUs (Graphics Processing Units) are more versatile and can mine multiple algorithms but are generally less efficient."
      }
    ]
  },
  {
    category: "Products & Hardware",
    questions: [
      {
        q: "What brands of miners do you sell?",
        a: "We offer a wide range of mining hardware from top manufacturers including Bitmain (AntMiner), MicroBT (WhatsMiner), Canaan (Avalon), Innosilicon, and more. All products are genuine and come with manufacturer warranties."
      },
      {
        q: "Do you offer international shipping?",
        a: "Yes, we ship worldwide! Shipping costs and delivery times vary by location. We offer express shipping (3-7 days) and standard shipping (10-20 days). All shipments include tracking and insurance."
      },
      {
        q: "What's your warranty policy?",
        a: "All new miners come with a 180-day manufacturer warranty. We also offer extended warranty options up to 2 years. Used equipment comes with a 90-day warranty. Warranty covers manufacturing defects and hardware failures."
      },
      {
        q: "Can I return or exchange a miner?",
        a: "We offer a 30-day return policy for unopened products in original packaging. Opened items may be subject to a 15% restocking fee. Exchanges are available within 30 days if the product is defective."
      },
      {
        q: "Do you provide setup assistance?",
        a: "Yes! We offer free setup guides and video tutorials for all products. Premium customers get access to 1-on-1 setup assistance via video call. We also have 24/7 customer support for troubleshooting."
      }
    ]
  },
  {
    category: "Payment & Pricing",
    questions: [
      {
        q: "What payment methods do you accept?",
        a: "We accept: Bank transfers, Credit/Debit cards (Visa, Mastercard), Cryptocurrency (BTC, ETH, USDT), PayPal, and financing options for larger orders. All crypto payments receive a 2% discount."
      },
      {
        q: "Do you offer bulk discounts?",
        a: "Yes, we offer tiered discounts for bulk purchases: 5+ units (5% off), 10+ units (10% off), 25+ units (15% off), and 50+ units (20% off). Contact our sales team for custom quotes on large orders."
      },
      {
        q: "Are prices listed in USD?",
        a: "Yes, all prices are in USD. We accept payments in multiple currencies, and the exchange rate is calculated at the time of purchase. International customers may be subject to local taxes and import duties."
      },
      {
        q: "Do you offer financing?",
        a: "Yes, we partner with several financing companies to offer payment plans for qualified customers. Financing is available for orders over $1,000 with terms ranging from 6 to 24 months."
      }
    ]
  },
  {
    category: "Technical Support",
    questions: [
      {
        q: "What's the average lifespan of a mining rig?",
        a: "With proper maintenance, ASIC miners typically last 3-5 years, while GPU rigs can last 5-7 years. Lifespan depends on operating conditions, maintenance, and usage intensity. We offer maintenance services to extend hardware life."
      },
      {
        q: "How much electricity does mining consume?",
        a: "Electricity consumption varies by hardware. An average ASIC miner uses 3000-3500W, while a GPU rig might use 1000-1500W. We provide detailed power consumption specs for all products and can help calculate your electricity costs."
      },
      {
        q: "Do I need special cooling for my miners?",
        a: "Proper cooling is essential for mining hardware longevity. For 1-3 miners, good room ventilation is usually sufficient. For larger operations, we recommend professional cooling solutions. We sell both basic and advanced cooling systems."
      },
      {
        q: "What software do I need for mining?",
        a: "Software requirements vary by hardware. ASIC miners typically use manufacturer-provided software. GPU miners use programs like NiceHash, PhoenixMiner, or T-Rex Miner. We provide pre-configured software with all our complete mining rigs."
      },
      {
        q: "Can I mine multiple cryptocurrencies with one device?",
        a: "ASIC miners are typically limited to one algorithm, while GPUs can mine multiple cryptocurrencies. Some modern ASICs support multiple algorithms. We can help you choose the right hardware for your mining goals."
      }
    ]
  },
  {
    category: "Legal & Compliance",
    questions: [
      {
        q: "Is cryptocurrency mining legal?",
        a: "Cryptocurrency mining is legal in most countries, but regulations vary. Some countries have restrictions or require licenses. We recommend checking your local regulations. We don't ship to countries where mining is prohibited."
      },
      {
        q: "Do I need to pay taxes on mining rewards?",
        a: "In most jurisdictions, mining rewards are considered taxable income. Tax treatment varies by country and sometimes by state/province. We recommend consulting with a tax professional familiar with cryptocurrency in your jurisdiction."
      },
      {
        q: "Are there any environmental concerns with mining?",
        a: "We're committed to sustainable mining. We offer energy-efficient hardware and partner with renewable energy providers. Many of our customers use solar or wind power. We also participate in carbon offset programs."
      }
    ]
  }
]

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const filteredFAQ = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      (selectedCategory === "all" || category.category === selectedCategory) &&
      (q.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
       q.a.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  })).filter(category => category.questions.length > 0)

  const toggleExpanded = (category: string, index: number) => {
    const key = `${category}-${index}`
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(key)) {
      newExpanded.delete(key)
    } else {
      newExpanded.add(key)
    }
    setExpandedItems(newExpanded)
  }

  const expandAll = () => {
    const allKeys = filteredFAQ.flatMap(category => 
      category.questions.map((_, index) => `${category.category}-${index}`)
    )
    setExpandedItems(new Set(allKeys))
  }

  const collapseAll = () => {
    setExpandedItems(new Set())
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Find answers to common questions about cryptocurrency mining, our products, and services
        </p>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-6">
          <div className="relative">
            <Icons.search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search FAQ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <Button
            variant={selectedCategory === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory("all")}
          >
            All Categories
          </Button>
          {faqData.map((category) => (
            <Button
              key={category.category}
              variant={selectedCategory === category.category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.category)}
            >
              {category.category}
            </Button>
          ))}
        </div>

        {/* Expand/Collapse All */}
        <div className="flex justify-center gap-2">
          <Button variant="outline" size="sm" onClick={expandAll}>
            <Icons.chevronDown className="h-4 w-4 mr-1" />
            Expand All
          </Button>
          <Button variant="outline" size="sm" onClick={collapseAll}>
            <Icons.chevronUp className="h-4 w-4 mr-1" />
            Collapse All
          </Button>
        </div>
      </section>

      {/* FAQ Content */}
      <div className="space-y-8 mb-16">
        {filteredFAQ.map((category) => (
          <div key={category.category}>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Badge variant="secondary" className="mr-3">
                {category.questions.length}
              </Badge>
              {category.category}
            </h2>
            <div className="space-y-4">
              {category.questions.map((item, index) => {
                const isExpanded = expandedItems.has(`${category.category}-${index}`)
                return (
                  <Card key={index} className="overflow-hidden">
                    <CardHeader 
                      className="cursor-pointer hover:bg-muted/50 transition-colors"
                      onClick={() => toggleExpanded(category.category, index)}
                    >
                      <CardTitle className="flex items-center justify-between text-lg">
                        <span className="flex items-center">
                          <Icons.helpCircle className="h-5 w-5 mr-3 text-primary" />
                          {item.q}
                        </span>
                        <Icons.chevronDown 
                          className={cn(
                            "h-5 w-5 transition-transform",
                            isExpanded && "rotate-180"
                          )}
                        />
                      </CardTitle>
                    </CardHeader>
                    {isExpanded && (
                      <CardContent className="pt-0">
                        <div className="pl-8 text-muted-foreground leading-relaxed">
                          {item.a}
                        </div>
                      </CardContent>
                    )}
                  </Card>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredFAQ.length === 0 && (
        <div className="text-center py-16">
          <Icons.search className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-xl font-semibold mb-2">No results found</h3>
          <p className="text-muted-foreground mb-4">
            Try adjusting your search terms or browse all categories
          </p>
          <Button onClick={() => { setSearchTerm(""); setSelectedCategory("all") }}>
            Clear Search
          </Button>
        </div>
      )}

      {/* Still Have Questions */}
      <section className="text-center py-16 bg-gradient-to-r from-primary to-primary/80 text-white rounded-2xl">
        <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
        <p className="text-xl mb-8 opacity-90">
          Our support team is here to help you 24/7
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Contact Support</Link>
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary" asChild>
            <Link href="/profitability">Live Chat</Link>
          </Button>
        </div>
        
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-left">
          <div className="bg-white/10 backdrop-blur rounded-lg p-6">
            <Icons.mail className="h-8 w-8 mb-3" />
            <h3 className="font-semibold mb-2">Email Support</h3>
            <p className="opacity-90 text-sm">support@cryps.com</p>
            <p className="opacity-75 text-sm">Response within 24 hours</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-6">
            <Icons.phone className="h-8 w-8 mb-3" />
            <h3 className="font-semibold mb-2">Phone Support</h3>
            <p className="opacity-90 text-sm">+1 (555) 123-4567</p>
            <p className="opacity-75 text-sm">Mon-Fri, 9AM-6PM EST</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-6">
            <Icons.messageCircle className="h-8 w-8 mb-3" />
            <h3 className="font-semibold mb-2">Live Chat</h3>
            <p className="opacity-90 text-sm">Available 24/7</p>
            <p className="opacity-75 text-sm">Average wait: 2 minutes</p>
          </div>
        </div>
      </section>
    </div>
  )
}