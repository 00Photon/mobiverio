import { Card, CardContent } from "@/components/ui/card"
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
  CheckCircle,
  Clock,
  Users,
  Star,
  TrendingUp,
  ArrowLeft,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface ServiceDetailProps {
  serviceId: string
}

export default function ServiceDetail({ serviceId }: ServiceDetailProps) {
  const serviceData: Record<string, any> = {
    "saas-development": {
      icon: Globe,
      title: "SaaS Development",
      subtitle: "Build Scalable Cloud-Native Platforms",
      description:
        "Transform your business idea into a powerful SaaS platform that scales with your growth. Our expert team specializes in building multi-tenant, cloud-native applications with enterprise-grade security and performance.",
      gradient: "from-blue-500 to-cyan-500",
      heroImage: "/placeholder.svg?height=400&width=800",
      overview:
        "Our SaaS development services encompass the entire lifecycle from initial concept to ongoing maintenance. We leverage modern cloud technologies, microservices architecture, and DevOps practices to deliver robust, scalable solutions that can handle millions of users while maintaining optimal performance.",
      keyFeatures: [
        {
          title: "Multi-Tenant Architecture",
          description: "Efficient resource utilization with secure data isolation",
          icon: Building,
        },
        {
          title: "API-First Design",
          description: "RESTful and GraphQL APIs for seamless integrations",
          icon: Code,
        },
        {
          title: "Auto-Scaling Infrastructure",
          description: "Automatically handle traffic spikes and optimize costs",
          icon: TrendingUp,
        },
        {
          title: "Advanced Analytics",
          description: "Built-in analytics and reporting capabilities",
          icon: Star,
        },
      ],
      process: [
        {
          step: "Discovery & Planning",
          description: "Understanding your business requirements and technical specifications",
          duration: "1-2 weeks",
        },
        {
          step: "Architecture Design",
          description: "Designing scalable, secure, and maintainable system architecture",
          duration: "2-3 weeks",
        },
        {
          step: "MVP Development",
          description: "Building core features for initial market validation",
          duration: "8-12 weeks",
        },
        {
          step: "Testing & Deployment",
          description: "Comprehensive testing and production deployment",
          duration: "2-3 weeks",
        },
        {
          step: "Launch & Support",
          description: "Go-to-market support and ongoing maintenance",
          duration: "Ongoing",
        },
      ],
      technologies: [
        "React/Next.js",
        "Node.js",
        "Python/Django",
        "AWS/Azure",
        "Docker/Kubernetes",
        "PostgreSQL/MongoDB",
        "Redis",
        "Stripe/PayPal",
      ],
      caseStudies: [
        {
          title: "FinTech Analytics Platform",
          description: "Real-time financial data processing platform serving 10,000+ active users",
          results: ["300% user growth in 6 months", "99.9% uptime", "Sub-second query response"],
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Project Management SaaS",
          description: "Collaborative project management tool for distributed teams",
          results: ["50,000+ projects managed", "40% productivity increase", "4.8/5 user rating"],
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    "custom-software": {
      icon: Code,
      title: "Custom Software Development",
      subtitle: "Tailored Solutions for Your Unique Needs",
      description:
        "Get software that fits your business like a glove. Our custom development services create bespoke solutions that address your specific challenges and unlock new opportunities for growth.",
      gradient: "from-purple-500 to-pink-500",
      heroImage: "/placeholder.svg?height=400&width=800",
      overview:
        "Every business is unique, and off-the-shelf solutions often fall short. Our custom software development services are designed to create solutions that perfectly align with your business processes, goals, and vision. From desktop applications to complex enterprise systems, we build software that grows with your business.",
      keyFeatures: [
        {
          title: "Bespoke Architecture",
          description: "Custom-designed architecture tailored to your specific requirements",
          icon: Building,
        },
        {
          title: "Legacy System Integration",
          description: "Seamlessly integrate with your existing systems and workflows",
          icon: Code,
        },
        {
          title: "Scalable Design",
          description: "Built to grow with your business and adapt to changing needs",
          icon: TrendingUp,
        },
        {
          title: "Full Ownership",
          description: "Complete source code ownership and documentation",
          icon: Shield,
        },
      ],
      process: [
        {
          step: "Requirements Analysis",
          description: "Deep dive into your business processes and technical requirements",
          duration: "2-3 weeks",
        },
        {
          step: "Solution Design",
          description: "Creating detailed technical specifications and user experience design",
          duration: "3-4 weeks",
        },
        {
          step: "Development Sprints",
          description: "Agile development with regular demos and feedback cycles",
          duration: "12-20 weeks",
        },
        {
          step: "Quality Assurance",
          description: "Comprehensive testing including unit, integration, and user acceptance testing",
          duration: "3-4 weeks",
        },
        {
          step: "Deployment & Training",
          description: "Production deployment and user training sessions",
          duration: "2-3 weeks",
        },
      ],
      technologies: [
        ".NET/C#",
        "Java/Spring",
        "Python/Django",
        "React/Angular",
        "SQL Server/Oracle",
        "Azure/AWS",
        "Docker",
        "Jenkins/GitLab CI",
      ],
      caseStudies: [
        {
          title: "Manufacturing ERP System",
          description: "Complete enterprise resource planning system for manufacturing company",
          results: ["40% efficiency increase", "50% cost reduction", "Real-time inventory tracking"],
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Healthcare Management System",
          description: "Patient management and electronic health records system",
          results: ["HIPAA compliant", "30% faster patient processing", "99.99% data accuracy"],
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    "mobile-apps": {
      icon: Smartphone,
      title: "Mobile App Development",
      subtitle: "Native & Cross-Platform Mobile Solutions",
      description:
        "Reach your customers wherever they are with powerful mobile applications. We create engaging, high-performance apps for iOS and Android that deliver exceptional user experiences.",
      gradient: "from-green-500 to-emerald-500",
      heroImage: "/placeholder.svg?height=400&width=800",
      overview:
        "Mobile-first is no longer optional—it's essential. Our mobile app development services cover the full spectrum from native iOS and Android apps to cross-platform solutions using React Native and Flutter. We focus on creating apps that not only look great but also perform flawlessly and provide intuitive user experiences.",
      keyFeatures: [
        {
          title: "Native Development",
          description: "Platform-specific apps leveraging native capabilities and performance",
          icon: Smartphone,
        },
        {
          title: "Cross-Platform Solutions",
          description: "React Native and Flutter apps for faster time-to-market",
          icon: Code,
        },
        {
          title: "App Store Optimization",
          description: "Optimized for app store discovery and downloads",
          icon: Star,
        },
        {
          title: "Push Notifications",
          description: "Engage users with targeted, personalized notifications",
          icon: Users,
        },
      ],
      process: [
        {
          step: "App Strategy & Planning",
          description: "Defining app goals, target audience, and feature roadmap",
          duration: "1-2 weeks",
        },
        {
          step: "UI/UX Design",
          description: "Creating intuitive, platform-specific user interfaces",
          duration: "3-4 weeks",
        },
        {
          step: "Development & Testing",
          description: "Agile development with continuous testing on real devices",
          duration: "10-16 weeks",
        },
        {
          step: "App Store Submission",
          description: "Preparing and submitting apps to Apple App Store and Google Play",
          duration: "1-2 weeks",
        },
        {
          step: "Launch & Optimization",
          description: "Post-launch monitoring, updates, and performance optimization",
          duration: "Ongoing",
        },
      ],
      technologies: [
        "Swift/iOS",
        "Kotlin/Android",
        "React Native",
        "Flutter/Dart",
        "Firebase",
        "AWS Mobile",
        "GraphQL",
        "Push Notifications",
      ],
      caseStudies: [
        {
          title: "E-commerce Mobile App",
          description: "Full-featured shopping app with AR try-on capabilities",
          results: ["1M+ downloads", "4.8★ app store rating", "60% mobile conversion rate"],
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Fitness Tracking App",
          description: "Social fitness app with wearable device integration",
          results: ["500K+ active users", "Featured by Apple", "85% user retention"],
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    "mvp-development": {
      icon: Zap,
      title: "MVP Development",
      subtitle: "Validate Your Ideas Quickly & Cost-Effectively",
      description:
        "Turn your innovative ideas into market-ready products with our rapid MVP development services. Get to market fast, validate your concept, and iterate based on real user feedback.",
      gradient: "from-yellow-500 to-orange-500",
      heroImage: "/placeholder.svg?height=400&width=800",
      overview:
        "Speed to market is crucial for startup success. Our MVP development approach focuses on building the core features that validate your business hypothesis while keeping development time and costs minimal. We help you test your ideas with real users, gather valuable feedback, and iterate quickly to find product-market fit.",
      keyFeatures: [
        {
          title: "Rapid Prototyping",
          description: "Quick wireframes and prototypes to visualize your concept",
          icon: Zap,
        },
        {
          title: "Core Feature Focus",
          description: "Identify and build only the essential features for validation",
          icon: Star,
        },
        {
          title: "Iterative Development",
          description: "Agile approach with weekly demos and feedback incorporation",
          icon: TrendingUp,
        },
        {
          title: "Investor-Ready",
          description: "Professional presentation and documentation for funding rounds",
          icon: Users,
        },
      ],
      process: [
        {
          step: "Concept Validation",
          description: "Analyzing market fit and defining core value proposition",
          duration: "1 week",
        },
        {
          step: "Feature Prioritization",
          description: "Identifying must-have features for initial release",
          duration: "1 week",
        },
        {
          step: "Rapid Development",
          description: "Building MVP with focus on speed and core functionality",
          duration: "4-8 weeks",
        },
        {
          step: "User Testing",
          description: "Gathering feedback from real users and stakeholders",
          duration: "1-2 weeks",
        },
        {
          step: "Iteration & Scale",
          description: "Refining based on feedback and planning full development",
          duration: "Ongoing",
        },
      ],
      technologies: [
        "React/Next.js",
        "Node.js/Express",
        "Firebase",
        "Vercel/Netlify",
        "Stripe",
        "MongoDB",
        "Tailwind CSS",
        "Analytics Tools",
      ],
      caseStudies: [
        {
          title: "Social Media Startup",
          description: "MVP for a niche social networking platform",
          results: ["8 weeks to market", "$2M seed funding", "10K+ beta users"],
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "EdTech Platform",
          description: "Online learning platform MVP with video streaming",
          results: ["6 weeks development", "500+ early adopters", "Series A preparation"],
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    "ui-ux-design": {
      icon: Palette,
      title: "UI/UX Design",
      subtitle: "User-Centered Design That Converts",
      description:
        "Create digital experiences that users love and businesses profit from. Our design team combines aesthetics with functionality to deliver interfaces that are both beautiful and highly effective.",
      gradient: "from-pink-500 to-rose-500",
      heroImage: "/placeholder.svg?height=400&width=800",
      overview:
        "Great design is invisible—it just works. Our UI/UX design services focus on creating intuitive, engaging experiences that guide users naturally toward their goals while reflecting your brand identity. We use data-driven design decisions, extensive user research, and iterative testing to ensure optimal user satisfaction and business outcomes.",
      keyFeatures: [
        {
          title: "User Research",
          description: "In-depth analysis of user behavior, needs, and pain points",
          icon: Users,
        },
        {
          title: "Wireframing & Prototyping",
          description: "Interactive prototypes to test and refine user flows",
          icon: Code,
        },
        {
          title: "Visual Design",
          description: "Beautiful, on-brand interfaces that engage and convert",
          icon: Palette,
        },
        {
          title: "Usability Testing",
          description: "Continuous testing and optimization based on user feedback",
          icon: Star,
        },
      ],
      process: [
        {
          step: "Discovery & Research",
          description: "Understanding users, competitors, and business objectives",
          duration: "2-3 weeks",
        },
        {
          step: "Information Architecture",
          description: "Organizing content and defining user flows",
          duration: "1-2 weeks",
        },
        {
          step: "Wireframing & Prototyping",
          description: "Creating low and high-fidelity prototypes",
          duration: "3-4 weeks",
        },
        {
          step: "Visual Design",
          description: "Applying brand identity and creating pixel-perfect designs",
          duration: "4-6 weeks",
        },
        {
          step: "Testing & Handoff",
          description: "User testing, refinements, and developer handoff",
          duration: "2-3 weeks",
        },
      ],
      technologies: [
        "Figma",
        "Adobe Creative Suite",
        "Sketch",
        "InVision",
        "Principle",
        "Framer",
        "Miro",
        "UsabilityHub",
      ],
      caseStudies: [
        {
          title: "Healthcare Dashboard Redesign",
          description: "Complete UX overhaul of a complex medical data platform",
          results: ["60% better usability", "95% user satisfaction", "40% faster task completion"],
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "E-commerce Platform",
          description: "Mobile-first design for a fashion e-commerce platform",
          results: ["25% conversion increase", "50% mobile engagement", "Design award winner"],
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    blockchain: {
      icon: Shield,
      title: "Blockchain Solutions",
      subtitle: "Secure, Decentralized Applications & Smart Contracts",
      description:
        "Harness the power of blockchain technology with our comprehensive development services. From smart contracts to full DApps, we build secure, transparent, and decentralized solutions.",
      gradient: "from-indigo-500 to-purple-500",
      heroImage: "/placeholder.svg?height=400&width=800",
      overview:
        "Blockchain technology is revolutionizing how we think about trust, transparency, and value exchange. Our blockchain development services cover everything from simple smart contracts to complex decentralized applications (DApps), NFT marketplaces, and DeFi protocols. We work with multiple blockchain networks to find the best fit for your specific use case.",
      keyFeatures: [
        {
          title: "Smart Contract Development",
          description: "Secure, audited smart contracts for various blockchain networks",
          icon: Shield,
        },
        {
          title: "DApp Development",
          description: "Full-stack decentralized applications with modern UIs",
          icon: Code,
        },
        {
          title: "Token Economics",
          description: "Design and implementation of tokenomics and governance models",
          icon: TrendingUp,
        },
        {
          title: "Security Audits",
          description: "Comprehensive security reviews and vulnerability assessments",
          icon: CheckCircle,
        },
      ],
      process: [
        {
          step: "Blockchain Strategy",
          description: "Determining the best blockchain network and architecture",
          duration: "1-2 weeks",
        },
        {
          step: "Smart Contract Design",
          description: "Designing secure and efficient smart contract architecture",
          duration: "2-3 weeks",
        },
        {
          step: "Development & Testing",
          description: "Building and testing on testnets with comprehensive test coverage",
          duration: "8-12 weeks",
        },
        {
          step: "Security Audit",
          description: "Third-party security audit and vulnerability assessment",
          duration: "2-3 weeks",
        },
        {
          step: "Mainnet Deployment",
          description: "Production deployment and ongoing monitoring",
          duration: "1-2 weeks",
        },
      ],
      technologies: [
        "Solidity",
        "Ethereum",
        "Polygon",
        "Binance Smart Chain",
        "Web3.js",
        "Hardhat",
        "IPFS",
        "MetaMask Integration",
      ],
      caseStudies: [
        {
          title: "NFT Marketplace",
          description: "Full-featured NFT marketplace with royalty management",
          results: ["$5M+ transaction volume", "10K+ NFTs minted", "Zero security incidents"],
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "DeFi Lending Protocol",
          description: "Decentralized lending and borrowing platform",
          results: ["$50M+ TVL", "15% APY average", "Multi-chain deployment"],
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    "enterprise-development": {
      icon: Building,
      title: "Enterprise Development",
      subtitle: "Mission-Critical Applications for Large Organizations",
      description:
        "Build robust, scalable enterprise applications that handle complex business processes, integrate with existing systems, and meet strict compliance requirements.",
      gradient: "from-slate-600 to-slate-800",
      heroImage: "/placeholder.svg?height=400&width=800",
      overview:
        "Enterprise applications require a different approach—they must be robust, secure, scalable, and integrate seamlessly with existing business processes. Our enterprise development services focus on building mission-critical applications that can handle high volumes, complex workflows, and strict compliance requirements while providing excellent user experiences.",
      keyFeatures: [
        {
          title: "Enterprise Architecture",
          description: "Scalable, maintainable architecture designed for enterprise needs",
          icon: Building,
        },
        {
          title: "System Integration",
          description: "Seamless integration with existing enterprise systems and databases",
          icon: Code,
        },
        {
          title: "Compliance & Security",
          description: "Built-in compliance with industry standards and regulations",
          icon: Shield,
        },
        {
          title: "24/7 Support",
          description: "Round-the-clock monitoring and support for critical systems",
          icon: Clock,
        },
      ],
      process: [
        {
          step: "Enterprise Assessment",
          description: "Analyzing existing systems, processes, and requirements",
          duration: "3-4 weeks",
        },
        {
          step: "Architecture Planning",
          description: "Designing scalable, secure enterprise architecture",
          duration: "4-6 weeks",
        },
        {
          step: "Phased Development",
          description: "Iterative development with minimal business disruption",
          duration: "16-24 weeks",
        },
        {
          step: "Integration & Testing",
          description: "System integration and comprehensive testing",
          duration: "4-6 weeks",
        },
        {
          step: "Deployment & Training",
          description: "Production deployment and comprehensive user training",
          duration: "3-4 weeks",
        },
      ],
      technologies: [
        "Java/Spring",
        ".NET Core",
        "Microservices",
        "Kubernetes",
        "Oracle/SQL Server",
        "SAP Integration",
        "Azure/AWS",
        "Enterprise Service Bus",
      ],
      caseStudies: [
        {
          title: "Fortune 500 CRM System",
          description: "Complete customer relationship management system",
          results: ["500K+ users", "99.9% uptime", "40% productivity increase"],
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Banking Core System",
          description: "Core banking system with real-time transaction processing",
          results: ["1M+ transactions/day", "PCI DSS compliant", "Sub-second response"],
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    "web-development": {
      icon: Monitor,
      title: "Web Development",
      subtitle: "Modern, Responsive Web Applications",
      description:
        "Create fast, responsive, and SEO-optimized web applications using the latest technologies. From simple websites to complex web platforms, we deliver exceptional digital experiences.",
      gradient: "from-teal-500 to-cyan-500",
      heroImage: "/placeholder.svg?height=400&width=800",
      overview:
        "Your website is often the first interaction customers have with your brand. Our web development services focus on creating fast, responsive, and engaging web applications that not only look great but also perform exceptionally well. We use modern frameworks and best practices to ensure your web presence drives business results.",
      keyFeatures: [
        {
          title: "Responsive Design",
          description: "Perfect experience across all devices and screen sizes",
          icon: Monitor,
        },
        {
          title: "SEO Optimized",
          description: "Built-in SEO best practices for better search rankings",
          icon: TrendingUp,
        },
        {
          title: "Performance Focused",
          description: "Optimized for speed with lazy loading and caching strategies",
          icon: Zap,
        },
        {
          title: "Modern Frameworks",
          description: "Built with React, Next.js, and other cutting-edge technologies",
          icon: Code,
        },
      ],
      process: [
        {
          step: "Planning & Strategy",
          description: "Defining goals, target audience, and technical requirements",
          duration: "1-2 weeks",
        },
        {
          step: "Design & Prototyping",
          description: "Creating responsive designs and interactive prototypes",
          duration: "2-3 weeks",
        },
        {
          step: "Development",
          description: "Building responsive, performant web applications",
          duration: "6-10 weeks",
        },
        {
          step: "Testing & Optimization",
          description: "Cross-browser testing and performance optimization",
          duration: "1-2 weeks",
        },
        {
          step: "Launch & Maintenance",
          description: "Deployment, monitoring, and ongoing maintenance",
          duration: "Ongoing",
        },
      ],
      technologies: [
        "React/Next.js",
        "Vue.js/Nuxt.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "GraphQL",
        "Vercel/Netlify",
        "Headless CMS",
      ],
      caseStudies: [
        {
          title: "E-learning Platform",
          description: "Interactive online learning platform with video streaming",
          results: ["50K+ students", "2s page load time", "95% mobile score"],
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Corporate Website",
          description: "Multi-language corporate website with CMS integration",
          results: ["300% traffic increase", "Top 3 search rankings", "98% performance score"],
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
  }

  const service = serviceData[serviceId]
  if (!service) return null

  const IconComponent = service.icon

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className={`relative py-20 bg-gradient-to-r ${service.gradient} overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container px-4 md:px-6 mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Link
                href="/services"
                className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Services
              </Link>
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-4 backdrop-blur-sm">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Professional Service
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{service.title}</h1>
              <p className="text-xl md:text-2xl mb-6 text-white/90">{service.subtitle}</p>
              <p className="text-lg mb-8 text-white/80 leading-relaxed">{service.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-gray-900 hover:bg-white/90">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  View Portfolio
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={service.heroImage || "/placeholder.svg"}
                  alt={service.title}
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Service Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{service.overview}</p>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {service.keyFeatures.map((feature: any, index: number) => {
              const FeatureIcon = feature.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mx-auto mb-4`}
                    >
                      <FeatureIcon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Technologies */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Technologies We Use</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {service.technologies.map((tech: string, index: number) => (
                <Badge key={index} variant="outline" className="px-4 py-2">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Development Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow a proven methodology to ensure successful project delivery
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 transform md:-translate-x-0.5"></div>

            <div className="space-y-8">
              {service.process.map((step: any, index: number) => (
                <div key={index} className="relative flex items-center">
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center transform md:-translate-x-4 z-10">
                    <span className="text-white text-sm font-semibold">{index + 1}</span>
                  </div>
                  <div className="ml-16 md:ml-0 md:w-1/2 md:pr-8">
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-semibold">{step.step}</h3>
                          <Badge variant="outline" className="text-xs">
                            <Clock className="h-3 w-3 mr-1" />
                            {step.duration}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground">{step.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from real projects - see how we've helped businesses succeed
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {service.caseStudies.map((caseStudy: any, index: number) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100">
                  <Image
                    src={caseStudy.image || "/placeholder.svg"}
                    alt={caseStudy.title}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{caseStudy.title}</h3>
                  <p className="text-muted-foreground mb-4">{caseStudy.description}</p>
                  <div className="space-y-2">
                    {caseStudy.results.map((result: string, resultIndex: number) => (
                      <div key={resultIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {result}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 bg-gradient-to-r ${service.gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container px-4 md:px-6 mx-auto max-w-7xl relative z-10">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Let's discuss how our {service.title.toLowerCase()} services can transform your business and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-white/90">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
