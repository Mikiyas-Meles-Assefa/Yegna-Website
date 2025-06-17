import { getAllBlogPosts } from "@/lib/contentful"

export default async function DebugPage() {
  let posts = []
  let error = null

  try {
    posts = await getAllBlogPosts()
  } catch (e) {
    error = e instanceof Error ? e.message : "Unknown error"
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Debug: Contentful Connection</h1>

      <div className="space-y-4">
        <div className="p-4 border rounded">
          <h2 className="font-bold">Environment Variables:</h2>
          <p>Space ID: {process.env.CONTENTFUL_SPACE_ID ? "✅ Set" : "❌ Missing"}</p>
          <p>Access Token: {process.env.CONTENTFUL_ACCESS_TOKEN ? "✅ Set" : "❌ Missing"}</p>
        </div>

        {error && (
          <div className="p-4 border border-red-500 rounded bg-red-50">
            <h2 className="font-bold text-red-700">Error:</h2>
            <p className="text-red-600">{error}</p>
          </div>
        )}

        <div className="p-4 border rounded">
          <h2 className="font-bold">Posts Found: {posts.length}</h2>
          {posts.length > 0 ? (
            <ul className="mt-2 space-y-2">
              {posts.map((post, index) => (
                <li key={index} className="p-2 bg-gray-100 rounded">
                  <strong>{post.title}</strong> by {post.author}
                  <br />
                  <small>
                    Slug: {post.slug} | Category: {post.category}
                  </small>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600 mt-2">No posts found. Check your Contentful setup.</p>
          )}
        </div>
      </div>
    </div>
  )
}
