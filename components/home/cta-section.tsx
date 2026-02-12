import Link from 'next/link'
import { ArrowRight, Calendar, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 sm:py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-white/5" />
        <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-white/5" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold text-primary-foreground sm:text-4xl">
              <span className="text-balance">Ready to Host Your Own Event?</span>
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Join thousands of organizers who trust Bitbandy to sell tickets and manage their events. 
              Get started in minutes with our easy-to-use platform.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/register">
                  Start Creating Events
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent" asChild>
                <Link href="/how-it-works">Learn More</Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl bg-white/10 p-6">
              <Calendar className="h-10 w-10 text-primary-foreground" />
              <h3 className="mt-4 font-display text-xl font-semibold text-primary-foreground">Easy Event Setup</h3>
              <p className="mt-2 text-primary-foreground/80">
                Create your event page in minutes with our intuitive event builder.
              </p>
            </div>
            <div className="rounded-xl bg-white/10 p-6">
              <Users className="h-10 w-10 text-primary-foreground" />
              <h3 className="mt-4 font-display text-xl font-semibold text-primary-foreground">Reach More Attendees</h3>
              <p className="mt-2 text-primary-foreground/80">
                Get discovered by thousands of event-goers looking for experiences like yours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}