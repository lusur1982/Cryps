import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Icons } from "@/components/icons"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About Us - Cryps",
  description: "Learn about Cryps - Your trusted partner in cryptocurrency mining hardware and solutions.",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">About Cryps</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Your trusted partner in cryptocurrency mining hardware and solutions since 2020
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/shop">Shop Now</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-8 mb-16">
        <Card className="p-8">
          <CardContent className="p-0">
            <div className="flex items-center mb-4">
              <Icons.target className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-2xl font-bold">Our Mission</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To democratize cryptocurrency mining by providing accessible, high-quality mining hardware 
              and comprehensive support to miners of all levels. We believe in empowering individuals 
              to participate in the digital currency revolution.
            </p>
          </CardContent>
        </Card>

        <Card className="p-8">
          <CardContent className="p-0">
            <div className="flex items-center mb-4">
              <Icons.eye className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-2xl font-bold">Our Vision</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To become the global leader in cryptocurrency mining solutions, fostering innovation 
              and sustainability in the blockchain ecosystem while making mining profitable and 
              environmentally conscious for everyone.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50 rounded-2xl mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50K+</div>
            <div className="text-muted-foreground">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100+</div>
            <div className="text-muted-foreground">Mining Products</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Customer Support</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-muted-foreground">Uptime Guarantee</div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Cryps?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 text-center">
            <CardContent className="p-0">
              <Icons.shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
              <p className="text-muted-foreground">
                All our products undergo rigorous testing and come with manufacturer warranties 
                to ensure reliability and performance.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6 text-center">
            <CardContent className="p-0">
              <Icons.zap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Global shipping with express delivery options. Most orders ship within 24-48 hours 
                with tracking included.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6 text-center">
            <CardContent className="p-0">
              <Icons.users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Expert Support</h3>
              <p className="text-muted-foreground">
                Our team of mining experts is available 24/7 to help you with setup, troubleshooting, 
                and optimization.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="overflow-hidden">
            <div className="aspect-square relative">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                alt="CEO"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-1">Alex Chen</h3>
              <p className="text-primary mb-3">CEO & Founder</p>
              <p className="text-muted-foreground text-sm">
                Former blockchain engineer with 10+ years of experience in cryptocurrency and fintech.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="aspect-square relative">
              <Image
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
                alt="CTO"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-1">Sarah Johnson</h3>
              <p className="text-primary mb-3">CTO</p>
              <p className="text-muted-foreground text-sm">
                Expert in hardware optimization and mining infrastructure with a background in electrical engineering.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="aspect-square relative">
              <Image
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
                alt="COO"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-1">Michael Roberts</h3>
              <p className="text-primary mb-3">COO</p>
              <p className="text-muted-foreground text-sm">
                Operations specialist focused on supply chain optimization and customer experience excellence.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Certifications & Partners</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Badge variant="secondary" className="text-lg py-2 px-4">ISO 9001 Certified</Badge>
          <Badge variant="secondary" className="text-lg py-2 px-4">Bitmain Authorized</Badge>
          <Badge variant="secondary" className="text-lg py-2 px-4">MicroBT Partner</Badge>
          <Badge variant="secondary" className="text-lg py-2 px-4">WhatsMiner Certified</Badge>
          <Badge variant="secondary" className="text-lg py-2 px-4">Green Mining Initiative</Badge>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 bg-gradient-to-r from-primary to-primary/80 text-white rounded-2xl">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Mining?</h2>
        <p className="text-xl mb-8 opacity-90">
          Join thousands of successful miners who trust Cryps for their mining hardware needs
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/shop">Browse Products</Link>
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary" asChild>
            <Link href="/profitability">Calculate Profits</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}