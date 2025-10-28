import { SectionHeader } from "@/components/section-header"
import { Card, CardContent } from "@/components/ui/card"
import { Icons } from "@/components/icons"

const features = [
  {
    icon: Icons.shield,
    title: "Quality Assurance",
    description: "All our miners are factory-tested and come with full manufacturer warranty for peace of mind.",
  },
  {
    icon: Icons.truck,
    title: "Lightning-Fast Shipping",
    description: "Express worldwide delivery with real-time tracking and full insurance coverage.",
  },
  {
    icon: Icons.users,
    title: "Mining Experts",
    description: "24/7 support from crypto mining professionals with years of hands-on experience.",
  },
  {
    icon: Icons.dollarSign,
    title: "Best Price Guarantee",
    description: "Competitive pricing with price matching - find it cheaper, we'll beat it.",
  },
  {
    icon: Icons.zap,
    title: "Cutting-Edge Tech",
    description: "Latest generation ASIC miners with the best efficiency ratings in the market.",
  },
  {
    icon: Icons.settings,
    title: "Setup & Support",
    description: "Free configuration assistance and lifetime technical support for all purchases.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-slate-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 dark:bg-purple-900/20 rounded-full mb-4">
            <Icons.star className="h-4 w-4 text-purple-600 dark:text-purple-400 mr-2" />
            <span className="text-purple-600 dark:text-purple-400 text-sm font-medium">Why Miners Trust Us</span>
          </div>
          <SectionHeader
            title="The CRYPS Advantage"
            subtitle="Industry-leading service and support for cryptocurrency mining professionals"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 hover:scale-[1.02] bg-white dark:bg-slate-800">
              <CardContent className="p-8">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}