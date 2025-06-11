"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import ScrollReveal from "./ScrollReveal"

export default function TestimonialCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "CTO",
      company: "TechFlow Solutions",
      logo: "/placeholder.svg?height=60&width=120",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      projectType: "Custom SaaS Platform",
      feedback:
        "Mobiverio transformed our legacy system into a modern, scalable SaaS platform. Their expertise in custom software development is unmatched. The team delivered on time, within budget, and exceeded our expectations.",
      results: ["40% faster processing", "99.9% uptime", "300% user growth"],
      industry: "Technology",
      projectDuration: "6 months",
      teamSize: "8 developers",
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Founder & CEO",
      company: "CryptoVault",
      logo: "/placeholder.svg?height=60&width=120",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      projectType: "Blockchain DeFi Platform",
      feedback:
        "The blockchain solution Mobiverio built for us revolutionized our DeFi platform. Their deep understanding of smart contracts and security best practices gave us confidence in launching our $50M TVL protocol.",
      results: ["$50M+ TVL", "Zero security incidents", "15K+ active users"],
      industry: "Blockchain/DeFi",
      projectDuration: "8 months",
      teamSize: "6 blockchain experts",
    },
    {
      id: 3,
      name: "Dr. Emily Chen",
      role: "VP of Operations",
      company: "MedTech Innovations",
      logo: "/placeholder.svg?height=60&width=120",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      projectType: "Healthcare Management System",
      feedback:
        "Mobiverio developed a comprehensive healthcare management system that streamlined our operations and improved patient care. Their attention to compliance and security was exceptional.",
      results: ["50% faster patient processing", "HIPAA compliant", "99.99% data accuracy"],
      industry: "Healthcare",
      projectDuration: "10 months",
      teamSize: "12 developers",
    },
    {
      id: 4,
      name: "James Thompson",
      role: "Head of Digital",
      company: "Global Logistics Corp",
      logo: "/placeholder.svg?height=60&width=120",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      projectType: "Supply Chain Blockchain",
      feedback:
        "The blockchain-based supply chain solution provided complete transparency and traceability. Mobiverio's innovative approach helped us reduce costs by 30% while improving efficiency across our global operations.",
      results: ["30% cost reduction", "100% traceability", "Real-time tracking"],
      industry: "Logistics",
      projectDuration: "12 months",
      teamSize: "10 specialists",
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Chief Innovation Officer",
      company: "FinanceForward",
      logo: "/placeholder.svg?height=60&width=120",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      projectType: "Custom Trading Platform",
      feedback:
        "Mobiverio built us a high-frequency trading platform that processes millions of transactions daily. Their expertise in financial software and real-time systems was crucial to our success.",
      results: ["1M+ daily transactions", "Sub-millisecond latency", "99.99% uptime"],
      industry: "Financial Services",
      projectDuration: "14 months",
      teamSize: "15 engineers",
    },
    {
      id: 6,
      name: "David Kim",
      role: "Product Director",
      company: "EcoTech Solutions",
      logo: "/placeholder.svg?height=60&width=120",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      projectType: "IoT Blockchain Platform",
      feedback:
        "The IoT blockchain platform Mobiverio developed helps us track carbon credits with complete transparency. Their innovative use of blockchain technology for environmental solutions is groundbreaking.",
      results: ["1M+ IoT devices connected", "Carbon neutral tracking", "Regulatory compliance"],
      industry: "Environmental Tech",
      projectDuration: "9 months",
      teamSize: "8 IoT specialists",
    },
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  const currentTestimonial = testimonials[currentSlide]

  return (
    <section className="w-full py-20 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container px-4 md:px-6 mx-auto max-w-7xl relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20">
              <Star className="w-4 h-4 mr-2 fill-current" />
              Client Success Stories
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-white">
              What Our Clients Say
              <span className="bg-gradient-to-r from-red-400 to-red-300 bg-clip-text text-transparent"> About Us</span>
            </h2>
            <p className="max-w-[700px] mx-auto text-white/80 text-lg">
              Real feedback from industry leaders who've transformed their businesses with our custom software and
              blockchain solutions.
            </p>
          </div>
        </ScrollReveal>

        {/* Main Carousel */}
        <div className="relative">
          <ScrollReveal delay={200}>
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Left Side - Testimonial Content */}
                  <div className="p-8 md:p-12">
                    {/* Quote Icon */}
                    <Quote className="h-12 w-12 text-red-400 mb-6 opacity-50" />

                    {/* Rating */}
                    <div className="flex items-center mb-6">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="ml-2 text-white/80">({currentTestimonial.rating}.0)</span>
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-lg md:text-xl leading-relaxed mb-8 text-white/90">
                      "{currentTestimonial.feedback}"
                    </blockquote>

                    {/* Results */}
                    <div className="mb-8">
                      <h4 className="font-semibold mb-4 text-red-400">Key Results:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {currentTestimonial.results.map((result, index) => (
                          <div key={index} className="flex items-center text-sm text-white/80">
                            <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Client Info */}
                    <div className="flex items-center">
                      <img
                        src={currentTestimonial.avatar || "/placeholder.svg"}
                        alt={currentTestimonial.name}
                        className="w-16 h-16 rounded-full mr-4 border-2 border-white/20"
                      />
                      <div>
                        <div className="font-semibold text-lg">{currentTestimonial.name}</div>
                        <div className="text-red-400">{currentTestimonial.role}</div>
                        <div className="text-white/60 text-sm">{currentTestimonial.company}</div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Project Details */}
                  <div className="bg-white/5 p-8 md:p-12 border-l border-white/10">
                    {/* Company Logo */}
                    <div className="mb-8">
                      <img
                        src={currentTestimonial.logo || "/placeholder.svg"}
                        alt={`${currentTestimonial.company} logo`}
                        className="h-12 opacity-80"
                      />
                    </div>

                    {/* Project Type */}
                    <div className="mb-6">
                      <Badge className="bg-red-500/20 text-red-300 border-red-400/30">
                        {currentTestimonial.projectType}
                      </Badge>
                    </div>

                    {/* Project Details */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-2 text-teal-400">Industry</h4>
                        <p className="text-white/80">{currentTestimonial.industry}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-teal-400">Project Duration</h4>
                        <p className="text-white/80">{currentTestimonial.projectDuration}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-teal-400">Team Size</h4>
                        <p className="text-white/80">{currentTestimonial.teamSize}</p>
                      </div>
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex space-x-2 mt-8">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToSlide(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentSlide ? "bg-red-400 scale-125" : "bg-white/30 hover:bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="sm"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Bottom Stats */}
        <ScrollReveal delay={400}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
            {[
              { number: "150+", label: "Projects Delivered" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "$500M+", label: "Value Created" },
              { number: "50+", label: "Industries Served" },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
