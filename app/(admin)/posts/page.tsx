// Lista de posts en el panel admin
export default async function AdminPostsPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Gestión de Posts</h2>
      <ul className="space-y-2">
        {posts.map((post: any) => (
          <li key={post.id}>
            <a href={`/(admin)/posts/${post.id}`} className="text-blue-600 underline">
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
