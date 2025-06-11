import Header from "@/components/Header"
import BlogSection from "@/components/BlogSection"
import Footer from "@/components/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mobiverio Insights - Tech Trends, SaaS Tips & Startup Advice",
  description:
    "Stay ahead with expert insights on SaaS development, blockchain technology, UI/UX design, and startup strategies from the Mobiverio team.",
  keywords: "tech blog, SaaS trends, startup advice, blockchain insights, UI/UX tips, software development",
}

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <BlogSection />
      </main>
      <Footer />
    </div>
  )
}
