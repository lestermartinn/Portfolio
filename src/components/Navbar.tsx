// src/components/Navbar.tsx
'use client'

import Link from "next/link"
import { GithubIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="w-full border-b shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <h1 className="text-xl font-bold">
          <Link href="/">LM</Link>
        </h1>
        <nav className="flex items-center gap-6">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/projects" className="hover:underline">Projects</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/lestermartinn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
          </Button>
        </nav>
      </div>
    </header>
  )
}
