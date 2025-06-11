"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedButton from "./AnimatedButton"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { href: "/services", label: "Services" },
    {
      href: "/products",
      label: "Products",
      hasDropdown: true,
      dropdownItems: [
        { href: "/products/trovia", label: "Trovia", description: "Smart Travel Platform" },
        { href: "/products/trezzapay", label: "TrezzaPay", description: "Payment Solutions" },
        { href: "/products", label: "View All Products", description: "Complete product portfolio" },
      ],
    },
    { href: "#work", label: "Our Work" },
    { href: "#about", label: "About Us" },
    { href: "/blog", label: "Insights" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header
      className={`px-4 lg:px-6 h-16 flex items-center fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-white/90 border-b border-gray-200 shadow-sm"
          : "backdrop-blur-sm bg-transparent border-b border-white/10"
      }`}
    >
      <Link href="/" className="flex items-center justify-center group">
        <div className="relative w-8 h-8 transition-transform duration-300 group-hover:scale-110">
          <Image src="/logo-dark.png" alt="Mobiverio" width={32} height={32} className="w-full h-full object-contain" />
        </div>
        <span
          className={`ml-2 text-xl font-bold transition-colors duration-300 ${
            isScrolled ? "text-teal-800" : "text-white"
          }`}
        >
          Mobiverio Limited
        </span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="ml-auto hidden md:flex gap-4 sm:gap-6 items-center">
        {navLinks.map((link) => (
          <div key={link.href} className="relative group">
            <Link
              href={link.href}
              className={`text-sm font-medium transition-all duration-300 hover:scale-105 relative flex items-center ${
                isScrolled ? "text-gray-700 hover:text-teal-800" : "text-white/80 hover:text-white"
              }`}
              onMouseEnter={() => link.hasDropdown && setIsProductsOpen(true)}
            >
              {link.label}
              {link.hasDropdown && <ChevronDown className="ml-1 h-3 w-3 transition-transform group-hover:rotate-180" />}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* Dropdown Menu */}
            {link.hasDropdown && (
              <div
                className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 transition-all duration-300 ${
                  isProductsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                }`}
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                {link.dropdownItems?.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-800 transition-colors"
                  >
                    <div className="font-medium">{item.label}</div>
                    <div className="text-xs text-gray-500">{item.description}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <AnimatedButton variant="secondary" size="sm" className="ml-4">
          Get Started
        </AnimatedButton>
      </nav>

      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="sm"
        className={`ml-auto md:hidden transition-colors duration-300 hover:scale-110 ${
          isScrolled ? "text-teal-800 hover:bg-teal-50" : "text-white hover:bg-white/10"
        }`}
        onClick={toggleMenu}
      >
        <div className="relative w-5 h-5">
          <Menu
            className={`h-5 w-5 absolute transition-all duration-300 ${isMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}`}
          />
          <X
            className={`h-5 w-5 absolute transition-all duration-300 ${isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}`}
          />
        </div>
      </Button>

      {/* Mobile Navigation */}
      <div
        className={`absolute top-16 left-0 right-0 md:hidden transition-all duration-300 ${
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg">
          <nav className="flex flex-col py-4">
            {navLinks.map((link, index) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="px-6 py-3 text-sm font-medium text-gray-700 hover:text-teal-800 hover:bg-teal-50 transition-all duration-300 transform hover:translate-x-2"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.label}
                </Link>
                {link.hasDropdown &&
                  link.dropdownItems?.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="px-10 py-2 text-xs text-gray-600 hover:text-teal-700 hover:bg-teal-25 transition-colors block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
              </div>
            ))}
            <div className="px-6 py-3">
              <AnimatedButton variant="secondary" size="sm" className="w-full">
                Get Started
              </AnimatedButton>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
