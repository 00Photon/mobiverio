"use client"

import { useState } from "react"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface AnimatedServiceIconProps {
  icon: LucideIcon
  gradient: string
  isActive?: boolean
  onClick?: () => void
}

export default function AnimatedServiceIcon({
  icon: Icon,
  gradient,
  isActive = false,
  onClick,
}: AnimatedServiceIconProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={cn(
        "relative w-16 h-16 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-300 transform",
        `bg-gradient-to-r ${gradient}`,
        isHovered && "scale-110 rotate-3",
        isActive && "scale-105 shadow-lg",
        "group",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Background pulse effect */}
      <div
        className={cn(
          "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300",
          `bg-gradient-to-r ${gradient}`,
          "animate-pulse",
        )}
      ></div>

      {/* Icon */}
      <Icon
        className={cn(
          "h-8 w-8 text-white transition-all duration-300 relative z-10",
          isHovered && "scale-110",
          isActive && "animate-bounce",
        )}
      />

      {/* Floating particles effect */}
      {isHovered && (
        <>
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-ping opacity-75"></div>
          <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-white rounded-full animate-ping opacity-50 delay-150"></div>
          <div className="absolute top-1 -left-2 w-1 h-1 bg-white rounded-full animate-ping opacity-60 delay-300"></div>
        </>
      )}
    </div>
  )
}
