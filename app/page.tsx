'use client'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

import { HeroSection } from '@/components/home/hero-section'
import { FeaturedEvents } from '@/components/home/featured-events'
import { CategoriesSection } from '@/components/home/categories-section'
import { HowItWorks } from '@/components/home/how-it-works'
import { CTASection } from '@/components/home/cta-section'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturedEvents />
        <CategoriesSection />
        <HowItWorks />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
