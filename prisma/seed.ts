import { PrismaClient, ProductCategory, CoolingType, MinerType } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

const cryptoMiners = [
  {
    name: "Antminer S19 Pro",
    slug: "antminer-s19-pro",
    description: "The Bitmain Antminer S19 Pro is one of the most powerful Bitcoin miners available, offering excellent hash rate and energy efficiency.",
    price: 2999.99,
    originalPrice: 3499.99,
    images: JSON.stringify([
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop"
    ]),
    category: ProductCategory.BITCOIN_MINER,
    cooling: CoolingType.AIR_COOLING,
    type: MinerType.ASIC,
    hashRate: "110 TH/s",
    powerConsumption: "3250W",
    efficiency: "29.5 J/TH",
    algorithm: "SHA-256",
    brand: "Bitmain",
    model: "S19 Pro",
    weight: 13.2,
    dimensions: "370 x 195 x 290mm",
    stockCount: 25,
    featured: true,
    isNew: false
  },
  {
    name: "WhatsMiner M30S++",
    slug: "whatsminer-m30s-plus-plus",
    description: "MicroBT WhatsMiner M30S++ delivers exceptional performance with high hash rate and improved energy efficiency for Bitcoin mining.",
    price: 2799.99,
    originalPrice: 3299.99,
    images: JSON.stringify([
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop"
    ]),
    category: ProductCategory.BITCOIN_MINER,
    cooling: CoolingType.AIR_COOLING,
    type: MinerType.ASIC,
    hashRate: "112 TH/s",
    powerConsumption: "3472W",
    efficiency: "31 J/TH",
    algorithm: "SHA-256",
    brand: "MicroBT",
    model: "M30S++",
    weight: 12.5,
    dimensions: "390 x 155 x 240mm",
    stockCount: 18,
    featured: true,
    isNew: false
  },
  {
    name: "AvalonMiner 1246",
    slug: "avalonminer-1246",
    description: "Canaan AvalonMiner 1246 offers reliable performance with stable hash rate and efficient cooling system.",
    price: 2299.99,
    originalPrice: null,
    images: JSON.stringify([
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop"
    ]),
    category: ProductCategory.BITCOIN_MINER,
    cooling: CoolingType.AIR_COOLING,
    type: MinerType.ASIC,
    hashRate: "90 TH/s",
    powerConsumption: "3420W",
    efficiency: "38 J/TH",
    algorithm: "SHA-256",
    brand: "Canaan",
    model: "1246",
    weight: 12.8,
    dimensions: "331 x 195 x 292mm",
    stockCount: 30,
    featured: false,
    isNew: false
  },
  {
    name: "Innosilicon T3+",
    slug: "innosilicon-t3-plus",
    description: "Innosilicon T3+ provides excellent hash rate with advanced cooling technology for optimal performance.",
    price: 2499.99,
    originalPrice: 2899.99,
    images: JSON.stringify([
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop"
    ]),
    category: ProductCategory.BITCOIN_MINER,
    cooling: CoolingType.AIR_COOLING,
    type: MinerType.ASIC,
    hashRate: "53 TH/s",
    powerConsumption: "2100W",
    efficiency: "39.6 J/TH",
    algorithm: "SHA-256",
    brand: "Innosilicon",
    model: "T3+",
    weight: 8.5,
    dimensions: "370 x 128 x 187mm",
    stockCount: 22,
    featured: false,
    isNew: false
  },
  {
    name: "Antminer S19j Pro",
    slug: "antminer-s19j-pro",
    description: "Latest generation Bitmain Antminer with improved efficiency and hash rate for profitable Bitcoin mining.",
    price: 3199.99,
    originalPrice: null,
    images: JSON.stringify([
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop"
    ]),
    category: ProductCategory.BITCOIN_MINER,
    cooling: CoolingType.AIR_COOLING,
    type: MinerType.ASIC,
    hashRate: "100 TH/s",
    powerConsumption: "3050W",
    efficiency: "30.5 J/TH",
    algorithm: "SHA-256",
    brand: "Bitmain",
    model: "S19j Pro",
    weight: 13.2,
    dimensions: "370 x 195 x 290mm",
    stockCount: 15,
    featured: true,
    isNew: true
  },
  {
    name: "Ebang E11++",
    slug: "ebang-e11-plus-plus",
    description: "Ebang E11++ delivers competitive performance with reliable hash rate for Bitcoin mining operations.",
    price: 1999.99,
    originalPrice: 2499.99,
    images: JSON.stringify([
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop"
    ]),
    category: ProductCategory.BITCOIN_MINER,
    cooling: CoolingType.AIR_COOLING,
    type: MinerType.ASIC,
    hashRate: "44 TH/s",
    powerConsumption: "1980W",
    efficiency: "45 J/TH",
    algorithm: "SHA-256",
    brand: "Ebang",
    model: "E11++",
    weight: 10.2,
    dimensions: "440 x 215 x 280mm",
    stockCount: 28,
    featured: false,
    isNew: false
  },
  {
    name: "Antminer L7",
    slug: "antminer-l7",
    description: "Bitmain Antminer L7 is designed for Scrypt algorithm mining, perfect for Litecoin and Dogecoin.",
    price: 14999.99,
    originalPrice: 16999.99,
    images: JSON.stringify([
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop"
    ]),
    category: ProductCategory.LITECOIN_MINER,
    cooling: CoolingType.AIR_COOLING,
    type: MinerType.ASIC,
    hashRate: "9500 MH/s",
    powerConsumption: "3425W",
    efficiency: "0.361 J/MH",
    algorithm: "Scrypt",
    brand: "Bitmain",
    model: "L7",
    weight: 15.0,
    dimensions: "370 x 195 x 290mm",
    stockCount: 12,
    featured: true,
    isNew: false
  },
  {
    name: "Antminer KS3",
    slug: "antminer-ks3",
    description: "Bitmain Antminer KS3 is optimized for Kaspa mining with exceptional hash rate and efficiency.",
    price: 7999.99,
    originalPrice: null,
    images: JSON.stringify([
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop"
    ]),
    category: ProductCategory.OTHER,
    cooling: CoolingType.AIR_COOLING,
    type: MinerType.ASIC,
    hashRate: "9.4 TH/s",
    powerConsumption: "3500W",
    efficiency: "0.37 J/GH",
    algorithm: "kHeavyHash",
    brand: "Bitmain",
    model: "KS3",
    weight: 12.5,
    dimensions: "370 x 195 x 290mm",
    stockCount: 8,
    featured: false,
    isNew: true
  },
  {
    name: "Goldshell KD6",
    slug: "goldshell-kd6",
    description: "Goldshell KD6 is a compact and efficient miner for Kadena network with excellent performance.",
    price: 12999.99,
    originalPrice: 14999.99,
    images: JSON.stringify([
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop"
    ]),
    category: ProductCategory.OTHER,
    cooling: CoolingType.AIR_COOLING,
    type: MinerType.ASIC,
    hashRate: "29.2 TH/s",
    powerConsumption: "2300W",
    efficiency: "0.079 J/GH",
    algorithm: "Blake2S",
    brand: "Goldshell",
    model: "KD6",
    weight: 8.5,
    dimensions: "200 x 264 x 290mm",
    stockCount: 10,
    featured: false,
    isNew: false
  },
  {
    name: "Antminer Z15",
    slug: "antminer-z15",
    description: "Bitmain Antminer Z15 is optimized for Equihash algorithm, perfect for Zcash mining.",
    price: 3299.99,
    originalPrice: 3999.99,
    images: JSON.stringify([
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop"
    ]),
    category: ProductCategory.MONERO_MINER,
    cooling: CoolingType.AIR_COOLING,
    type: MinerType.ASIC,
    hashRate: "420 KSol/s",
    powerConsumption: "1510W",
    efficiency: "3.6 J/KSol",
    algorithm: "Equihash",
    brand: "Bitmain",
    model: "Z15",
    weight: 7.8,
    dimensions: "370 x 195 x 290mm",
    stockCount: 20,
    featured: false,
    isNew: false
  }
]

