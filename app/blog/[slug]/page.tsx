import Link from "next/link"
import { ArrowLeft, Calendar, User, Clock } from "lucide-react"

// This would typically come from a CMS or database
const getBlogPost = (slug: string) => {
  const posts = {
    "how-to-apply-scholarships-us": {
      title: "How to Apply for Scholarships in the US",
      author: "Abebe Kebede",
      publishDate: "March 15, 2024",
      readTime: "8 min read",
      excerpt:
        "Learn the step-by-step process to apply for scholarships in American universities and increase your chances of success.",
      content: `
        <p>Applying for scholarships in the United States can seem overwhelming, but with the right approach and preparation, you can significantly increase your chances of success. This comprehensive guide will walk you through every step of the process.</p>
        
        <h2>1. Start Early and Stay Organized</h2>
        <p>The key to successful scholarship applications is starting early. Most scholarship deadlines fall between December and March for the following academic year. Create a spreadsheet to track:</p>
        <ul>
          <li>Scholarship names and organizations</li>
          <li>Application deadlines</li>
          <li>Required documents</li>
          <li>Application status</li>
        </ul>
        
        <h2>2. Research Thoroughly</h2>
        <p>Don't limit yourself to the most well-known scholarships. Look for:</p>
        <ul>
          <li>University-specific scholarships</li>
          <li>Field-of-study scholarships</li>
          <li>Country-specific scholarships for Ethiopian students</li>
          <li>Need-based and merit-based opportunities</li>
        </ul>
        
        <h2>3. Prepare Your Documents</h2>
        <p>Most scholarship applications require similar documents. Prepare these in advance:</p>
        <ul>
          <li>Academic transcripts</li>
          <li>Letters of recommendation</li>
          <li>Personal statement or essay</li>
          <li>Proof of English proficiency (TOEFL/IELTS)</li>
          <li>Financial documents</li>
        </ul>
        
        <h2>4. Write a Compelling Personal Statement</h2>
        <p>Your personal statement is your chance to stand out. Make sure to:</p>
        <ul>
          <li>Tell your unique story</li>
          <li>Explain your academic and career goals</li>
          <li>Show how the scholarship aligns with your objectives</li>
          <li>Demonstrate your potential impact</li>
        </ul>
        
        <h2>5. Follow Instructions Carefully</h2>
        <p>Pay close attention to application requirements. Missing documents or failing to follow guidelines can disqualify your application immediately.</p>
        
        <p>Remember, scholarship applications are competitive, but with persistence and preparation, you can achieve your dreams of studying in the United States.</p>
      `,
    },
    "writing-compelling-personal-statement": {
      title: "Writing a Compelling Personal Statement",
      author: "Sara Haile",
      publishDate: "March 10, 2024",
      readTime: "6 min read",
      excerpt:
        "Discover the key elements that make a personal statement stand out and capture the attention of admission officers.",
      content: `
        <p>Your personal statement is one of the most important components of your college or scholarship application. It's your opportunity to show who you are beyond grades and test scores.</p>
        
        <h2>Understanding the Purpose</h2>
        <p>A personal statement serves multiple purposes:</p>
        <ul>
          <li>Showcases your personality and character</li>
          <li>Demonstrates your writing skills</li>
          <li>Explains your motivations and goals</li>
          <li>Highlights experiences that shaped you</li>
        </ul>
        
        <h2>Structure Your Statement</h2>
        <p>A well-structured personal statement typically includes:</p>
        <ul>
          <li><strong>Opening:</strong> A compelling hook that draws the reader in</li>
          <li><strong>Body:</strong> Your story, experiences, and growth</li>
          <li><strong>Conclusion:</strong> Your future goals and how they connect to your past</li>
        </ul>
        
        <h2>Common Mistakes to Avoid</h2>
        <ul>
          <li>Being too generic or cliché</li>
          <li>Focusing only on achievements</li>
          <li>Poor grammar and spelling</li>
          <li>Exceeding word limits</li>
          <li>Not answering the prompt directly</li>
        </ul>
        
        <p>Take time to craft your personal statement carefully. It could be the difference between acceptance and rejection.</p>
      `,
    },
    "preparing-toefl-exam": {
      title: "Preparing for the TOEFL Exam",
      author: "Kidist Alemu",
      publishDate: "March 5, 2024",
      readTime: "10 min read",
      excerpt:
        "Essential tips and strategies to help you achieve a high score on the TOEFL exam and meet university requirements.",
      content: `
        <p>The TOEFL (Test of English as a Foreign Language) is a crucial requirement for Ethiopian students planning to study in English-speaking countries. Here's your complete guide to TOEFL preparation.</p>
        
        <h2>Understanding the TOEFL Format</h2>
        <p>The TOEFL iBT consists of four sections:</p>
        <ul>
          <li><strong>Reading:</strong> 54-72 minutes, 30-40 questions</li>
          <li><strong>Listening:</strong> 41-57 minutes, 28-39 questions</li>
          <li><strong>Speaking:</strong> 17 minutes, 4 tasks</li>
          <li><strong>Writing:</strong> 50 minutes, 2 tasks</li>
        </ul>
        
        <h2>Preparation Strategies</h2>
        
        <h3>Reading Section</h3>
        <ul>
          <li>Practice reading academic texts daily</li>
          <li>Build your vocabulary systematically</li>
          <li>Learn to identify main ideas and supporting details</li>
          <li>Practice time management</li>
        </ul>
        
        <h3>Listening Section</h3>
        <ul>
          <li>Listen to English podcasts and lectures</li>
          <li>Practice note-taking while listening</li>
          <li>Focus on understanding main ideas and details</li>
          <li>Get familiar with different English accents</li>
        </ul>
        
        <h3>Speaking Section</h3>
        <ul>
          <li>Practice speaking English daily</li>
          <li>Record yourself and analyze your performance</li>
          <li>Work on pronunciation and fluency</li>
          <li>Practice organizing your thoughts quickly</li>
        </ul>
        
        <h3>Writing Section</h3>
        <ul>
          <li>Practice writing essays within time limits</li>
          <li>Learn different essay structures</li>
          <li>Focus on grammar and vocabulary</li>
          <li>Practice paraphrasing and summarizing</li>
        </ul>
        
        <h2>Study Timeline</h2>
        <p>Plan for at least 2-3 months of dedicated preparation. Create a study schedule that covers all four skills and includes regular practice tests.</p>
        
        <p>Remember, consistent practice is key to TOEFL success. Good luck with your preparation!</p>
      `,
    },
  }

  return posts[slug as keyof typeof posts] || null
}

