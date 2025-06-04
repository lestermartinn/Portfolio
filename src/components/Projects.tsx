// src/components/Projects.tsx
'use client'

import { Card, CardContent } from "@/components/ui/card"

export default function Projects() {
  return (
    <section id="projects" className="w-full py-16 bg-muted/10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Project 1 */}
          <Card>
            <CardContent className="p-6 text-left">
              <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
              <p className="text-muted-foreground mb-4">
                This very site! Built with Next.js, Tailwind CSS, and Shadcn UI.
              </p>
              <a
                href="#"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project →
              </a>
            </CardContent>
          </Card>

          {/* Project 2 */}
          <Card>
            <CardContent className="p-6 text-left">
              <h3 className="text-xl font-semibold mb-2">Resume Builder App</h3>
              <p className="text-muted-foreground mb-4">
                A dynamic resume builder built with React, Firebase Auth, and custom themes.
              </p>
              <a
                href="#"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project →
              </a>
            </CardContent>
          </Card>

          {/* Project 3 */}
          <Card>
            <CardContent className="p-6 text-left">
              <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
              <p className="text-muted-foreground mb-4">
                Stay tuned for more full-stack apps built with Supabase and Next.js.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
