import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Globe,
  Code,
  Smartphone,
  Zap,
  Palette,
  Shield,
  Building,
  Monitor,
  ArrowRight,
  Users,
  TrendingUp,
  Clock,
} from "lucide-react"
import Link from "next/link"

export default function ServicesGrid() {
  const services = [
    {
      id: "saas-development",
      icon: Globe,
      title: "SaaS Development",
      description:
        "Build scalable, cloud-native SaaS platforms with multi-tenant architecture, API-first design, and enterprise-grade security.",
      gradient: "from-blue-500 to-cyan-500",
      caseStudy: {
        client: "FinTech Analytics Platform",
        result: "10,000+ active users",
        metric: "300% user growth",
        icon: Users,
      },
      features: ["Multi-tenant Architecture", "API-first Design", "Auto-scaling", "Advanced Analytics"],
    },
    {
      id: "custom-software",
      icon: Code,
      title: "Custom Software",
      description:
        "Tailored software solutions designed specifically for your business needs, from concept to deployment and beyond.",
      gradient: "from-purple-500 to-pink-500",
      caseStudy: {
        client: "Manufacturing ERP System",
        result: "40% efficiency increase",
        metric: "50% cost reduction",
        icon: TrendingUp,
      },
      features: ["Custom Architecture", "Legacy Integration", "Scalable Design", "Ongoing Support"],
    },
    {
      id: "mobile-apps",
      icon: Smartphone,
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android.",
      gradient: "from-green-500 to-emerald-500",
      caseStudy: {
        client: "E-commerce Mobile App",
        result: "1M+ downloads",
        metric: "4.8★ app store rating",
        icon: Users,
      },
      features: ["Native Development", "Cross-platform", "App Store Optimization", "Push Notifications"],
    },
    {
      id: "mvp-development",
      icon: Zap,
      title: "MVP Development",
      description:
        "Rapid MVP development to validate your ideas quickly and cost-effectively before full-scale development.",
      gradient: "from-yellow-500 to-orange-500",
      caseStudy: {
        client: "Social Media Startup",
        result: "8 weeks to market",
        metric: "$2M seed funding",
        icon: Clock,
      },
      features: ["Rapid Prototyping", "Market Validation", "Iterative Development", "Investor-ready"],
    },
    {
      id: "ui-ux-design",
      icon: Palette,
      title: "UI/UX Design",
      description:
        "User-centered design that creates intuitive, engaging experiences that drive user adoption and satisfaction.",
      gradient: "from-pink-500 to-rose-500",
      caseStudy: {
        client: "Healthcare Dashboard",
        result: "60% better usability",
        metric: "95% user satisfaction",
        icon: TrendingUp,
      },
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
    },
    {
      id: "blockchain",
      icon: Shield,
      title: "Blockchain Solutions",
      description:
        "Secure, decentralized applications, smart contracts, and blockchain integrations for the future of digital transactions.",
      gradient: "from-indigo-500 to-purple-500",
      caseStudy: {
        client: "NFT Marketplace",
        result: "$5M+ transactions",
        metric: "Zero security incidents",
        icon: Shield,
      },
      features: ["Smart Contracts", "DApp Development", "Token Economics", "Security Audits"],
    },
    {
      id: "enterprise-development",
      icon: Building,
      title: "Enterprise Development",
      description:
        "Mission-critical enterprise applications with robust security, compliance, and integration capabilities.",
      gradient: "from-slate-600 to-slate-800",
      caseStudy: {
        client: "Fortune 500 CRM",
        result: "99.9% uptime",
        metric: "500K+ users",
        icon: Building,
      },
      features: ["Enterprise Architecture", "Compliance", "Integration", "24/7 Support"],
    },
    {
      id: "web-development",
      icon: Monitor,
      title: "Web Development",
      description:
        "Modern, responsive web applications built with cutting-edge technologies for optimal performance and SEO.",
      gradient: "from-teal-500 to-cyan-500",
      caseStudy: {
        client: "E-learning Platform",
        result: "50K+ students",
        metric: "2s page load time",
        icon: Users,
      },
      features: ["Responsive Design", "SEO Optimized", "Performance", "Modern Frameworks"],
    },
  ]

  return (
    <section className="w-full py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
            Our Services
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Comprehensive Technology
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {" "}
              Solutions
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we deliver end-to-end technology solutions that drive innovation and accelerate
            your business growth across all digital platforms.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            const CaseStudyIcon = service.caseStudy.icon

            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {index + 1} of {services.length}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl mb-3">{service.title}</CardTitle>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Case Study */}
                  <div className="bg-slate-50 rounded-lg p-4 mb-6">
                    <div className="flex items-center mb-2">
                      <CaseStudyIcon className="h-4 w-4 text-purple-600 mr-2" />
                      <h4 className="font-semibold text-sm">Case Study</h4>
                    </div>
                    <p className="text-sm font-medium mb-1">{service.caseStudy.client}</p>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{service.caseStudy.result}</span>
                      <span className="font-semibold text-green-600">{service.caseStudy.metric}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link href={`/services/${service.id}`}>
                    <Button className="w-full group/btn">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-purple-600 to-pink-600 border-0 text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-black/10"></div>
            <CardContent className="p-8 md:p-12 relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-lg opacity-95 mb-6 max-w-2xl mx-auto">
                Let's discuss how our comprehensive technology solutions can transform your business and drive
                unprecedented growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90">
                  Get Free Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  View Our Portfolio
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
