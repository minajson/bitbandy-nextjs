import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Monitor, Ticket, Calendar, Check, Sparkles } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const eventTypes = [
  {
    icon: Monitor,
    title: 'Free Events',
    description: 'Host community events, workshops, and meetups at zero cost. Perfect for building your audience and brand awareness.',
    features: ['Unlimited free tickets', 'No platform fees'],
    color: 'bg-primary',
  },
  {
    icon: Ticket,
    title: 'Paid Events',
    description: 'Monetize your events with flexible pricing. We only earn when you earn—competitive rates per currency.',
    features: ['Multiple payment methods', 'Instant payouts', 'Revenue tracking'],
    color: 'bg-primary',
  },
  {
    icon: Calendar,
    title: 'Recurring Events',
    description: 'Manage multiple dates effortlessly. One page, multiple sessions—attendees pick their preferred date at checkout.',
    features: ['Single ticket page', 'Flexible scheduling'],
    color: 'bg-primary',
  },
]

const features = [
  {
    title: 'Event Creation Studio',
    description: 'Design and launch professional events with our intuitive dashboard',
    image: '/images/17702355785445377006752173699660.jpg',
  },
  {
    title: 'Smart Ticketing',
    description: 'Sell, manage, and track tickets with powerful analytics tools',
    image: '/images/17702354279117525161412896974984.jpg',
  },
]

export default function HowItWorksPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-primary py-20 sm:py-28">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
              backgroundSize: '32px 32px',
            }} />
          </div>
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-400/20 px-4 py-2 text-sm font-medium text-amber-300">
                <Sparkles className="h-4 w-4" />
                The Complete Event Platform
              </div>
              
              <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Create Unforgettable
                <br />
                Events in{' '}
                <span className="text-amber-400">Minutes</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
                Everything you need to plan, promote, and profit from your events—all in one powerful platform
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" variant="secondary" className="min-w-[180px] rounded-full">
                  <Link href="/register">Get Started Free →</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="min-w-[180px] rounded-full border-white/30 bg-transparent text-white hover:bg-white/10">
                  <Link href="#how-it-works">See How It Works</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="relative -mt-16 pb-16 sm:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2">
              {features.map((feature) => (
                <Card key={feature.title} className="overflow-hidden border-0 shadow-lg">
                  <div className="relative h-48 w-full">
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-display text-xl font-bold text-white">{feature.title}</h3>
                      <p className="mt-1 text-sm text-white/80">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Event Types Section */}
        <section id="how-it-works" className="bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">
                Create & Manage Any Event Type
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
                From intimate gatherings to massive festivals, our platform adapts to your needs
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {eventTypes.map((type) => (
                <Card key={type.title} className="border-0 bg-background shadow-sm">
                  <CardContent className="p-8">
                    <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl ${type.color}`}>
                      <type.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-primary">{type.title}</h3>
                    <p className="mt-3 text-muted-foreground">{type.description}</p>
                    
                    {/* Placeholder for screenshot */}
                    <div className="mt-6 h-40 rounded-lg bg-muted/50" />
                    
                    <ul className="mt-6 space-y-2">
                      {type.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                How It Works for Attendees
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
                Discover and attend events in just a few simple steps
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-4">
              {[
                { step: 1, title: 'Browse Events', description: 'Explore upcoming events in your city or online' },
                { step: 2, title: 'Select Tickets', description: 'Choose ticket type and quantity' },
                { step: 3, title: 'Secure Payment', description: 'Pay with card, bank, or mobile money' },
                { step: 4, title: 'Get Your Ticket', description: 'Receive your e-ticket instantly via email' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                    {item.step}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Organizer Benefits */}
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                  Everything Organizers Need
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Powerful tools to create, promote, and manage your events with ease.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    'Custom event pages with your branding',
                    'Multiple ticket types and pricing tiers',
                    'Real-time sales analytics and reports',
                    'Attendee management and check-in tools',
                    'Promotional tools and discount codes',
                    'Instant payouts to your bank account',
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button asChild size="lg" className="mt-8 rounded-full">
                  <Link href="/contact">Get in Touch →</Link>
                </Button>
              </div>

              <div className="relative">
                <div className="aspect-video overflow-hidden rounded-2xl bg-muted">
                  <Image
                    src="/images/17702356056605444737046462817995.jpg"
                    alt="Organizer dashboard"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Info */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                Simple, Transparent Pricing
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
                No hidden fees. We only earn when you earn.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <Card className="border-0 bg-muted/30">
                <CardContent className="p-8 text-center">
                  <h3 className="font-display text-2xl font-bold text-foreground">Free Events</h3>
                  <div className="mt-4">
                    <span className="font-display text-5xl font-bold text-primary">0%</span>
                    <span className="text-muted-foreground"> platform fee</span>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    Perfect for community events, workshops, and meetups
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-primary text-primary-foreground">
                <CardContent className="p-8 text-center">
                  <h3 className="font-display text-2xl font-bold">Paid Events</h3>
                  <div className="mt-4">
                    <span className="font-display text-5xl font-bold">5%</span>
                    <span className="text-primary-foreground/80"> + payment fees</span>
                  </div>
                  <p className="mt-4 text-primary-foreground/80">
                    Competitive rates for professional event organizers
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-3xl bg-primary px-6 py-12 text-center sm:px-12 sm:py-16">
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
                Ready to Create Your Event?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/80">
                Join thousands of organizers who trust Bitbandy to power their events.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" variant="secondary" className="min-w-[180px] rounded-full">
                  <Link href="/register">Get Started Free</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="min-w-[180px] rounded-full border-white/30 bg-transparent text-white hover:bg-white/10">
                  <Link href="/events">Browse Events</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
