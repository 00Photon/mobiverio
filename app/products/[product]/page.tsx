import { notFound } from "next/navigation"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProductDetail from "@/components/ProductDetail"
import type { Metadata } from "next"

const products = ["trovia", "trezzapay"]

export async function generateStaticParams() {
  return products.map((product) => ({
    product: product,
  }))
}

export async function generateMetadata({ params }: { params: { product: string } }): Promise<Metadata> {
  const productName = params.product.charAt(0).toUpperCase() + params.product.slice(1)

  return {
    title: `${productName} - Revolutionary Solution | Mobiverio Limited`,
    description: `Discover ${productName}, an innovative product built by Mobiverio Limited. Learn about features, benefits, and how it's transforming the industry.`,
    keywords: `${productName}, Mobiverio, SaaS, innovation, technology solution`,
  }
}

export default function ProductPage({ params }: { params: { product: string } }) {
  if (!products.includes(params.product)) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <ProductDetail productId={params.product} />
      </main>
      <Footer />
    </div>
  )
}
