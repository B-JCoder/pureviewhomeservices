import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Clovis, CA",
    rating: 5,
    text: "PureView did an amazing job on our windows! They were professional, punctual, and the results were outstanding. Our windows have never looked better.",
    service: "Window Cleaning",
  },
  {
    name: "Mike Rodriguez",
    location: "Fresno, CA",
    rating: 5,
    text: "Excellent solar panel cleaning service. Our energy production increased noticeably after their cleaning. Highly recommend their professional team.",
    service: "Solar Panel Cleaning",
  },
  {
    name: "Jennifer Chen",
    location: "Madera, CA",
    rating: 5,
    text: "Great experience with PureView! They removed all the hard water spots from our windows that we thought were permanent. Very satisfied with their work.",
    service: "Hard Water Spot Removal",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">What Our Customers Say</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Don't just take our word for it - hear from satisfied customers across Clovis and surrounding areas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Stars */}
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="text-foreground italic">"{testimonial.text}"</p>

                  {/* Customer info */}
                  <div className="border-t pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    <p className="text-sm text-primary font-medium">{testimonial.service}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
