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
      include: 2, // Increased to get more nested content
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
        readTime: calculateReadTime(entry.fields.content),
        excerpt: entry.fields.shortDescription || "",
        content: renderRichText(entry.fields.content),
        category: entry.fields.tags?.[0] || "General",
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
      include: 2, // Increased to get more nested content
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
      readTime: calculateReadTime(entry.fields.content),
      excerpt: entry.fields.shortDescription || "",
      content: renderRichText(entry.fields.content),
      category: entry.fields.tags?.[0] || "General",
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
        readTime: calculateReadTime(entry.fields.content),
        excerpt: entry.fields.shortDescription || "",
        content: renderRichText(entry.fields.content),
        category: entry.fields.tags?.[0] || "General",
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

// Calculate read time based on content
function calculateReadTime(content: any): string {
  if (!content) return "5 min read"

  const text = extractTextFromRichText(content)
  const wordsPerMinute = 200
  const wordCount = text.split(/\s+/).length
  const readTime = Math.ceil(wordCount / wordsPerMinute)

  return `${readTime} min read`
}

// Extract plain text from rich text for read time calculation
function extractTextFromRichText(richText: any): string {
  if (!richText || !richText.json || !richText.json.content) return ""

  function extractText(node: any): string {
    if (node.nodeType === "text") {
      return node.value || ""
    }

    if (node.content && Array.isArray(node.content)) {
      return node.content.map(extractText).join(" ")
    }

    return ""
  }

  return richText.json.content.map(extractText).join(" ")
}

// Improved rich text rendering
function renderRichText(richText: any): string {
  if (!richText || !richText.json || !richText.json.content) return ""

  function renderNode(node: any): string {
    switch (node.nodeType) {
      case "document":
        return node.content?.map(renderNode).join("") || ""

      case "paragraph":
        const paragraphContent = node.content?.map(renderNode).join("") || ""
        return paragraphContent ? `<p class="mb-4">${paragraphContent}</p>` : ""

      case "heading-1":
        return `<h1 class="text-3xl font-bold mt-8 mb-4">${node.content?.map(renderNode).join("") || ""}</h1>`

      case "heading-2":
        return `<h2 class="text-2xl font-bold mt-6 mb-3">${node.content?.map(renderNode).join("") || ""}</h2>`

      case "heading-3":
        return `<h3 class="text-xl font-bold mt-4 mb-2">${node.content?.map(renderNode).join("") || ""}</h3>`

      case "unordered-list":
        return `<ul class="list-disc list-inside mb-4 space-y-1">${node.content?.map(renderNode).join("") || ""}</ul>`

      case "ordered-list":
        return `<ol class="list-decimal list-inside mb-4 space-y-1">${node.content?.map(renderNode).join("") || ""}</ol>`

      case "list-item":
        return `<li class="ml-4">${node.content?.map(renderNode).join("") || ""}</li>`

      case "blockquote":
        return `<blockquote class="border-l-4 border-gray-300 pl-4 italic my-4">${node.content?.map(renderNode).join("") || ""}</blockquote>`

      case "hr":
        return `<hr class="my-8 border-gray-300" />`

      case "hyperlink":
        const url = node.data?.uri || "#"
        return `<a href="${url}" class="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">${node.content?.map(renderNode).join("") || ""}</a>`

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
              case "code":
                text = `<code class="bg-gray-100 px-1 py-0.5 rounded text-sm">${text}</code>`
                break
            }
          })
        }
        return text

      case "embedded-asset-block":
        if (node.data?.target?.fields?.file) {
          const asset = node.data.target.fields
          const imageUrl = `https:${asset.file.url}`
          const altText = asset.description || asset.title || "Image"
          return `<img src="${imageUrl}" alt="${altText}" class="w-full h-auto rounded-lg my-6" />`
        }
        return ""

      default:
        // Handle any other node types by rendering their content
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
      content: `
        <p class="mb-4">Applying for scholarships in the United States can seem overwhelming, but with the right approach and preparation, you can significantly increase your chances of success.</p>
        
        <h2 class="text-2xl font-bold mt-6 mb-3">Getting Started</h2>
        <p class="mb-4">The first step is to research and identify scholarships that match your profile, academic interests, and career goals.</p>
        
        <h2 class="text-2xl font-bold mt-6 mb-3">Required Documents</h2>
        <ul class="list-disc list-inside mb-4 space-y-1">
          <li class="ml-4">Academic transcripts</li>
          <li class="ml-4">Letters of recommendation</li>
          <li class="ml-4">Personal statement</li>
          <li class="ml-4">Test scores (TOEFL/IELTS, SAT/GRE)</li>
        </ul>
        
        <p class="mb-4">Remember to start your application process early and pay attention to deadlines.</p>
      `,
    },
  ]
}

function getFallbackBlogPost(slug: string): BlogPost | null {
  const posts = getFallbackBlogPosts()
  return posts.find((post) => post.slug === slug) || null
}
