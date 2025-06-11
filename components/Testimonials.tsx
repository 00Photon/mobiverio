import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Mobiverio transformed our legacy systems into a modern, scalable platform. Their expertise in enterprise solutions is unmatched.",
      author: "John Smith",
      role: "CTO, TechCorp Inc.",
      initials: "JS",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      quote:
        "The blockchain solution they built for us revolutionized our supply chain transparency. Exceptional work and ongoing support.",
      author: "Maria Johnson",
      role: "VP Operations, Global Logistics",
      initials: "MJ",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      quote:
        "Our SaaS platform launch was a huge success thanks to Mobiverio's technical expertise and strategic guidance. Highly recommended!",
      author: "David Lee",
      role: "Founder, StartupXYZ",
      initials: "DL",
      gradient: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <section id="testimonials" className="w-full py-20 bg-white">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Client Success
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">What Our Clients Say</h2>
          <p className="max-w-[700px] mx-auto text-muted-foreground text-lg">
            Don't just take our word for it. Here's what industry leaders say about working with Mobiverio Limited.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</blockquote>
              <div className="flex items-center">
                <div
                  className={`w-10 h-10 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center text-white font-semibold`}
                >
                  {testimonial.initials}
                </div>
                <div className="ml-3">
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
