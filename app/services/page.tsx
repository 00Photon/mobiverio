import Header from "@/components/Header"
import ServicesGrid from "@/components/ServicesGrid"
import Footer from "@/components/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services - Mobiverio Limited",
  description:
    "Comprehensive technology solutions including SaaS development, mobile apps, blockchain, and enterprise software development.",
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <ServicesGrid />
      </main>
      <Footer />
    </div>
  )
}
