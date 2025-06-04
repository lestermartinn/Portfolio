import fs from "fs"
import path from "path"
import { MDXRemote } from "next-mdx-remote/rsc"

export async function generateStaticParams() {
  const posts = fs.readdirSync(path.join(process.cwd(), "src/content/blog"))
  return posts.map((filename) => ({
    slug: filename.replace(/\.mdx$/, ""),
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), "src/content/blog", `${params.slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    return <div className="text-center py-20">404 | Post not found</div>
  }

  const fileContent = fs.readFileSync(filePath, "utf8")

  return (
    <article className="max-w-3xl mx-auto py-16 px-4 prose prose-lg dark:prose-invert">
      <MDXRemote source={fileContent} />
    </article>
  )
}
