'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, Ticket, UserPlus } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: '/events', label: 'Events', icon: '🎫' },
    { href: '/about', label: 'About Us', icon: 'ℹ️' },
    { href: '/contact', label: 'Contact', icon: '📞' },
    { href: '/how-it-works', label: 'How it works', icon: '🎵' },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Ticket className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-display text-lg font-bold text-foreground">BitBandy</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              {link.href === '/events' && (
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                  <Ticket className="h-3 w-3" />
                </span>
              )}
              {link.href === '/about' && <span className="text-xs">ℹ️</span>}
              {link.href === '/contact' && <span className="text-xs">📞</span>}
              {link.href === '/how-it-works' && <span className="text-xs">🎵</span>}
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Button asChild className="rounded-full">
            <Link href="/register">
              <UserPlus className="mr-2 h-4 w-4" />
              Sign up
            </Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full bg-transparent">
            <Link href="/login">Sign in</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-border md:hidden">
          <nav className="flex flex-col px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium ${
                  isActive(link.href)
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="my-2 border-t border-border" />
            <Link
              href="/register"
              className="flex items-center gap-3 rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              <UserPlus className="h-4 w-4" />
              Sign up
            </Link>
            <Link
              href="/login"
              className="mt-2 flex items-center gap-3 rounded-lg border px-3 py-2 text-sm font-medium text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign in
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
