import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { marked } from "marked";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not Found" };
  return {
    title: `${post.title} | Raintree Local`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const html = await marked.parse(post.content);

  return (
    <>
      <nav className="fixed top-0 w-full bg-warm-white/90 backdrop-blur-sm z-50 border-b border-forest/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-forest font-bold text-lg tracking-tight">Raintree Local</Link>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/blog" className="text-charcoal-light hover:text-forest transition-colors">Blog</Link>
            <Link href="/#contact" className="bg-forest text-white px-4 py-2 rounded-lg font-medium hover:bg-forest-light transition-colors">Free Audit</Link>
          </div>
        </div>
      </nav>

      <article className="max-w-3xl mx-auto px-6 pt-28 pb-16">
        <nav className="text-sm text-charcoal-light mb-6">
          <Link href="/blog" className="hover:text-forest">&larr; Back to Blog</Link>
        </nav>

        <header className="mb-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-gold">{post.category}</span>
          <h1 className="text-3xl md:text-4xl font-bold text-charcoal mt-2 mb-3">{post.title}</h1>
          <time className="text-sm text-charcoal-light">
            {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </time>
        </header>

        <div
          className="prose prose-lg prose-gray max-w-none prose-headings:font-bold prose-headings:text-charcoal prose-a:text-forest prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <div className="mt-12 pt-8 border-t border-forest/10">
          <div className="bg-forest/5 rounded-xl p-6 text-center">
            <h3 className="font-bold text-charcoal mb-2">Want help with your Google presence?</h3>
            <p className="text-charcoal-light text-sm mb-4">We&apos;ll audit your business for free and show you exactly where you stand.</p>
            <Link href="/#contact" className="inline-block bg-forest text-white px-6 py-2.5 rounded-lg font-bold hover:bg-forest-light transition-colors text-sm">
              Get Your Free Audit &rarr;
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
