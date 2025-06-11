import Header from "@/components/Header"
import ServicesGrid from "@/components/ServicesGrid"
import AboutUs from "@/components/AboutUs"
import Footer from "@/components/Footer"
import type { Metadata } from "next"
import Hero from "@/components/Hero-copy"

export const metadata: Metadata = {
  title: "Our Services - Mobiverio Limited",
  description:
    "Comprehensive technology solutions including SaaS development, mobile apps, blockchain, and enterprise software development.",
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <main className="flex-1">
        <AboutUs />
        {/* <CTA /> */}
      </main>
      <Footer />
    </div>
  )
}
