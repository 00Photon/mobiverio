"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type React from "react"

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "primary" | "secondary"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
  className?: string
}

export default function AnimatedButton({
  variant = "default",
  size = "md",
  children,
  className,
  ...props
}: AnimatedButtonProps) {
  const baseClasses = "relative overflow-hidden transition-all duration-300 transform hover:scale-105 active:scale-95"

  const variantClasses = {
    default: "bg-teal-800 hover:bg-teal-700 text-white shadow-lg hover:shadow-xl",
    outline: "border-2 border-teal-800 text-teal-800 hover:bg-teal-800 hover:text-white",
    ghost: "text-teal-800 hover:bg-teal-50",
    primary:
      "bg-gradient-to-r from-teal-800 to-teal-700 hover:from-teal-700 hover:to-teal-600 text-white shadow-lg hover:shadow-xl",
    secondary:
      "bg-gradient-to-r from-red-500 to-red-400 hover:from-red-400 hover:to-red-300 text-white shadow-lg hover:shadow-xl",
  }

  return (
    <Button className={cn(baseClasses, variantClasses[variant], "group", className)} {...props}>
      <span className="relative z-10 flex items-center">{children}</span>
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      {/* Ripple effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>
      </div>
    </Button>
  )
}
