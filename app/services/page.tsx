import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Droplets, Sun, Sparkles, Shield, Home, Zap, CheckCircle } from "lucide-react"

const services = [
  {
    icon: Droplets,
    title: "Window Cleaning",
    description: "Professional interior and exterior window cleaning for crystal clear views.",
    features: [
      "Interior and exterior cleaning",
      "Streak-free finish guaranteed",
      "Screen cleaning included",
      "Sill and frame cleaning",
      "Eco-friendly solutions",
    ],
    image: "/professional-window-cleaning-service--sparkling-cl.jpg",
  },
  {
    icon: Sparkles,
    title: "Hard Water Spot Removal",
    description: "Specialized treatment to remove stubborn hard water stains and mineral deposits.",
    features: [
      "Mineral deposit removal",
      "Specialized cleaning solutions",
      "Restoration of glass clarity",
      "Preventive treatments available",
      "Safe for all glass types",
    ],
    image: "/before-and-after-hard-water-spot-removal-on-window.jpg",
  },
  {
    icon: Shield,
    title: "Screen Cleaning",
    description: "Thorough cleaning of window screens to improve airflow and appearance.",
    features: [
      "Complete screen removal",
      "Deep cleaning process",
      "Frame cleaning included",
      "Damage inspection",
      "Proper reinstallation",
    ],
    image: "/clean-window-screens--professional-screen-cleaning.jpg",
  },
  {
    icon: Sun,
    title: "Solar Panel Cleaning",
    description: "Maximize your solar efficiency with professional panel cleaning and maintenance.",
    features: [
      "Efficiency optimization",
      "Gentle cleaning methods",
      "Safety equipment used",
      "Performance monitoring",
      "Regular maintenance plans",
    ],
    image: "/solar-panel-cleaning-service--clean-solar-panels-o.jpg",
  },
  {
    icon: Zap,
    title: "Solar Guards",
    description: "Protective solutions to keep your solar panels clean and efficient longer.",
    features: [
      "Bird and pest deterrent",
      "Debris protection",
      "Easy maintenance access",
      "Durable materials",
      "Professional installation",
    ],
    image: "/solar-panel-protection-guards-installation--reside.jpg",
  },
  {
    icon: Home,
    title: "Gutter Cleaning",
    description: "Complete interior and exterior gutter cleaning to protect your home.",
    features: [
      "Complete debris removal",
      "Downspout cleaning",
      "Exterior gutter washing",
      "Minor repair identification",
      "Proper disposal included",
    ],
    image: "/professional-gutter-cleaning-service--clean-gutter.jpg",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/professional-window-cleaning-service--sparkling-cl.jpg"
            alt="Professional window cleaning service"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/85"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-balance mb-6">Our Professional Services</h1>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Comprehensive home maintenance services designed to keep your property looking its best and protect your
            investment. All services come with our satisfaction guarantee.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold">{service.title}</h2>
                  </div>

                  <p className="text-lg text-muted-foreground">{service.description}</p>

                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button size="lg" asChild>
                    <Link href="/contact">Get Quote for This Service</Link>
                  </Button>
                </div>

                {/* Image */}
                <div className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div className="aspect-video rounded-2xl overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We believe in honest, upfront pricing with no hidden fees. Every quote is customized based on your specific
            needs and property requirements.
          </p>

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Free Estimates</CardTitle>
              <CardDescription>Get a personalized quote for your home services needs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm">No obligation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm">Same-day response</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm">Detailed breakdown</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm">Competitive rates</span>
                </div>
              </div>
              <Button size="lg" className="w-full" asChild>
                <Link href="/contact">Request Your Free Quote</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">Service Questions & Answers</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Everything you need to know about our professional services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">How long does window cleaning take?</h3>
                <p className="text-muted-foreground">
                  Most residential homes take 1-3 hours depending on size and number of windows. We'll provide an
                  estimated timeframe with your quote.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Do you clean inside and outside?</h3>
                <p className="text-muted-foreground">
                  Yes! Our standard service includes both interior and exterior window cleaning, plus screens, sills,
                  and frames.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">How often should solar panels be cleaned?</h3>
                <p className="text-muted-foreground">
                  We recommend cleaning solar panels every 6-12 months, or more frequently in dusty areas to maintain
                  optimal efficiency.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">What if I'm not satisfied?</h3>
                <p className="text-muted-foreground">
                  We offer a 100% satisfaction guarantee. If you're not happy with our work, we'll return to make it
                  right at no additional cost.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Do you work in all weather?</h3>
                <p className="text-muted-foreground">
                  We avoid working in heavy rain or extreme weather for safety and quality reasons. Light overcast
                  conditions are actually ideal for window cleaning.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Are your cleaning products safe?</h3>
                <p className="text-muted-foreground">
                  We use eco-friendly, biodegradable solutions that are safe for your family, pets, and the environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </main>
  )
}
