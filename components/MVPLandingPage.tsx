"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Clock,
  DollarSign,
  Users,
  CheckCircle,
  Star,
  ArrowRight,
  Calendar,
  Target,
  Rocket,
  Shield,
  ChevronDown,
  ChevronUp,
  Phone,
} from "lucide-react"

export default function MVPLandingPage() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectDescription: "",
    timeline: "",
    budget: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    setFormData({
      ...formData,
      [target.name]: target.value,
    })
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission client-side
    console.log("Form submitted:", formData)
    // You can add your form submission logic here
    alert("Thank you for your submission! We'll get back to you within 24 hours.")
  }

  const pricingTiers = [
    {
      name: "Starter MVP",
      price: "$15,000",
      duration: "4-6 weeks",
      description: "Perfect for validating your core concept",
      features: [
        "Core feature development",
        "Basic UI/UX design",
        "User authentication",
        "Database setup",
        "Basic analytics",
        "Mobile responsive",
        "2 rounds of revisions",
        "Basic deployment",
      ],
      popular: false,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Growth MVP",
      price: "$25,000",
      duration: "6-8 weeks",
      description: "Comprehensive MVP with advanced features",
      features: [
        "Everything in Starter",
        "Advanced UI/UX design",
        "Payment integration",
        "Admin dashboard",
        "Advanced analytics",
        "API development",
        "3 rounds of revisions",
        "Production deployment",
        "1 month support",
      ],
      popular: true,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Scale MVP",
      price: "$40,000",
      duration: "8-12 weeks",
      description: "Enterprise-ready MVP with full features",
      features: [
        "Everything in Growth",
        "Custom integrations",
        "Advanced security",
        "Multi-user roles",
        "Real-time features",
        "Mobile app (basic)",
        "Unlimited revisions",
        "DevOps setup",
        "3 months support",
        "Investor pitch deck",
      ],
      popular: false,
      gradient: "from-green-500 to-emerald-500",
    },
  ]

  const successStories = [
    {
      company: "TechFlow",
      founder: "Sarah Chen",
      industry: "SaaS",
      description: "Project management tool for remote teams",
      timeline: "8 weeks",
      funding: "$2M Series A",
      users: "10,000+",
      image: "/placeholder.svg?height=300&width=400",
      quote:
        "Mobiverio helped us validate our idea and get to market incredibly fast. The MVP they built became the foundation for our Series A funding.",
      results: ["8 weeks to market", "$2M funding raised", "10K+ active users", "40% month-over-month growth"],
    },
    {
      company: "EcoTrack",
      founder: "Marcus Rodriguez",
      industry: "GreenTech",
      description: "Carbon footprint tracking for businesses",
      timeline: "6 weeks",
      funding: "$1.5M Seed",
      users: "5,000+",
      image: "/placeholder.svg?height=300&width=400",
      quote:
        "The speed and quality of development was exceptional. We were able to onboard our first enterprise clients within weeks of launch.",
      results: ["6 weeks development", "$1.5M seed funding", "50+ enterprise clients", "Featured in TechCrunch"],
    },
    {
      company: "HealthSync",
      founder: "Dr. Aisha Patel",
      industry: "HealthTech",
      description: "Telemedicine platform for rural areas",
      timeline: "10 weeks",
      funding: "$3M Series A",
      users: "25,000+",
      image: "/placeholder.svg?height=300&width=400",
      quote:
        "Mobiverio understood our vision and delivered a platform that's now serving thousands of patients. Their expertise was invaluable.",
      results: ["10 weeks to launch", "$3M Series A", "25K+ patients served", "99.9% uptime"],
    },
  ]

  const timeline = [
    {
      week: "Week 1",
      title: "Discovery & Planning",
      description: "Requirements gathering, user research, and technical architecture planning",
      deliverables: ["Project roadmap", "Technical specifications", "User personas", "Wireframes"],
    },
    {
      week: "Week 2-3",
      title: "Design & Prototyping",
      description: "UI/UX design, interactive prototypes, and user flow optimization",
      deliverables: ["Design system", "High-fidelity mockups", "Interactive prototype", "User testing results"],
    },
    {
      week: "Week 4-6",
      title: "Core Development",
      description: "Backend development, database setup, and core feature implementation",
      deliverables: ["Backend API", "Database schema", "Core features", "Authentication system"],
    },
    {
      week: "Week 7-8",
      title: "Frontend & Integration",
      description: "Frontend development, API integration, and comprehensive testing",
      deliverables: ["Complete frontend", "API integration", "Testing suite", "Performance optimization"],
    },
    {
      week: "Week 8",
      title: "Launch & Handoff",
      description: "Deployment, documentation, training, and post-launch support setup",
      deliverables: ["Production deployment", "Documentation", "Training sessions", "Support handoff"],
    },
  ]

  const faqs = [
    {
      question: "What exactly is included in an MVP?",
      answer:
        "An MVP includes the core features necessary to validate your business idea with real users. This typically includes user authentication, your main value proposition features, basic UI/UX, database setup, and deployment. We focus on functionality over perfection to get you to market quickly.",
    },
    {
      question: "How do you ensure the MVP will attract investors?",
      answer:
        "We build MVPs with investor presentations in mind. This includes clean, professional design, solid technical architecture, user analytics integration, and comprehensive documentation. We also provide pitch deck templates and can assist with demo preparation.",
    },
    {
      question: "Can you help with user testing and feedback collection?",
      answer:
        "We integrate analytics tools, user feedback systems, and can set up A/B testing frameworks. We also provide guidance on interpreting user data and planning your next development phase based on feedback.",
    },
    {
      question: "What happens after the MVP is launched?",
      answer:
        "We provide ongoing support and can help you iterate based on user feedback. Many clients continue with us for their full product development. We offer maintenance packages and can scale your team as needed.",
    },
    {
      question: "Do you work with non-technical founders?",
      answer:
        "Yes! Most of our clients are non-technical founders. We excel at translating business ideas into technical solutions and provide clear communication throughout the process. We also offer technical advisory services.",
    },
    {
      question: "What if my idea changes during development?",
      answer:
        "We expect and plan for changes! Our agile approach allows for flexibility. Each pricing tier includes revision rounds, and we can accommodate scope changes with transparent pricing adjustments.",
    },
    {
      question: "How do you handle intellectual property?",
      answer:
        "You retain full ownership of your IP. We sign comprehensive NDAs and IP assignment agreements before starting any work. All code, designs, and documentation belong to you upon project completion.",
    },
    {
      question: "Can you help with technical hiring after launch?",
      answer:
        "Yes! We can help you build your technical team, provide technical interviews, and offer ongoing advisory services. Many of our clients have successfully built their own teams with our guidance.",
    },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container px-4 md:px-6 mx-auto max-w-7xl relative z-10">
          <div className="text-center text-white mb-16">
            <Badge className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20">
              <Rocket className="w-4 h-4 mr-2" />
              Trusted by 100+ Startups
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Launch Your Startup
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}
                in 8 Weeks
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-4xl mx-auto leading-relaxed">
              Turn your innovative idea into a market-ready MVP. Get real user feedback, attract investors, and validate
              your concept with our proven rapid development process.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-white/90 px-8 py-6 text-lg font-semibold">
                Start Your MVP Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold"
              >
                View Success Stories
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">8 Weeks</div>
                <div className="text-white/60 text-sm">Average Launch Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">$50M+</div>
                <div className="text-white/60 text-sm">Funding Raised</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">95%</div>
                <div className="text-white/60 text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">100+</div>
                <div className="text-white/60 text-sm">MVPs Launched</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Startups Choose Mobiverio</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We understand the startup journey and have the expertise to turn your vision into reality
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: "Lightning Fast",
                description: "Get to market in 8 weeks or less with our proven rapid development process",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: DollarSign,
                title: "Investor Ready",
                description: "Professional MVPs that attract funding and impress potential investors",
                gradient: "from-green-500 to-emerald-500",
              },
              {
                icon: Users,
                title: "User Focused",
                description: "Built with user feedback loops and analytics to validate your assumptions",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                icon: Shield,
                title: "Risk Free",
                description: "Fixed pricing, clear timelines, and money-back guarantee if not satisfied",
                gradient: "from-orange-500 to-red-500",
              },
            ].map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border-0 shadow-md">
                  <CardContent className="p-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${benefit.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our 8-Week MVP Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that gets you from idea to launch in record time
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 transform md:-translate-x-0.5"></div>

            <div className="space-y-8">
              {timeline.map((phase, index) => (
                <div key={index} className="relative flex items-start">
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center transform md:-translate-x-4 z-10">
                    <span className="text-white text-sm font-semibold">{index + 1}</span>
                  </div>
                  <div className="ml-16 md:ml-0 md:w-1/2 md:pr-8">
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <Badge variant="outline" className="text-xs">
                            {phase.week}
                          </Badge>
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{phase.title}</h3>
                        <p className="text-muted-foreground mb-4">{phase.description}</p>
                        <div className="space-y-2">
                          <h4 className="font-medium text-sm">Deliverables:</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {phase.deliverables.map((deliverable, deliverableIndex) => (
                              <div key={deliverableIndex} className="flex items-center text-sm text-muted-foreground">
                                <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                                {deliverable}
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Startup Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real founders, real results - see how our MVPs helped startups raise funding and grow
            </p>
          </div>

          <div className="space-y-12">
            {successStories.map((story, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}>
                  <div className={`aspect-video md:aspect-auto ${index % 2 === 1 ? "md:order-2" : ""}`}>
                    <img
                      src={story.image || "/placeholder.svg"}
                      alt={story.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`p-8 md:p-12 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                    <div className="flex items-center mb-4">
                      <Badge variant="outline" className="mr-3">
                        {story.industry}
                      </Badge>
                      <div className="flex items-center text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{story.company}</h3>
                    <p className="text-muted-foreground mb-4">{story.description}</p>
                    <blockquote className="text-lg italic mb-6 border-l-4 border-purple-500 pl-4">
                      "{story.quote}"
                    </blockquote>
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                        {story.founder
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <div className="font-semibold">{story.founder}</div>
                        <div className="text-sm text-muted-foreground">Founder, {story.company}</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {story.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transparent MVP Pricing</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the package that fits your needs and budget. No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 ${
                  tier.popular ? "ring-2 ring-purple-500 scale-105" : ""
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardHeader className={`text-center ${tier.popular ? "pt-12" : "pt-6"}`}>
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${tier.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                  <div className="text-4xl font-bold mb-2">{tier.price}</div>
                  <p className="text-muted-foreground mb-2">{tier.duration}</p>
                  <p className="text-sm text-muted-foreground">{tier.description}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      tier.popular
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                        : ""
                    }`}
                    variant={tier.popular ? "default" : "outline"}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Need a custom solution?</p>
            <Button variant="outline" size="lg">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our MVP development process
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <button
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  >
                    <h3 className="font-semibold pr-4">{faq.question}</h3>
                    {expandedFAQ === index ? (
                      <ChevronUp className="h-5 w-5 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 flex-shrink-0" />
                    )}
                  </button>
                  {expandedFAQ === index && (
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Launch Your MVP?</h2>
            <p className="text-lg text-muted-foreground">
              Tell us about your idea and get a detailed quote within 24 hours
            </p>
          </div>

          <Card className="shadow-xl">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="projectDescription">Project Description *</Label>
                  <Textarea
                    id="projectDescription"
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="mt-2"
                    placeholder="Tell us about your startup idea, target audience, and key features you envision..."
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="timeline">Desired Timeline</Label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleSelectChange}
                      className="mt-2 w-full p-2 border border-gray-300 rounded-md"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP (4-6 weeks)</option>
                      <option value="standard">Standard (6-8 weeks)</option>
                      <option value="flexible">Flexible (8+ weeks)</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="budget">Budget Range</Label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleSelectChange}
                      className="mt-2 w-full p-2 border border-gray-300 rounded-md"
                    >
                      <option value="">Select budget</option>
                      <option value="15k">$10k - $20k</option>
                      <option value="25k">$20k - $30k</option>
                      <option value="40k">$30k - $50k</option>
                      <option value="custom">$50k+</option>
                    </select>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Get My Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  We'll respond within 24 hours with a detailed proposal and next steps
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container px-4 md:px-6 mx-auto max-w-7xl relative z-10">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join 100+ Successful Startups</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Don't let your great idea remain just an idea. Turn it into a market-ready MVP and start your journey to
              success today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90">
                Start Your MVP Journey
                <Rocket className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Phone className="mr-2 h-5 w-5" />
                Call Us: (555) 123-4567
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
