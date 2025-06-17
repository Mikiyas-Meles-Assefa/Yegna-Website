import Link from "next/link"
import { Calendar, User, Clock, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

// This would typically come from a CMS or database
const getAllBlogPosts = () => {
  return [
    {
      slug: "how-to-apply-scholarships-us",
      title: "How to Apply for Scholarships in the US",
      author: "Abebe Kebede",
      publishDate: "March 15, 2024",
      readTime: "8 min read",
      excerpt:
        "Learn the step-by-step process to apply for scholarships in American universities and increase your chances of success.",
      category: "Scholarships",
    },
    {
      slug: "writing-compelling-personal-statement",
      title: "Writing a Compelling Personal Statement",
      author: "Sara Haile",
      publishDate: "March 10, 2024",
      readTime: "6 min read",
      excerpt:
        "Discover the key elements that make a personal statement stand out and capture the attention of admission officers.",
      category: "Applications",
    },
    {
      slug: "preparing-toefl-exam",
      title: "Preparing for the TOEFL Exam",
      author: "Kidist Alemu",
      publishDate: "March 5, 2024",
      readTime: "10 min read",
      excerpt:
        "Essential tips and strategies to help you achieve a high score on the TOEFL exam and meet university requirements.",
      category: "Test Prep",
    },
    {
      slug: "study-abroad-budgeting-guide",
      title: "The Complete Guide to Budgeting for Study Abroad",
      author: "Abebe Kebede",
      publishDate: "February 28, 2024",
      readTime: "12 min read",
      excerpt:
        "Learn how to plan and manage your finances for studying abroad, including hidden costs and money-saving tips.",
      category: "Finance",
    },
    {
      slug: "choosing-right-university",
      title: "How to Choose the Right University for Your Goals",
      author: "Sara Haile",
      publishDate: "February 20, 2024",
      readTime: "9 min read",
      excerpt:
        "A comprehensive guide to researching and selecting universities that align with your academic and career objectives.",
      category: "University Selection",
    },
    {
      slug: "visa-application-tips",
      title: "Student Visa Application: Common Mistakes to Avoid",
      author: "Kidist Alemu",
      publishDate: "February 15, 2024",
      readTime: "7 min read",
      excerpt:
        "Navigate the student visa application process successfully by avoiding these common pitfalls and mistakes.",
      category: "Visa",
    },
  ]
}

const getCategories = () => {
  return ["All", "Scholarships", "Applications", "Test Prep", "Finance", "University Selection", "Visa"]
}

export default function Blog() {
  const posts = getAllBlogPosts()
  const categories = getCategories()

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Yegna Write</span>
          </Link>
          <nav className="flex gap-8 pr-2">
            <Link href="/blog" className="text-sm font-medium transition-colors hover:text-primary text-primary">
              Blog
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              About Us
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Blog</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Discover practical tips, guides, and insights to help you navigate your journey to global educational
                  opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="w-full py-8 border-b">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search Bar */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input type="search" placeholder="Search articles..." className="pl-10" />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-3 py-1 text-sm rounded-full border transition-colors ${
                      category === "All" ? "bg-primary text-primary-foreground" : "bg-background hover:bg-accent"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block space-y-4 rounded-lg border p-6 transition-colors hover:bg-accent"
                >
                  {/* Featured Image Placeholder */}
                  <div className="aspect-video w-full rounded-lg bg-muted flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">Featured Image</span>
                  </div>

                  {/* Category Badge */}
                  <div className="flex items-center justify-between">
                    <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {post.category}
                    </span>
                  </div>

                  {/* Post Title */}
                  <h2 className="text-xl font-bold group-hover:text-primary transition-colors">{post.title}</h2>

                  {/* Post Excerpt */}
                  <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>

                  {/* Post Meta */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <User className="mr-1 h-3 w-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-3 w-3" />
                      {post.publishDate}
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Load More Button */}
            <div className="flex justify-center mt-12">
              <button className="px-6 py-2 border rounded-lg hover:bg-accent transition-colors">
                Load More Articles
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="w-full py-12 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Never Miss an Update</h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground">
                  Get the latest tips and guides delivered directly to your inbox. Join thousands of Ethiopian students
                  on their journey to success.
                </p>
              </div>
              <div className="w-full max-w-md">
                <form className="flex gap-2">
                  <Input type="email" placeholder="Enter your email" className="flex-1" required />
                  <button
                    type="submit"
                    className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-muted/50 py-12">
        <div className="container px-4 md:px-6">
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
