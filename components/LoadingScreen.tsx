"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Hide loading screen after animation
    const loadingTimer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => {
      clearTimeout(loadingTimer)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900">
      <div className="text-center">
        {/* Logo Container */}
        <div className="relative mb-8">
          {/* Main Logo */}
          <div className="relative w-24 h-24 mx-auto mb-4 animate-pulse">
            <Image
              src="/logo-dark.png"
              alt="Mobiverio"
              width={96}
              height={96}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-white">
          <h2 className="text-2xl font-bold mb-2 animate-fade-in">Mobiverio</h2>
        </div>

        {/* Loading Bar */}
        <div className="w-64 h-1 bg-teal-700 rounded-full mx-auto mt-6 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-red-500 to-red-400 rounded-full animate-loading-bar"></div>
        </div>
      </div>
    </div>
  )
}
