'use client'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Monitor,
  Ticket,
  Calendar,
  Sparkles,
  Users,
  ShieldCheck,
  BarChart3,
  Search,
  ShoppingCart,
  Settings,
  TicketCheck,
  Wallet,
  Bell,
  ArrowLeftRight,
  Rocket,
  PartyPopper,
  Store,
  ChevronDown,
  Eye,
  PlusCircle,
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

/* ───────────────── DATA ───────────────── */

const features = [
  {
    title: 'Event Creation Studio',
    description: 'Design and launch professional events with our intuitive dashboard',
    image: '/placeholder.svg',
  },
  {
    title: 'Smart Ticketing',
    description: 'Sell, manage, and track tickets with powerful analytics tools',
    image: '/placeholder.svg',
  },
]

const eventTypes = [
  {
    icon: Monitor,
    title: 'Free Events',
    description:
      'Host community events, workshops, and meetups at zero cost. Perfect for building your audience and brand awareness.',
    features: ['Unlimited free tickets', 'No platform fees', 'Full analytics dashboard'],
  },
  {
    icon: Ticket,
    title: 'Paid Events',
    description:
      'Monetize your events with flexible pricing. We only earn when you earn\u2014competitive rates per currency.',
    features: [
      'Multiple payment methods',
      'Instant payouts',
      'Revenue tracking',
      '95% revenue to organizers, 5% platform fee',
    ],
  },
  {
    icon: Calendar,
    title: 'Recurring Events',
    description:
      'Manage multiple dates effortlessly. One page, multiple sessions\u2014attendees pick their preferred date at checkout.',
    features: ['Single ticket page', 'Flexible scheduling', 'Save time & effort'],
  },
]

interface RoleSection {
  label: string
  icon: React.ElementType
  color: string
  screenshots: { title: string; image: string }[]
  accordions: { icon: React.ElementType; emoji: string; title: string; content: string }[]
}

const roleSections: RoleSection[] = [
  {
    label: 'For Event Visitors',
    icon: Users,
    color: 'bg-primary',
    screenshots: [
      { title: 'Browse & Discover', image: '/placeholder.svg' },
      { title: 'Easy Checkout', image: '/placeholder.svg' },
    ],
    accordions: [
      {
        icon: Search,
        emoji: '\uD83D\uDD0D',
        title: 'Discovering Events Made Simple',
        content:
          'Browse events by category, location, or date. Use our smart search and filters to find exactly what you are looking for. View event details, photos, and ticket options all in one place.',
      },
      {
        icon: ShoppingCart,
        emoji: '\uD83D\uDED2',
        title: 'Guest Checkout Experience',
        content:
          'Purchase tickets without creating an account. Quick and easy checkout with multiple payment options including card, bank transfer, USSD, and mobile money.',
      },
    ],
  },
  {
    label: 'For Registered Users',
    icon: ShieldCheck,
    color: 'bg-primary',
    screenshots: [
      { title: 'Your Personal Dashboard', image: '/placeholder.svg' },
      { title: 'Manage Your Tickets', image: '/placeholder.svg' },
    ],
    accordions: [
      {
        icon: Rocket,
        emoji: '\uD83D\uDE80',
        title: 'Getting Started with Your Account',
        content:
          'Create your account in seconds and unlock the full Bitbandy experience. Access your personal dashboard, manage tickets, and track your event history.',
      },
      {
        icon: TicketCheck,
        emoji: '\uD83C\uDFAB',
        title: 'Advanced Ticket Management',
        content:
          'View, transfer, or resell your tickets. Access QR codes for entry, download PDF tickets, and manage all your bookings in one place.',
      },
      {
        icon: Wallet,
        emoji: '\uD83D\uDCB0',
        title: 'Digital Wallet Features',
        content:
          'Store funds in your Bitbandy wallet for quick checkout. Receive refunds, transfer funds, and manage your balance with ease.',
      },
      {
        icon: Store,
        emoji: '\uD83D\uDED2',
        title: 'E-commerce and Merchandise',
        content:
          'Shop event merchandise directly from the platform. Browse exclusive items, manage orders, and get deliveries to your doorstep.',
      },
      {
        icon: Bell,
        emoji: '\uD83D\uDD14',
        title: 'Real-time Notifications',
        content:
          'Stay updated with event reminders, ticket confirmations, and important announcements. Never miss an event you care about.',
      },
      {
        icon: ArrowLeftRight,
        emoji: '\uD83D\uDCC8',
        title: 'Marketplace and Resale',
        content:
          'Safely resell tickets you can no longer use or buy from verified sellers. Our secure marketplace ensures fair pricing and authentic tickets.',
      },
    ],
  },
  {
    label: 'For Event Organizers',
    icon: BarChart3,
    color: 'bg-primary',
    screenshots: [
      { title: 'Organizer Dashboard', image: '/placeholder.svg' },
      { title: 'Event Management', image: '/placeholder.svg' },
    ],
    accordions: [
      {
        icon: Rocket,
        emoji: '\uD83D\uDE80',
        title: 'Getting Started as an Organizer',
        content:
          'Set up your organizer profile, verify your account, and start creating events in minutes. Our step-by-step guide walks you through the entire process.',
      },
      {
        icon: PartyPopper,
        emoji: '\uD83C\uDF89',
        title: 'Creating and Managing Events',
        content:
          'Build beautiful event pages with our drag-and-drop editor. Add multiple ticket types, set pricing, manage capacity, and publish your events instantly.',
      },
      {
        icon: TicketCheck,
        emoji: '\uD83C\uDFAB',
        title: 'Ticket Types and Purchases',
        content:
          'Create free, paid, and VIP ticket categories. Set early bird pricing, group discounts, and promotional codes to maximize your sales.',
      },
      {
        icon: Store,
        emoji: '\uD83D\uDED2',
        title: 'Merchandise and E-commerce',
        content:
          'Sell branded merchandise alongside your events. Manage inventory, process orders, and boost your revenue with integrated e-commerce tools.',
      },
      {
        icon: BarChart3,
        emoji: '\uD83D\uDCCA',
        title: 'Analytics and Insights',
        content:
          'Track ticket sales, revenue, and attendee demographics in real-time. Export reports and use data-driven insights to grow your events.',
      },
      {
        icon: Wallet,
        emoji: '\uD83D\uDCB0',
        title: 'Wallet and Payouts',
        content:
          'Receive payments directly to your bank account or Bitbandy wallet. Track your earnings, manage payouts, and access detailed financial reports.',
      },
      {
        icon: ShieldCheck,
        emoji: '\uD83D\uDEE1\uFE0F',
        title: 'Security and Profile Management',
        content:
          'Manage your organizer profile, team members, and security settings. Enable two-factor authentication and control access permissions.',
      },
    ],
  },
]

