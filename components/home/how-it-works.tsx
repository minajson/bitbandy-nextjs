import { Search, Ticket, CreditCard, Sparkles } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Discover Events',
    description: 'Browse through hundreds of events or search for exactly what you want',
  },
  {
    icon: Ticket,
    title: 'Select Tickets',
    description: 'Choose your preferred date, time, and number of tickets',
  },
  {
    icon: CreditCard,
    title: 'Secure Payment',
    description: 'Complete your purchase with our safe and encrypted checkout',
  },
  {
    icon: Sparkles,
    title: 'Enjoy the Event',
    description: 'Receive your tickets instantly and get ready for an amazing experience',
  },
]

export function HowItWorks() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-2 text-muted-foreground">
            Get your tickets in four simple steps
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-12 hidden h-0.5 w-full bg-gradient-to-r from-primary/50 to-transparent lg:block" />
              )}

              <div className="relative flex flex-col items-center text-center">
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
                  <step.icon className="h-10 w-10 text-primary" />
                  <div className="absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {index + 1}
                  </div>
                </div>

                <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}