import Link from 'next/link'
import { Music, Utensils, Trophy, Palette, Laptop, Laugh, Sparkles } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { categories } from '@/lib/data'

const iconMap = {
  music: Music,
  utensils: Utensils,
  trophy: Trophy,
  palette: Palette,
  laptop: Laptop,
  laugh: Laugh,
  sparkles: Sparkles,
}

export function CategoriesSection() {
  return (
    <section className="bg-muted/30 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Browse by Category
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
            Find events that match your interests
          </p>
        </div>

        {/* Categories Grid */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
          {categories.map((category) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap] || Sparkles

            return (
              <Link key={category.id} href={`/events?category=${category.id}`}>
                <Card className="group h-full transition-all hover:shadow-md hover:border-primary/50">
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <div className={`mb-3 rounded-xl p-3 ${category.color} transition-transform group-hover:scale-110`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{category.name}</span>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