const getRelatedPosts = (currentSlug: string) => {
  const allPosts = [
    {
      slug: "how-to-apply-scholarships-us",
      title: "How to Apply for Scholarships in the US",
      excerpt: "Learn the step-by-step process to apply for scholarships in American universities.",
      author: "Abebe Kebede",
    },
    {
      slug: "writing-compelling-personal-statement",
      title: "Writing a Compelling Personal Statement",
      excerpt: "Discover the key elements that make a personal statement stand out.",
      author: "Sara Haile",
    },
    {
      slug: "preparing-toefl-exam",
      title: "Preparing for the TOEFL Exam",
      excerpt: "Essential tips and strategies to help you achieve a high score on the TOEFL exam.",
      author: "Kidist Alemu",
    },
  ]

  return allPosts.filter((post) => post.slug !== currentSlug).slice(0, 2)
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)
  const relatedPosts = getRelatedPosts(params.slug)

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <Link href="/blog" className="text-primary hover:underline">
          Return to blog
        </Link>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Yegna Write</span>
          </Link>
          <nav className="flex gap-8 pr-2">
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
        <article className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Back to Blog */}
          <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">{post.title}</h1>

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
            </div>

            <p className="text-lg text-muted-foreground">{post.excerpt}</p>
          </header>

          {/* Featured Image */}
          <div className="mb-8">
            <div className="aspect-video w-full rounded-lg bg-muted flex items-center justify-center">
              <span className="text-muted-foreground">Featured Image</span>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

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
                    <p className="text-muted-foreground mb-3">{relatedPost.excerpt}</p>
                    <p className="text-sm text-muted-foreground">By {relatedPost.author}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>
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
