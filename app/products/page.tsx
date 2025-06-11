import Header from "@/components/Header"
import ProductsShowcase from "@/components/ProductsShowcase"
import Footer from "@/components/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Products - Innovative Solutions | Mobiverio Limited",
  description:
    "Discover Trovia, TrezzaPay and other innovative products built by Mobiverio. Revolutionary solutions transforming travel, payments, and business operations.",
  keywords: "Trovia, TrezzaPay, SaaS products, travel platform, payment solutions, Mobiverio products",
}

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <ProductsShowcase />
      </main>
      <Footer />
    </div>
  )
}
