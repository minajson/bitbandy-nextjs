import Link from 'next/link'
import { Ticket, Instagram, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border bg-gradient-to-b from-muted/30 to-muted/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Ticket className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-display text-lg font-bold text-foreground">BitBandy</span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Bitbandy is an event ticketing platform for memorable experiences in Nigeria. Easily host events, sell tickets, transfer/resell tickets, and manage merchandise.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">
                Support:{' '}
                <a href="mailto:bitbandyevents@gmail.com" className="text-primary hover:underline">
                  bitbandyevents@gmail.com
                </a>
              </p>
              <div className="flex items-center gap-3">
                <a href="mailto:bitbandyevents@gmail.com" className="text-muted-foreground transition-colors hover:text-primary" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
                <a href="https://instagram.com/bitbandy" className="text-muted-foreground transition-colors hover:text-primary" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground transition-colors hover:text-primary">About Us</Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-sm text-muted-foreground transition-colors hover:text-primary">How it Works</Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground transition-colors hover:text-primary">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/events" className="text-sm text-muted-foreground transition-colors hover:text-primary">Browse Events</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground transition-colors hover:text-primary">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground transition-colors hover:text-primary">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/refund" className="text-sm text-muted-foreground transition-colors hover:text-primary">Refund Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Bitbandy Events. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
