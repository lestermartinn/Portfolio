// src/components/Navbar.tsx
'use client'

import Link from "next/link"

export default function Navbar() {
  return (
    <header className="w-full bg-gray-50">
      <div className="container mx-auto flex h-20 items-center justify-center px-4">
        <div className="bg-white rounded-full shadow-md flex items-center px-6 py-2 gap-2">
          <nav className="flex items-center gap-8 mx-auto">
            <Link href="/about" className="hover:underline text-base font-medium px-4 py-2 rounded transition focus:outline-none focus:ring-2 focus:ring-gray-300">About</Link>
            <Link href="/projects" className="hover:underline text-base font-medium px-4 py-2 rounded transition focus:outline-none focus:ring-2 focus:ring-gray-300">Projects</Link>
            <Link href="/contact" className="hover:underline text-base font-medium px-4 py-2 rounded transition focus:outline-none focus:ring-2 focus:ring-gray-300">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
