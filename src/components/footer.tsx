import Link from "next/link"
import { Icons } from "@/components/icons"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const footerLinks = {
  shop: [
    { name: "All Products", href: "/shop" },
    { name: "Bitcoin Miners", href: "/shop?category=BITCOIN_MINER" },
    { name: "Litecoin Miners", href: "/shop?category=LITECOIN_MINER" },
    { name: "New Arrivals", href: "/shop?new=true" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
    { name: "Profitability Calculator", href: "/profitability" },
  ],
  support: [
    { name: "Shipping Info", href: "/shipping" },
    { name: "Returns", href: "/returns" },
    { name: "Warranty", href: "/warranty" },
    { name: "Technical Support", href: "/support" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Compliance", href: "/compliance" },
  ],
}

const socialLinks = [
  { name: "Twitter", href: "#", icon: Icons.twitter },
  { name: "Facebook", href: "#", icon: Icons.facebook },
  { name: "Instagram", href: "#", icon: Icons.instagram },
  { name: "LinkedIn", href: "#", icon: Icons.linkedin },
]

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white border-t border-slate-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Icons.logo className="h-10 w-10 text-blue-400" />
                <div className="absolute -inset-2 bg-blue-400/20 rounded-full blur-lg"></div>
              </div>
              <span className="font-bold text-3xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">CRYPS</span>
            </div>
            <p className="text-slate-300 mb-8 max-w-md leading-relaxed">
              Your premier destination for high-performance cryptocurrency mining hardware. 
              We provide cutting-edge ASIC miners and professional support for maximum mining profitability.
            </p>
            
            {/* Newsletter */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-white">Stay Updated</h4>
              <div className="flex space-x-3">
                <Input 
                  placeholder="Enter your email" 
                  className="max-w-[260px] bg-slate-800/50 border-slate-700 text-white placeholder-slate-400 focus:border-blue-500"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-6 text-white">Products</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-white">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-white">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-12 bg-slate-800" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-slate-400">
            © 2024 CRYPS. All rights reserved. | Powering the future of crypto mining.
          </div>
          
          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="text-slate-400 hover:text-blue-400 transition-all duration-200 hover:scale-110"
                aria-label={social.name}
              >
                <social.icon className="h-6 w-6" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}