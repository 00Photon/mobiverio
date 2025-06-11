"use client"

import { useState, useEffect } from "react"
import AnimatedButton from "./AnimatedButton"

export default function Hero({
  title = "Discover Our Solutions",
  subtitle = "Explore what we have to offer.",
  buttonText = "Learn More",
  buttonLink = "#"
}) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative w-full py-80 bg-gray-900 -mt-16 pt-16">
      <div className="container pt-32 px-4 md:px-6 mx-auto max-w-4xl">
        <div
          className={`flex flex-col items-center space-y-6 text-center transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
            {title}
          </h1>
          <p className="max-w-xl text-gray-300 text-base md:text-lg leading-relaxed">
            {subtitle}
          </p>
          <AnimatedButton
            variant="secondary"
            size="lg"
            className="px-6 py-3 text-base font-medium group"
 
          >
            {buttonText}
          </AnimatedButton>
        </div>
      </div>
    </section>
  )
}