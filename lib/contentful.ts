import { createClient } from "contentful"

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
})

export interface BlogPost {
  slug: string
  title: string
  author: string
  publishDate: string
  readTime: string
  excerpt: string
  content: string
  category: string
  featuredImage?: {
    fields: {
      file: {
        url: string
      }
    }
  }
}

export interface ContentfulBlogPost {
  fields: {
    title: string
    slug: string
    publishedDate: string
    excerpt: string
    body: any // Rich text from Contentful
    author: {
      fields: {
        name: string
      }
    }
    heroImage?: {
      fields: {
        file: {
          url: string
        }
      }
    }
    tags?: string[]
  }
}

// Transform Contentful blog template data to our format
function transformBlogPost(entry: ContentfulBlogPost): BlogPost {
  return {
    slug: entry.fields.slug,
    title: entry.fields.title,
    author: entry.fields.author?.fields?.name || "Unknown Author",
    publishDate: new Date(entry.fields.publishedDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    readTime: calculateReadTime(entry.fields.body),
    excerpt: entry.fields.excerpt,
    content: renderRichText(entry.fields.body),
    category: entry.fields.tags?.[0] || "General",
    featuredImage: entry.fields.heroImage,
  }
}

// Calculate read time from rich text content
function calculateReadTime(richText: any): string {
  if (!richText || !richText.content) return "5 min read"

  const text = extractTextFromRichText(richText)
  const wordsPerMinute = 200
  const wordCount = text.split(/\s+/).length
  const readTime = Math.ceil(wordCount / wordsPerMinute)

  return `${readTime} min read`
}

// Extract plain text from Contentful rich text
function extractTextFromRichText(richText: any): string {
  if (!richText || !richText.content) return ""

  let text = ""

  function traverse(node: any) {
    if (node.nodeType === "text") {
      text += node.value
    }
    if (node.content) {
      node.content.forEach(traverse)
    }
  }

  richText.content.forEach(traverse)
  return text
}

// Convert Contentful rich text to HTML
function renderRichText(richText: any): string {
  if (!richText || !richText.content) return ""

  function renderNode(node: any): string {
    switch (node.nodeType) {
      case "paragraph":
        return `<p>${node.content?.map(renderNode).join("") || ""}</p>`
      case "heading-1":
        return `<h1>${node.content?.map(renderNode).join("") || ""}</h1>`
      case "heading-2":
        return `<h2>${node.content?.map(renderNode).join("") || ""}</h2>`
      case "heading-3":
        return `<h3>${node.content?.map(renderNode).join("") || ""}</h3>`
      case "unordered-list":
        return `<ul>${node.content?.map(renderNode).join("") || ""}</ul>`
      case "ordered-list":
        return `<ol>${node.content?.map(renderNode).join("") || ""}</ol>`
      case "list-item":
        return `<li>${node.content?.map(renderNode).join("") || ""}</li>`
      case "text":
        let text = node.value || ""
        if (node.marks) {
          node.marks.forEach((mark: any) => {
            switch (mark.type) {
              case "bold":
                text = `<strong>${text}</strong>`
                break
              case "italic":
                text = `<em>${text}</em>`
                break
              case "underline":
                text = `<u>${text}</u>`
                break
            }
          })
        }
        return text
      default:
        return node.content?.map(renderNode).join("") || ""
    }
  }

  return richText.content.map(renderNode).join("")
}

// Get all blog posts (works with Contentful blog template)
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const entries = await client.getEntries({
      content_type: "blogPost", // This is the standard name in Contentful blog template
      order: "-fields.publishedDate",
      include: 2, // Include linked entries (like author)
    })

    return entries.items.map((entry: any) => transformBlogPost(entry))
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return getFallbackBlogPosts()
  }
}

// Get a single blog post by slug
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const entries = await client.getEntries({
      content_type: "blogPost",
      "fields.slug": slug,
      limit: 1,
      include: 2,
    })

    if (entries.items.length === 0) {
      return null
    }

    return transformBlogPost(entries.items[0] as any)
  } catch (error) {
    console.error("Error fetching blog post:", error)
    return getFallbackBlogPost(slug)
  }
}

// Get related posts (excluding current post)
export async function getRelatedPosts(currentSlug: string, limit = 2): Promise<BlogPost[]> {
  try {
    const entries = await client.getEntries({
      content_type: "blogPost",
      "fields.slug[ne]": currentSlug,
      limit: limit,
      order: "-fields.publishedDate",
      include: 2,
    })

    return entries.items.map((entry: any) => transformBlogPost(entry))
  } catch (error) {
    console.error("Error fetching related posts:", error)
    return []
  }
}

// Get unique categories from tags
export async function getCategories(): Promise<string[]> {
  try {
    const entries = await client.getEntries({
      content_type: "blogPost",
      select: "fields.tags",
    })

    const allTags = entries.items.flatMap((entry: any) => entry.fields.tags || [])
    const uniqueTags = [...new Set(allTags)]

    return ["All", ...uniqueTags.sort()]
  } catch (error) {
    console.error("Error fetching categories:", error)
    return ["All", "Scholarships", "Applications", "Test Prep", "Finance", "University Selection", "Visa"]
  }
}

// Fallback data in case Contentful is not available
function getFallbackBlogPosts(): BlogPost[] {
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
      content: `<p>Applying for scholarships in the United States can seem overwhelming, but with the right approach and preparation, you can significantly increase your chances of success...</p>`,
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
      content: `<p>Your personal statement is one of the most important components of your college or scholarship application...</p>`,
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
      content: `<p>The TOEFL (Test of English as a Foreign Language) is a crucial requirement for Ethiopian students...</p>`,
    },
  ]
}

function getFallbackBlogPost(slug: string): BlogPost | null {
  const posts = getFallbackBlogPosts()
  return posts.find((post) => post.slug === slug) || null
}
