// Layout exclusivo del panel admin
export default function AdminPostsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <header className="mb-6 border-b pb-2">
        <h1 className="text-3xl font-bold text-red-600">Admin Panel</h1>
        <nav className="mt-2">
          <a href="/posts" className="mr-4 text-blue-500 underline">Ver público</a>
          <a href="/(admin)/posts" className="text-blue-500 underline">Administrar</a>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
