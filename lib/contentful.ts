import { createClient } from "contentful"

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
})

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

// Get all blog posts - using the correct content type name
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    console.log("Fetching from Contentful...")
    const entries = await client.getEntries({
      content_type: "pageBlogPost", // This matches your Contentful template
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
  try {
    const entries = await client.getEntries({
      content_type: "pageBlogPost",
      "fields.slug": slug,
      limit: 1,
      include: 1,
    })

    if (entries.items.length === 0) {
      return null
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

// Fallback data
function getFallbackBlogPosts(): BlogPost[] {
  return [
    {
      slug: "how-to-apply-scholarships-us",
      title: "How to Apply for Scholarships in the US",
      subtitle: "A comprehensive guide to scholarship applications",
      author: "Abebe Kebede",
      publishDate: "March 15, 2024",
      readTime: "8 min read",
      excerpt: "Learn the step-by-step process to apply for scholarships in American universities.",
      category: "Scholarships",
      content: `<p>Applying for scholarships in the United States can seem overwhelming, but with the right approach and preparation, you can significantly increase your chances of success...</p>`,
    },
  ]
}

function getFallbackBlogPost(slug: string): BlogPost | null {
  const posts = getFallbackBlogPosts()
  return posts.find((post) => post.slug === slug) || null
}
