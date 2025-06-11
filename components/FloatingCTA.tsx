"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MessageCircle, Mail, X, Headphones } from "lucide-react"
import AnimatedButton from "./AnimatedButton"

export default function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false)

  const contactOptions = [
    {
      icon: Phone,
      label: "Call Us",
      value: "+1 (555) 123-4567",
      action: "tel:+15551234567",
      color: "from-green-500 to-green-400",
      description: "Speak with our experts",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat with us",
      action: "https://wa.me/15551234567",
      color: "from-green-600 to-green-500",
      description: "Quick response guaranteed",
    },
    {
      icon: Mail,
      label: "Email",
      value: "hello@mobiverio.com",
      action: "mailto:hello@mobiverio.com",
      color: "from-blue-500 to-blue-400",
      description: "Detailed project discussion",
    },
  ]

  const togglePopup = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Contact Options Popup */}
        <div
          className={`absolute bottom-16 right-0 transition-all duration-300 transform ${
            isOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95 pointer-events-none"
          }`}
        >
          <Card className="w-80 shadow-2xl border-0 bg-white/95 backdrop-blur-md">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg text-teal-900">Get in Touch</h3>
                <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="h-8 w-8 p-0">
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                Ready to transform your business? Choose your preferred way to connect with our team.
              </p>

              <div className="space-y-3">
                {contactOptions.map((option, index) => {
                  const IconComponent = option.icon
                  return (
                    <a
                      key={index}
                      href={option.action}
                      target={option.action.startsWith("http") ? "_blank" : "_self"}
                      rel={option.action.startsWith("http") ? "noopener noreferrer" : ""}
                      className="block group"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-teal-300 hover:bg-teal-50 transition-all duration-300 group-hover:scale-105">
                        <div
                          className={`w-10 h-10 bg-gradient-to-r ${option.color} rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform`}
                        >
                          <IconComponent className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-sm text-teal-900">{option.label}</div>
                          <div className="text-xs text-muted-foreground">{option.description}</div>
                        </div>
                        <div className="text-xs text-teal-600 font-medium">{option.value}</div>
                      </div>
                    </a>
                  )
                })}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-xs text-center text-muted-foreground">Available 24/7 • Response within 1 hour</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main CTA Button */}
        <AnimatedButton
          onClick={togglePopup}
          className={`w-14 h-14 rounded-full shadow-2xl transition-all duration-300 ${
            isOpen ? "rotate-45 scale-110" : "hover:scale-110"
          } bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600`}
        >
          {isOpen ? <X className="h-6 w-6 text-white" /> : <Headphones className="h-6 w-6 text-white animate-pulse" />}
        </AnimatedButton>

        {/* Pulse Animation */}
        {!isOpen && (
          <div className="absolute inset-0 rounded-full bg-teal-500 animate-ping opacity-20 pointer-events-none"></div>
        )}
      </div>
    </>
  )
}
