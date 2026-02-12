import type { Event } from './types'

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Port Harcourt Music Festival 2026',
    slug: 'port-harcourt-music-festival-2026',
    description: `Join us for an unforgettable evening of music at the Port Harcourt Music Festival 2026! This spectacular event brings together the biggest names in Nigerian music for a night of pure entertainment.

Experience live performances from top artists, enjoy delicious food and drinks, and create memories that will last a lifetime. Whether you're a fan of Afrobeats, Highlife, or contemporary Nigerian music, this festival has something for everyone.

The festival grounds will feature multiple stages, food courts, VIP lounges, and interactive experiences. Don't miss this opportunity to be part of the biggest music event in the South-South region!`,
    date: '2026-02-15',
    startTime: '18:00',
    endTime: '23:00',
    location: 'Port Harcourt',
    venue: 'Sharks Stadium',
    address: 'Liberation Stadium Complex',
    city: 'Port Harcourt',
    state: 'Rivers State',
    category: 'music',
    eventType: 'physical',
    image: '/events/music-festival.jpg',
    organizer: 'Renaissance Events',
    ticketTypes: [
      {
        id: 'regular-1',
        name: 'Regular',
        price: 5000,
        description: 'General admission ticket',
        benefits: ['General Admission', 'Standing Area', '1 Drink Ticket'],
        quantity: 500,
        sold: 350,
        maxPerOrder: 10,
      },
      {
        id: 'vip-1',
        name: 'VIP',
        price: 15000,
        description: 'VIP experience with exclusive perks',
        benefits: ['Reserved Seating', 'VIP Lounge Access', 'Complimentary Drinks', 'Meet & Greet Opportunity'],
        quantity: 100,
        sold: 45,
        maxPerOrder: 5,
      },
      {
        id: 'table-1',
        name: 'Table',
        price: 100000,
        description: 'Private table for groups',
        benefits: ['Private Table (6 pax)', 'Bottle Service', 'Dedicated Server', 'Premium View'],
        quantity: 20,
        sold: 8,
        maxPerOrder: 2,
      },
    ],
    highlights: [
      'Live Performances',
      'Food & Drinks Available',
      'VIP Lounge Access',
      'Secure Parking',
      'Photo Booth',
      'Merchandise Stand',
    ],
    terms: [
      'Age Restriction: 18+',
      'No refunds after purchase',
      'Ticket is non-transferable',
      'Valid ID required at entrance',
      'Subject to event terms and conditions',
    ],
    totalCapacity: 620,
    ticketsSold: 403,
    isFeatured: true,
  },
  {
    id: '2',
    title: 'Lagos Food & Wine Festival',
    slug: 'lagos-food-wine-festival',
    description: `Indulge your senses at the Lagos Food & Wine Festival, the premier culinary event in Nigeria. Sample exquisite dishes from top restaurants, enjoy wine tastings, and learn from celebrity chefs.

This three-day extravaganza features cooking demonstrations, food competitions, and the finest wines from around the world. Whether you're a foodie or a wine enthusiast, this festival offers an unparalleled gastronomic experience.`,
    date: '2026-02-20',
    startTime: '12:00',
    endTime: '22:00',
    location: 'Lagos',
    venue: 'Eko Hotel Convention Centre',
    address: 'Plot 1415, Adetokunbo Ademola Street',
    city: 'Lagos',
    state: 'Lagos State',
    category: 'food',
    eventType: 'physical',
    image: '/events/food-festival.jpg',
    organizer: 'Lagos Foodies Association',
    ticketTypes: [
      {
        id: 'regular-2',
        name: 'Day Pass',
        price: 3500,
        description: 'Single day access',
        benefits: ['Single Day Access', '5 Food Tasting Tokens', '2 Wine Samples'],
        quantity: 1000,
        sold: 650,
        maxPerOrder: 10,
      },
      {
        id: 'vip-2',
        name: 'VIP Pass',
        price: 12000,
        description: 'Premium all-day experience',
        benefits: ['All-Day Access', 'Unlimited Tastings', 'Chef Meet & Greet', 'Gift Bag'],
        quantity: 200,
        sold: 120,
        maxPerOrder: 5,
      },
    ],
    highlights: [
      'Celebrity Chef Demos',
      'Wine Tastings',
      'Live Cooking Shows',
      'Food Competitions',
      'Artisan Market',
    ],
    terms: [
      'All ages welcome',
      'Alcohol service requires valid ID (18+)',
      'No outside food or drinks',
    ],
    totalCapacity: 1200,
    ticketsSold: 770,
    isFeatured: true,
  },
  {
    id: '3',
    title: 'Abuja Tech Summit 2026',
    slug: 'abuja-tech-summit-2026',
    description: `The Abuja Tech Summit brings together innovators, entrepreneurs, and tech enthusiasts from across Africa. Discover the latest trends in AI, blockchain, and digital transformation.

Network with industry leaders, attend hands-on workshops, and gain insights that will propel your career or business forward. This is the must-attend event for anyone in the Nigerian tech ecosystem.`,
    date: '2026-03-05',
    startTime: '09:00',
    endTime: '18:00',
    location: 'Abuja',
    venue: 'International Conference Centre',
    address: 'Central Business District',
    city: 'Abuja',
    state: 'FCT',
    category: 'tech',
    eventType: 'hybrid',
    image: '/events/tech-summit.jpg',
    organizer: 'TechHub Nigeria',
    ticketTypes: [
      {
        id: 'regular-3',
        name: 'Standard',
        price: 8000,
        description: 'Conference access',
        benefits: ['Conference Access', 'Lunch Included', 'Certificate of Attendance'],
        quantity: 500,
        sold: 320,
        maxPerOrder: 5,
      },
      {
        id: 'vip-3',
        name: 'Premium',
        price: 25000,
        description: 'Full experience with workshops',
        benefits: ['All Sessions Access', 'Workshop Participation', 'Networking Dinner', 'Speaker Access'],
        quantity: 100,
        sold: 65,
        maxPerOrder: 3,
      },
      {
        id: 'virtual-3',
        name: 'Virtual',
        price: 2500,
        description: 'Online attendance',
        benefits: ['Live Stream Access', 'Session Recordings', 'Digital Certificate'],
        quantity: 1000,
        sold: 450,
        maxPerOrder: 10,
      },
    ],
    highlights: [
      'Keynote Speakers',
      'Startup Pitch Competition',
      'Networking Sessions',
      'Workshop Labs',
      'Job Fair',
    ],
    terms: [
      'Professional attire required',
      'Laptop recommended for workshops',
      'Virtual tickets include 30-day replay access',
    ],
    totalCapacity: 1600,
    ticketsSold: 835,
    isFeatured: true,
  },
  {
    id: '4',
    title: 'Jersey Carnival 2026',
    slug: 'jersey-carnival-2026',
    description: `Experience the vibrant colors and rhythms of Jersey Carnival 2026! Join thousands of revelers for a spectacular celebration of culture, music, and dance.

Featuring elaborate costumes, soca music, and non-stop entertainment, this carnival promises to be the highlight of the season. Secure your spot for an unforgettable experience!`,
    date: '2026-02-20',
    startTime: '16:00',
    endTime: '23:00',
    location: 'Lagos',
    venue: 'Tafawa Balewa Square',
    address: 'Race Course, Lagos Island',
    city: 'Lagos',
    state: 'Lagos State',
    category: 'festival',
    eventType: 'physical',
    image: '/events/carnival.jpg',
    organizer: 'Carnival Productions',
    ticketTypes: [
      {
        id: 'regular-4',
        name: 'General Admission',
        price: 7500,
        description: 'Festival access',
        benefits: ['Festival Access', 'Carnival Beads', 'Street Party Access'],
        quantity: 2000,
        sold: 1500,
        maxPerOrder: 10,
      },
      {
        id: 'vip-4',
        name: 'VIP',
        price: 20000,
        description: 'Premium carnival experience',
        benefits: ['VIP Viewing Area', 'Complimentary Drinks', 'Costume Parade Access', 'Premium Seating'],
        quantity: 300,
        sold: 180,
        maxPerOrder: 5,
      },
    ],
    highlights: [
      'Costume Parade',
      'Live Soca Music',
      'Street Party',
      'Food Vendors',
      'Fireworks Display',
    ],
    terms: [
      'Costumes encouraged',
      'No glass bottles',
      'Rain or shine event',
    ],
    totalCapacity: 2300,
    ticketsSold: 1680,
  },
  {
    id: '5',
    title: 'Nigerian Comedy Night',
    slug: 'nigerian-comedy-night',
    description: `Get ready to laugh until your sides hurt at Nigerian Comedy Night! Featuring the country's funniest comedians including Basketmouth, AY, and Bovi.

This star-studded evening of comedy will have you in stitches from start to finish. Bring your friends and family for a night of pure entertainment and laughter.`,
    date: '2026-03-10',
    startTime: '19:00',
    endTime: '23:00',
    location: 'Lagos',
    venue: 'Eko Hotel & Suites',
    address: 'Plot 1415, Adetokunbo Ademola Street',
    city: 'Lagos',
    state: 'Lagos State',
    category: 'comedy',
    eventType: 'physical',
    image: '/events/comedy-night.jpg',
    organizer: 'Laugh Factory Nigeria',
    ticketTypes: [
      {
        id: 'regular-5',
        name: 'Regular',
        price: 10000,
        description: 'Standard seating',
        benefits: ['Standard Seating', 'Complimentary Drink'],
        quantity: 400,
        sold: 280,
        maxPerOrder: 8,
      },
      {
        id: 'vip-5',
        name: 'VIP',
        price: 30000,
        description: 'Front row experience',
        benefits: ['Front Row Seating', 'Meet & Greet', 'Dinner Included', 'Free Drinks'],
        quantity: 50,
        sold: 35,
        maxPerOrder: 4,
      },
    ],
    highlights: [
      'Top Comedians',
      'Live Music',
      'Dinner Service',
      'Meet & Greet Opportunity',
    ],
    terms: [
      'Age Restriction: 16+',
      'Smart casual dress code',
      'No recording allowed',
    ],
    totalCapacity: 450,
    ticketsSold: 315,
  },
  {
    id: '6',
    title: 'Fitness Bootcamp Weekend',
    slug: 'fitness-bootcamp-weekend',
    description: `Transform your body and mind at the Fitness Bootcamp Weekend! Join certified trainers for an intensive two-day fitness experience.

Activities include HIIT sessions, yoga, CrossFit, nutrition workshops, and wellness seminars. Perfect for fitness enthusiasts of all levels looking to kickstart their health journey.`,
    date: '2026-03-15',
    startTime: '06:00',
    endTime: '18:00',
    location: 'Abuja',
    venue: 'National Stadium',
    address: 'Area 10, Garki',
    city: 'Abuja',
    state: 'FCT',
    category: 'sports',
    eventType: 'physical',
    image: '/events/fitness-bootcamp.jpg',
    organizer: 'FitNigeria',
    ticketTypes: [
      {
        id: 'regular-6',
        name: 'Weekend Pass',
        price: 15000,
        description: 'Full weekend access',
        benefits: ['2-Day Access', 'Workout Gear Bag', 'Meal Plan Guide', 'Certificate'],
        quantity: 200,
        sold: 140,
        maxPerOrder: 4,
      },
    ],
    highlights: [
      'HIIT Sessions',
      'Yoga Classes',
      'Nutrition Workshops',
      'Fitness Competitions',
      'Health Screenings',
    ],
    terms: [
      'Medical clearance recommended',
      'Bring own workout gear',
      'Water provided',
    ],
    totalCapacity: 200,
    ticketsSold: 140,
  },
]

