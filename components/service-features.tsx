import { Card, CardContent } from "@/components/ui/card"
import { Shield, Clock, Award, Users, Sparkles, CheckCircle } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Fully Insured & Bonded",
    description: "Complete protection for your property and peace of mind for you",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "We work around your schedule with convenient appointment times",
  },
  {
    icon: Award,
    title: "Satisfaction Guarantee",
    description: "100% satisfaction guaranteed or we'll make it right at no extra cost",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Professional, trained technicians with years of experience",
  },
  {
    icon: Sparkles,
    title: "Eco-Friendly Solutions",
    description: "Safe, biodegradable cleaning products that protect your family and environment",
  },
  {
    icon: CheckCircle,
    title: "Quality Equipment",
    description: "Professional-grade tools and equipment for superior results",
  },
]

export function ServiceFeatures() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">Why Choose PureView Services?</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto">
            We're committed to providing exceptional service with attention to detail, professional equipment, and
            customer satisfaction as our top priority.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
