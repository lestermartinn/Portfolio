// src/components/Navbar.tsx
'use client'

import Link from "next/link"
import { useState, useEffect } from "react"
import { FaSun, FaMoon } from "react-icons/fa"

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <header className="w-full bg-muted/10 dark:bg-gray-900">
      <div className="container mx-auto flex h-20 items-center justify-center px-4">
        <div className="bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center px-8 py-2 gap-2 w-[600px]">
          <nav className="flex items-center justify-center w-full mx-auto">
            <div className="flex items-center gap-8">
              <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-base font-medium px-4 py-2 rounded transition focus:outline-none focus:ring-2 focus:ring-blue-300">About</Link>
              <Link href="/projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-base font-medium px-4 py-2 rounded transition focus:outline-none focus:ring-2 focus:ring-blue-300">Projects</Link>
              <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-base font-medium px-4 py-2 rounded transition focus:outline-none focus:ring-2 focus:ring-blue-300">Contact</Link>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <FaSun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <FaMoon className="w-5 h-5 text-blue-600" />
                )}
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
