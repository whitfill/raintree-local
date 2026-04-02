import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Raintree Local",
        description: "AI-powered local SEO for small businesses. Google Business Profile optimization, local content, and review management.",
        url: "https://raintreelocal.com",
        email: "mark@raintreelocal.com",
        areaServed: "United States",
        founder: { "@type": "Person", name: "Mark Whitfill" },
      }) }} />

      {/* Nav */}
      <nav className="fixed top-0 w-full bg-warm-white/90 backdrop-blur-sm z-50 border-b border-forest/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-forest font-bold text-lg tracking-tight">Raintree Local</span>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#how-it-works" className="text-charcoal-light hover:text-forest transition-colors">How It Works</a>
            <a href="#pricing" className="text-charcoal-light hover:text-forest transition-colors">Pricing</a>
            <a href="#results" className="text-charcoal-light hover:text-forest transition-colors">Results</a>
            <a href="#contact" className="bg-forest text-white px-4 py-2 rounded-lg font-medium hover:bg-forest-light transition-colors">Free Audit</a>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="relative bg-forest text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #2D6A4F 0%, transparent 50%), radial-gradient(circle at 80% 50%, #C9A84C 0%, transparent 50%)" }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Get Found. Get Calls.<br />Get Customers.
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
            AI-powered local SEO for small businesses that are tired of being invisible on Google.
          </p>
          <a href="#contact" className="inline-block bg-gold text-forest-dark px-8 py-4 rounded-xl font-bold text-lg hover:bg-gold-dark transition-colors shadow-lg">
            Get Your Free Google Audit &rarr;
          </a>
          <p className="text-sm text-white/50 mt-4">No contracts. No jargon. Just results.</p>
        </div>
      </section>

      {/* ===== THE PROBLEM ===== */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">The Reality</span>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mt-3 mb-6">
            Your competitors are getting calls you should be getting.
          </h2>
          <p className="text-charcoal-light text-lg leading-relaxed mb-4">
            When someone in your town searches for an HVAC company, a plumber, or an oriental rug dealer — Google decides who they call. If you&apos;re not showing up in the top three results, that call is going to someone else.
          </p>
          <p className="text-charcoal-light text-lg leading-relaxed">
            Most small business owners know they have a Google problem. They just don&apos;t have the time, the knowledge, or the right help to fix it. <strong className="text-charcoal">That&apos;s where we come in.</strong>
          </p>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section id="how-it-works" className="bg-forest/5 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mt-3">
              We fix your Google presence — completely and consistently.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "📍",
                title: "Google Business Profile",
                body: "We optimize every element of your GBP listing — categories, photos, description, services, and weekly posts — so Google knows exactly who you are and where you are.",
              },
              {
                icon: "📝",
                title: "Local Content & SEO",
                body: "We create the blog posts and location pages that rank for the searches your customers are actually making. Written by AI, reviewed by us, published consistently every month.",
              },
              {
                icon: "⭐",
                title: "Review Management",
                body: "We respond to every Google review within 24 hours — and we set up a simple system that gets your happy customers to leave reviews automatically. More reviews. Better ranking. More calls.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl font-bold text-charcoal mb-3">{item.title}</h3>
                <p className="text-charcoal-light leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHO WE HELP ===== */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">Who We Work With</span>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mt-3">
              We specialize in two verticals — and we go deep on both.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white border-2 border-forest/10 rounded-2xl p-8 hover:border-forest/30 transition-colors">
              <span className="text-3xl mb-3 block">🏠</span>
              <h3 className="text-xl font-bold text-charcoal mb-1">Home Services</h3>
              <p className="text-sm text-gold font-medium mb-4">HVAC &middot; Plumbing &middot; Roofing &middot; Electrical</p>
              <p className="text-charcoal-light leading-relaxed">
                You do great work. Your customers love you. But when someone new moves to town and searches for a plumber, you&apos;re nowhere to be found. We fix that. One new job per month pays for our entire service.
              </p>
            </div>
            <div className="bg-white border-2 border-forest/10 rounded-2xl p-8 hover:border-forest/30 transition-colors">
              <span className="text-3xl mb-3 block">🏺</span>
              <h3 className="text-xl font-bold text-charcoal mb-1">Oriental Rug & Specialty Retail</h3>
              <p className="text-sm text-gold font-medium mb-4">Rug Dealers &middot; Antique Shops &middot; Estate Sales</p>
              <p className="text-charcoal-light leading-relaxed">
                Your buyers are searching online before they ever walk in your door. We make sure they find you first — with content that speaks their language and a Google presence that builds trust before the first conversation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section id="pricing" className="bg-forest text-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">Simple Pricing</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">One offer. No surprises.</h2>
            <p className="text-white/60 mt-3">We keep it simple because complicated retainers don&apos;t serve anyone.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Starter */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <p className="text-gold text-xs font-semibold uppercase tracking-wider mb-2">Recommended to Start</p>
              <h3 className="text-2xl font-bold mb-1">Local Visibility Package</h3>
              <p className="text-3xl font-bold text-gold mt-3 mb-1">$300–$400<span className="text-base font-normal text-white/60"> /month</span></p>
              <p className="text-sm text-white/60 mb-6">The easiest way to get started.</p>
              <ul className="space-y-3 text-sm text-white/80 mb-8">
                {[
                  "Google Business Profile optimization",
                  "4 GBP posts per month",
                  "Review response management (24hr turnaround)",
                  "Monthly performance summary",
                  "QR review card for your team",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-gold mt-0.5">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="block text-center border-2 border-gold text-gold py-3 rounded-xl font-bold hover:bg-gold hover:text-forest-dark transition-colors">
                Get Started &rarr;
              </a>
            </div>
            {/* Full */}
            <div className="bg-white text-charcoal rounded-2xl p-8 shadow-xl relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-forest-dark text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">Most Popular</span>
              <h3 className="text-2xl font-bold mb-1 mt-2">Local SEO Retainer</h3>
              <p className="text-sm text-charcoal-light mb-3">Everything you need to dominate local search.</p>
              <p className="text-charcoal-light text-sm mb-1">One-time setup: <span className="line-through">$1,500</span> <span className="text-gold font-semibold">waived if you sign within 7 days</span></p>
              <p className="text-3xl font-bold text-forest mt-2 mb-1">$1,000<span className="text-base font-normal text-charcoal-light"> /month</span></p>
              <ul className="space-y-3 text-sm text-charcoal-light mt-6 mb-8">
                {[
                  "Everything in Starter, plus:",
                  "8 GBP posts per month",
                  "2 local SEO blog posts per month",
                  "Local landing pages (city + service pages)",
                  "Keyword rank tracking with monthly report",
                  "15-minute monthly check-in call",
                  "Review automation system setup",
                ].map((item, i) => (
                  <li key={item} className={`flex items-start gap-2 ${i === 0 ? "font-semibold text-charcoal" : ""}`}>
                    <span className="text-forest mt-0.5">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="block text-center bg-forest text-white py-3 rounded-xl font-bold hover:bg-forest-light transition-colors">
                Get Your Free Audit &rarr;
              </a>
            </div>
          </div>
          <p className="text-center text-sm text-white/40 mt-8">No long-term contracts. Month-to-month after setup. Cancel anytime with 30 days notice.</p>
        </div>
      </section>

      {/* ===== CASE STUDY ===== */}
      <section id="results" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">Real Results</span>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mt-3">
              From zero online presence to ranking and generating leads.
            </h2>
          </div>
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-forest/10">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-forest text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">Case Study</span>
              <span className="text-charcoal-light text-sm">Boga Rugs — San Francisco, CA</span>
            </div>
            <h3 className="text-xl font-bold text-charcoal mb-2">Oriental rug cleaning and retail</h3>
            <p className="text-charcoal-light leading-relaxed mb-6">
              Boga Rugs had an established business with loyal customers — but almost no digital presence. Their Google Business Profile was incomplete, they had minimal reviews, and they weren&apos;t ranking for any of the searches their ideal customers were making.
            </p>
            <h4 className="font-bold text-charcoal mb-3">What we did:</h4>
            <ul className="space-y-2 text-sm text-charcoal-light mb-6">
              {[
                "Complete Google Business Profile audit and optimization",
                "Neighborhood-specific landing pages targeting San Francisco search terms",
                "Local SEO content strategy targeting interior designer searches",
                "Review generation system to build trust signals",
                "90-day action plan with measurable milestones",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="bg-forest/5 rounded-xl p-6">
              <p className="text-charcoal leading-relaxed">
                Within the first 30 days, Boga had a fully optimized GBP, city-specific pages live on their site, and a content calendar running. Rankings and lead generation improving month over month.
              </p>
              <p className="text-sm text-charcoal-light mt-4 italic">
                Results available upon request — references provided.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="bg-forest/5 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-8">
            <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">About Raintree Local</span>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mt-3">
              Local marketing expertise. AI-powered delivery.
            </h2>
          </div>
          <div className="text-charcoal-light text-lg leading-relaxed space-y-4">
            <p>
              Raintree Local was built on a simple observation: small businesses in secondary markets are being left behind digitally. The big agencies chase big cities. The national platforms charge for features you don&apos;t need. And the local freelancer disappears after the website is built.
            </p>
            <p>
              We built Raintree Local to serve the businesses that get overlooked — HVAC companies in East Texas, rug dealers in Tulsa, antique shops in smaller markets — with the same quality of marketing that enterprise brands take for granted.
            </p>
            <p>
              We use AI to do the heavy lifting on content and research, which means we can deliver more — faster and more consistently — than a traditional agency at a fraction of the cost.
            </p>
          </div>
          <p className="text-sm text-charcoal-light mt-8 border-t border-forest/10 pt-6">
            Founded by <strong className="text-charcoal">Mark Whitfill</strong>, a digital marketing consultant based in Central Texas with deep roots in the Round Top antiques community and active client engagements across home services and specialty retail.
          </p>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-charcoal mb-8 text-center">Common Questions</h2>
          <div className="space-y-3">
            {[
              { q: "How long before I see results?", a: "Google Business Profile improvements — more visibility, better ranking in maps — typically show movement within 30-60 days. Blog content and landing pages compound over 3-6 months. We track rankings monthly so you can see progress clearly." },
              { q: "Do I need to sign a long-term contract?", a: "No. Month-to-month after the initial setup. We keep clients by delivering results, not by locking them in." },
              { q: "What do you need from me each month?", a: "Very little. A 15-minute check-in call and occasional approval on content. We handle the rest." },
              { q: "Do you work with businesses outside Texas?", a: "Yes. Our rug dealer and specialty retail clients are nationwide. Home services clients are currently focused in Texas." },
              { q: "What if I already have a marketing company?", a: "We're happy to audit what you have and give you an honest assessment before you make any changes. No pressure." },
              { q: "How is this different from hiring a freelancer off Fiverr?", a: "Consistency and accountability. We manage your entire local presence, track results, and show up every month. A one-time Fiverr gig doesn't do that." },
            ].map((faq) => (
              <details key={faq.q} className="border border-forest/10 rounded-xl group bg-white">
                <summary className="px-6 py-4 font-bold text-charcoal cursor-pointer hover:text-forest transition-colors">
                  {faq.q}
                </summary>
                <p className="px-6 pb-4 text-charcoal-light leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT / CTA ===== */}
      <section id="contact" className="bg-forest text-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">Free Audit</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
                Ready to find out where you stand on Google?
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                We&apos;ll audit your Google presence for free and show you exactly what&apos;s holding you back. No pitch. Just the facts.
              </p>
              <p className="text-sm text-white/40">Takes less than 24 hours. No obligation.</p>
            </div>
            <form
              action="mailto:mark@raintreelocal.com"
              method="POST"
              encType="text/plain"
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-4 border border-white/20"
            >
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-white/60 mb-1">First Name</label>
                  <input type="text" name="first_name" required className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-gold" />
                </div>
                <div>
                  <label className="block text-xs text-white/60 mb-1">Last Name</label>
                  <input type="text" name="last_name" required className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-gold" />
                </div>
              </div>
              <div>
                <label className="block text-xs text-white/60 mb-1">Business Name</label>
                <input type="text" name="business_name" required className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-gold" />
              </div>
              <div>
                <label className="block text-xs text-white/60 mb-1">Business Type</label>
                <select name="business_type" required className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-gold">
                  <option value="" className="text-charcoal">Select...</option>
                  <option value="HVAC" className="text-charcoal">HVAC</option>
                  <option value="Plumbing" className="text-charcoal">Plumbing</option>
                  <option value="Roofing" className="text-charcoal">Roofing</option>
                  <option value="Oriental Rug Dealer" className="text-charcoal">Oriental Rug Dealer</option>
                  <option value="Antique/Vintage Retail" className="text-charcoal">Antique / Vintage Retail</option>
                  <option value="Other" className="text-charcoal">Other</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-white/60 mb-1">City & State</label>
                  <input type="text" name="location" required className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-gold" />
                </div>
                <div>
                  <label className="block text-xs text-white/60 mb-1">Phone Number</label>
                  <input type="tel" name="phone" className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-gold" />
                </div>
              </div>
              <div>
                <label className="block text-xs text-white/60 mb-1">Website URL</label>
                <input type="url" name="website" placeholder="https://" className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-gold" />
              </div>
              <div>
                <label className="block text-xs text-white/60 mb-1">How did you hear about us? <span className="opacity-50">(optional)</span></label>
                <input type="text" name="referral" className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-gold" />
              </div>
              <input type="hidden" name="_subject" value="New Audit Request — Raintree Local" />
              <button type="submit" className="w-full bg-gold text-forest-dark py-3 rounded-xl font-bold text-lg hover:bg-gold-dark transition-colors">
                Send My Audit Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-forest-dark text-white/40 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} Raintree Local. All rights reserved.</p>
          <a href="mailto:mark@raintreelocal.com" className="hover:text-gold transition-colors">mark@raintreelocal.com</a>
        </div>
      </footer>
    </>
  );
}
