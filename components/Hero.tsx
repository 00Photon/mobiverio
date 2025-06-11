"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap } from "lucide-react"
import AnimatedButton from "./AnimatedButton"
import ScrollReveal from "./ScrollReveal"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 -mt-16 pt-32">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-red-500/10 to-red-400/10 rounded-full blur-3xl animate-spin"
          style={{ animationDuration: "20s" }}
        ></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
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

      <div className="container px-4 md:px-6 relative z-10 mx-auto max-w-7xl">
        <div
          className={`flex flex-col items-center space-y-8 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <ScrollReveal delay={200}>
            <Badge
              variant="secondary"
              className="bg-white/10 text-white border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <Zap className="w-3 h-3 mr-1 animate-pulse" />
              Cutting-Edge Technology Solutions
            </Badge>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="space-y-4 max-w-4xl">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white">
                Transform Your Business with
                <span className="bg-gradient-to-r from-red-400 to-red-300 bg-clip-text text-transparent animate-gradient">
                  {" "}
                  Next-Gen Solutions
                </span>
              </h1>
              <p className="mx-auto max-w-[700px] text-white/80 text-lg md:text-xl leading-relaxed">
                We craft powerful SaaS platforms, secure blockchain applications, and robust enterprise solutions that
                drive innovation and accelerate growth for forward-thinking companies.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <div className="flex flex-col sm:flex-row gap-4">
              <AnimatedButton variant="secondary" size="lg" className="px-8 py-6 text-lg font-semibold group">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </AnimatedButton>
              <AnimatedButton
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold"
              >
                View Our Work
              </AnimatedButton>
            </div>
          </ScrollReveal>

          {/* Animated Stats */}
          <ScrollReveal delay={800}>
            <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl">
              {[
                { number: "150+", label: "Projects Delivered" },
                { number: "98%", label: "Client Satisfaction" },
                { number: "24/7", label: "Support Available" },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
