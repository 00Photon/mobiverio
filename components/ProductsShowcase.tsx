"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink, Users, TrendingUp, Shield, Zap, Globe, CreditCard } from "lucide-react"
import Link from "next/link"
import ScrollReveal from "./ScrollReveal"
import AnimatedButton from "./AnimatedButton"

export default function ProductsShowcase() {
  const products = [
    {
      id: "trovia",
      name: "Trovia",
      tagline: "Smart Travel Management Platform",
      description:
        "Revolutionary travel booking and management platform that combines AI-powered recommendations with seamless booking experiences for modern travelers.",
      category: "SaaS Platform",
      image: "/placeholder.svg?height=400&width=600",
      gradient: "from-teal-600 to-teal-500",
      icon: Globe,
      features: ["AI Travel Recommendations", "Real-time Booking", "Expense Management", "Team Collaboration"],
      metrics: [
        { label: "Active Users", value: "50K+", icon: Users },
        { label: "Bookings", value: "$10M+", icon: TrendingUp },
        { label: "Countries", value: "120+", icon: Globe },
      ],
      website: "https://trovia.com",
      status: "Live",
    },
    {
      id: "trezzapay",
      name: "TrezzaPay",
      tagline: "Next-Gen Payment Solutions",
      description:
        "Secure, fast, and intelligent payment processing platform designed for modern businesses with advanced fraud detection and seamless integration capabilities.",
      category: "FinTech",
      image: "/placeholder.svg?height=400&width=600",
      gradient: "from-red-500 to-red-400",
      icon: CreditCard,
      features: ["Instant Payments", "Fraud Detection", "Multi-Currency", "API Integration"],
      metrics: [
        { label: "Transactions", value: "$50M+", icon: TrendingUp },
        { label: "Merchants", value: "5K+", icon: Users },
        { label: "Uptime", value: "99.9%", icon: Shield },
      ],
      website: "https://trezzapay.com",
      status: "Live",
    },
  ]

  return (
    <section id="products" className="w-full py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-teal-50 text-teal-800 border-teal-200">
              Our Products
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-teal-900">
              Innovative Solutions
              <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
                {" "}
                We've Built
              </span>
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground text-lg">
              Discover the cutting-edge products we've developed that are transforming industries and empowering
              businesses worldwide.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {products.map((product, index) => {
            const IconComponent = product.icon
            return (
              <ScrollReveal key={product.id} delay={index * 200}>
                <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg overflow-hidden relative">
                  {/* Background gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>

                  {/* Product image/hero section */}
                  <div className={`relative h-64 bg-gradient-to-br ${product.gradient} overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="h-10 w-10 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold mb-2">{product.name}</h3>
                        <p className="text-white/90 text-lg">{product.tagline}</p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                        {product.status}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="text-xs">
                        {product.category}
                      </Badge>
                      <a
                        href={product.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-teal-600 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-teal-800">Key Features</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {product.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center text-sm text-muted-foreground group-hover:translate-x-1 transition-transform duration-300"
                            style={{ transitionDelay: `${featureIndex * 50}ms` }}
                          >
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-slate-50 rounded-lg">
                      {product.metrics.map((metric, metricIndex) => {
                        const MetricIcon = metric.icon
                        return (
                          <div key={metricIndex} className="text-center">
                            <div className="flex items-center justify-center mb-1">
                              <MetricIcon className="h-4 w-4 text-teal-600 mr-1" />
                            </div>
                            <div className="text-lg font-bold text-teal-800">{metric.value}</div>
                            <div className="text-xs text-muted-foreground">{metric.label}</div>
                          </div>
                        )
                      })}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-3">
                      <Link href={`/products/${product.id}`} className="flex-1">
                        <AnimatedButton variant="primary" className="w-full group/btn">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </AnimatedButton>
                      </Link>
                      <a href={product.website} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <AnimatedButton variant="outline" className="w-full">
                          Visit Site
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </AnimatedButton>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={600}>
          <div className="text-center mt-16">
            <Card className="bg-gradient-to-r from-teal-800 to-teal-700 border-0 text-white overflow-hidden relative">
              <div className="absolute inset-0 bg-black/10"></div>
              <CardContent className="p-8 md:p-12 relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Have an Idea for the Next Big Product?</h3>
                <p className="text-lg opacity-95 mb-6 max-w-2xl mx-auto">
                  Let's collaborate to turn your vision into a market-leading product that users love and investors
                  notice.
                </p>
                <AnimatedButton variant="secondary" size="lg">
                  Start Your Product Journey
                  <Zap className="ml-2 h-5 w-5" />
                </AnimatedButton>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
