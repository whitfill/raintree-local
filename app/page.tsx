import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Raintree Local",
        description: "Digital visibility and local SEO for Round Top antique vendors, boutique retailers, dining, and lodging in Texas.",
        url: "https://raintreelocal.com",
        email: "mark@raintreelocal.com",
        areaServed: "Texas",
        founder: { "@type": "Person", name: "Mark Whitfill" },
      }) }} />

      {/* Nav */}
      <nav className="fixed top-0 w-full bg-warm-white/90 backdrop-blur-sm z-50 border-b border-forest/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-forest font-bold text-lg tracking-tight">Raintree Local</span>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#assessment" className="text-charcoal-light hover:text-forest transition-colors">Assessment</a>
            <a href="#how-it-works" className="text-charcoal-light hover:text-forest transition-colors">How It Works</a>
            <a href="#pricing" className="text-charcoal-light hover:text-forest transition-colors">Pricing</a>
            <a href="#contact" className="bg-forest text-white px-4 py-2 rounded-lg font-medium hover:bg-forest-light transition-colors">Get Started</a>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="relative bg-forest text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #2D6A4F 0%, transparent 50%), radial-gradient(circle at 80% 50%, #C9A84C 0%, transparent 50%)" }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Your buyers are searching.<br />Are they finding you?
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Digital visibility for Round Top antique vendors, boutique retailers, art galleries, jewelry makers, dining, and lodging — the businesses that get left behind by every marketing agency that was built for someone else.
          </p>
          <a href="#assessment" className="inline-block bg-gold text-forest-dark px-8 py-4 rounded-xl font-bold text-lg hover:bg-gold-dark transition-colors shadow-lg">
            Start with a $500 Digital Visibility Assessment &rarr;
          </a>
          <p className="text-sm text-white/50 mt-4">Delivered within 48 hours. Credited toward any engagement.</p>
        </div>
      </section>

      {/* ===== THE PROBLEM ===== */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">The Reality</span>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mt-3 mb-6">
            Word of mouth built your business. It won&apos;t sustain it.
          </h2>
          <p className="text-charcoal-light text-lg leading-relaxed mb-4">
            Buyers planning a Round Top trip search Google, browse Pinterest, and scroll Instagram before they ever leave home. If you&apos;re not showing up — on Google Maps, in image searches, in the places your buyers actually look — they are finding someone else instead.
          </p>
          <p className="text-charcoal-light text-lg leading-relaxed">
            Most vendors know they have a digital problem. They just don&apos;t know exactly where the gap is or where to start. <strong className="text-charcoal">That&apos;s the first thing we fix.</strong>
          </p>
        </div>
      </section>

      {/* ===== WHO WE HELP ===== */}
      <section className="bg-forest/5 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">Who We Work With</span>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mt-3">
              Built for the Round Top ecosystem.
            </h2>
            <p className="text-charcoal-light mt-4 max-w-2xl mx-auto">We specialize in the specific businesses that make Round Top run — vendors, galleries, lodging, and dining. We know the buyer. We know the show. We know what works here.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: "🏺", label: "Antique & Vintage Dealers" },
              { icon: "💎", label: "Jewelry Makers & Sellers" },
              { icon: "🎨", label: "Art Galleries & Painters" },
              { icon: "👗", label: "Fashion & Accessories Vendors" },
              { icon: "🛋️", label: "Home Décor & Gift Shops" },
              { icon: "🏡", label: "Boutique Lodging & B&Bs" },
              { icon: "🍽️", label: "Dining & Food Vendors" },
              { icon: "🏘️", label: "Year-Round Retail Shops" },
              { icon: "🪵", label: "Furniture & Salvage Dealers" },
            ].map((item) => (
              <div key={item.label} className="bg-white border border-forest/10 rounded-xl px-6 py-5 flex items-center gap-4 hover:border-forest/30 transition-colors">
                <span className="text-2xl">{item.icon}</span>
                <span className="font-medium text-charcoal">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ASSESSMENT ===== */}
      <section id="assessment" className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">Start Here</span>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mt-3">
              The Digital Visibility Assessment
            </h2>
            <p className="text-charcoal-light mt-4 max-w-2xl mx-auto text-lg">
              A complete audit of your Google presence, website, Instagram, Pinterest, and Facebook — scored, explained, and delivered with a specific 30-day action plan. Not a sales pitch. An honest report.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                {
                  step: "01",
                  title: "You fill out a short intake form",
                  body: "10 minutes. Covers your business basics, your digital presence, how customers find you now, and your biggest frustrations.",
                },
                {
                  step: "02",
                  title: "We do a complete manual audit",
                  body: "We check your Google Business Profile, your website, your Instagram, Pinterest, and Facebook — and pull any Search Console data you can share with us.",
                },
                {
                  step: "03",
                  title: "You get a scored, specific report",
                  body: "Within 48 hours. A visibility score across 5 dimensions, specific gaps identified, 5 quick wins you can do yourself in 30 days, and a financial impact estimate.",
                },
                {
                  step: "04",
                  title: "We walk through it together",
                  body: "A 30-minute call where we go section by section, answer your questions, and talk through what the next 90 days could look like.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-5">
                  <span className="text-gold font-bold text-xl shrink-0 w-8">{item.step}</span>
                  <div>
                    <h3 className="font-bold text-charcoal mb-1">{item.title}</h3>
                    <p className="text-charcoal-light leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-forest text-white rounded-2xl p-8 shadow-xl">
              <p className="text-gold text-xs font-semibold uppercase tracking-wider mb-2">Digital Visibility Assessment</p>
              <p className="text-4xl font-bold mt-2 mb-1">$500</p>
              <p className="text-white/60 text-sm mb-6">One-time. Delivered within 48 hours.</p>
              <ul className="space-y-3 text-sm text-white/80 mb-8">
                {[
                  "Google Business Profile audit & score",
                  "Website effectiveness review",
                  "Google Search visibility analysis",
                  "Instagram, Pinterest & Facebook assessment",
                  "Visibility Score across 5 dimensions",
                  "5 specific quick wins (30-day action plan)",
                  "Financial impact estimate",
                  "30-minute walkthrough call included",
                  "Fee credited toward any full engagement",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-gold mt-0.5">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="block text-center bg-gold text-forest-dark py-3 rounded-xl font-bold hover:bg-gold-dark transition-colors">
                Request Your Assessment &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section id="how-it-works" className="bg-forest/5 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">Full Engagement</span>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mt-3">
              What ongoing work looks like.
            </h2>
            <p className="text-charcoal-light mt-4 max-w-2xl mx-auto">After the assessment, clients who want ongoing help choose one of two paths.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "📍",
                title: "Google Business Profile",
                body: "We optimize and manage your GBP listing — categories, photos, description, services, and weekly posts — so Google knows exactly who you are and where you are.",
              },
              {
                icon: "📌",
                title: "Pinterest & Social",
                body: "Your buyers are 85% female and planning-oriented. They use Pinterest before every show trip. We build and manage a Pinterest presence that puts your inventory in front of them before they leave home.",
              },
              {
                icon: "🔍",
                title: "Local SEO & Content",
                body: "We create blog posts and landing pages that rank for the searches your buyers are actually making — and connect your Round Top Finder listing to your broader digital strategy.",
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

      {/* ===== PRICING ===== */}
      <section id="pricing" className="bg-forest text-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">Pricing</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">Three ways to work together.</h2>
            <p className="text-white/60 mt-3">Start with the assessment. Everything else follows from what we find.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Assessment */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <p className="text-gold text-xs font-semibold uppercase tracking-wider mb-4">Step 1 — Start Here</p>
              <h3 className="text-xl font-bold mb-1">Digital Visibility Assessment</h3>
              <p className="text-3xl font-bold text-gold mt-3 mb-1">$500</p>
              <p className="text-sm text-white/60 mb-6">One-time. Delivered in 48 hours.</p>
              <ul className="space-y-2 text-sm text-white/80 mb-8">
                {[
                  "Complete audit of all channels",
                  "Visibility Score across 5 dimensions",
                  "5 specific 30-day quick wins",
                  "Financial impact estimate",
                  "30-minute walkthrough call",
                  "Credited toward any engagement",
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
            {/* Growth Package */}
            <div className="bg-white text-charcoal rounded-2xl p-8 shadow-xl relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-forest-dark text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">Most Popular</span>
              <p className="text-gold text-xs font-semibold uppercase tracking-wider mb-4 mt-2">Step 2 — Full Engagement</p>
              <h3 className="text-xl font-bold mb-1">Vendor Growth Package</h3>
              <p className="text-sm text-charcoal-light mb-3">90-day program. Tangible results before the next show.</p>
              <p className="text-3xl font-bold text-forest mt-3 mb-1">$3,500<span className="text-base font-normal text-charcoal-light"> / 90 days</span></p>
              <p className="text-sm text-charcoal-light mb-6">Assessment fee credited if you sign within 30 days.</p>
              <ul className="space-y-2 text-sm text-charcoal-light mb-8">
                {[
                  "Everything in the Assessment, plus:",
                  "Google Business Profile full optimization",
                  "Pinterest strategy build-out",
                  "Local SEO content (monthly)",
                  "Google Search Console setup + monitoring",
                  "Review generation system",
                  "Monthly performance reports",
                  "Direct access via email/text",
                ].map((item, i) => (
                  <li key={item} className={`flex items-start gap-2 ${i === 0 ? "font-semibold text-charcoal" : ""}`}>
                    <span className="text-forest mt-0.5">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="block text-center bg-forest text-white py-3 rounded-xl font-bold hover:bg-forest-light transition-colors">
                Request Your Assessment &rarr;
              </a>
            </div>
            {/* Retainer */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <p className="text-gold text-xs font-semibold uppercase tracking-wider mb-4">Step 3 — Ongoing</p>
              <h3 className="text-xl font-bold mb-1">Monthly Retainer</h3>
              <p className="text-3xl font-bold text-gold mt-3 mb-1">$895<span className="text-base font-normal text-white/60"> /month</span></p>
              <p className="text-sm text-white/60 mb-6">Month-to-month. Cancel with 30 days notice.</p>
              <ul className="space-y-2 text-sm text-white/80 mb-8">
                {[
                  "GBP management & monthly posts",
                  "Pinterest ongoing management",
                  "Local SEO content (monthly)",
                  "Review response management",
                  "Monthly performance summary",
                  "Quarterly strategy check-in",
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
          </div>
          <p className="text-center text-sm text-white/40 mt-8">All engagements start with the $500 assessment. No surprises, no lock-in.</p>
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
              Built inside the community it serves.
            </h2>
          </div>
          <div className="text-charcoal-light text-lg leading-relaxed space-y-4">
            <p>
              I spent a decade running Round Top Wifi — the wireless internet infrastructure for the show grounds. That means I know this community from the inside. I know the vendors, the venues, the show rhythm, and what these businesses actually need. I&apos;m not a marketing agency that found Round Top in a Google search.
            </p>
            <p>
              Raintree Local applies enterprise-level digital strategy — the kind I learned managing corporate accounts at Nortel Networks — to the businesses that have always deserved it but could never access it at a price that made sense.
            </p>
            <p>
              The assessment is the starting point because it&apos;s honest. You shouldn&apos;t hire anyone before you know where your gaps actually are. We find out first, then we decide together what to do about it.
            </p>
          </div>
          <p className="text-sm text-charcoal-light mt-8 border-t border-forest/10 pt-6">
            <strong className="text-charcoal">Mark Whitfill</strong> · Founder, Raintree Local · Central Texas · mark@raintreelocal.com
          </p>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-charcoal mb-8 text-center">Common Questions</h2>
          <div className="space-y-3">
            {[
              { q: "Why start with the assessment instead of just signing up?", a: "Because we don't know exactly where your gaps are until we look. The assessment tells us both — you get a specific diagnosis, and we know exactly what the engagement should focus on. It's a better outcome for everyone, and the $500 comes off the full engagement price if you sign within 30 days." },
              { q: "Do I need to be at Round Top to work with you?", a: "No. If you're a Texas boutique retailer, antique dealer, gallery, or specialty shop — whether you're show-only or year-round — we can help. The Round Top community is our home base, but we serve the broader Texas market." },
              { q: "What does the 90-day Growth Package actually deliver?", a: "A fully optimized Google Business Profile, a Pinterest presence built from scratch or rebuilt properly, local SEO content running monthly, Google Search Console tracking, a review generation system, and monthly reports. By the end of 90 days, your digital foundation is solid." },
              { q: "How long before I see results?", a: "Google Business Profile improvements typically show movement within 30-60 days. Pinterest builds over 3-6 months as content accumulates and gets repinned. Blog content and local SEO compound over time. We track everything monthly so progress is visible." },
              { q: "Do I need to sign a long-term contract?", a: "The Growth Package is 90 days — that's the minimum time to see real results. The monthly retainer is month-to-month after that, with 30 days notice to cancel." },
              { q: "What do you need from me each month?", a: "Minimal. A quick monthly check-in and occasional approval on content before it goes live. We handle the rest." },
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
              <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">Get Started</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
                Request your Digital Visibility Assessment.
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                $500. Delivered within 48 hours. A complete audit of your Google presence, website, and social channels — scored, explained, and delivered with a specific action plan.
              </p>
              <p className="text-sm text-white/40">No obligation beyond the assessment fee. Credited toward any full engagement.</p>
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
                  <option value="Antique / Vintage Dealer" className="text-charcoal">Antique / Vintage Dealer</option>
                  <option value="Jewelry" className="text-charcoal">Jewelry</option>
                  <option value="Art Gallery / Painter" className="text-charcoal">Art Gallery / Painter</option>
                  <option value="Fashion / Accessories" className="text-charcoal">Fashion / Accessories</option>
                  <option value="Home Décor / Gifts" className="text-charcoal">Home Décor / Gifts</option>
                  <option value="Lodging / B&B" className="text-charcoal">Lodging / B&amp;B</option>
                  <option value="Dining / Food" className="text-charcoal">Dining / Food</option>
                  <option value="Year-Round Retail" className="text-charcoal">Year-Round Retail</option>
                  <option value="Oriental Rug Dealer" className="text-charcoal">Oriental Rug Dealer</option>
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
              <input type="hidden" name="_subject" value="Assessment Request — Raintree Local" />
              <button type="submit" className="w-full bg-gold text-forest-dark py-3 rounded-xl font-bold text-lg hover:bg-gold-dark transition-colors">
                Request My Assessment &rarr;
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
