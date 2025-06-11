"use client"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import ProductsShowcase from "@/components/ProductsShowcase"
import WorkShowcase from "@/components/WorkShowcase"
import TestimonialCarousel from "@/components/TestimonialCarousel"
import AboutUs from "@/components/AboutUs"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"
import FloatingCTA from "@/components/FloatingCTA"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <ProductsShowcase />
        <WorkShowcase />
        <TestimonialCarousel />
        <AboutUs />
        <CTA />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  )
}
