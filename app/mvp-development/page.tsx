import Header from "@/components/Header"
import MVPLandingPage from "@/components/MVPLandingPage"
import Footer from "@/components/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "MVP Development for Startups - Launch in 8 Weeks | Mobiverio",
  description:
    "Turn your startup idea into reality with our rapid MVP development. Get to market in 8 weeks, validate your concept, and secure funding. Trusted by 100+ startups.",
  keywords: "MVP development, startup MVP, rapid prototyping, startup development, minimum viable product",
}

export default function MVPDevelopmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <MVPLandingPage />
      </main>
      <Footer />
    </div>
  )
}