export const categories = [
  { id: 'music', name: 'Music & Concerts', icon: 'music', color: 'bg-pink-100 text-pink-700' },
  { id: 'food', name: 'Food & Drink', icon: 'utensils', color: 'bg-orange-100 text-orange-700' },
  { id: 'sports', name: 'Sports & Fitness', icon: 'trophy', color: 'bg-green-100 text-green-700' },
  { id: 'arts', name: 'Arts & Culture', icon: 'palette', color: 'bg-blue-100 text-blue-700' },
  { id: 'tech', name: 'Tech & Business', icon: 'laptop', color: 'bg-cyan-100 text-cyan-700' },
  { id: 'comedy', name: 'Comedy', icon: 'laugh', color: 'bg-yellow-100 text-yellow-700' },
  { id: 'festival', name: 'Festivals', icon: 'sparkles', color: 'bg-purple-100 text-purple-700' },
] as const

export const locations = [
  'Lagos',
  'Abuja',
  'Port Harcourt',
  'Ibadan',
  'Kano',
  'Enugu',
  'Calabar',
]

export function getEventBySlug(slug: string): Event | undefined {
  return mockEvents.find(event => event.slug === slug)
}

export function getEventById(id: string): Event | undefined {
  return mockEvents.find(event => event.id === id)
}

export function getFeaturedEvents(): Event[] {
  return mockEvents.filter(event => event.isFeatured)
}

export function getEventsByCategory(category: string): Event[] {
  if (category === 'all') return mockEvents
  return mockEvents.filter(event => event.category === category)
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-NG', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function formatTime(timeString: string): string {
  const [hours, minutes] = timeString.split(':')
  const hour = parseInt(hours)
  const ampm = hour >= 12 ? 'PM' : 'AM'
  const displayHour = hour % 12 || 12
  return `${displayHour}:${minutes} ${ampm}`
}
