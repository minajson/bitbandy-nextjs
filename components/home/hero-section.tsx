'use client'

import React from "react"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search, MapPin, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { locations } from '@/lib/data'

export function HeroSection() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (searchQuery) params.set('search', searchQuery)
    if (selectedLocation) params.set('location', selectedLocation)
    router.push(`/events?${params.toString()}`)
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/20 py-20 sm:py-28 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            <span className="text-balance">Discover Amazing</span>
            <span className="mt-2 block text-primary">Events Near You</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Find and book tickets to the best concerts, festivals, sports events, and more. 
            Your next unforgettable experience is just a click away.
          </p>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="mt-10">
            <div className="flex flex-col gap-3 rounded-2xl bg-card p-3 shadow-lg sm:flex-row sm:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search events, artists, or venues..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border-0 bg-transparent pl-10 text-foreground placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              <div className="h-px w-full bg-border sm:h-8 sm:w-px" />
              <div className="relative sm:w-48">
                <MapPin className="absolute left-3 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger className="border-0 bg-transparent pl-10 focus:ring-0 focus:ring-offset-0">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    {locations.map((location) => (
                      <SelectItem key={location} value={location.toLowerCase()}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" size="lg" className="w-full sm:w-auto">
                Search Events
              </Button>
            </div>
          </form>

          {/* Quick Links */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <span className="text-sm text-muted-foreground">Popular:</span>
            <Button variant="outline" size="sm" asChild>
              <a href="/events?category=music">Music</a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="/events?category=food">Food & Drink</a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="/events?category=tech">Tech</a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="/events?category=sports">Sports</a>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-primary sm:text-4xl">500+</div>
            <div className="mt-1 text-sm text-muted-foreground">Events Monthly</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-primary sm:text-4xl">50K+</div>
            <div className="mt-1 text-sm text-muted-foreground">Happy Attendees</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-primary sm:text-4xl">100+</div>
            <div className="mt-1 text-sm text-muted-foreground">Trusted Organizers</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-primary sm:text-4xl">7</div>
            <div className="mt-1 text-sm text-muted-foreground">Cities Covered</div>
          </div>
        </div>
      </div>
    </section>
  )
}
