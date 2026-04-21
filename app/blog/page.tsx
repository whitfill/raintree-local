import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Raintree Marketing Services",
  description: "Local SEO tips, Google Business Profile guides, AI tools, and digital marketing strategies for Texas small businesses.",
  alternates: { canonical: "https://www.raintreems.com/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <nav className="fixed top-0 w-full bg-warm-white/90 backdrop-blur-sm z-50 border-b border-forest/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-forest font-bold text-lg tracking-tight">Raintree<span className="font-normal text-charcoal-light"> Marketing Services</span></Link>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/blog" className="text-forest font-medium">Blog</Link>
            <Link href="/#contact" className="bg-forest text-white px-4 py-2 rounded-lg font-medium hover:bg-forest-light transition-colors">Get Started</Link>
          </div>
        </div>
      </nav>

      <section className="max-w-4xl mx-auto px-6 pt-28 pb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-3">Blog</h1>
        <p className="text-charcoal-light text-lg mb-10">Local SEO strategies and tips for small businesses.</p>

        <div className="space-y-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <div className="border border-forest/10 rounded-xl p-6 hover:border-forest/30 hover:shadow-sm transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gold">{post.category}</span>
                  <span className="text-xs text-charcoal-light">{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                </div>
                <h2 className="text-xl font-bold text-charcoal group-hover:text-forest transition-colors mb-2">{post.title}</h2>
                <p className="text-charcoal-light leading-relaxed">{post.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