async function main() {
  console.log('Start seeding...')

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 12)
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@cryps.com' },
    update: {},
    create: {
      email: 'admin@cryps.com',
      username: 'admin',
      password: hashedPassword,
      name: 'Admin User',
      role: 'ADMIN',
    },
  })

  // Create test user
  const userPassword = await bcrypt.hash('user123', 12)
  const testUser = await prisma.user.upsert({
    where: { email: 'user@cryps.com' },
    update: {},
    create: {
      email: 'user@cryps.com',
      username: 'testuser',
      password: userPassword,
      name: 'Test User',
      role: 'USER',
    },
  })

  // Create products
  for (const miner of cryptoMiners) {
    await prisma.product.upsert({
      where: { slug: miner.slug },
      update: miner,
      create: miner,
    })
  }

  // Create some initial blog content
  await prisma.blog.upsert({
    where: { slug: 'welcome-to-cryps' },
    update: {},
    create: {
      title: 'Welcome to Cryps - Your Premium Crypto Mining Destination',
      slug: 'welcome-to-cryps',
      content: `# Welcome to Cryps

Cryps is your premier destination for high-quality cryptocurrency mining hardware. We specialize in providing the latest and most efficient mining equipment for both professional miners and enthusiasts.

## Our Mission

Our mission is to make cryptocurrency mining accessible to everyone by providing:
- Premium mining hardware at competitive prices
- Expert technical support
- Comprehensive mining guides and tutorials
- Fast and reliable worldwide shipping

## Why Choose Cryps?

- **Quality Assurance**: All our products are tested and certified
- **Competitive Pricing**: We offer the best prices in the market
- **Expert Support**: Our team is always ready to help you
- **Fast Shipping**: Quick delivery to your doorstep

Start your mining journey with Cryps today!`,
      excerpt: 'Welcome to Cryps - Your premium destination for cryptocurrency mining hardware and equipment.',
      status: 'PUBLISHED',
      category: 'Company',
      tags: JSON.stringify(['welcome', 'crypto mining', 'hardware']),
      seoTitle: 'Welcome to Cryps - Premium Crypto Mining Hardware',
      seoDescription: 'Discover the best cryptocurrency mining hardware at Cryps. Quality products, expert support, and competitive prices.',
      publishedAt: new Date(),
    },
  })

  console.log('Seeding finished.')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })