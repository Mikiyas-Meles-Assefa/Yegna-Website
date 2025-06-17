import { createClient } from "contentful"

// Only create client if environment variables exist
const client =
  process.env.CONTENTFUL_SPACE_ID && process.env.CONTENTFUL_ACCESS_TOKEN
    ? createClient({
        space: process.env.CONTENTFUL_SPACE_ID!,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
      })
    : null

export interface BlogPost {
  slug: string
  title: string
  subtitle: string
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

// Get all blog posts
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  // If no client (no env vars), return fallback data
  if (!client) {
    console.log("No Contentful client - using fallback data")
    return getFallbackBlogPosts()
  }

  try {
    console.log("Fetching from Contentful...")
    const entries = await client.getEntries({
      content_type: "pageBlogPost",
      order: "-fields.publishedDate",
      include: 1,
    })

    console.log(`Found ${entries.items.length} entries`)

    return entries.items
      .filter((entry: any) => entry.fields && entry.fields.title && entry.fields.slug)
      .map((entry: any) => ({
        slug: entry.fields.slug,
        title: entry.fields.title,
        subtitle: entry.fields.shortDescription || "",
        author: entry.fields.author?.fields?.name || "Yegna Write Team",
        publishDate: new Date(entry.fields.publishedDate).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        readTime: "5 min read",
        excerpt: entry.fields.shortDescription || "",
        content: renderRichText(entry.fields.content),
        category: "General",
        featuredImage: entry.fields.featuredImage,
      }))
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return getFallbackBlogPosts()
  }
}

// Get a single blog post by slug
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  if (!client) {
    return getFallbackBlogPost(slug)
  }

  try {
    const entries = await client.getEntries({
      content_type: "pageBlogPost",
      "fields.slug": slug,
      limit: 1,
      include: 1,
    })

    if (entries.items.length === 0) {
      return getFallbackBlogPost(slug)
    }

    const entry = entries.items[0] as any
    return {
      slug: entry.fields.slug,
      title: entry.fields.title,
      subtitle: entry.fields.shortDescription || "",
      author: entry.fields.author?.fields?.name || "Yegna Write Team",
      publishDate: new Date(entry.fields.publishedDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      readTime: "5 min read",
      excerpt: entry.fields.shortDescription || "",
      content: renderRichText(entry.fields.content),
      category: "General",
      featuredImage: entry.fields.featuredImage,
    }
  } catch (error) {
    console.error("Error fetching blog post:", error)
    return getFallbackBlogPost(slug)
  }
}

// Get related posts
export async function getRelatedPosts(currentSlug: string, limit = 2): Promise<BlogPost[]> {
  if (!client) {
    return getFallbackBlogPosts()
      .filter((post) => post.slug !== currentSlug)
      .slice(0, limit)
  }

  try {
    const entries = await client.getEntries({
      content_type: "pageBlogPost",
      "fields.slug[ne]": currentSlug,
      limit: limit,
      order: "-fields.publishedDate",
      include: 1,
    })

    return entries.items
      .filter((entry: any) => entry.fields && entry.fields.title && entry.fields.slug)
      .map((entry: any) => ({
        slug: entry.fields.slug,
        title: entry.fields.title,
        subtitle: entry.fields.shortDescription || "",
        author: entry.fields.author?.fields?.name || "Yegna Write Team",
        publishDate: new Date(entry.fields.publishedDate).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        readTime: "5 min read",
        excerpt: entry.fields.shortDescription || "",
        content: renderRichText(entry.fields.content),
        category: "General",
        featuredImage: entry.fields.featuredImage,
      }))
  } catch (error) {
    console.error("Error fetching related posts:", error)
    return []
  }
}

// Get categories
export async function getCategories(): Promise<string[]> {
  return ["All", "Scholarships", "Applications", "Test Prep", "Finance", "University Selection", "Visa"]
}

// Convert Contentful rich text to HTML
function renderRichText(richText: any): string {
  if (!richText || !richText.json || !richText.json.content) return ""

  function renderNode(node: any): string {
    switch (node.nodeType) {
      case "document":
        return node.content?.map(renderNode).join("") || ""
      case "paragraph":
        return `<p>${node.content?.map(renderNode).join("") || ""}</p>`
      case "heading-1":
        return `<h1>${node.content?.map(renderNode).join("") || ""}</h1>`
      case "heading-2":
        return `<h2>${node.content?.map(renderNode).join("") || ""}</h2>`
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
            }
          })
        }
        return text
      default:
        return node.content?.map(renderNode).join("") || ""
    }
  }

  return richText.json.content.map(renderNode).join("")
}

// Enhanced fallback data that matches what you see on your live site
function getFallbackBlogPosts(): BlogPost[] {
  return [
    {
      slug: "how-to-apply-scholarships-us",
      title: "How to Apply for Scholarships in the US",
      subtitle: "A comprehensive guide to scholarship applications for Ethiopian students",
      author: "Abebe Kebede",
      publishDate: "March 15, 2024",
      readTime: "8 min read",
      excerpt:
        "Learn the step-by-step process to apply for scholarships in American universities and increase your chances of success.",
      category: "Scholarships",
      content: `
        <h2>Getting Started with US Scholarship Applications</h2>
        <p>Applying for scholarships in the United States can seem overwhelming, but with the right approach and preparation, you can significantly increase your chances of success.</p>
        
        <h2>1. Start Early and Stay Organized</h2>
        <p>The key to successful scholarship applications is starting early. Most scholarship deadlines fall between December and March for the following academic year.</p>
        
        <h2>2. Research Thoroughly</h2>
        <p>Don't limit yourself to the most well-known scholarships. Look for university-specific scholarships, field-of-study scholarships, and country-specific scholarships for Ethiopian students.</p>
        
        <h2>3. Prepare Your Documents</h2>
        <p>Most scholarship applications require similar documents. Prepare these in advance: academic transcripts, letters of recommendation, personal statement, proof of English proficiency, and financial documents.</p>
      `,
    },
    {
      slug: "writing-compelling-personal-statement",
      title: "Writing a Compelling Personal Statement",
      subtitle: "Stand out with your personal story and academic goals",
      author: "Sara Haile",
      publishDate: "March 10, 2024",
      readTime: "6 min read",
      excerpt:
        "Discover the key elements that make a personal statement stand out and capture the attention of admission officers.",
      category: "Applications",
      content: `
        <h2>Understanding the Purpose</h2>
        <p>Your personal statement is one of the most important components of your college or scholarship application. It's your opportunity to show who you are beyond grades and test scores.</p>
        
        <h2>Structure Your Statement</h2>
        <p>A well-structured personal statement typically includes an opening hook, your story and experiences, and your future goals.</p>
        
        <h2>Common Mistakes to Avoid</h2>
        <p>Avoid being too generic, focusing only on achievements, poor grammar, and not answering the prompt directly.</p>
      `,
    },
    {
      slug: "preparing-toefl-exam",
      title: "Preparing for the TOEFL Exam",
      subtitle: "Master the TOEFL with proven strategies and tips",
      author: "Kidist Alemu",
      publishDate: "March 5, 2024",
      readTime: "10 min read",
      excerpt:
        "Essential tips and strategies to help you achieve a high score on the TOEFL exam and meet university requirements.",
      category: "Test Prep",
      content: `
        <h2>Understanding the TOEFL Format</h2>
        <p>The TOEFL iBT consists of four sections: Reading, Listening, Speaking, and Writing.</p>
        
        <h2>Preparation Strategies</h2>
        <p>Practice reading academic texts daily, listen to English podcasts, practice speaking English, and write essays within time limits.</p>
        
        <h2>Study Timeline</h2>
        <p>Plan for at least 2-3 months of dedicated preparation with regular practice tests.</p>
      `,
    },
  ]
}

function getFallbackBlogPost(slug: string): BlogPost | null {
  const posts = getFallbackBlogPosts()
  return posts.find((post) => post.slug === slug) || null
}
