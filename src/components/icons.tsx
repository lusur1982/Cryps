import {
  LucideProps,
  Moon,
  Sun,
  Menu,
  ShoppingCart,
  Search,
  Filter,
  Star,
  Truck,
  Shield,
  Zap,
  TrendingUp,
  Package,
  CreditCard,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  Plus,
  Minus,
  X,
  Check,
  AlertCircle,
  User,
  Settings,
  LogOut,
  Home,
  ShoppingBag,
  HelpCircle,
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  ExternalLink,
  Edit,
  Trash2,
  Eye,
  Download,
  Upload,
  RefreshCw,
  BarChart3,
  Users,
  DollarSign,
  Box,
  Wrench,
  Cpu,
  Thermometer,
  Wind,
  Database,
  Server,
  Globe,
  Lock,
  Leaf,
  Send,
  MessageCircle,
  Youtube,
  Target,
  CheckCircle,
  Loader,
} from "lucide-react"

// Custom Google SVG icon
const GoogleIcon = (props: LucideProps) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
)

// Custom Crypto Logo SVG
const CryptoLogo = (props: LucideProps) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor:'#3B82F6', stopOpacity:1}} />
        <stop offset="100%" style={{stopColor:'#1E40AF', stopOpacity:1}} />
      </linearGradient>
    </defs>
    <circle cx="16" cy="16" r="15" fill="url(#gradient)" stroke="#1E40AF" strokeWidth="1"/>
    <path d="M8 12C8 10.8954 8.89543 10 10 10H22C23.1046 10 24 10.8954 24 12V20C24 21.1046 23.1046 22 22 22H10C8.89543 22 8 21.1046 8 20V12Z" fill="white" opacity="0.9"/>
    <path d="M12 14H20V16H18V18H16V16H14V18H12V14Z" fill="#1E40AF"/>
    <circle cx="13" cy="13" r="1" fill="#10B981"/>
    <circle cx="19" cy="13" r="1" fill="#10B981"/>
    <circle cx="13" cy="19" r="1" fill="#10B981"/>
    <circle cx="19" cy="19" r="1" fill="#10B981"/>
  </svg>
)

export const Icons = {
  logo: CryptoLogo,
  sun: Sun,
  moon: Moon,
  menu: Menu,
  shoppingCart: ShoppingCart,
  search: Search,
  filter: Filter,
  star: Star,
  truck: Truck,
  shield: Shield,
  zap: Zap,
  trendingUp: TrendingUp,
  package: Package,
  creditCard: CreditCard,
  chevronRight: ChevronRight,
  chevronLeft: ChevronLeft,
  chevronDown: ChevronDown,
  chevronUp: ChevronUp,
  arrowLeft: ArrowLeft,
  plus: Plus,
  minus: Minus,
  x: X,
  check: Check,
  alertCircle: AlertCircle,
  user: User,
  settings: Settings,
  logOut: LogOut,
  home: Home,
  shoppingBag: ShoppingBag,
  helpCircle: HelpCircle,
  mail: Mail,
  phone: Phone,
  mapPin: MapPin,
  clock: Clock,
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  linkedin: Linkedin,
  github: Github,
  google: GoogleIcon,
  externalLink: ExternalLink,
  edit: Edit,
  trash: Trash2,
  eye: Eye,
  download: Download,
  upload: Upload,
  refreshCw: RefreshCw,
  barChart: BarChart3,
  users: Users,
  dollarSign: DollarSign,
  box: Box,
  wrench: Wrench,
  cpu: Cpu,
  thermometer: Thermometer,
  wind: Wind,
  database: Database,
  globe: Globe,
  lock: Lock,
  leaf: Leaf,
  send: Send,
  messageCircle: MessageCircle,
  youtube: Youtube,
  target: Target,
  checkCircle: CheckCircle,
  loader: Loader,
} as const

export type Icon = (props: LucideProps) => JSX.Element

// Direct exports for commonly used icons
export { GoogleIcon }