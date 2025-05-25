import { notFound } from "next/navigation";

export default async function AdminPostDetail({ params }: { params: { id: string } }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  if (!res.ok) {
    notFound();
  }

  const post = await res.json();

  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Editar Post: {post.title}</h3>
      <p className="mb-4">{post.body}</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Editar</button>
      <button className="ml-2 bg-red-600 text-white px-4 py-2 rounded">Eliminar</button>
    </div>
  );
}
