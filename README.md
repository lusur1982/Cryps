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

### Quick Setup (PostgreSQL - Recommended)

1. **Install PostgreSQL** (if not already installed)
   - **Windows**: Download from https://www.postgresql.org/download/windows/
   - **Mac**: `brew install postgresql` or download from https://www.postgresql.org/download/macosx/
   - **Linux**: `sudo apt-get install postgresql postgresql-contrib` (Ubuntu/Debian)

2. **Create database**
   ```bash
   # Connect to PostgreSQL
   psql -U postgres
   
   # Create database
   CREATE DATABASE cryps;
   
   # Create user (optional)
   CREATE USER cryps_user WITH PASSWORD 'your_password';
   GRANT ALL PRIVILEGES ON DATABASE cryps TO cryps_user;
   \q
   ```

3. **Clone and setup the project**
   ```bash
   git clone https://github.com/lusur1982/Cryps.git
   cd Cryps
   npm install
   ```

4. **Configure environment**
   ```bash
   npm run setup-postgresql
   ```

5. **Edit .env file** with your PostgreSQL credentials:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/cryps"
   ```

6. **Start development server**
   ```bash
   npm run dev
   ```

### Quick Setup (SQLite - Simple Testing)

If you prefer SQLite for simple testing:

1. **Clone the repository**
   ```bash
   git clone https://github.com/lusur1982/Cryps.git
   cd Cryps
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Automatic setup** (creates .env file and sets up database)
   ```bash
   npm run setup
   ```

4. **Edit .env file** to use SQLite:
   ```env
   DATABASE_URL="file:./db/custom.db"
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

### Platform-Specific Setup Scripts

#### Windows Users
```bash
# For PostgreSQL
setup-postgresql.bat

# For SQLite
setup.bat
```

#### Linux/Mac Users
```bash
# For PostgreSQL
chmod +x setup-postgresql.sh
./setup-postgresql.sh

# For SQLite
chmod +x setup.sh
./setup.sh
```

### Default Login Credentials
After running the seed script, you can use these credentials:

- **Admin**: `admin@cryps.com` / `admin123`
- **User**: `user@cryps.com` / `user123`

## 🗄️ Database Management

### PostgreSQL (Recommended for Production and Local Development)
- **Connection**: Configure via `DATABASE_URL` in `.env`
- **Format**: `postgresql://username:password@localhost:5432/cryps`
- **Setup**: Use `npm run setup-postgresql` for automatic configuration
- **Migrations**: Use `npm run db:migrate` for schema changes
- **Advantages**: Better performance, concurrent connections, advanced features

### SQLite (Development and Simple Testing)
- **Location**: `./db/custom.db`
- **Used for**: Local development and simple testing
- **Setup**: Use `npm run setup` for automatic configuration
- **Advantages**: No installation required, portable, simple setup

### Database Schemas
The application includes the following main models:
- **Users**: Authentication and profile management
- **Products**: Crypto miner inventory with specifications
- **Orders**: Order management and tracking
- **CartItems**: Shopping cart functionality
- **Blogs**: Content management system
- **Settings**: Site configuration

### Switching Between Databases
To switch between SQLite and PostgreSQL:

1. **Edit .env file**:
   ```env
   # For PostgreSQL
   DATABASE_URL="postgresql://username:password@localhost:5432/cryps"
   
   # For SQLite
   DATABASE_URL="file:./db/custom.db"
   ```

2. **Update prisma/schema.prisma**:
   ```prisma
   datasource db {
     provider = "postgresql"  # or "sqlite"
     url      = env("DATABASE_URL")
   }
   ```

3. **Run database setup**:
   ```bash
   npm run db:setup
   ```

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
# Quick Setup
npm run setup               # Install .env and setup database (SQLite)
npm run setup-postgresql    # Install .env and setup database (PostgreSQL)

# Development
npm run dev                # Start development server
npm run build              # Build for production
npm run start              # Start production server

# Database
npm run db:setup           # Generate, push and seed database
npm run db:generate        # Generate Prisma client
npm run db:push            # Push schema to database
npm run db:migrate         # Run database migrations
npm run db:seed            # Seed database with data
npm run db:reset           # Reset database

# Environment Setup
npm run setup-env          # Create .env from template (SQLite)
npm run setup-env-postgresql # Create .env from template (PostgreSQL)

# Code Quality
npm run lint               # Run ESLint
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