'use client'

import { use } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Calendar, MapPin, Clock, Users, Share2, Heart, ChevronLeft, Check, AlertCircle } from 'lucide-react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/seperator'
import { getEventBySlug, formatPrice, formatDate, formatTime } from '@/lib/data'

interface EventPageProps {
  params: Promise<{ slug: string }>
}

export default function EventDetailsPage({ params }: EventPageProps) {
  const { slug } = use(params)
  const event = getEventBySlug(slug)

  if (!event) {
    notFound()
  }

  const lowestPrice = Math.min(...event.ticketTypes.map((t) => t.price))
  const availableTickets = event.totalCapacity - event.ticketsSold
  const isAlmostSoldOut = availableTickets < 50 && availableTickets > 0

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/30 via-primary/10 to-accent/20 sm:h-80 lg:h-96">
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
            <div className="mx-auto max-w-7xl">
              <Link
                href="/events"
                className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
              >
                <ChevronLeft className="h-4 w-4" />
                Back to Events
              </Link>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Header */}
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="secondary" className="capitalize">{event.category}</Badge>
                    <Badge variant="outline" className="capitalize">{event.eventType} Event</Badge>
                    {isAlmostSoldOut && (
                      <Badge variant="destructive">Only {availableTickets} tickets left!</Badge>
                    )}
                  </div>

                  <h1 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
                    {event.title}
                  </h1>

                  <p className="mt-2 text-muted-foreground">
                    Organized by <span className="font-semibold text-foreground">{event.organizer}</span>
                  </p>
                </div>

                {/* Quick Info */}
                <div className="mt-6 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>{formatTime(event.startTime)} - {formatTime(event.endTime)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>{event.venue}, {event.city}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-5 w-5 text-primary" />
                    <span>{event.ticketsSold} attending</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-6 flex gap-3">
                  <Button variant="outline" size="icon" aria-label="Save event">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" aria-label="Share event">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>

                <Separator className="my-8" />

                {/* About */}
                <div>
                  <h2 className="font-display text-xl font-semibold text-foreground">About This Event</h2>
                  <div className="mt-4 whitespace-pre-line leading-relaxed text-muted-foreground">
                    {event.description}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mt-8">
                  <h2 className="font-display text-xl font-semibold text-foreground">Event Highlights</h2>
                  <div className="mt-4 grid gap-2 sm:grid-cols-2">
                    {event.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-green-600" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div className="mt-8">
                  <h2 className="font-display text-xl font-semibold text-foreground">Location</h2>
                  <Card className="mt-4">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="mt-1 h-5 w-5 text-primary" />
                        <div>
                          <p className="font-semibold text-foreground">{event.venue}</p>
                          <p className="text-muted-foreground">{event.address}</p>
                          <p className="text-muted-foreground">{event.city}, {event.state}</p>
                        </div>
                      </div>
                      <div className="mt-4 flex h-48 w-full items-center justify-center rounded-lg bg-muted">
                        <span className="text-muted-foreground">Map placeholder</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Terms */}
                <div className="mt-8">
                  <h2 className="font-display text-xl font-semibold text-foreground">Important Information</h2>
                  <Card className="mt-4">
                    <CardContent className="p-4">
                      <ul className="space-y-2">
                        {event.terms.map((term) => (
                          <li key={term} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600" />
                            {term}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Sidebar - Ticket Info */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <Card>
                    <CardContent className="p-6">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Starting from</p>
                        <p className="font-display text-3xl font-bold text-primary">
                          {lowestPrice === 0 ? 'Free' : formatPrice(lowestPrice)}
                        </p>
                      </div>

                      {availableTickets > 0 && (
                        <p className="mt-2 text-center text-sm text-muted-foreground">
                          {availableTickets} tickets remaining
                        </p>
                      )}

                      {/* Ticket Types List */}
                      <div className="mt-6 space-y-3">
                        {event.ticketTypes.map((ticket) => {
                          const remaining = ticket.quantity - ticket.sold
                          const isSoldOut = remaining <= 0
                          return (
                            <div key={ticket.id} className="rounded-lg border border-border p-4">
                              <div className="flex items-center justify-between">
                                <h3 className="font-semibold text-foreground">{ticket.name}</h3>
                                <span className="font-display font-bold text-primary">{formatPrice(ticket.price)}</span>
                              </div>
                              <p className="mt-1 text-xs text-muted-foreground">{ticket.description}</p>
                              <div className="mt-2 flex items-center justify-between text-xs">
                                <span className={isSoldOut ? 'text-destructive' : 'text-muted-foreground'}>
                                  {isSoldOut ? 'Sold Out' : `${remaining} left`}
                                </span>
                              </div>
                            </div>
                          )
                        })}
                      </div>

                      <Button className="mt-6 w-full" size="lg">
                        Attend Event →
                      </Button>

                      <Separator className="my-6" />

                      <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">{formatTime(event.startTime)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">{event.venue}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
