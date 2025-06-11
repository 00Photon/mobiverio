
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import LoadingScreen from "@/components/LoadingScreen"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mobiverio Limited - Next-Gen Technology Solutions",
  description:
    "Transform your business with cutting-edge SaaS, Blockchain, and Enterprise solutions. We craft powerful platforms that drive innovation and accelerate growth.",
  keywords:
    "SaaS development, blockchain solutions, enterprise applications, software development, technology consulting",
  authors: [{ name: "Mobiverio Limited" }],
  openGraph: {
    title: "Mobiverio Limited - Next-Gen Technology Solutions",
    description: "Transform your business with cutting-edge SaaS, Blockchain, and Enterprise solutions.",
    type: "website",
    locale: "en_US",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <LoadingScreen />
        {children}
      </body>
    </html>
  )
}
