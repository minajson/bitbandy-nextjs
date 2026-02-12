'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/seperator'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { categories, locations } from '@/lib/data'

interface EventFiltersProps {
  isMobile?: boolean
  onClose?: () => void
}

export function EventFilters({ isMobile, onClose }: EventFiltersProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const currentCategory = searchParams.get('category') || 'all'
  const currentLocation = searchParams.get('location') || 'all'

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value === 'all') {
      params.delete(key)
    } else {
      params.set(key, value)
    }
    router.push(`/events?${params.toString()}`)
  }

  const clearFilters = () => {
    router.push('/events')
    onClose?.()
  }

  const hasActiveFilters = currentCategory !== 'all' || currentLocation !== 'all'

  return (
    <div className="space-y-6">
      {/* Mobile Header */}
      {isMobile && (
        <div className="flex items-center justify-between">
          <h2 className="font-display text-lg font-semibold">Filters</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
      )}

      {/* Event Name */}
      <div>
        <Label className="mb-2 block text-sm font-medium text-foreground">Event Name</Label>
        <Input 
          placeholder="Search by name..."
          className="w-full"
        />
      </div>

      <Separator />

      {/* Event Type / Category */}
      <div>
        <Label className="mb-2 block text-sm font-medium text-foreground">Event Type</Label>
        <Select value={currentCategory} onValueChange={(value) => updateFilter('category', value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category.id} value={category.id}>
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Separator />

      {/* Location */}
      <div>
        <Label className="mb-2 block text-sm font-medium text-foreground">Location</Label>
        <Select value={currentLocation} onValueChange={(value) => updateFilter('location', value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select location" />
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

      <Separator />

      {/* Ticket Availability */}
      <div>
        <Label className="mb-2 block text-sm font-medium text-foreground">Ticket Availability</Label>
        <Select defaultValue="all">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select availability" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Events</SelectItem>
            <SelectItem value="available">Tickets Available</SelectItem>
            <SelectItem value="sold-out">Sold Out</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Separator />

      {/* Ticket Price Range */}
      <div>
        <Label className="mb-2 block text-sm font-medium text-foreground">Ticket Price Range (N)</Label>
        <div className="mt-4 px-2">
          <Slider
            defaultValue={[0, 50000]}
            max={100000}
            step={1000}
            className="w-full"
          />
          <div className="mt-2 flex justify-between text-xs text-muted-foreground">
            <span>N0</span>
            <span>N100,000+</span>
          </div>
        </div>
      </div>

      <Separator />

      {/* Start Date Range */}
      <div>
        <Label className="mb-2 block text-sm font-medium text-foreground">Start Date Range</Label>
        <Select defaultValue="all">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select date range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Dates</SelectItem>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="this-week">This Week</SelectItem>
            <SelectItem value="this-month">This Month</SelectItem>
            <SelectItem value="next-month">Next Month</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Separator />

      {/* Event Duration */}
      <div>
        <Label className="mb-2 block text-sm font-medium text-foreground">Event Duration</Label>
        <Select defaultValue="all">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select duration" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Any Duration</SelectItem>
            <SelectItem value="short">Less than 2 hours</SelectItem>
            <SelectItem value="medium">2-4 hours</SelectItem>
            <SelectItem value="long">More than 4 hours</SelectItem>
            <SelectItem value="multi-day">Multi-day</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <>
          <Separator />
          <Button variant="outline" size="sm" onClick={clearFilters} className="w-full bg-transparent">
            Clear All Filters
          </Button>
        </>
      )}

      {/* Mobile Apply Button */}
      {isMobile && (
        <Button onClick={onClose} className="w-full">
          Apply Filters
        </Button>
      )}
    </div>
  )
}
