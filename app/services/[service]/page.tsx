import { notFound } from "next/navigation"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ServiceDetail from "@/components/ServiceDetail"
import type { Metadata } from "next"

const services = [
  "saas-development",
  "custom-software",
  "mobile-apps",
  "mvp-development",
  "ui-ux-design",
  "blockchain",
  "enterprise-development",
  "web-development",
]

export async function generateStaticParams() {
  return services.map((service) => ({
    service: service,
  }))
}

export async function generateMetadata({ params }: { params: { service: string } }): Promise<Metadata> {
  const serviceTitle = params.service
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return {
    title: `${serviceTitle} - Mobiverio Limited`,
    description: `Professional ${serviceTitle.toLowerCase()} services by Mobiverio Limited. Expert development team delivering cutting-edge solutions.`,
  }
}

export default function ServicePage({ params }: { params: { service: string } }) {
  if (!services.includes(params.service)) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <ServiceDetail serviceId={params.service} />
      </main>
      <Footer />
    </div>
  )
}
