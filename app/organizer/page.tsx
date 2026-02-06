import Link from 'next/link'
import { Ticket, DollarSign, Calendar, TrendingUp, ArrowUpRight, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { mockEvents, formatPrice, formatDate } from '@/lib/data'

// Mock organizer data
const stats = {
  totalTicketsSold: 1245,
  totalRevenue: 8750000,
  activeEvents: 3,
  upcomingEvents: 5,
}

const recentSales = [
  { name: 'John Doe', tickets: '2x Regular', amount: 10000, time: '2 hours ago' },
  { name: 'Jane Smith', tickets: '1x VIP', amount: 15000, time: '5 hours ago' },
  { name: 'Mike Johnson', tickets: '3x Regular', amount: 15000, time: '1 day ago' },
  { name: 'Sarah Williams', tickets: '1x Table', amount: 100000, time: '2 days ago' },
]

const organizerEvents = mockEvents.slice(0, 3)

export default function OrganizerDashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            Organizer Dashboard
          </h1>
          <p className="mt-1 text-muted-foreground">
            Welcome back! Here is an overview of your events.
          </p>
        </div>
        <Button asChild>
          <Link href="/organizer/create">Create New Event</Link>
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Tickets Sold
            </CardTitle>
            <Ticket className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stats.totalTicketsSold.toLocaleString()}</div>
            <p className="flex items-center gap-1 text-xs text-green-600">
              <TrendingUp className="h-3 w-3" />
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Revenue
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{formatPrice(stats.totalRevenue)}</div>
            <p className="flex items-center gap-1 text-xs text-green-600">
              <TrendingUp className="h-3 w-3" />
              +8% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Active Events
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stats.activeEvents}</div>
            <p className="text-xs text-muted-foreground">Currently selling tickets</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Upcoming Events
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stats.upcomingEvents}</div>
            <p className="text-xs text-muted-foreground">In the next 30 days</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* My Events */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>My Events</CardTitle>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/organizer/events">
                View All
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {organizerEvents.map((event) => {
                const ticketsSold = event.ticketsSold
                const capacity = event.totalCapacity
                const percentage = Math.round((ticketsSold / capacity) * 100)

                return (
                  <div key={event.id} className="flex items-center gap-4">
                    <div className="h-12 w-12 flex-shrink-0 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20" />
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <Link href={`/events/${event.slug}`} className="font-medium text-foreground hover:text-primary">
                          {event.title}
                        </Link>
                        <Badge variant="secondary">{percentage}%</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{formatDate(event.date)}</span>
                        <span>{ticketsSold} / {capacity} sold</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full bg-primary transition-all"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Recent Sales */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Sales</CardTitle>
            <Button variant="ghost" size="sm">
              Export
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentSales.map((sale, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-medium text-foreground">
                      {sale.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{sale.name}</p>
                      <p className="text-sm text-muted-foreground">{sale.tickets}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-foreground">{formatPrice(sale.amount)}</p>
                    <p className="text-sm text-muted-foreground">{sale.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats for Top Event */}
      <Card>
        <CardHeader>
          <CardTitle>Top Performing Event</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
            <div className="h-32 w-full flex-shrink-0 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 lg:w-48" />
            <div className="flex-1 space-y-4">
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {organizerEvents[0].title}
                </h3>
                <p className="text-muted-foreground">{formatDate(organizerEvents[0].date)}</p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-2xl font-bold text-primary">{organizerEvents[0].ticketsSold}</p>
                  <p className="text-sm text-muted-foreground">Tickets Sold</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">{formatPrice(1850000)}</p>
                  <p className="text-sm text-muted-foreground">Revenue</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">14</p>
                  <p className="text-sm text-muted-foreground">Days Left</p>
                </div>
              </div>
            </div>
            <div className="flex gap-2 lg:flex-col">
              <Button variant="outline" size="sm" asChild>
                <Link href={`/events/${organizerEvents[0].slug}`}>
                  <Eye className="mr-2 h-4 w-4" />
                  View
                </Link>
              </Button>
              <Button size="sm">Manage</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
