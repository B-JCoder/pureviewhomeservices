import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Award, Users, Clock } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/professional-home-services-team--friendly-workers-.jpg"
            alt="Professional home services team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-balance">About PureView Home Services</h1>
              <p className="text-xl text-muted-foreground text-pretty">
                We're a locally owned and operated home services company dedicated to providing exceptional window
                cleaning, solar panel maintenance, and gutter cleaning services throughout Clovis and surrounding areas.
              </p>
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/professional-home-services-team--friendly-workers-.jpg"
                alt="PureView team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6 mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold">Our Story</h2>
                <p className="text-lg text-muted-foreground text-pretty">
                  Founded with a simple mission: to help homeowners see their property in a pure view. We believe that
                  clean windows, efficient solar panels, and well-maintained gutters not only enhance your home's
                  appearance but also protect your investment.
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground">
                  What started as a small local business has grown into the trusted choice for homeowners across Clovis,
                  Fresno, Madera, and Sanger. Our commitment to quality, reliability, and customer satisfaction has
                  earned us a reputation as the go-to home services provider in the Central Valley.
                </p>
                <p className="text-muted-foreground">
                  We understand that your home is your most valuable asset, which is why we treat every project with the
                  care and attention it deserves. Our team is fully licensed, insured, and trained to deliver
                  exceptional results that exceed your expectations.
                </p>
              </div>
            </div>

            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="/pureview-company-history-local-clovis-business.jpg"
                alt="PureView company history and local Clovis business growth"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Why Choose PureView?</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              We're more than just a cleaning service - we're your partners in home maintenance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Licensed & Insured</h3>
                <p className="text-muted-foreground">
                  Fully licensed and insured for your peace of mind and protection.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Local Experts</h3>
                <p className="text-muted-foreground">
                  Local team with deep knowledge of Central Valley homes and conditions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Quality Guaranteed</h3>
                <p className="text-muted-foreground">
                  100% satisfaction guarantee on all our services and workmanship.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Reliable Service</h3>
                <p className="text-muted-foreground">
                  Punctual, professional service that respects your time and schedule.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Professional Equipment & Tools</h2>
            <p className="text-lg text-muted-foreground">We use industry-leading equipment for superior results</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="/professional-window-cleaning-equipment-tools.jpg"
                alt="Professional window cleaning equipment and tools"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="/solar-panel-cleaning-specialized-equipment.jpg"
                alt="Solar panel cleaning specialized equipment"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="/gutter-cleaning-professional-tools-safety-equipment.jpg"
                alt="Gutter cleaning professional tools and safety equipment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Our Values</h2>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Excellence in Every Detail</h3>
                <p className="text-muted-foreground">
                  We believe that quality is in the details. From our initial consultation to the final cleanup, we
                  maintain the highest standards of workmanship.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Honest & Transparent</h3>
                <p className="text-muted-foreground">
                  No hidden fees, no surprises. We provide upfront pricing and clear communication throughout every
                  project.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Community Focused</h3>
                <p className="text-muted-foreground">
                  As a local business, we're invested in our community. We take pride in helping our neighbors maintain
                  beautiful, well-cared-for homes.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Environmental Responsibility</h3>
                <p className="text-muted-foreground">
                  We use eco-friendly cleaning solutions and practices that are safe for your family, pets, and the
                  environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">Common Questions About Our Services</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Learn more about what makes PureView the right choice for your home
            </p>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2">How long have you been in business?</h3>
              <p className="text-muted-foreground">
                We've been proudly serving the Central Valley community for several years, building our reputation one
                satisfied customer at a time. Our experience spans thousands of successful projects.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2">Are you licensed and insured?</h3>
              <p className="text-muted-foreground">
                Yes, we are fully licensed and carry comprehensive liability insurance. This protects both your property
                and our team, giving you complete peace of mind.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2">What sets you apart from other service providers?</h3>
              <p className="text-muted-foreground">
                Our commitment to quality, attention to detail, and customer satisfaction. We use professional-grade
                equipment, eco-friendly solutions, and guarantee our work 100%.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
