'use client'

export const dynamic = 'force-dynamic'

import { useState, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { Search, SlidersHorizontal, Home, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { EventCard } from '@/components/events/event-card'
import { EventFilters } from '@/components/events/event-filters'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import { mockEvents } from '@/lib/data'

export default function EventsPage() {
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '')
  const [eventTab, setEventTab] = useState<'upcoming' | 'past'>('upcoming')
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const filteredEvents = useMemo(() => {
    let events = [...mockEvents]

    const today = new Date()
    today.setHours(0, 0, 0, 0)

    // Safe date filtering
    events = events.filter((event) => {
      if (!event.date) return false
      const eventDate = new Date(event.date)
      if (isNaN(eventDate.getTime())) return false

      if (eventTab === 'upcoming') {
        return eventDate >= today
      } else {
        return eventDate < today
      }
    })

    // Safe search filter
    if (searchQuery) {
      const search = searchQuery.toLowerCase()
      events = events.filter((event) =>
        event.title?.toLowerCase().includes(search) ||
        event.description?.toLowerCase().includes(search) ||
        event.venue?.toLowerCase().includes(search) ||
        event.organizer?.toLowerCase().includes(search)
      )
    }

    // Safe category filter
    const category = searchParams.get('category')
    if (category && category !== 'all') {
      events = events.filter((event) => event.category === category)
    }

    // Safe location filter
    const location = searchParams.get('location')
    if (location && location !== 'all') {
      events = events.filter(
        (event) => event.location?.toLowerCase() === location
      )
    }

    // Safe price filter
    const price = searchParams.get('price')
    if (price && price !== 'all') {
      events = events.filter((event) => {
        if (!event.ticketTypes?.length) return false

        const lowestPrice = Math.min(
          ...event.ticketTypes.map((t) => t.price ?? 0)
        )

        switch (price) {
          case 'free':
            return lowestPrice === 0
          case 'under-5000':
            return lowestPrice < 5000
          case '5000-10000':
            return lowestPrice >= 5000 && lowestPrice <= 10000
          case 'over-10000':
            return lowestPrice > 10000
          default:
            return true
        }
      })
    }

    return events
  }, [searchParams, searchQuery, eventTab])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 bg-muted/20">
        {/* Header */}
        <section className="border-b border-border bg-background py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="flex items-center gap-1 hover:text-foreground">
                <Home className="h-4 w-4" />
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">Events</span>
            </nav>

            <div className="mt-4 flex items-center justify-between">
              <h1 className="font-display text-3xl font-bold text-foreground">
                Events
              </h1>
              <span className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">
                  {filteredEvents.length}
                </span>{' '}
                events found
              </span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Tabs */}
            <div className="mb-6 flex gap-2">
              <Button
                variant={eventTab === 'upcoming' ? 'default' : 'outline'}
                size="sm"
                className="rounded-full"
                onClick={() => setEventTab('upcoming')}
              >
                Upcoming
              </Button>
              <Button
                variant={eventTab === 'past' ? 'default' : 'outline'}
                size="sm"
                className="rounded-full"
                onClick={() => setEventTab('past')}
              >
                Past
              </Button>
            </div>

            <div className="flex gap-8">
              {/* Events Grid */}
              <div className="flex-1">
                {filteredEvents.length > 0 ? (
                  <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {filteredEvents.map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border bg-background py-16 text-center">
                    <Search className="h-12 w-12 text-muted-foreground/50" />
                    <h3 className="mt-4 text-lg font-semibold text-foreground">
                      No events found
                    </h3>
                  </div>
                )}
              </div>

              {/* Desktop Filters */}
              <aside className="hidden w-72 lg:block">
                <div className="sticky top-24 rounded-lg border border-border bg-background p-6">
                  <EventFilters />
                </div>
              </aside>
            </div>

            {/* Mobile Filters */}
            <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 lg:hidden">
              <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                <SheetTrigger asChild>
                  <Button className="rounded-full shadow-lg">
                    <SlidersHorizontal className="mr-2 h-4 w-4" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="bottom" className="max-h-[80vh] overflow-y-auto rounded-t-2xl">
                  <div className="pb-8 pt-4">
                    <EventFilters isMobile onClose={() => setIsFilterOpen(false)} />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
