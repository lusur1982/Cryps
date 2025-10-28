import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

interface SectionHeaderProps {
  title: string
  subtitle: string
  showViewAll?: boolean
  viewAllLink?: string
}

export function SectionHeader({ title, subtitle, showViewAll, viewAllLink }: SectionHeaderProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
        {subtitle}
      </p>
      {showViewAll && viewAllLink && (
        <Button variant="outline" asChild>
          <Link href={viewAllLink}>
            View All Products
            <Icons.chevronRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      )}
    </div>
  )
}