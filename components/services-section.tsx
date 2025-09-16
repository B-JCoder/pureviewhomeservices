import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Droplets, Sun, Sparkles, Shield, Home, Zap } from "lucide-react"

const services = [
  {
    icon: Droplets,
    title: "Window Cleaning",
    description: "Professional interior and exterior window cleaning for crystal clear views.",
    image: "/professional-window-cleaning-service--sparkling-cl.jpg",
  },
  {
    icon: Sparkles,
    title: "Hard Water Spot Removal",
    description: "Specialized treatment to remove stubborn hard water stains and mineral deposits.",
    image: "/before-and-after-hard-water-spot-removal-on-window.jpg",
  },
  {
    icon: Shield,
    title: "Screen Cleaning",
    description: "Thorough cleaning of window screens to improve airflow and appearance.",
    image: "/clean-window-screens--professional-screen-cleaning.jpg",
  },
  {
    icon: Sun,
    title: "Solar Panel Cleaning",
    description: "Maximize your solar efficiency with professional panel cleaning and maintenance.",
    image: "/solar-panel-cleaning-service--clean-solar-panels-o.jpg",
  },
  {
    icon: Zap,
    title: "Solar Guards",
    description: "Protective solutions to keep your solar panels clean and efficient longer.",
    image: "/solar-panel-protection-guards-installation--reside.jpg",
  },
  {
    icon: Home,
    title: "Gutter Cleaning",
    description: "Complete interior and exterior gutter cleaning to protect your home.",
    image: "/professional-gutter-cleaning-service--clean-gutter.jpg",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Our Professional Services</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Comprehensive home maintenance services to keep your property looking its best
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
