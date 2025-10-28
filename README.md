# Cryps - Premium Crypto Mining Hardware Ecommerce Platform

A comprehensive Next.js ecommerce platform for selling cryptocurrency mining hardware with advanced features including dual database support, user authentication, admin dashboard, and more.

## 🚀 Features

### Core Features
- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS, Prisma ORM
- **Dual Database Support**: SQLite for development, PostgreSQL for production
- **Authentication**: NextAuth.js with Google OAuth and custom login
- **Role-Based Access**: User and Admin roles with separate dashboards
- **Shopping Cart & Checkout**: Full ecommerce functionality with PayPal/Revolut integration
- **Product Management**: Advanced filtering, search, and categorization
- **Order Management**: Complete order lifecycle tracking
- **Profitability Calculator**: Interactive mining profitability analysis

### Frontend Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark/Light Mode**: Theme switching with next-themes
- **SEO Optimized**: Dynamic meta tags and structured data
- **Image Optimization**: Next.js Image component with Unsplash integration
- **Interactive Components**: Built with shadcn/ui component library
- **Real-time Updates**: Socket.io integration for live features

### Backend Features
- **API Routes**: RESTful API with proper error handling
- **Database ORM**: Prisma with type-safe database access
- **Authentication**: Secure session management with NextAuth
- **File Uploads**: Image handling and optimization
- **Email Integration**: Nodemailer for transactional emails
- **Caching**: In-memory caching for performance optimization

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/lusur1982/Cryps.git
cd Cryps
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment variables**
Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URL="file:./dev.db"
POSTGRES_DATABASE_URL="postgresql://username:password@localhost:5432/cryps"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# Google OAuth (optional)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Email (optional)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"

# Payment (optional)
PAYPAL_CLIENT_ID="your-paypal-client-id"
PAYPAL_CLIENT_SECRET="your-paypal-client-secret"
REVOLUT_API_KEY="your-revolut-api-key"
```

4. **Database setup**
```bash
# Generate Prisma client
npm run db:generate

# Push database schema
npm run db:push

# Seed database with sample data
npm run db:seed
```

5. **Start development server**
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 🗄️ Database Management

### SQLite (Development)
- Location: `./dev.db`
- Used for local development and testing
- Automatic migrations with `npm run db:push`

### PostgreSQL (Production)
- Configure connection in `POSTGRES_DATABASE_URL`
- Recommended for production deployments
- Supports dual database synchronization

### Database Schemas
The application includes the following main models:
- **Users**: Authentication and profile management
- **Products**: Crypto miner inventory with specifications
- **Orders**: Order management and tracking
- **CartItems**: Shopping cart functionality
- **Blogs**: Content management system
- **Settings**: Site configuration

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication pages
│   ├── admin/             # Admin dashboard
│   ├── api/               # API routes
│   ├── profile/           # User profile
│   ├── shop/              # Product pages
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/                # shadcn/ui components
│   ├── admin/             # Admin components
│   ├── dashboard/         # Dashboard components
│   ├── pages/             # Page components
│   ├── sections/          # Landing page sections
│   └── shop/              # Shop components
├── lib/                   # Utility libraries
│   ├── auth.ts            # NextAuth configuration
│   ├── db.ts              # Database client
│   ├── cache.ts           # Caching utilities
│   └── utils.ts           # Helper functions
├── store/                 # State management
│   └── cart.ts            # Shopping cart store
├── types/                 # TypeScript definitions
└── hooks/                 # Custom React hooks
```

## 🎯 Core Pages

### Public Pages
- **Home** (`/`): Hero section, featured products, company overview
- **Shop** (`/shop`): Product catalog with advanced filtering
- **Product Detail** (`/shop/[slug]`): Individual product pages
- **Cart** (`/cart`): Shopping cart management
- **Checkout** (`/checkout`): Order processing and payment
- **Profitability** (`/profitability`): Mining calculator
- **About** (`/about`): Company information and team
- **FAQ** (`/faq`): Frequently asked questions
- **Contact** (`/contact`): Contact form and information

### User Pages
- **Profile** (`/profile`): User dashboard and order history
- **Authentication** (`/auth/*`): Login, registration, password reset

### Admin Pages
- **Admin Dashboard** (`/admin`): Product, order, and user management
- **Settings**: Payment and shipping configuration

## 🔐 Authentication

### User Roles
- **USER**: Standard customer access
- **ADMIN**: Full administrative privileges

### Login Methods
- **Email/Username**: Traditional credentials
- **Google OAuth**: Social login integration
- **Separate Admin Login**: Dedicated admin authentication

