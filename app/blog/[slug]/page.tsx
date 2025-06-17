import Link from "next/link"
import { ArrowLeft, Calendar, User, Clock } from "lucide-react"
import { getBlogPost, getRelatedPosts } from "@/lib/contentful"
import { notFound } from "next/navigation"

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = await getRelatedPosts(params.slug)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 lg:px-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Yegna Write</span>
          </Link>
          <nav className="flex gap-6 md:gap-8">
            <Link href="/blog" className="text-sm font-medium transition-colors hover:text-primary">
              Blog
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              About Us
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <article className="container mx-auto px-4 md:px-6 lg:px-8 py-8 max-w-4xl">
          {/* Back to Blog */}
          <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">{post.title}</h1>

            {post.subtitle && <p className="text-xl text-muted-foreground mb-6">{post.subtitle}</p>}

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                {post.publishDate}
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                {post.readTime}
              </div>
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {post.category}
              </span>
            </div>

            {post.excerpt && <p className="text-lg text-muted-foreground">{post.excerpt}</p>}
          </header>

          {/* Featured Image */}
          {post.featuredImage && (
            <div className="mb-8">
              <div className="aspect-video w-full rounded-lg overflow-hidden">
                <img
                  src={`https:${post.featuredImage.fields.file.url}`}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-li:text-foreground prose-strong:text-foreground prose-em:text-foreground prose-a:text-primary hover:prose-a:text-primary/80"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author Section - Big and Visible */}
          <section className="mt-12 mb-16 p-8 bg-muted/30 rounded-xl border">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Author Image */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-muted border-4 border-background shadow-lg">
                  {post.authorImage ? (
                    <img
                      src={`https:${post.authorImage.fields.file.url}`}
                      alt={post.author}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-primary/10">
                      <User className="w-8 h-8 md:w-12 md:h-12 text-primary/60" />
                    </div>
                  )}
                </div>
              </div>

              {/* Author Info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">About {post.author}</h3>
                {post.authorBio ? (
                  <p className="text-muted-foreground text-lg leading-relaxed mb-4">{post.authorBio}</p>
                ) : (
                  <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                    {post.author} is a contributor to Yegna Write, sharing insights and experiences to help Ethiopian
                    students achieve their educational goals.
                  </p>
                )}

                {/* Author Stats/Info */}
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="mr-1 h-4 w-4" />
                    Published {post.publishDate}
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>

                {/* Social Links or Contact (if available) */}
                <div className="mt-4 flex justify-center md:justify-start gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-primary border border-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    Contact Author
                  </Link>
                  <Link
                    href="/blog"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-muted-foreground border border-muted-foreground/20 rounded-lg hover:bg-accent transition-colors"
                  >
                    More Articles
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="mt-16 pt-8 border-t">
              <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group block p-6 border rounded-lg hover:bg-accent transition-colors"
                  >
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary">{relatedPost.title}</h3>
                    <p className="text-muted-foreground mb-3 line-clamp-2">{relatedPost.excerpt}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span>By {relatedPost.author}</span>
                      <span className="mx-2">•</span>
                      <span>{relatedPost.publishDate}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-muted/50 py-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4">
              <Link href="/" className="inline-flex items-center space-x-2">
                <span className="text-xl font-bold">Yegna Write</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Empowering Ethiopian students with the knowledge and resources they need to pursue global educational
                opportunities.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Links</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="/blog" className="text-sm hover:underline">
                  Blog
                </Link>
                <Link href="/about" className="text-sm hover:underline">
                  About Us
                </Link>
                <Link href="/contact" className="text-sm hover:underline">
                  Contact
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Connect With Us</h3>
              <div className="flex space-x-4">
                <Link
                  href="https://t.me/yegnawrite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-send"
                  >
                    <path d="m22 2-7 20-4-9-9-4Z" />
                    <path d="M22 2 11 13" />
                  </svg>
                  <span className="sr-only">Telegram</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-6">
            <p className="text-center text-xs text-muted-foreground">
              © {new Date().getFullYear()} Yegna Write. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
