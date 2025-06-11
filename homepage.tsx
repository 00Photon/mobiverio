"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Database, Shield, Star, Users, Zap, ChevronRight, Globe, Server } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Component() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center backdrop-blur-sm bg-black/20 border-b border-white/10 sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <Code className="h-5 w-5 text-white" />
          </div>
          <span className="ml-2 text-xl font-bold text-white">Mobiverio Limited</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#services" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            Services
          </Link>
          <Link href="#work" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            Our Work
          </Link>
          <Link href="#testimonials" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            Testimonials
          </Link>
          <Link href="#contact" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            Contact
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-spin"
              style={{ animationDuration: "20s" }}
            ></div>
          </div>

          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                backgroundSize: "20px 20px",
              }}
            ></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div
              className={`flex flex-col items-center space-y-8 text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <Badge
                variant="secondary"
                className="bg-white/10 text-white border-white/20 hover:bg-white/20 transition-colors"
              >
                <Zap className="w-3 h-3 mr-1" />
                Cutting-Edge Technology Solutions
              </Badge>

              <div className="space-y-4 max-w-4xl">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white">
                  Transform Your Business with
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {" "}
                    Next-Gen Solutions
                  </span>
                </h1>
                <p className="mx-auto max-w-[700px] text-white/80 text-lg md:text-xl leading-relaxed">
                  We craft powerful SaaS platforms, secure blockchain applications, and robust enterprise solutions that
                  drive innovation and accelerate growth for forward-thinking companies.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-8 py-6 text-lg font-semibold group"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold"
                >
                  View Our Work
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">150+</div>
                  <div className="text-white/60 text-sm">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">98%</div>
                  <div className="text-white/60 text-sm">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">24/7</div>
                  <div className="text-white/60 text-sm">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4">
                Our Expertise
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Comprehensive Technology Solutions
              </h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground text-lg">
                From concept to deployment, we deliver end-to-end solutions that power your digital transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">SaaS Development</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base leading-relaxed mb-4">
                    Scalable, cloud-native SaaS platforms built with modern architectures. From MVP to enterprise-grade
                    solutions.
                  </CardDescription>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Multi-tenant architecture</li>
                    <li>• API-first development</li>
                    <li>• Auto-scaling infrastructure</li>
                    <li>• Advanced analytics</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Blockchain Solutions</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base leading-relaxed mb-4">
                    Secure, decentralized applications and smart contracts. DeFi, NFTs, and custom blockchain
                    implementations.
                  </CardDescription>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Smart contract development</li>
                    <li>• DApp creation</li>
                    <li>• Token economics</li>
                    <li>• Security audits</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Server className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Enterprise Solutions</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base leading-relaxed mb-4">
                    Mission-critical enterprise applications with robust security, compliance, and integration
                    capabilities.
                  </CardDescription>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Legacy system modernization</li>
                    <li>• Enterprise integrations</li>
                    <li>• Compliance & security</li>
                    <li>• Performance optimization</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Work Showcase */}
        <section id="work" className="w-full py-20 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4">
                Portfolio
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Recent Success Stories
              </h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground text-lg">
                Discover how we've helped businesses transform their operations with innovative technology solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-white/20 text-white border-0 mb-2">SaaS Platform</Badge>
                    <h3 className="text-white font-semibold text-lg">FinTech Analytics Dashboard</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">
                    Real-time financial analytics platform serving 10,000+ users with advanced data visualization and
                    AI-powered insights.
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-1" />
                    10K+ Active Users
                  </div>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-video bg-gradient-to-br from-purple-500 to-pink-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-white/20 text-white border-0 mb-2">Blockchain</Badge>
                    <h3 className="text-white font-semibold text-lg">NFT Marketplace</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">
                    Decentralized marketplace for digital assets with smart contract automation and cross-chain
                    compatibility.
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Database className="h-4 w-4 mr-1" />
                    $2M+ Transaction Volume
                  </div>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-video bg-gradient-to-br from-green-500 to-emerald-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-white/20 text-white border-0 mb-2">Enterprise</Badge>
                    <h3 className="text-white font-semibold text-lg">Supply Chain Management</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">
                    End-to-end supply chain visibility platform with IoT integration and predictive analytics for
                    Fortune 500 client.
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Zap className="h-4 w-4 mr-1" />
                    40% Efficiency Increase
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="group">
                View All Projects
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="w-full py-20 bg-white">
          <div className="container px-4 md:px-6">
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
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-4 italic">
                  "Mobiverio transformed our legacy systems into a modern, scalable platform. Their expertise in
                  enterprise solutions is unmatched."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                    JS
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold">John Smith</div>
                    <div className="text-sm text-muted-foreground">CTO, TechCorp Inc.</div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-4 italic">
                  "The blockchain solution they built for us revolutionized our supply chain transparency. Exceptional
                  work and ongoing support."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                    MJ
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold">Maria Johnson</div>
                    <div className="text-sm text-muted-foreground">VP Operations, Global Logistics</div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-4 italic">
                  "Our SaaS platform launch was a huge success thanks to Mobiverio's technical expertise and strategic
                  guidance. Highly recommended!"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-semibold">
                    DL
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold">David Lee</div>
                    <div className="text-sm text-muted-foreground">Founder, StartupXYZ</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Ready to Transform Your Business?
                </h2>
                <p className="max-w-[600px] mx-auto text-white/80 text-lg">
                  Let's discuss how our cutting-edge solutions can accelerate your digital transformation and drive
                  unprecedented growth.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-white/90 px-8 py-6 text-lg font-semibold group"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold"
                >
                  Schedule Consultation
                </Button>
              </div>

              <div className="pt-8 text-white/60 text-sm">
                <p>Trusted by 150+ companies worldwide • 24/7 support • 98% client satisfaction</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 bg-slate-900 border-t border-white/10">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Code className="h-5 w-5 text-white" />
                </div>
                <span className="ml-2 text-xl font-bold text-white">Mobiverio Limited</span>
              </div>
              <p className="text-white/60 text-sm">
                Transforming businesses with next-generation technology solutions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-white/60">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    SaaS Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blockchain Solutions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Enterprise Applications
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Consulting
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-white/60">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-white/60">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs text-white/60">
              © {new Date().getFullYear()} Mobiverio Limited. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <Link href="#" className="text-xs text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-white/60 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
