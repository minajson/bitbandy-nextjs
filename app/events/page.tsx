'use client'

import { useState, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { Search, SlidersHorizontal, Grid, List, Home, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { EventCard } from '@/components/events/event-card'
import { EventFilters } from '@/components/events/event-filters'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import { mockEvents } from '@/lib/data'

export default function EventsPage() {
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [eventTab, setEventTab] = useState<'upcoming' | 'past'>('upcoming')

  const filteredEvents = useMemo(() => {
    let events = [...mockEvents]

    // Tab filter
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    if (eventTab === 'upcoming') {
      events = events.filter((event) => new Date(event.date) >= today)
    } else {
      events = events.filter((event) => new Date(event.date) < today)
    }

    // Search filter
    const search = searchQuery.toLowerCase()
    if (search) {
      events = events.filter(
        (event) =>
          event.title.toLowerCase().includes(search) ||
          event.description.toLowerCase().includes(search) ||
          event.venue.toLowerCase().includes(search) ||
          event.organizer.toLowerCase().includes(search)
      )
    }

    // Category filter
    const category = searchParams.get('category')
    if (category && category !== 'all') {
      events = events.filter((event) => event.category === category)
    }

    // Location filter
    const location = searchParams.get('location')
    if (location && location !== 'all') {
      events = events.filter((event) => event.location.toLowerCase() === location)
    }

    // Price filter
    const price = searchParams.get('price')
    if (price && price !== 'all') {
      events = events.filter((event) => {
        const lowestPrice = Math.min(...event.ticketTypes.map((t) => t.price))
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
        {/* Page Header with Breadcrumb */}
        <section className="border-b border-border bg-background py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="flex items-center gap-1 hover:text-foreground">
                <Home className="h-4 w-4" />
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">events</span>
            </nav>

            <div className="mt-4 flex items-center justify-between">
              <div>
                <h1 className="font-display text-3xl font-bold text-foreground">
                  Events
                </h1>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="hidden font-display text-primary sm:inline">BitBandy</span>
              </div>
            </div>
          </div>
        </section>

        {/* Browse Events Section */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Browse Events
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Discover upcoming experiences, workshops and more on Bitbandy.
                </p>
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{filteredEvents.length}</span> events found
              </div>
            </div>

            {/* Event Tabs */}
            <div className="mt-6 flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Show:</span>
              <div className="flex gap-2">
                <Button
                  variant={eventTab === 'upcoming' ? 'default' : 'outline'}
                  size="sm"
                  className={`rounded-full ${eventTab === 'upcoming' ? '' : 'bg-transparent'}`}
                  onClick={() => setEventTab('upcoming')}
                >
                  Upcoming Events
                </Button>
                <Button
                  variant={eventTab === 'past' ? 'default' : 'outline'}
                  size="sm"
                  className={`rounded-full ${eventTab === 'past' ? '' : 'bg-transparent'}`}
                  onClick={() => setEventTab('past')}
                >
                  Past Events
                </Button>
              </div>
            </div>

            <div className="mt-8 flex gap-8">
              {/* Events Grid */}
              <div className="flex-1">
                {filteredEvents.length > 0 ? (
                  <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {filteredEvents.map((event) => (
                      <EventCard
                        key={event.id}
                        event={event}
                        variant={viewMode === 'list' ? 'compact' : 'default'}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border bg-background py-16 text-center">
                    <Search className="h-12 w-12 text-muted-foreground/50" />
                    <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                      No events found
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      Try adjusting your search or filters to find what you are looking for.
                    </p>
                  </div>
                )}
              </div>

              {/* Desktop Filters Sidebar */}
              <aside className="hidden w-72 flex-shrink-0 lg:block">
                <div className="sticky top-24 rounded-lg border border-border bg-background p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Filters</h2>
                  </div>
                  <p className="mb-6 text-sm text-muted-foreground">
                    Refine your search
                    <br />
                    <span className="text-xs">Narrow results by date, price, location and more.</span>
                  </p>
                  <EventFilters />
                </div>
              </aside>
            </div>

            {/* Mobile Filter Button */}
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
                    <h2 className="mb-4 font-display text-lg font-semibold">Filters</h2>
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
