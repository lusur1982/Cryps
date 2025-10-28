import { SectionHeader } from "@/components/section-header"
import { Card, CardContent } from "@/components/ui/card"
import { Icons } from "@/components/icons"

const features = [
  {
    icon: Icons.shield,
    title: "Quality Assurance",
    description: "All our products are tested and certified for optimal performance and reliability.",
  },
  {
    icon: Icons.truck,
    title: "Fast Worldwide Shipping",
    description: "Quick and secure delivery to your doorstep with full tracking and insurance.",
  },
  {
    icon: Icons.users,
    title: "Expert Support",
    description: "Our team of mining experts is always ready to help you with any questions.",
  },
  {
    icon: Icons.dollarSign,
    title: "Competitive Pricing",
    description: "Get the best prices in the market with our price match guarantee.",
  },
  {
    icon: Icons.zap,
    title: "Latest Technology",
    description: "Stay ahead with the newest and most efficient mining hardware available.",
  },
  {
    icon: Icons.settings,
    title: "Technical Assistance",
    description: "Comprehensive setup guides and ongoing technical support for all customers.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Why Choose Cryps"
          subtitle="Your trusted partner in cryptocurrency mining"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}