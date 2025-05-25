import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return posts.map((post: any) => ({
    id: post.id.toString(),
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  if (!res.ok) return {};
  const post = await res.json();

  return {
    title: post.title,
    description: post.body.slice(0, 150),
  };
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);

  if (!res.ok) {
    notFound(); // Llama a la página 404 si el ID no existe
  }

  const post = await res.json();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
