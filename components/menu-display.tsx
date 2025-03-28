"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { CursorLight } from "@/components/cursor-light"
import { menuItems, type MenuItem, categoryImages, categoryNames } from "@/data/menu-items"

// Logo component from the main page
const TharuhLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="16" fill="#1E3A8A" />
    <path d="M8 20C8 22.2091 9.79086 24 12 24H20C22.2091 24 24 22.2091 24 20V16H8V20Z" fill="#60A5FA" />
    <path d="M24 16V12C24 9.79086 22.2091 8 20 8H12C9.79086 8 8 9.79086 8 12V16H24Z" fill="#93C5FD" />
    <circle cx="16" cy="16" r="4" fill="#1E3A8A" />
    <path d="M13 11C13 9.34315 14.3431 8 16 8V8C17.6569 8 19 9.34315 19 11V16H13V11Z" fill="#BFDBFE" />
  </svg>
)

export default function MenuDisplay() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Toggle dark mode class on body
  useEffect(() => {
    document.body.classList.add("dark")
    return () => document.body.classList.remove("dark")
  }, [])

  // Group menu items by category
  const groupedItems = menuItems.reduce(
    (acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = []
      }
      acc[item.category].push(item)
      return acc
    },
    {} as Record<string, MenuItem[]>,
  )

  // Get all unique categories
  const categories = Array.from(new Set(menuItems.map((item) => item.category))).sort()

  return (
    <div className="min-h-screen bg-black text-white">
      <CursorLight />

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-lg transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="container mx-auto px-4 py-8 h-full flex flex-col">
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center gap-2">
              <TharuhLogo />
              <span className="text-2xl font-bold">Tharuh</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:bg-white/10"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="flex flex-col gap-6 text-xl">
            <Link
              href="/"
              className="flex items-center gap-2 py-3 border-b border-white/10 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
            {categories.map((category) => (
              <a
                key={category}
                href={`#${category}`}
                className="flex items-center gap-2 py-3 border-b border-white/10 hover:text-primary transition-colors text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="capitalize">{categoryNames[category]}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-white hover:text-primary/90 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="hidden sm:inline">Back to Home</span>
            </Link>
            <div className="flex items-center gap-2">
              <TharuhLogo />
              <span className="text-xl font-bold">Menu</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden text-white hover:bg-white/10"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Menu Title */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <h1 className="text-2xl md:text-3xl font-bold mb-2 text-[#f5f5dc]">THARUH CHILL & SPACE</h1>
              <h2 className="text-5xl md:text-7xl font-bold tracking-wider text-[#f5f5dc]">MENU</h2>
              <div className="absolute inset-0 opacity-10">
                <Image
                  src={categoryImages["espresso"] || "/placeholder.svg"}
                  alt="Background"
                  fill
                  className="object-cover blur-sm"
                />
              </div>
            </motion.div>
          </div>

          {/* Menu Content */}
          {Object.entries(groupedItems).map(([category, items]) => (
            <div key={category} id={category} className="mb-16 scroll-mt-20">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden relative">
                    <Image
                      src={categoryImages[category] || "/placeholder.svg"}
                      alt={categoryNames[category]}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h2 className="text-3xl font-bold text-[#f5f5dc]">{categoryNames[category]}</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center border-b border-white/10 pb-2">
                    <div>
                      <h3 className="font-medium text-lg uppercase">{item.name}</h3>
                      <p className="text-white/60 text-sm">{item.description}</p>
                    </div>
                    <div className="flex gap-4">
                      {item.price.hot && item.price.hot !== "-" && (
                        <span className="text-[#f5f5dc] font-medium">{item.price.hot}</span>
                      )}
                      {item.price.cold && item.price.cold !== "-" && (
                        <span className="text-[#f5f5dc] font-medium">{item.price.cold}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Footer Info */}
          <div className="mt-16 text-center">
            <p className="text-white/70 mb-2">TAKE AWAY CHARGE +1K</p>
            <p className="text-white/70 mb-2">DAILY OPEN 24 HOURS</p>
            <p className="text-white/70">@THARUH.CS</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-white/10 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <TharuhLogo />
              <span className="font-bold">Tharuh Chill & Space</span>
            </div>
            <p className="text-sm text-white/60">© {new Date().getFullYear()} Tharuh. All rights reserved.</p>
            <Link href="/" className="text-sm text-white/60 hover:text-primary transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

