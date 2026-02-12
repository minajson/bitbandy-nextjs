export interface Event {
  id: string
  title: string
  slug: string
  description: string
  date: string
  startTime: string
  endTime: string
  location: string
  venue: string
  address: string
  city: string
  state: string
  category: EventCategory
  eventType: 'physical' | 'virtual' | 'hybrid'
  image: string
  organizer: string
  ticketTypes: TicketType[]
  highlights: string[]
  terms: string[]
  totalCapacity: number
  ticketsSold: number
  isFeatured?: boolean
}

export interface TicketType {
  id: string
  name: string
  price: number
  description: string
  benefits: string[]
  quantity: number
  sold: number
  maxPerOrder: number
}

export type EventCategory =
  | 'music'
  | 'sports'
  | 'food'
  | 'arts'
  | 'tech'
  | 'business'
  | 'comedy'
  | 'festival'

export interface FilterOptions {
  search?: string
  category?: EventCategory | 'all'
  dateRange?: 'today' | 'this-week' | 'this-month' | 'all'
  priceRange?: 'free' | 'under-5000' | '5000-10000' | 'over-10000' | 'all'
  location?: string
}
