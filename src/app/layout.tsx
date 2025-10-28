import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { Providers } from "@/components/providers";
import { LayoutWrapper } from "@/components/layout-wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cryps - Premium Crypto Mining Hardware",
  description: "Discover the best cryptocurrency mining hardware at Cryps. Quality products, expert support, and competitive prices for Bitcoin, Litecoin, Ethereum miners and more.",
  keywords: ["crypto mining", "Bitcoin miner", "ASIC miner", "cryptocurrency hardware", "mining equipment", "Cryps"],
  authors: [{ name: "Cryps Team" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Cryps - Premium Crypto Mining Hardware",
    description: "Your premier destination for high-quality cryptocurrency mining hardware",
    url: "https://cryps.com",
    siteName: "Cryps",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cryps - Premium Crypto Mining Hardware",
    description: "Your premier destination for high-quality cryptocurrency mining hardware",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <LayoutWrapper>
              {children}
            </LayoutWrapper>
            <Toaster />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
