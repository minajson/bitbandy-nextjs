import Link from 'next/link'
import { Music, Utensils, Code, Trophy, Theater, Heart } from 'lucide-react'

const categories = [
  {
    name: 'Music',
    icon: Music,
    href: '/events?category=music',
    count: 145,
    color: 'bg-purple-500/10 text-purple-600 hover:bg-purple-500/20',
  },
  {
    name: 'Food & Drink',
    icon: Utensils,
    href: '/events?category=food',
    count: 89,
    color: 'bg-orange-500/10 text-orange-600 hover:bg-orange-500/20',
  },
  {
    name: 'Tech',
    icon: Code,
    href: '/events?category=tech',
    count: 67,
    color: 'bg-blue-500/10 text-blue-600 hover:bg-blue-500/20',
  },
  {
    name: 'Sports',
    icon: Trophy,
    href: '/events?category=sports',
    count: 112,
    color: 'bg-green-500/10 text-green-600 hover:bg-green-500/20',
  },
  {
    name: 'Arts & Culture',
    icon: Theater,
    href: '/events?category=arts',
    count: 78,
    color: 'bg-pink-500/10 text-pink-600 hover:bg-pink-500/20',
  },
  {
    name: 'Wellness',
    icon: Heart,
    href: '/events?category=wellness',
    count: 54,
    color: 'bg-red-500/10 text-red-600 hover:bg-red-500/20',
  },
]

export function CategoriesSection() {
  return (
    <section className="border-y bg-muted/30 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Browse by Category
          </h2>
          <p className="mt-2 text-muted-foreground">
            Explore events that match your interests
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative overflow-hidden rounded-xl border bg-card p-6 transition-all hover:shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className={`rounded-lg p-3 transition-colors ${category.color}`}>
                  <category.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground group-hover:text-primary">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.count} events
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}