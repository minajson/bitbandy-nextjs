'use client'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Mail, Instagram, MessageSquare, Clock, Headphones, Check, ShieldCheck } from 'lucide-react'
import Link from 'next/link'

const supportChannels = [
  {
    icon: Mail,
    title: 'Email Support',
    responseTime: 'Within 24 hours',
    gradient: 'from-purple-500 to-purple-700',
    handle: 'bitbandyevents@gmail.com',
    description: 'For detailed inquiries, account issues, and official correspondence.',
    bestFor: ['Technical issues', 'Account problems', 'Legal matters', 'Business inquiries'],
    action: 'Send Email',
    actionHref: 'mailto:bitbandyevents@gmail.com',
  },
  {
    icon: Instagram,
    title: 'Instagram',
    responseTime: 'Within 12 hours',
    gradient: 'from-pink-500 via-red-500 to-orange-500',
    handle: '@bitbandy',
    description: 'For updates, community engagement, and quick questions.',
    bestFor: ['Event promotions', 'Community updates', 'Quick questions', 'Feature requests'],
    action: 'Visit Instagram',
    actionHref: 'https://instagram.com/bitbandy',
  },
  {
    icon: MessageSquare,
    title: 'Live Chat Bot',
    responseTime: 'Instant',
    gradient: 'from-cyan-500 to-pink-500',
    handle: 'Bottom-right corner',
    description: '24/7 automated assistance for common questions.',
    bestFor: ['FAQ answers', 'Quick troubleshooting', 'Platform guidance', 'Immediate help'],
    action: 'Open Chat',
    actionHref: '#chat',
  },
]

const whyNoForm = [
  'Faster response times',
  'Better tracking of your request',
  'Direct communication with support',
  'More accurate solutions',
]

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-primary py-16 sm:py-24">
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
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white">
                <Headphones className="h-4 w-4" />
                Support that actually responds
              </div>
              
              <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                We&apos;re Here to{' '}
                <span className="text-amber-400">Help</span>
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
                Reach us through email, Instagram, or our 24/7 chat bot. Pick what&apos;s fastest for your situation.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" variant="secondary" className="min-w-[180px] rounded-full">
                  <Link href="mailto:bitbandyevents@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Email Support
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="min-w-[180px] rounded-full border-white/30 bg-transparent text-white hover:bg-white/10">
                  <Link href="#channels">View All Channels</Link>
                </Button>
              </div>

              {/* Quick stats */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {'Typical response: < 24h'}
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4" />
                  Official support channels
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Chat bot: instant
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Contact Cards */}
        <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-3">
              {supportChannels.map((channel) => (
                <Card key={channel.title} className="border-0 bg-background shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${channel.gradient}`}>
                        <channel.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-foreground">{channel.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {channel.title === 'Email Support' && 'Official inquiries'}
                          {channel.title === 'Instagram' && 'Updates & community'}
                          {channel.title === 'Live Chat Bot' && 'Instant help'}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="font-medium text-primary">{channel.handle}</p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {channel.title === 'Email Support' && 'Best for account issues, receipts, compliance questions, and detailed troubleshooting.'}
                        {channel.title === 'Instagram' && 'Best for quick questions, announcements, and event highlights.'}
                        {channel.title === 'Live Chat Bot' && 'Get instant answers—click the chat icon in the bottom-right.'}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      Response: {channel.responseTime}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Support Channels Detail */}
        <section id="channels" className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">
                Choose Your Support Channel
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
                Different questions, different channels. Pick what matches your need and urgency.
              </p>
            </div>

            <div className="mt-12 space-y-6">
              {supportChannels.map((channel) => (
                <Card key={channel.title} className="overflow-hidden border-0 shadow-sm">
                  <div className="flex flex-col md:flex-row">
                    {/* Left colored section */}
                    <div className={`flex flex-col items-center justify-center bg-gradient-to-br ${channel.gradient} p-8 text-white md:w-56`}>
                      <channel.icon className="h-12 w-12" />
                      <h3 className="mt-4 text-center font-display text-xl font-bold">{channel.title}</h3>
                      <p className="mt-1 text-sm text-white/80">{channel.responseTime}</p>
                    </div>

                    {/* Right content section */}
                    <CardContent className="flex flex-1 flex-col justify-center p-6 md:flex-row md:items-center md:justify-between md:p-8">
                      <div className="flex-1">
                        <p className="font-semibold text-foreground">{channel.handle}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{channel.description}</p>
                        
                        <div className="mt-4">
                          <p className="text-sm font-medium text-foreground">Best For</p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {channel.bestFor.map((item) => (
                              <Badge key={item} variant="secondary" className="rounded-full">
                                {item}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 flex flex-col items-end gap-2 md:mt-0 md:ml-8">
                        <Button asChild className="rounded-full bg-primary hover:bg-primary/90">
                          <Link href={channel.actionHref}>{channel.action}</Link>
                        </Button>
                        <p className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {channel.responseTime}
                        </p>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why We Don't Use Contact Forms */}
        <section className="bg-muted/30 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Card className="border-0 bg-background">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">
                      Why We Don&apos;t Use Contact Forms
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      Direct channels reduce delays and help us respond with full context. You&apos;ll get:
                    </p>
                    <div className="mt-4 grid gap-2 sm:grid-cols-2">
                      {whyNoForm.map((reason) => (
                        <div key={reason} className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4 text-primary" />
                          <span>{reason}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
                Quick answers to common questions
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {[
                {
                  question: 'How do I get a refund?',
                  answer: 'Refund eligibility depends on the event organizer\'s policy. Contact us via email with your ticket details.',
                },
                {
                  question: 'How do I transfer my ticket?',
                  answer: 'Go to your dashboard, select the ticket, and click "Transfer". Enter the recipient\'s email address.',
                },
                {
                  question: 'Where can I see my tickets?',
                  answer: 'All your tickets are available in your dashboard under "My Tickets". You can also access them from your email.',
                },
                {
                  question: 'How do I become an organizer?',
                  answer: 'Sign up for an organizer account from the "Create Event" page. Verification takes 24-48 hours.',
                },
              ].map((faq) => (
                <Card key={faq.question} className="border-0 bg-muted/30">
                  <CardContent className="p-6">
                    <h3 className="font-display font-semibold text-foreground">{faq.question}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
