// app/post/[slug]/page.tsx
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { BlogPost } from "@/types/post.type";
import Image from "next/image";
import Link from "next/link";
import { postQuery } from "@/sanity/lib/queries";
import { SlArrowLeft } from "react-icons/sl";

interface Props {
  params: {
    slug: string;
  };
}

async function getPost(slug: string) {
  return client.fetch(postQuery, { slug });
}

export default async function PostPage({ params }: Props) {
  const post: BlogPost = await getPost(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <main className="mx-auto max-w-7xl px-6 lg:px-8 my-8">
      <div className="my-8 flex flex-row items-center gap-2 text-gray-600">
        <SlArrowLeft />
        <Link
          href="/"
          className="inline-flex items-center text-gray-600 hover:text-gray-900"
        >
          Back to Home
        </Link>
      </div>

      <article className="max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

          {post.categories && (
            <div className="flex gap-2 my-8">
              {post.categories.map((category) => (
                <Link
                  key={category._id}
                  href={`/category/${category._id}`}
                  className="rounded-full bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100"
                >
                  {category.title}
                </Link>
              ))}
            </div>
          )}

          {post.mainImage && (
            <div className="relative aspect-video mb-8">
              <Image
                src={urlFor(post.mainImage).url()}
                alt={post.title}
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          )}

          <div className="flex items-center gap-4">
            {post.author.image && (
              <Image
                src={urlFor(post.author.image).url()}
                alt={post.author.name}
                width={40}
                height={40}
                className="rounded-full"
              />
            )}
            <div>
              <p className="font-semibold">{post.author.name}</p>
            </div>
          </div>
        </header>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed">
            {post.description}
          </p>
        </div>
      </article>
    </main>
  );
}
