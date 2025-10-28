"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/icons"

const faqData = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "What is cryptocurrency mining?",
        answer: "Cryptocurrency mining is the process of validating transactions and adding them to a blockchain ledger. In return for this computational work, miners receive cryptocurrency as a reward. This process requires specialized hardware called miners, which perform complex calculations to secure the network."
      },
      {
        question: "How do I choose the right miner for my needs?",
        answer: "Choosing the right miner depends on several factors: your budget, electricity costs, available space, and which cryptocurrency you want to mine. Consider the miner's hash rate, power consumption, efficiency, and the current profitability of the cryptocurrency you plan to mine. Our profitability calculator can help you compare different options."
      },
      {
        question: "What do I need to start mining?",
        answer: "To start mining, you'll need: 1) A mining rig (ASIC miner or GPU setup), 2) A reliable power supply, 3) Proper cooling/ventilation, 4) Internet connection, 5) A crypto wallet to receive rewards, and 6) Mining software. We offer complete starter packages that include everything you need."
      },
    ]
  },
  {
    category: "Products & Hardware",
    questions: [
      {
        question: "What's the difference between ASIC and GPU miners?",
        answer: "ASIC (Application-Specific Integrated Circuit) miners are specialized devices designed to mine a specific cryptocurrency algorithm, offering higher efficiency and hash rates. GPU miners use graphics cards and are more versatile but less efficient. ASICs are generally better for serious mining operations, while GPUs might be suitable for beginners or those wanting flexibility."
      },
      {
        question: "How long do crypto miners last?",
        answer: "The lifespan of a crypto miner typically ranges from 3-5 years with proper maintenance. Factors affecting longevity include operating temperature, humidity, dust levels, and usage patterns. We offer extended warranty options and provide maintenance guides to help maximize your miner's lifespan."
      },
      {
        question: "Do you provide technical support?",
        answer: "Yes! We offer 24/7 technical support for all our customers. Our team of mining experts can help with setup, troubleshooting, optimization, and general questions. Support is available via phone, email, and live chat. Premium customers also get access to dedicated account managers."
      },
      {
        question: "Are your miners new or used?",
        answer: "We primarily sell new miners with full manufacturer warranties. Occasionally, we offer certified refurbished miners at discounted prices. All used equipment undergoes rigorous testing and comes with a limited warranty. Product condition is clearly labeled on each product page."
      }
    ]
  },
  {
    category: "Profitability & ROI",
    questions: [
      {
        question: "How profitable is crypto mining?",
        answer: "Mining profitability varies based on cryptocurrency prices, network difficulty, electricity costs, and your hardware efficiency. Our profitability calculator provides real-time estimates based on current market conditions. Generally, mining can be profitable with the right hardware and low electricity costs, but profits fluctuate with market conditions."
      },
      {
        question: "What's the typical ROI for a mining rig?",
        answer: "ROI (Return on Investment) typically ranges from 6-18 months, depending on the miner, electricity costs, and cryptocurrency prices. Higher-end miners with better efficiency generally offer faster ROI. Our profitability calculator shows estimated payback periods for each miner model."
      },
      {
        question: "How often should I update my mining equipment?",
        answer: "Most miners remain competitive for 2-3 years before newer, more efficient models make them less profitable. However, this varies by cryptocurrency and technological advancement rate. We offer trade-in programs to help you upgrade to newer equipment when it makes economic sense."
      },
      {
        question: "What are the ongoing costs of mining?",
        answer: "The main ongoing cost is electricity, which typically accounts for 60-80% of total mining costs. Other costs include cooling, maintenance, potential mining pool fees (1-3%), and occasional hardware replacement. It's important to factor these costs into your profitability calculations."
      }
    ]
  },
  {
    category: "Orders & Shipping",
    questions: [
      {
        question: "How long does shipping take?",
        answer: "Shipping times vary by location: Domestic (US): 3-5 business days, Canada: 5-7 business days, Europe: 7-10 business days, Asia: 10-14 business days, Rest of world: 14-21 business days. Express shipping options are available at checkout."
      },
      {
        question: "Do you ship internationally?",
        answer: "Yes, we ship to over 50 countries worldwide. International shipping includes customs clearance and all necessary documentation. Some countries may have import restrictions or require special permits for mining equipment."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept cryptocurrency payments (Bitcoin, Ethereum, USDT), bank transfers, credit/debit cards, and financing options for larger orders. All cryptocurrency payments receive a 2% discount. Payment plans are available for orders over $5,000."
      },
      {
        question: "What's your return policy?",
        answer: "We offer a 30-day return policy for unused items in original packaging. A 15% restocking fee applies to returns. Custom orders and used equipment have different return terms. All returns require prior approval and must be shipped back in original packaging."
      }
    ]
  },
  {
    category: "Technical Support",
    questions: [
      {
        question: "How do I set up my miner?",
        answer: "Each miner comes with a detailed setup guide and QR code linking to video tutorials. We also offer free remote setup assistance for all customers. For hands-on help, we provide paid installation services in select areas. Most miners can be set up in under 30 minutes."
      },
      {
        question: "What mining pool should I join?",
        answer: "The best mining pool depends on your location, the cryptocurrency you're mining, and your preferences. We recommend pools with low fees (1-2%), good uptime, and fair payment systems. Popular options include F2Pool, Poolin, and ViaBTC. Our team can help you choose based on your specific situation."
      },
      {
        question: "How do I optimize my miner's performance?",
        answer: "Optimization includes: 1) Proper cooling (maintain 60-75°C), 2) Stable power supply, 3) Regular cleaning, 4) Firmware updates, 5) Overclocking (advanced), 6) Joining the right mining pool. We provide optimization guides and remote tuning services for maximum efficiency."
      },
      {
        question: "What should I do if my miner stops working?",
        answer: "First, check power and network connections. Then consult our troubleshooting guide. If issues persist, contact our support team with your miner's serial number and error details. We offer remote diagnostics and can arrange repairs or replacements under warranty."
      }
    ]
  }
]

export function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const filteredFAQ = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(q =>
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0)

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Find answers to common questions about crypto mining and our services
        </p>
        
        {/* Search */}
        <div className="max-w-md mx-auto relative">
          <Icons.search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search FAQ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* FAQ Categories */}
      <div className="max-w-4xl mx-auto space-y-8">
        {filteredFAQ.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
            <Card>
              <CardContent className="p-6">
                <Accordion type="multiple" className="space-y-4">
                  {category.questions.map((item, itemIndex) => (
                    <AccordionItem 
                      key={itemIndex} 
                      value={`${categoryIndex}-${itemIndex}`}
                      className="border-b last:border-b-0"
                    >
                      <AccordionTrigger className="text-left hover:no-underline">
                        <span className="font-medium">{item.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        <div className="pt-2 pb-4">
                          {item.answer}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredFAQ.length === 0 && (
        <div className="text-center py-12">
          <Icons.search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">No results found</h3>
          <p className="text-muted-foreground mb-4">
            Try searching with different keywords or browse our categories above.
          </p>
        </div>
      )}

      {/* Still Need Help */}
      <Card className="mt-12 bg-primary/5">
        <CardContent className="p-8 text-center">
          <Icons.helpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
          <p className="text-muted-foreground mb-6">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center gap-2">
              <Icons.mail className="h-4 w-4" />
              <span>support@cryps.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Icons.phone className="h-4 w-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Icons.externalLink className="h-4 w-4" />
              <span>Live Chat Available</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}