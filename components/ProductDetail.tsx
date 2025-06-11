"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  ExternalLink,
  Users,
  TrendingUp,
  Shield,
  Globe,
  CreditCard,
  Star,
  CheckCircle,
  Play,
  Download,
  Monitor,
  Zap,
  BarChart3,
  Lock,
  Clock,
  Award,
  Target,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ScrollReveal from "./ScrollReveal"
import AnimatedButton from "./AnimatedButton"

interface ProductDetailProps {
  productId: string
}

export default function ProductDetail({ productId }: ProductDetailProps) {
  const [activeTab, setActiveTab] = useState("overview")

  const productData: Record<string, any> = {
    trovia: {
      name: "Trovia",
      tagline: "Smart Travel Management Platform",
      description:
        "Trovia revolutionizes business and leisure travel with AI-powered recommendations, seamless booking experiences, and comprehensive travel management tools.",
      longDescription:
        "Built for the modern traveler, Trovia combines cutting-edge artificial intelligence with intuitive design to create the ultimate travel management platform. Whether you're planning a business trip or organizing a family vacation, Trovia's intelligent algorithms learn from your preferences to deliver personalized recommendations that save time and money.",
      category: "SaaS Platform",
      gradient: "from-teal-600 to-teal-500",
      icon: Globe,
      website: "https://trovia.com",
      status: "Live",
      heroImage: "/placeholder.svg?height=600&width=1200",
      logo: "/placeholder.svg?height=100&width=200",

      keyMetrics: [
        { label: "Active Users", value: "50,000+", icon: Users, description: "Monthly active travelers" },
        { label: "Total Bookings", value: "$10M+", icon: TrendingUp, description: "In travel bookings processed" },
        { label: "Countries Covered", value: "120+", icon: Globe, description: "Destinations worldwide" },
        { label: "User Satisfaction", value: "4.8/5", icon: Star, description: "Average user rating" },
      ],

      features: [
        {
          title: "AI-Powered Recommendations",
          description: "Smart algorithms that learn your preferences and suggest personalized travel options",
          icon: Zap,
          benefits: ["Personalized suggestions", "Time-saving automation", "Cost optimization", "Preference learning"],
        },
        {
          title: "Real-time Booking Engine",
          description: "Instant booking capabilities with live pricing and availability across all major providers",
          icon: Clock,
          benefits: ["Live pricing updates", "Instant confirmations", "Multi-provider search", "Best price guarantee"],
        },
        {
          title: "Expense Management",
          description: "Comprehensive expense tracking and reporting for business travelers and finance teams",
          icon: BarChart3,
          benefits: ["Automated expense reports", "Receipt scanning", "Policy compliance", "Real-time analytics"],
        },
        {
          title: "Team Collaboration",
          description: "Collaborative tools for group travel planning and corporate travel management",
          icon: Users,
          benefits: ["Group planning tools", "Approval workflows", "Shared itineraries", "Team dashboards"],
        },
      ],

      techStack: ["React Native", "Node.js", "MongoDB", "AWS", "Machine Learning", "GraphQL", "Redis", "Elasticsearch"],

      testimonials: [
        {
          quote:
            "Trovia has transformed how our company handles business travel. The AI recommendations are spot-on and have saved us thousands in travel costs.",
          author: "Sarah Johnson",
          role: "Travel Manager, TechCorp",
          avatar: "/placeholder.svg?height=60&width=60",
          rating: 5,
        },
        {
          quote: "The user experience is incredible. Planning family vacations has never been this easy and enjoyable.",
          author: "Michael Chen",
          role: "Frequent Traveler",
          avatar: "/placeholder.svg?height=60&width=60",
          rating: 5,
        },
      ],

      screenshots: [
        { title: "Dashboard Overview", image: "/placeholder.svg?height=400&width=600" },
        { title: "AI Recommendations", image: "/placeholder.svg?height=400&width=600" },
        { title: "Booking Interface", image: "/placeholder.svg?height=400&width=600" },
        { title: "Expense Tracking", image: "/placeholder.svg?height=400&width=600" },
      ],

      awards: [
        { title: "Best Travel App 2024", organization: "Travel Tech Awards", icon: Award },
        { title: "Innovation in AI", organization: "SaaS Excellence Awards", icon: Zap },
        { title: "User Choice Award", organization: "App Store", icon: Star },
      ],
    },

    trezzapay: {
      name: "TrezzaPay",
      tagline: "Next-Gen Payment Solutions",
      description:
        "TrezzaPay delivers secure, fast, and intelligent payment processing with advanced fraud detection and seamless integration capabilities for modern businesses.",
      longDescription:
        "TrezzaPay represents the future of digital payments, combining enterprise-grade security with lightning-fast processing speeds. Our platform leverages advanced machine learning algorithms for real-time fraud detection while maintaining the simplicity that businesses need to accept payments effortlessly.",
      category: "FinTech",
      gradient: "from-red-500 to-red-400",
      icon: CreditCard,
      website: "https://trezzapay.com",
      status: "Live",
      heroImage: "/placeholder.svg?height=600&width=1200",
      logo: "/placeholder.svg?height=100&width=200",

      keyMetrics: [
        { label: "Transaction Volume", value: "$50M+", icon: TrendingUp, description: "Monthly processing volume" },
        { label: "Active Merchants", value: "5,000+", icon: Users, description: "Businesses using TrezzaPay" },
        { label: "System Uptime", value: "99.9%", icon: Shield, description: "Guaranteed availability" },
        { label: "Fraud Prevention", value: "99.8%", icon: Lock, description: "Fraud detection accuracy" },
      ],

      features: [
        {
          title: "Instant Payment Processing",
          description: "Lightning-fast payment processing with sub-second transaction times",
          icon: Zap,
          benefits: ["Sub-second processing", "Real-time settlements", "Global coverage", "24/7 availability"],
        },
        {
          title: "Advanced Fraud Detection",
          description: "AI-powered fraud prevention that adapts to emerging threats in real-time",
          icon: Shield,
          benefits: ["Machine learning algorithms", "Real-time monitoring", "Risk scoring", "Automated blocking"],
        },
        {
          title: "Multi-Currency Support",
          description: "Accept payments in 150+ currencies with automatic conversion and competitive rates",
          icon: Globe,
          benefits: ["150+ currencies", "Auto-conversion", "Competitive rates", "Local payment methods"],
        },
        {
          title: "Developer-Friendly APIs",
          description: "Comprehensive APIs and SDKs for seamless integration into any platform",
          icon: Monitor,
          benefits: ["RESTful APIs", "Multiple SDKs", "Webhook support", "Sandbox environment"],
        },
      ],

      techStack: [
        "Microservices",
        "Kubernetes",
        "PostgreSQL",
        "Redis",
        "Machine Learning",
        "Blockchain",
        "AWS",
        "Docker",
      ],

      testimonials: [
        {
          quote:
            "TrezzaPay's fraud detection is phenomenal. We've seen a 95% reduction in fraudulent transactions since switching.",
          author: "David Rodriguez",
          role: "CTO, E-commerce Plus",
          avatar: "/placeholder.svg?height=60&width=60",
          rating: 5,
        },
        {
          quote:
            "The API integration was seamless, and the transaction speeds are incredible. Our customers love the smooth checkout experience.",
          author: "Lisa Wang",
          role: "Lead Developer, ShopFast",
          avatar: "/placeholder.svg?height=60&width=60",
          rating: 5,
        },
      ],

      screenshots: [
        { title: "Payment Dashboard", image: "/placeholder.svg?height=400&width=600" },
        { title: "Fraud Detection", image: "/placeholder.svg?height=400&width=600" },
        { title: "API Documentation", image: "/placeholder.svg?height=400&width=600" },
        { title: "Analytics Panel", image: "/placeholder.svg?height=400&width=600" },
      ],

      awards: [
        { title: "Best Payment Solution 2024", organization: "FinTech Awards", icon: Award },
        { title: "Security Excellence", organization: "Cybersecurity Awards", icon: Shield },
        { title: "Developer Choice", organization: "API Awards", icon: Target },
      ],
    },
  }

  const product = productData[productId]
  if (!product) return null

  const IconComponent = product.icon

  const tabs = [
    { id: "overview", label: "Overview", icon: Target },
    { id: "features", label: "Features", icon: Zap },
    { id: "screenshots", label: "Screenshots", icon: Monitor },
    { id: "testimonials", label: "Testimonials", icon: Star },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className={`relative py-20 bg-gradient-to-br ${product.gradient} overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container px-4 md:px-6 mx-auto max-w-7xl relative z-10">
          <ScrollReveal>
            <Link
              href="/products"
              className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors group"
            >
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Products
            </Link>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="text-white">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-4 backdrop-blur-sm">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <Badge className="bg-white/20 text-white border-white/30 mb-2">{product.status}</Badge>
                    <div className="text-sm text-white/80">{product.category}</div>
                  </div>
                </div>

                <h1 className="text-5xl md:text-6xl font-bold mb-4">{product.name}</h1>
                <p className="text-2xl md:text-3xl mb-6 text-white/90">{product.tagline}</p>
                <p className="text-lg mb-8 text-white/80 leading-relaxed">{product.description}</p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={product.website} target="_blank" rel="noopener noreferrer">
                    <AnimatedButton variant="secondary" size="lg" className="bg-white text-gray-900 hover:bg-white/90">
                      Visit Website
                      <ExternalLink className="ml-2 h-5 w-5" />
                    </AnimatedButton>
                  </a>
                  <AnimatedButton variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Demo
                  </AnimatedButton>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={product.heroImage || "/placeholder.svg"}
                    alt={product.name}
                    width={1200}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white/30 rounded-full animate-bounce delay-300"></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-teal-900">Key Metrics & Impact</h2>
              <p className="text-lg text-muted-foreground">Real numbers that showcase our product's success</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.keyMetrics.map((metric: any, index: number) => {
              const MetricIcon = metric.icon
              return (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 shadow-md">
                    <CardContent className="p-6">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${product.gradient} rounded-xl flex items-center justify-center mx-auto mb-4`}
                      >
                        <MetricIcon className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-teal-800 mb-2">{metric.value}</div>
                      <div className="font-semibold mb-1">{metric.label}</div>
                      <div className="text-sm text-muted-foreground">{metric.description}</div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-slate-50 sticky top-16 z-30 border-b border-gray-200">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <div className="flex justify-center">
            <div className="flex space-x-1 bg-white rounded-lg p-1 shadow-sm">
              {tabs.map((tab) => {
                const TabIcon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center px-6 py-3 rounded-md transition-all duration-300 ${
                      activeTab === tab.id
                        ? `bg-gradient-to-r ${product.gradient} text-white shadow-md`
                        : "text-gray-600 hover:text-teal-800 hover:bg-gray-50"
                    }`}
                  >
                    <TabIcon className="h-4 w-4 mr-2" />
                    {tab.label}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          {activeTab === "overview" && (
            <div className="space-y-16">
              {/* Product Description */}
              <ScrollReveal>
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-3xl font-bold mb-6 text-teal-900">About {product.name}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">{product.longDescription}</p>
                </div>
              </ScrollReveal>

              {/* Tech Stack */}
              <ScrollReveal delay={200}>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-6 text-teal-900">Built With Cutting-Edge Technology</h3>
                  <div className="flex flex-wrap justify-center gap-3">
                    {product.techStack.map((tech: string, index: number) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="px-4 py-2 text-sm hover:bg-teal-50 hover:border-teal-300 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Awards */}
              <ScrollReveal delay={400}>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-8 text-teal-900">Recognition & Awards</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {product.awards.map((award: any, index: number) => {
                      const AwardIcon = award.icon
                      return (
                        <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                          <CardContent className="p-6">
                            <div
                              className={`w-12 h-12 bg-gradient-to-r ${product.gradient} rounded-xl flex items-center justify-center mx-auto mb-4`}
                            >
                              <AwardIcon className="h-6 w-6 text-white" />
                            </div>
                            <h4 className="font-semibold mb-2">{award.title}</h4>
                            <p className="text-sm text-muted-foreground">{award.organization}</p>
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          )}

          {activeTab === "features" && (
            <div className="space-y-12">
              <ScrollReveal>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4 text-teal-900">Powerful Features</h2>
                  <p className="text-lg text-muted-foreground">Discover what makes {product.name} exceptional</p>
                </div>
              </ScrollReveal>

              <div className="space-y-16">
                {product.features.map((feature: any, index: number) => {
                  const FeatureIcon = feature.icon
                  return (
                    <ScrollReveal key={index} delay={index * 200}>
                      <div
                        className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                      >
                        <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                          <div className="flex items-center mb-6">
                            <div
                              className={`w-12 h-12 bg-gradient-to-r ${product.gradient} rounded-xl flex items-center justify-center mr-4`}
                            >
                              <FeatureIcon className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-teal-900">{feature.title}</h3>
                          </div>
                          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{feature.description}</p>
                          <div className="grid grid-cols-2 gap-3">
                            {feature.benefits.map((benefit: string, benefitIndex: number) => (
                              <div key={benefitIndex} className="flex items-center text-sm">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                {benefit}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                          <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                            <FeatureIcon className="h-16 w-16 text-gray-400" />
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>
                  )
                })}
              </div>
            </div>
          )}

          {activeTab === "screenshots" && (
            <div className="space-y-12">
              <ScrollReveal>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4 text-teal-900">Product Screenshots</h2>
                  <p className="text-lg text-muted-foreground">See {product.name} in action</p>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 gap-8">
                {product.screenshots.map((screenshot: any, index: number) => (
                  <ScrollReveal key={index} delay={index * 100}>
                    <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200">
                        <Image
                          src={screenshot.image || "/placeholder.svg"}
                          alt={screenshot.title}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-center">{screenshot.title}</h3>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          )}

          {activeTab === "testimonials" && (
            <div className="space-y-12">
              <ScrollReveal>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4 text-teal-900">What Users Say</h2>
                  <p className="text-lg text-muted-foreground">Real feedback from real users</p>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 gap-8">
                {product.testimonials.map((testimonial: any, index: number) => (
                  <ScrollReveal key={index} delay={index * 200}>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-8">
                        <div className="flex items-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <blockquote className="text-lg text-muted-foreground mb-6 italic leading-relaxed">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="flex items-center">
                          <img
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.author}
                            className="w-12 h-12 rounded-full mr-4"
                          />
                          <div>
                            <div className="font-semibold">{testimonial.author}</div>
                            <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 bg-gradient-to-r ${product.gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container px-4 md:px-6 mx-auto max-w-7xl relative z-10">
          <ScrollReveal>
            <div className="text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience {product.name}?</h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Join thousands of satisfied users and transform your{" "}
                {productId === "trovia" ? "travel experience" : "payment processing"} today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={product.website} target="_blank" rel="noopener noreferrer">
                  <AnimatedButton variant="secondary" size="lg" className="bg-white text-gray-900 hover:bg-white/90">
                    Get Started Now
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </AnimatedButton>
                </a>
                <AnimatedButton variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resources
                </AnimatedButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
