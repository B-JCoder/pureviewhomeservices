import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/contact-hero-clovis-california-residential-area.jpg"
            alt="Clovis California residential area"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/90"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-balance mb-6">Contact PureView Home Services</h1>
          <p className="text-xl text-muted-foreground text-pretty">
            Ready to see your home in a pure view? Get in touch with us today for a free estimate and discover why we're
            the trusted choice for home services in Clovis and surrounding areas.
          </p>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-12 -mt-10 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                <p className="text-2xl font-bold text-primary mb-1">(559) 914-7746</p>
                <p className="text-sm text-muted-foreground">Call or text anytime</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                <p className="text-primary font-medium mb-1">pureviewservices7@gmail.com</p>
                <p className="text-sm text-muted-foreground">24-hour response</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Get Quote</h3>
                <p className="text-primary font-medium mb-1">Free Estimates</p>
                <p className="text-sm text-muted-foreground">No obligation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">Service Areas</h2>
            <p className="text-lg text-muted-foreground">We proudly serve homeowners throughout the Central Valley</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="/central-valley-california-map-service-areas.jpg"
                  alt="Central Valley California service areas map"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Primary Service Areas</h3>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Clovis, CA</li>
                        <li>• Fresno, CA</li>
                        <li>• Madera, CA</li>
                        <li>• Sanger, CA</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                      <div className="space-y-1 text-muted-foreground">
                        <p>Monday - Saturday: 7:00 AM - 6:00 PM</p>
                        <p>Sunday: By appointment</p>
                        <p className="text-primary font-medium">Emergency services available</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-8 p-6 bg-muted/50 rounded-lg text-center">
            <p className="text-muted-foreground">
              Don't see your area listed? <span className="text-primary font-medium">Contact us anyway!</span>
              We may be able to serve your location or recommend a trusted partner in your area.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">What Our Customers Say</h2>
            <p className="text-lg text-muted-foreground">Don't just take our word for it</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src="/happy-customer-testimonial-portrait-1.jpg"
                      alt="Happy customer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex text-yellow-400 mb-2">{"★".repeat(5)}</div>
                    <p className="text-muted-foreground mb-3">
                      "PureView did an amazing job on our windows and solar panels. Professional, reliable, and the
                      results speak for themselves!"
                    </p>
                    <p className="font-semibold">Sarah M.</p>
                    <p className="text-sm text-muted-foreground">Clovis, CA</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src="/satisfied-homeowner-testimonial-portrait-2.jpg"
                      alt="Satisfied homeowner"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex text-yellow-400 mb-2">{"★".repeat(5)}</div>
                    <p className="text-muted-foreground mb-3">
                      "Best home service company in the Central Valley. They transformed our home's appearance
                      completely!"
                    </p>
                    <p className="font-semibold">Mike R.</p>
                    <p className="text-sm text-muted-foreground">Fresno, CA</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </main>
  )
}
