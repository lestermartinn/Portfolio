// src/components/Navbar.tsx
'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { FaSun, FaMoon } from "react-icons/fa"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/involvement", label: "Involvement" },
    { href: "/contact", label: "Contact" },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="w-full bg-muted/10 dark:bg-gray-900">
      <div className="container mx-auto flex h-20 items-center justify-center px-4">
        <div className="bg-white dark:bg-gray-800 rounded-full shadow-lg border-4 border-blue-700/10 dark:border-blue-700/20 flex items-center px-4 md:px-8 py-2 w-full max-w-[800px]">
          {/* changes for mobile */}
          <div className="flex items-center justify-between w-full md:hidden">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 mr-2 cursor-pointer"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <FaSun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <FaMoon className="w-5 h-5 text-blue-700" />
                )}
              </button>
            )}
            <button 
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-500 cursor-pointer" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* changes for desktop */}
          <nav className="hidden md:flex items-center justify-center w-full gap-4">
            <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-500 text-base font-medium px-4 py-2 rounded transition focus:outline-none focus:ring-2 focus:ring-blue-400">About</Link>
            <Link href="/projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-500 text-base font-medium px-4 py-2 rounded transition focus:outline-none focus:ring-2 focus:ring-blue-400">Projects</Link>
            <Link href="/experience" className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-500 text-base font-medium px-4 py-2 rounded transition focus:outline-none focus:ring-2 focus:ring-blue-400">Experience</Link>
            <Link href="/involvement" className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-500 text-base font-medium px-4 py-2 rounded transition focus:outline-none focus:ring-2 focus:ring-blue-400">Involvement</Link>
            <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-500 text-base font-medium px-4 py-2 rounded transition focus:outline-none focus:ring-2 focus:ring-blue-400">Contact</Link>
            
            {/* dark mode */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
                aria-label="Toggle dark mode"
              >
                {theme === "dark" ? (
                  <FaSun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <FaMoon className="w-5 h-5 text-blue-700" />
                )}
              </button>
            )}
          </nav>
        </div>
      </div>

      {/* mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white dark:bg-gray-800 z-50 pt-20">
          <div className="flex flex-col items-center gap-4 p-4">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                className={`text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-500 text-lg font-medium px-4 py-2 rounded transition focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  pathname === link.href ? "text-blue-700" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
