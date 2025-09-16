import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/pureview-logo.png"
                alt="PureView Home Services"
                width={32}
                height={32}
                className="w-8 h-8 brightness-0 invert"
              />
              <div className="flex flex-col">
                <span className="font-bold text-lg">PureView</span>
                <span className="text-xs opacity-80 -mt-1">HOME SERVICES</span>
              </div>
            </div>
            <p className="text-sm opacity-90 text-amber-50">
              Professional home cleaning services in Clovis and surrounding areas. See your home in a pure view.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Window Cleaning</li>
              <li>Hard Water Spot Removal</li>
              <li>Screen Cleaning</li>
              <li>Solar Panel Cleaning</li>
              <li>Gutter Cleaning</li>
              <li>Solar Guards</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">(559) 914-7746</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">pureviewservices7@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span className="text-sm">Serving Clovis, Fresno, Madera, and Sanger</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80 text-amber-100">© 2025 PureView Home Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
