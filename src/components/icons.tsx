import type { LucideProps } from "@/lib/lucide-wrapper"
import { Moon } from "@/lib/lucide-wrapper"
import { Sun } from "@/lib/lucide-wrapper"
import { Menu } from "@/lib/lucide-wrapper"
import { ShoppingCart } from "@/lib/lucide-wrapper"
import { Search } from "@/lib/lucide-wrapper"
import { Filter } from "@/lib/lucide-wrapper"
import { Star } from "@/lib/lucide-wrapper"
import { Truck } from "@/lib/lucide-wrapper"
import { Shield } from "@/lib/lucide-wrapper"
import { Zap } from "@/lib/lucide-wrapper"
import { TrendingUp } from "@/lib/lucide-wrapper"
import { Package } from "@/lib/lucide-wrapper"
import { CreditCard } from "@/lib/lucide-wrapper"
import { ChevronRight } from "@/lib/lucide-wrapper"
import { ChevronLeft } from "@/lib/lucide-wrapper"
import { ChevronDown } from "@/lib/lucide-wrapper"
import { ChevronUp } from "@/lib/lucide-wrapper"
import { ArrowLeft } from "@/lib/lucide-wrapper"
import { Plus } from "@/lib/lucide-wrapper"
import { Minus } from "@/lib/lucide-wrapper"
import { X } from "@/lib/lucide-wrapper"
import { Check } from "@/lib/lucide-wrapper"
import { AlertCircle } from "@/lib/lucide-wrapper"
import { User } from "@/lib/lucide-wrapper"
import { Settings } from "@/lib/lucide-wrapper"
import { LogOut } from "@/lib/lucide-wrapper"
import { Home } from "@/lib/lucide-wrapper"
import { ShoppingBag } from "@/lib/lucide-wrapper"
import { HelpCircle } from "@/lib/lucide-wrapper"
import { Mail } from "@/lib/lucide-wrapper"
import { Phone } from "@/lib/lucide-wrapper"
import { MapPin } from "@/lib/lucide-wrapper"
import { Clock } from "@/lib/lucide-wrapper"
import { Facebook } from "@/lib/lucide-wrapper"
import { Twitter } from "@/lib/lucide-wrapper"
import { Instagram } from "@/lib/lucide-wrapper"
import { Linkedin } from "@/lib/lucide-wrapper"
import { Github } from "@/lib/lucide-wrapper"
import { ExternalLink } from "@/lib/lucide-wrapper"
import { Edit } from "@/lib/lucide-wrapper"
import { Trash2 } from "@/lib/lucide-wrapper"
import { Eye } from "@/lib/lucide-wrapper"
import { Download } from "@/lib/lucide-wrapper"
import { Upload } from "@/lib/lucide-wrapper"
import { RefreshCw } from "@/lib/lucide-wrapper"
import { BarChart3 } from "@/lib/lucide-wrapper"
import { Users } from "@/lib/lucide-wrapper"
import { DollarSign } from "@/lib/lucide-wrapper"
import { Box } from "@/lib/lucide-wrapper"
import { Wrench } from "@/lib/lucide-wrapper"
import { Cpu } from "@/lib/lucide-wrapper"
import { Thermometer } from "@/lib/lucide-wrapper"
import { Wind } from "@/lib/lucide-wrapper"
import { Database } from "@/lib/lucide-wrapper"
import { Server } from "@/lib/lucide-wrapper"
import { Globe } from "@/lib/lucide-wrapper"
import { Lock } from "@/lib/lucide-wrapper"
import { Leaf } from "@/lib/lucide-wrapper"
import { Send } from "@/lib/lucide-wrapper"
import { MessageCircle } from "@/lib/lucide-wrapper"
import { Youtube } from "@/lib/lucide-wrapper"
import { Target } from "@/lib/lucide-wrapper"
import { CheckCircle } from "@/lib/lucide-wrapper"
import { Loader } from "@/lib/lucide-wrapper"
import { Google } from "@/lib/lucide-wrapper"

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

export const Icons = {
  logo: Server,
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