/* ───────────────── ACCORDION ITEM ───────────────── */

function AccordionItem({
  icon: Icon,
  emoji,
  title,
  content,
}: {
  icon: React.ElementType
  emoji: string
  title: string
  content: string
}) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-2xl border border-border bg-background transition-colors hover:bg-muted/30">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6"
      >
        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <span className="flex-1 text-base font-semibold text-foreground sm:text-lg">
          {emoji} {title}
        </span>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 pl-20 text-sm leading-relaxed text-muted-foreground sm:px-6 sm:pb-6 sm:pl-[5.5rem] sm:text-base">
          {content}
        </div>
      )}
    </div>
  )
}

/* ───────────────── PAGE ───────────────── */

export default function HowItWorksPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-primary py-20 sm:py-28">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
                backgroundSize: '32px 32px',
              }}
            />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-400/20 px-4 py-2 text-sm font-medium text-amber-300">
                <Sparkles className="h-4 w-4" />
                The Complete Event Platform
              </div>

              <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Create Unforgettable
                <br />
                Events in <span className="text-amber-400">Minutes</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
                Everything you need to plan, promote, and profit from your events — all in one
                powerful platform
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="min-w-[180px] rounded-full"
                >
                  <Link href="/register">{'Get Started Free \u2192'}</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="min-w-[180px] rounded-full border-white/30 bg-transparent text-white hover:bg-white/10"
                >
                  <Link href="#how-it-works">See How It Works</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Feature Cards (Event Creation Studio / Smart Ticketing) ── */}
        <section className="relative -mt-16 pb-16 sm:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2">
              {features.map((f) => (
                <Card key={f.title} className="overflow-hidden border-0 shadow-lg">
                  <div className="relative h-56 w-full sm:h-64">
                    <Image
                      src={f.image || '/placeholder.svg'}
                      alt={f.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-display text-xl font-bold text-white">{f.title}</h3>
                      <p className="mt-1 text-sm text-white/80">{f.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── "How Bitbandy Works" Intro ── */}
        <section id="how-it-works" className="pb-4 pt-8 text-center sm:pt-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
              How Bitbandy Works
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              A complete guide to making the most of our platform, whether you{"'"}re attending or
              hosting events
            </p>
          </div>
        </section>

        {/* ── Role Sections (Visitors / Registered / Organizers) ── */}
        {roleSections.map((section) => (
          <section key={section.label} className="py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Label pill with line */}
              <div className="mb-10 flex items-center gap-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-md sm:text-lg">
                  <section.icon className="h-5 w-5" />
                  {section.label}
                </div>
                <div className="hidden h-[3px] flex-1 rounded-full bg-primary/60 sm:block" />
              </div>

              {/* Two screenshot cards */}
              <div className="mb-10 grid gap-6 md:grid-cols-2">
                {section.screenshots.map((ss) => (
                  <Card key={ss.title} className="overflow-hidden border-0 shadow-lg">
                    <div className="relative h-52 w-full bg-muted sm:h-64">
                      <Image
                        src={ss.image || '/placeholder.svg'}
                        alt={ss.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    </div>
                    <div className="bg-foreground px-5 py-3 text-sm font-semibold text-background sm:text-base">
                      {ss.title}
                    </div>
                  </Card>
                ))}
              </div>

              {/* Accordions */}
              <div className="space-y-3">
                {section.accordions.map((a) => (
                  <AccordionItem key={a.title} icon={a.icon} emoji={a.emoji} title={a.title} content={a.content} />
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* ── Create & Manage Any Event Type ── */}
        <section className="bg-muted/30 py-16 sm:py-24">
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
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary">
                      <type.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground">{type.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {type.description}
                    </p>

                    {/* placeholder screenshot area */}
                    <div className="mt-6 h-40 overflow-hidden rounded-lg bg-muted/50" />

                    <ul className="mt-6 space-y-2">
                      {type.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2 text-sm">
                          <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                          <span className="text-muted-foreground">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
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
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="min-w-[180px] rounded-full"
                >
                  <Link href="/register">Get Started Free</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="min-w-[180px] rounded-full border-white/30 bg-transparent text-white hover:bg-white/10"
                >
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
