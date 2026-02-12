import Link from 'next/link'
import { Calendar, MapPin, User, Clock, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { Event } from '@/lib/types'
import { formatPrice, formatDate } from '@/lib/data'

interface EventCardProps {
  event: Event
  variant?: 'default' | 'compact'
}

export function EventCard({ event, variant = 'default' }: EventCardProps) {
  const availableTickets = event.totalCapacity - event.ticketsSold
  const lowestPrice = Math.min(...event.ticketTypes.map((t) => t.price))
  
  // Calculate time until event
  const eventDate = new Date(event.date)
  const now = new Date()
  const diffTime = eventDate.getTime() - now.getTime()
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  
  const isStarted = diffDays <= 0
  const timeUntil = isStarted 
    ? 'Event started' 
    : diffDays === 1 
      ? '1d remaining' 
      : `${diffDays}d ${Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}h remaining`

  if (variant === 'compact') {
    return (
      <Link href={`/events/${event.slug}`}>
        <Card className="group overflow-hidden transition-all hover:shadow-lg">
          <div className="flex gap-4 p-4">
            <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-muted">
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                <Calendar className="h-8 w-8 text-primary/60" />
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-between">
              <div>
                <h3 className="line-clamp-1 font-semibold text-foreground group-hover:text-primary">
                  {event.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {formatDate(event.date)}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{event.location}</span>
                <span className="font-semibold text-primary">
                  {lowestPrice === 0 ? 'Free' : `From ${formatPrice(lowestPrice)}`}
                </span>
              </div>
            </div>
          </div>
        </Card>
      </Link>
    )
  }

  return (
    <Card className="group h-full overflow-hidden rounded-xl border-2 border-border/50 transition-all hover:border-primary/30 hover:shadow-lg">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/30 via-primary/20 to-accent/30">
        {/* Top badges row */}
        <div className="absolute left-3 right-3 top-3 flex items-start justify-between">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="bg-white/90 text-xs font-medium text-foreground">
              <Calendar className="mr-1 h-3 w-3" />
              {new Date(event.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
            </Badge>
          </div>
          <Badge 
            variant={isStarted ? "default" : "secondary"} 
            className={`text-xs ${isStarted ? 'bg-green-500 text-white' : 'bg-white/90 text-foreground'}`}
          >
            <Clock className="mr-1 h-3 w-3" />
            {timeUntil}
          </Badge>
        </div>

        {/* Event type badge */}
        <Badge className="absolute bottom-3 left-3 bg-primary/90 text-xs uppercase">
          Physical
        </Badge>

        {/* Event image placeholder with gradient */}
        <div className="flex h-full w-full items-center justify-center">
          <div className="text-center">
            <Calendar className="mx-auto h-16 w-16 text-white/40" />
          </div>
        </div>

        {/* Organizer badge */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
          <Badge className="bg-primary/90 text-xs uppercase">
            Physical
          </Badge>
          <div className="flex items-center gap-1 rounded-full bg-black/50 px-2 py-1 text-xs text-white">
            <User className="h-3 w-3" />
            <span className="max-w-[100px] truncate">{event.organizer}</span>
          </div>
        </div>
      </div>

      <CardContent className="p-4">
        {/* Title */}
        <h3 className="line-clamp-2 font-display text-base font-bold text-foreground group-hover:text-primary">
          {event.title}
        </h3>

        {/* Location */}
        <div className="mt-2 flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 text-primary" />
          <span className="truncate">{event.venue}, {event.location}</span>
        </div>

        {/* CTA Button */}
        <Button asChild className="mt-4 w-full rounded-full">
          <Link href={`/events/${event.slug}`}>
            Attend Event
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
