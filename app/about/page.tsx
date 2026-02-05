import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Trophy, Target, Heart, Users, Lightbulb, Globe } from 'lucide-react'
import Link from 'next/link'

const stats = [
  { value: '10K+', label: 'Events Hosted' },
  { value: '500K+', label: 'Tickets Sold' },
  { value: '2K+', label: 'Organizers' },
  { value: '50+', label: 'Cities Nationwide' },
]

const values = [
  {
    icon: Heart,
    title: 'Community First',
    description: 'We believe in the power of bringing people together through memorable experiences.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Constantly improving our platform to make event management and ticketing seamless.',
  },
  {
    icon: Globe,
    title: 'Accessibility',
    description: 'Making events accessible to everyone across Africa, regardless of location.',
  },
]

const timeline = [
  {
    year: '2020',
    title: 'The Beginning',
    description: 'Bitbandy was founded with a vision to revolutionize event ticketing in Nigeria.',
  },
  {
    year: '2021',
    title: 'First Milestone',
    description: 'Reached 10,000 tickets sold and partnered with 100+ event organizers.',
  },
  {
    year: '2022',
    title: 'Expansion',
    description: 'Expanded to 10 major cities and launched our mobile app.',
  },
  {
    year: '2023',
    title: 'Going Pan-African',
    description: 'Extended operations to Ghana and Kenya, serving organizers across Africa.',
  },
  {
    year: '2024',
    title: 'Industry Leader',
    description: 'Became the #1 event ticketing platform in Nigeria with 500K+ tickets sold.',
  },
]

const team = [
  {
    name: 'Chidi Okonkwo',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'Amara Nwosu',
    role: 'Chief Technology Officer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'Emeka Adeyemi',
    role: 'Head of Operations',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'Ngozi Eze',
    role: 'Head of Partnerships',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
  },
]

export default function AboutPage() {
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
                <Trophy className="h-4 w-4" />
                #1 Event Platform in Nigeria
              </div>
              
              <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Redefining{' '}
                <span className="text-amber-400">Event</span>
                <br />
                Experiences Across
                <br />
                Africa
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
                Bitbandy is Africa&apos;s premier event management platform, blending cutting-edge technology with deep cultural understanding to transform how events are created, managed, and experienced.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" variant="secondary" className="min-w-[180px] rounded-full">
                  <Link href="/events">Start Your Journey →</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="min-w-[180px] rounded-full border-white/30 bg-transparent text-white hover:bg-white/10">
                  <Link href="/events">Explore Categories</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-b border-border bg-muted/30 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-3xl font-bold text-primary sm:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Journey Timeline */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                Our Journey
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
                From a small startup to Africa&apos;s leading event platform
              </p>
            </div>

            <div className="relative mt-12">
              {/* Timeline line */}
              <div className="absolute left-1/2 hidden h-full w-0.5 -translate-x-1/2 bg-border md:block" />
              
              <div className="space-y-8 md:space-y-0">
                {timeline.map((item, index) => (
                  <div
                    key={item.year}
                    className={`relative flex flex-col md:flex-row md:items-center ${
                      index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                    }`}
                  >
                    {/* Year badge */}
                    <div className="absolute left-1/2 hidden h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground md:flex">
                      {item.year}
                    </div>
                    
                    <Card className={`relative border-0 bg-muted/50 md:w-[45%] ${index % 2 === 0 ? '' : ''}`}>
                      <CardContent className="p-6">
                        <div className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary md:hidden">
                          {item.year}
                        </div>
                        <h3 className="font-display text-lg font-semibold text-foreground">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-0 bg-primary text-primary-foreground">
                <CardContent className="p-8">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white/10">
                    <Target className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-2xl font-bold">Our Mission</h3>
                  <p className="mt-4 text-primary-foreground/80">
                    To democratize event experiences across Africa by providing cutting-edge technology that empowers organizers and delights attendees, making memorable moments accessible to everyone.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-background shadow-lg">
                <CardContent className="p-8">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <Lightbulb className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground">Our Vision</h3>
                  <p className="mt-4 text-muted-foreground">
                    To become the most trusted and innovative event platform in Africa, connecting millions of people through unforgettable experiences while supporting local economies and communities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                Our Values
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              {values.map((value) => (
                <Card key={value.title} className="border-0 bg-muted/30 text-center">
                  <CardContent className="p-8">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                Meet Our Team
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
                The passionate people behind Bitbandy
              </p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member) => (
                <Card key={member.name} className="border-0 bg-background text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-3xl bg-primary px-6 py-12 text-center sm:px-12 sm:py-16">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h2 className="mt-6 font-display text-3xl font-bold text-white sm:text-4xl">
                Join the Bitbandy Community
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/80">
                Whether you&apos;re an event organizer or an attendee, there&apos;s a place for you in our growing community.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" variant="secondary" className="min-w-[180px] rounded-full">
                  <Link href="/register">Create Account</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="min-w-[180px] rounded-full border-white/30 bg-transparent text-white hover:bg-white/10">
                  <Link href="/contact">Contact Us</Link>
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
