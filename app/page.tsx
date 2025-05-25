// Muestra la lista de posts
export default async function PostsPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <ul className="space-y-2">
        {posts.map((post: any) => (
          <li key={post.id}>
            <a href={`/posts/${post.id}`} className="text-blue-600 underline">
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