### Session Management
- Secure JWT tokens
- Automatic session refresh
- Role-based access control

## 🛒 Ecommerce Features

### Product Management
- **Categories**: Bitcoin, Ethereum, Litecoin, Monero miners
- **Specifications**: Hash rate, power consumption, efficiency
- **Inventory**: Stock tracking and management
- **Pricing**: Dynamic pricing with discount support

### Shopping Cart
- **Persistent Cart**: Saved across sessions
- **Real-time Updates**: Live cart modifications
- **Quantity Management**: Stock validation
- **Price Calculation**: Automatic totals with tax/shipping

### Checkout Process
- **Multi-step Form**: Contact, shipping, billing information
- **Payment Integration**: PayPal and Revolut support
- **Order Confirmation**: Email notifications and tracking
- **Guest Checkout**: Option for non-registered users

## 📊 Admin Dashboard

### Overview
- **Statistics**: Products, orders, users, revenue metrics
- **Real-time Data**: Live dashboard updates
- **Visual Charts**: Revenue and order trends

### Management Tools
- **Products**: CRUD operations for inventory
- **Orders**: Status updates and fulfillment
- **Users**: Customer management and roles
- **Settings**: Payment and shipping configuration

### Features
- **Bulk Operations**: Mass updates and exports
- **Search & Filter**: Advanced data filtering
- **Export Options**: CSV and PDF reports
- **Activity Logs**: Admin action tracking

## 🎨 Design System

### UI Components
- **shadcn/ui**: Modern component library
- **Tailwind CSS**: Utility-first styling
- **Lucide Icons**: Consistent iconography
- **Dark Mode**: Automatic theme detection

### Responsive Design
- **Mobile-First**: Progressive enhancement
- **Breakpoints**: sm, md, lg, xl screen support
- **Touch-Friendly**: 44px minimum touch targets
- **Accessibility**: WCAG compliance

## 🚀 Performance Optimizations

### Caching Strategy
- **Memory Cache**: In-memory data caching
- **Image Optimization**: Next.js Image component
- **Bundle Splitting**: Automatic code splitting
- **Static Generation**: ISR for dynamic content

### SEO Features
- **Meta Tags**: Dynamic page metadata
- **Structured Data**: JSON-LD markup
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine directives

## 🔧 Development Commands

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Database
npm run db:generate  # Generate Prisma client
npm run db:push      # Push schema to database
npm run db:migrate   # Run database migrations
npm run db:seed      # Seed database with data
npm run db:reset     # Reset database

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # TypeScript validation
```

## 🌍 Deployment

### Environment Setup
1. **Production Database**: Configure PostgreSQL
2. **Environment Variables**: Set all required env vars
3. **Build Process**: `npm run build`
4. **Start Server**: `npm run start`

### Deployment Options
- **Vercel**: Recommended for Next.js applications
- **Netlify**: Static hosting with serverless functions
- **Docker**: Containerized deployment
- **VPS**: Custom server deployment

## 📝 API Documentation

### Authentication Endpoints
- `GET/POST /api/auth/[...nextauth]` - NextAuth.js handler

### Product Endpoints
- `GET /api/products` - List products with filtering
- `POST /api/admin/products` - Create product (admin)
- `PUT /api/admin/products/[id]` - Update product (admin)
- `DELETE /api/admin/products/[id]` - Delete product (admin)

### Order Endpoints
- `GET /api/orders` - Get user orders
- `POST /api/orders` - Create new order
- `GET /api/admin/orders` - List all orders (admin)
- `PATCH /api/admin/orders/[id]` - Update order status (admin)

### User Endpoints
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update user profile
- `GET /api/admin/users` - List all users (admin)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- **Email**: support@cryps.com
- **Documentation**: Check this README and inline code comments
- **Issues**: Create an issue on GitHub
- **Discussions**: Use GitHub Discussions for questions

## 🔄 Database Sync

The application supports dual database synchronization:

```bash
# Sync SQLite to PostgreSQL
npm run db:sync
```

This feature ensures data consistency between development and production databases.

## 🧪 Testing

```bash
# Run tests (when implemented)
npm run test
npm run test:watch
npm run test:coverage
```

## 📈 Monitoring

Consider implementing:
- **Analytics**: Google Analytics or Plausible
- **Error Tracking**: Sentry or similar
- **Performance**: Vercel Analytics or custom monitoring
- **Uptime**: Status page monitoring

---

Built with ❤️ using Next.js, TypeScript, and modern web technologies.