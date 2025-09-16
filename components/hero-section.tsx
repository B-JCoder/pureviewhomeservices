import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle, Star, Users, Award } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-white py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 lg:hidden">
        <img
          src="/professional-window-cleaner-cleaning-large-residen.jpg"
          alt="Professional window cleaning service"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-white/80"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="ml-2 font-medium text-foreground">5.0 Rating</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4" />
                <span>500+ Happy Customers</span>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight text-foreground">
                See Your Home in a <span className="text-primary">Pure View</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Professional window cleaning, solar panel maintenance, and home services in Clovis and surrounding
                areas. Crystal clear results, every time.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-primary text-primary-foreground border border-primary/20">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-primary text-primary-foreground border border-primary/20">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium">Free Estimates</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-primary text-primary-foreground border border-primary/20 sm:col-span-2">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium">100% Satisfaction Guaranteed</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-enhanced group" asChild>
                <Link href="/contact">
                  Get Free Quote
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="btn-enhanced border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                asChild
              >
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in-up hidden lg:block" style={{ animationDelay: "0.2s" }}>
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-primary/20 shadow-2xl">
              <img
                src="/professional-window-cleaner-cleaning-large-residen.jpg"
                alt="Professional window cleaning service"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div
              className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-xl border animate-scale-in"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">5+ Years</p>
                  <p className="text-sm text-muted-foreground">Experience</p>
                </div>
              </div>
            </div>

            <div
              className="absolute -top-6 -right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-xl border animate-scale-in"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="text-center">
                <p className="font-bold text-2xl text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
