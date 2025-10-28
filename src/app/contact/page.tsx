"use client"

import { useState } from "react"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Icons } from "@/components/icons"
import Link from "next/link"
import Image from "next/image"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    newsletter: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, subject: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, newsletter: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        newsletter: false
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Icons.mapPin,
      title: "Headquarters",
      details: [
        "123 Mining Street",
        "Tech Hub, CA 94025",
        "United States"
      ]
    },
    {
      icon: Icons.phone,
      title: "Phone",
      details: [
        "+1 (555) 123-4567",
        "Mon-Fri: 9AM-6PM EST",
        "Sat-Sun: 10AM-4PM EST"
      ]
    },
    {
      icon: Icons.mail,
      title: "Email",
      details: [
        "support@cryps.com",
        "sales@cryps.com",
        "partnerships@cryps.com"
      ]
    }
  ]

  const officeLocations = [
    {
      city: "San Francisco",
      country: "USA",
      address: "123 Mining Street, Tech Hub, CA 94025",
      image: "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=400&h=300&fit=crop"
    },
    {
      city: "Shenzhen",
      country: "China",
      address: "456 Electronics Ave, Nanshan District",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
    },
    {
      city: "Dubai",
      country: "UAE",
      address: "789 Business Bay, Dubai Marina",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Get in touch with our team. We're here to help you succeed in cryptocurrency mining.
        </p>
      </section>

      {/* Contact Info Cards */}
      <section className="grid md:grid-cols-3 gap-6 mb-16">
        {contactInfo.map((info, index) => (
          <Card key={index} className="text-center">
            <CardContent className="p-6">
              <div className="flex justify-center mb-4">
                <info.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-3">{info.title}</h3>
              <div className="space-y-1">
                {info.details.map((detail, i) => (
                  <p key={i} className="text-muted-foreground text-sm">{detail}</p>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Contact Form & Map */}
      <section className="grid lg:grid-cols-2 gap-12 mb-16">
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Send us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            {isSubmitted ? (
              <div className="text-center py-8">
                <Icons.checkCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">
                  Thank you for contacting us. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Acme Corp"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Select value={formData.subject} onValueChange={handleSelectChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="sales">Sales Question</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                      <SelectItem value="bulk">Bulk Order</SelectItem>
                      <SelectItem value="warranty">Warranty Claim</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="newsletter"
                    checked={formData.newsletter}
                    onCheckedChange={handleCheckboxChange}
                  />
                  <Label htmlFor="newsletter" className="text-sm">
                    Subscribe to our newsletter for mining tips and updates
                  </Label>
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Icons.loader className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Icons.send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>

        {/* Map Placeholder */}
        <Card>
          <CardContent className="p-0 h-full min-h-[400px]">
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1579546929518-9e396f3a803f?w=600&h=500&fit=crop"
                alt="Office Location Map"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="bg-white/95 backdrop-blur rounded-lg p-6 text-center">
                  <Icons.mapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Visit Our Headquarters</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    123 Mining Street, Tech Hub, CA 94025
                  </p>
                  <Button size="sm" asChild>
                    <Link href="https://maps.google.com" target="_blank">
                      Get Directions
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Office Locations */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Global Offices</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {officeLocations.map((office, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src={office.image}
                  alt={`${office.city} Office`}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-1">{office.city}</h3>
                <p className="text-primary mb-2">{office.country}</p>
                <p className="text-muted-foreground text-sm">{office.address}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Support Hours */}
      <section className="bg-muted/50 rounded-2xl p-8 mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Support Hours</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold mb-4 flex items-center">
              <Icons.clock className="h-5 w-5 mr-2 text-primary" />
              Customer Support
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span className="font-medium">9:00 AM - 6:00 PM EST</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span className="font-medium">10:00 AM - 4:00 PM EST</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span className="font-medium">10:00 AM - 4:00 PM EST</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4 flex items-center">
              <Icons.alertCircle className="h-5 w-5 mr-2 text-primary" />
              Emergency Support
            </h3>
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">
                For urgent technical issues with active mining operations:
              </p>
              <div className="flex justify-between">
                <span>24/7 Hotline:</span>
                <span className="font-medium">+1 (555) 911-MINE</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Available for enterprise customers with active warranty
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="text-center py-16 bg-gradient-to-r from-primary to-primary/80 text-white rounded-2xl">
        <h2 className="text-3xl font-bold mb-4">Connect With Us</h2>
        <p className="text-xl mb-8 opacity-90">
          Follow us on social media for updates, tips, and community discussions
        </p>
        <div className="flex justify-center gap-4 mb-8">
          <Button size="lg" variant="secondary" asChild>
            <Link href="https://twitter.com" target="_blank">
              <Icons.twitter className="h-5 w-5 mr-2" />
              Twitter
            </Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="https://discord.com" target="_blank">
              <Icons.messageCircle className="h-5 w-5 mr-2" />
              Discord
            </Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="https://youtube.com" target="_blank">
              <Icons.youtube className="h-5 w-5 mr-2" />
              YouTube
            </Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="https://telegram.org" target="_blank">
              <Icons.send className="h-5 w-5 mr-2" />
              Telegram
            </Link>
          </Button>
        </div>
        <p className="opacity-75">
          Join our community of 50,000+ miners worldwide
        </p>
      </section>
    </div>
  )
}