import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Link from "next/link"

type PostMeta = {
  title: string
  date: string
  excerpt: string
  slug: string
}

export default function BlogPage() {
  const postsDir = path.join(process.cwd(), "src/content/blog")
  const filenames = fs.readdirSync(postsDir)

  const posts: PostMeta[] = filenames.map((filename) => {
    const filePath = path.join(postsDir, filename)
    const fileContent = fs.readFileSync(filePath, "utf8")
    const { data } = matter(fileContent)

    return {
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      slug: filename.replace(/\.mdx$/, ""),
    }
  })

  return (
    <section className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Blog</h1>
      <ul className="space-y-8">
        {posts.map((post) => (
          <li key={post.slug} className="border-b pb-4">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-muted-foreground text-sm mb-2">{post.date}</p>
            <p className="mb-2">{post.excerpt}</p>
            <Link
              className="text-blue-600 hover:underline"
              href={`/blog/${post.slug}`}
            >
              Read more →
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
