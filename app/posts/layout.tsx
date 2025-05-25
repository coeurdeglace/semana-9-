// Layout específico para /posts
export default function PostsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <header className="mb-6">
        <h2 className="text-3xl font-semibold">Blog Posts</h2>
      </header>
      <main>{children}</main>
    </div>
  );
}
