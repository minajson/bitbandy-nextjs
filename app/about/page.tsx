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
  { year: '2020', title: 'The Beginning', description: 'Bitbandy was founded with a vision to revolutionize event ticketing in Nigeria.' },
  { year: '2021', title: 'First Milestone', description: 'Reached 10,000 tickets sold and partnered with 100+ event organizers.' },
  { year: '2022', title: 'Expansion', description: 'Expanded to 10 major cities and launched our mobile app.' },
  { year: '2023', title: 'Going Pan-African', description: 'Extended operations to Ghana and Kenya, serving organizers across Africa.' },
  { year: '2024', title: 'Industry Leader', description: 'Became the #1 event ticketing platform in Nigeria with 500K+ tickets sold.' },
]

const team = [
  { name: 'Chidi Okonkwo', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face' },
  { name: 'Amara Nwosu', role: 'Chief Technology Officer', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face' },
  { name: 'Emeka Adeyemi', role: 'Head of Operations', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face' },
  { name: 'Ngozi Eze', role: 'Head of Partnerships', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face' },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Page content exactly as before */}
      </main>
      <Footer />
    </div>
  )
}
