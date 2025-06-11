import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Shield, Server } from "lucide-react"
import ScrollReveal from "./ScrollReveal"
import AnimatedServiceIcon from "./AnimatedServiceIcon"

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: "SaaS Development",
      description:
        "Scalable, cloud-native SaaS platforms built with modern architectures. From MVP to enterprise-grade solutions.",
      features: [
        "Multi-tenant architecture",
        "API-first development",
        "Auto-scaling infrastructure",
        "Advanced analytics",
      ],
      gradient: "from-teal-600 to-teal-500",
    },
    {
      icon: Shield,
      title: "Blockchain Solutions",
      description:
        "Secure, decentralized applications and smart contracts. DeFi, NFTs, and custom blockchain implementations.",
      features: ["Smart contract development", "DApp creation", "Token economics", "Security audits"],
      gradient: "from-red-500 to-red-400",
    },
    {
      icon: Server,
      title: "Enterprise Solutions",
      description:
        "Mission-critical enterprise applications with robust security, compliance, and integration capabilities.",
      features: [
        "Legacy system modernization",
        "Enterprise integrations",
        "Compliance & security",
        "Performance optimization",
      ],
      gradient: "from-teal-700 to-teal-600",
    },
  ]

  return (
    <section id="services" className="w-full py-20 bg-white">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-teal-50 text-teal-800 border-teal-200">
              Our Expertise
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-teal-900">
              Comprehensive Technology Solutions
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground text-lg">
              From concept to deployment, we deliver end-to-end solutions that power your digital transformation.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <ScrollReveal key={index} delay={index * 200}>
                <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-4 border-0 shadow-lg relative overflow-hidden">
                  {/* Hover background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <CardHeader className="text-center pb-4 relative z-10">
                    <div className="flex justify-center mb-4">
                      <AnimatedServiceIcon icon={IconComponent} gradient={service.gradient} />
                    </div>
                    <CardTitle className="text-xl text-teal-900 group-hover:text-teal-800 transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center relative z-10">
                    <CardDescription className="text-base leading-relaxed mb-4 text-gray-600">
                      {service.description}
                    </CardDescription>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300"
                          style={{ transitionDelay: `${featureIndex * 50}ms` }}
                        >
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
