import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Icons } from "@/components/icons"

const teamMembers = [
  {
    name: "Alex Chen",
    role: "CEO & Founder",
    bio: "Former blockchain engineer with 10+ years of experience in cryptocurrency mining and hardware optimization.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Sarah Johnson",
    role: "CTO",
    bio: "Expert in mining hardware optimization and renewable energy solutions for mining operations.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Operations",
    bio: "Specialized in large-scale mining farm management and logistics for global distribution.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Emily Watson",
    role: "Customer Success Lead",
    bio: "Dedicated to providing exceptional support and guidance to mining enthusiasts and professionals.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
  },
]

const milestones = [
  {
    year: "2019",
    title: "Cryps Founded",
    description: "Started with a mission to make crypto mining accessible to everyone.",
  },
  {
    year: "2020",
    title: "First Partnership",
    description: "Partnered with leading manufacturers to offer premium mining hardware.",
  },
  {
    year: "2021",
    title: "Global Expansion",
    description: "Expanded operations to serve customers in over 50 countries.",
  },
  {
    year: "2022",
    title: "Innovation Award",
    description: "Recognized for excellence in mining hardware distribution and support.",
  },
  {
    year: "2023",
    title: "Sustainability Initiative",
    description: "Launched green mining solutions and renewable energy partnerships.",
  },
  {
    year: "2024",
    title: "Market Leader",
    description: "Became one of the most trusted names in crypto mining hardware.",
  },
]

const values = [
  {
    icon: Icons.shield,
    title: "Quality Assurance",
    description: "Every product is tested and certified to meet the highest standards of performance and reliability.",
  },
  {
    icon: Icons.users,
    title: "Expert Support",
    description: "Our team of mining experts is available 24/7 to help you succeed in your mining journey.",
  },
  {
    icon: Icons.zap,
    title: "Innovation",
    description: "We stay ahead of the curve by offering the latest and most efficient mining technology.",
  },
  {
    icon: Icons.globe,
    title: "Global Reach",
    description: "Serving miners worldwide with fast shipping and localized support in multiple languages.",
  },
  {
    icon: Icons.dollarSign,
    title: "Competitive Pricing",
    description: "Offering the best prices in the market with transparent pricing and no hidden fees.",
  },
  {
    icon: Icons.leaf,
    title: "Sustainability",
    description: "Committed to promoting eco-friendly mining practices and renewable energy solutions.",
  },
]

export function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Cryps
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your trusted partner in cryptocurrency mining since 2019
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                50+ Countries
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                10,000+ Customers
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                24/7 Support
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Founded in 2019, Cryps emerged from a simple vision: to make cryptocurrency mining 
                accessible to everyone, from hobbyists to large-scale operations. What started as a 
                small team of passionate blockchain enthusiasts has grown into a trusted global 
                platform for mining hardware and solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We recognized early on that the complexity of mining hardware procurement was a 
                significant barrier to entry for many potential miners. Our mission became clear: 
                to streamline this process, provide expert guidance, and ensure that every customer 
                receives the right equipment for their specific needs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, Cryps stands as a beacon of reliability and expertise in the crypto mining 
                industry, serving thousands of customers across the globe with cutting-edge hardware, 
                unparalleled support, and a commitment to advancing the future of decentralized finance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="w-1/2 pr-8">
                    <Card className={`p-6 ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} max-w-md`}>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">{milestone.year}</Badge>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </Card>
                  </div>
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center z-10">
                    <Icons.star className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="w-1/2 pl-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <Badge variant="outline" className="mb-3">{member.role}</Badge>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground">Countries Served</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <p className="text-muted-foreground">Uptime Guarantee</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-muted-foreground">Expert Support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}