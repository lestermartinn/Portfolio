// src/components/Blog.tsx
'use client'

import Link from "next/link"

const posts = [
  {
    title: "How I Built My Portfolio with Next.js",
    excerpt: "A step-by-step breakdown of how I built this personal website using modern tools like Next.js, Shadcn UI, and Supabase.",
    slug: "how-i-built-my-portfolio"
  },
  {
    title: "What I Learned from My First Full-Stack Project",
    excerpt: "Reflections, mistakes, and wins from building and deploying a resume builder with Firebase and Tailwind.",
    slug: "first-fullstack-project-lessons"
  },
  {
    title: "Top 5 Tools Every New Developer Should Learn",
    excerpt: "Here are five tools that helped me level up as a self-taught developer over one summer.",
    slug: "top-5-tools-for-beginners"
  }
]

export default function Blog() {
  return (
    <section id="blog" className="w-full py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Latest Blog Posts</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <div
              key={i}
              className="rounded border bg-background p-6 text-left shadow transition hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-blue-600 hover:underline"
              >
                Read more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
