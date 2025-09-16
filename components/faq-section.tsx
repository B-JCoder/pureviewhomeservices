"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const faqs = [
  {
    question: "How often should I have my windows cleaned?",
    answer:
      "For residential properties, we recommend professional window cleaning every 3-6 months. However, this can vary based on your location, weather conditions, and personal preferences. Commercial properties may need more frequent cleaning.",
  },
  {
    question: "Do you clean windows in all weather conditions?",
    answer:
      "We avoid cleaning windows during heavy rain, snow, or extreme weather conditions for safety and quality reasons. Light rain or overcast conditions are actually ideal for window cleaning as they prevent rapid drying and streaking.",
  },
  {
    question: "Are your cleaning solutions safe for my family and pets?",
    answer:
      "Yes! We use eco-friendly, biodegradable cleaning solutions that are safe for your family, pets, and plants. Our products are effective yet gentle, ensuring a streak-free finish without harmful chemicals.",
  },
  {
    question: "Do you provide free estimates?",
    answer:
      "We provide free, no-obligation estimates for all our services. We'll assess your property and provide a detailed quote based on your specific needs and requirements.",
  },
  {
    question: "What's included in your window cleaning service?",
    answer:
      "Our comprehensive window cleaning includes interior and exterior glass cleaning, screen cleaning, sill and frame cleaning, and removal of cobwebs around windows. We guarantee a streak-free finish on all surfaces.",
  },
  {
    question: "How do you clean high or hard-to-reach windows?",
    answer:
      "We use professional-grade equipment including extension poles, ladders, and safety equipment to safely reach high windows. Our team is fully trained in safety protocols and carries comprehensive insurance.",
  },
  {
    question: "Can you remove hard water stains from my windows?",
    answer:
      "Yes! We specialize in hard water stain removal using professional-grade solutions and techniques. Depending on the severity, we may need multiple treatments, but we can restore your windows to crystal clarity.",
  },
  {
    question: "Do you offer solar panel cleaning?",
    answer:
      "Yes, we provide professional solar panel cleaning services to maximize your system's efficiency. Clean panels can improve energy output by up to 25%. We use specialized equipment and techniques safe for solar installations.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Get answers to common questions about our window cleaning and home services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <h3 className="font-semibold text-foreground pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
