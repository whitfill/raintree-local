import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { cities, getCityBySlug } from "../data";

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const data = getCityBySlug(slug);
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: data.canonical },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: data.canonical,
      type: "website",
      siteName: "Raintree Marketing Services",
    },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: slug } = await params;
  const data = getCityBySlug(slug);
  if (!data) notFound();

  const ldJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Raintree Marketing Services",
    description: data.metaDescription,
    url: data.canonical,
    email: "mark@raintreems.com",
    areaServed: { "@type": "City", name: data.city, containedInPlace: { "@type": "State", name: "Texas" } },
    founder: { "@type": "Person", name: "Mark Whitfill" },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Nav */}
      <nav className="fixed top-0 w-full bg-warm-white/90 backdrop-blur-sm z-50 border-b border-forest/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="text-forest font-bold text-lg tracking-tight">
            Raintree<span className="font-normal text-charcoal-light"> Marketing Services</span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="/#services" className="text-charcoal-light hover:text-forest transition-colors">Services</a>
            <a href="/#pricing" className="text-charcoal-light hover:text-forest transition-colors">Pricing</a>
            <a href="/#about" className="text-charcoal-light hover:text-forest transition-colors">About</a>
            <a href="/#contact" className="bg-forest text-white px-4 py-2 rounded-lg font-medium hover:bg-forest-light transition-colors">Get Started</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-forest text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #6B8A3A 0%, transparent 50%), radial-gradient(circle at 80% 50%, #96D2D2 0%, transparent 50%)" }} />
        <div className="relative max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <p className="text-white/50 text-sm mb-6">
            <a href="/" className="hover:text-white/80 transition-colors">Raintree Marketing Services</a>
            <span className="mx-2">/</span>
            <span>{data.city}, {data.state}</span>
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 max-w-3xl">
            {data.h1}
          </h1>
          <p className="text-lg text-white/70 mb-4">{data.tagline}</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href="/#contact" className="inline-block bg-gold text-forest-dark px-7 py-4 rounded-xl font-bold text-base hover:bg-gold-dark transition-colors shadow-lg">
              Request a $500 Assessment &rarr;
            </a>
            <a href="/#services" className="inline-block bg-white/15 border border-white/30 text-white px-7 py-4 rounded-xl font-bold text-base hover:bg-white/25 transition-colors">
              See How It Works
            </a>
          </div>
          <p className="text-sm text-white/40 mt-5">Delivered within 48 hours. Credited toward any full engagement.</p>
        </div>
      </section>

      {/* Local Intro */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">Why {data.city}</span>
          <div className="mt-4 space-y-5 text-charcoal-light text-lg leading-relaxed">
            {data.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-forest/5 py-16">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">The Gap</span>
          <h2 className="text-2xl font-bold text-charcoal mt-3 mb-5">What we see most in {data.city}</h2>
          <p className="text-charcoal-light text-lg leading-relaxed">{data.localProblem}</p>
        </div>
      </section>

      {/* Business Types */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">Who We Serve</span>
              <h2 className="text-2xl font-bold text-charcoal mt-3 mb-6">{data.city} businesses we work with</h2>
              <ul className="space-y-3">
                {data.businessTypes.map((type) => (
                  <li key={type} className="flex items-center gap-3 text-charcoal-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    {type}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-forest/10 shadow-sm">
              <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">Why It Works</span>
              <p className="text-charcoal-light leading-relaxed mt-4 text-lg">{data.localWhy}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-forest/5 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">What We Do</span>
            <h2 className="text-3xl font-bold text-charcoal mt-3">Two assessments. Both start at $500.</h2>
            <p className="text-charcoal-light mt-4 max-w-xl mx-auto">Pick the problem that's costing you the most, or get both together at a discount.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {/* DVA */}
            <div className="bg-white rounded-2xl p-7 border border-forest/10 shadow-sm">
              <p className="text-gold text-xs font-semibold uppercase tracking-wider mb-3">Digital Visibility</p>
              <h3 className="text-lg font-bold text-charcoal mb-2">Visibility Assessment</h3>
              <p className="text-charcoal-light text-sm leading-relaxed mb-4">Complete audit of your Google presence, website, social media, and local search rankings — with specific fixes and a financial impact estimate.</p>
              <p className="text-2xl font-bold text-forest mb-5">$500</p>
              <ul className="space-y-2 text-sm text-charcoal-light mb-6">
                {["Visibility score across 5 dimensions", "Specific gaps identified", "5 quick wins you can act on now", "30-min walkthrough call"].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-gold mt-0.5">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="/#contact" className="block text-center bg-forest text-white py-3 rounded-xl font-bold hover:bg-forest-light transition-colors text-sm">
                Get Started &rarr;
              </a>
            </div>

            {/* AI */}
            <div className="bg-white rounded-2xl p-7 border border-forest/10 shadow-sm">
              <p className="text-gold text-xs font-semibold uppercase tracking-wider mb-3">AI Readiness</p>
              <h3 className="text-lg font-bold text-charcoal mb-2">AI Readiness Assessment</h3>
              <p className="text-charcoal-light text-sm leading-relaxed mb-4">45-minute discovery call followed by a specific report identifying where AI and automation can save your team the most time and money.</p>
              <p className="text-2xl font-bold text-forest mb-5">$500</p>
              <ul className="space-y-2 text-sm text-charcoal-light mb-6">
                {["Effort vs. impact matrix", "Specific tool recommendations", "4-day quick win plan", "Financial impact estimate"].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-gold mt-0.5">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="/#contact" className="block text-center bg-forest text-white py-3 rounded-xl font-bold hover:bg-forest-light transition-colors text-sm">
                Get Started &rarr;
              </a>
            </div>

            {/* Combo */}
            <div className="bg-white rounded-2xl p-7 border-2 border-gold/40 shadow-sm relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-forest-dark text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full whitespace-nowrap">Best Value</span>
              <p className="text-gold text-xs font-semibold uppercase tracking-wider mb-3 mt-2">Full Audit</p>
              <h3 className="text-lg font-bold text-charcoal mb-2">Full Business Audit</h3>
              <p className="text-charcoal-light text-sm leading-relaxed mb-4">Both assessments bundled. Complete picture of your digital presence and internal efficiency in one engagement.</p>
              <p className="text-2xl font-bold text-forest mb-1">$750</p>
              <p className="text-xs text-charcoal-light mb-5">Save $250 vs. buying separately.</p>
              <ul className="space-y-2 text-sm text-charcoal-light mb-6">
                {["Everything in both assessments", "Two walkthrough calls", "Combined action plan", "Credited toward full engagement"].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-gold mt-0.5">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="/#contact" className="block text-center bg-gold text-forest-dark py-3 rounded-xl font-bold hover:bg-gold-dark transition-colors text-sm">
                Get the Full Audit &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-charcoal mb-8 text-center">Questions about {data.city} specifically</h2>
          <div className="space-y-3">
            {data.faqs.map((faq) => (
              <details key={faq.q} className="border border-forest/10 rounded-xl bg-white">
                <summary className="px-6 py-4 font-bold text-charcoal cursor-pointer hover:text-forest transition-colors">{faq.q}</summary>
                <p className="px-6 pb-4 text-charcoal-light leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest text-white py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">Get Started</span>
          <h2 className="text-3xl font-bold mt-3 mb-4">Ready to see exactly where your {data.city} business stands?</h2>
          <p className="text-white/70 text-lg leading-relaxed mb-8">$500. Delivered in 48 hours. No obligation beyond the assessment. Credited toward any full engagement if you move forward.</p>
          <a href="/#contact" className="inline-block bg-gold text-forest-dark px-8 py-4 rounded-xl font-bold text-base hover:bg-gold-dark transition-colors shadow-lg">
            Request Your Assessment &rarr;
          </a>
          <p className="text-sm text-white/40 mt-5">Or email us directly: <a href="mailto:mark@raintreems.com" className="underline hover:text-white/60 transition-colors">mark@raintreems.com</a></p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest-dark text-white/40 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} Raintree Marketing Services. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="/" className="hover:text-white/60 transition-colors">Home</a>
            <a href="mailto:mark@raintreems.com" className="hover:text-gold transition-colors">mark@raintreems.com</a>
          </div>
        </div>
      </footer>
    </>
  );
}
