export default function HomePage() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Raintree Marketing Services",
        description: "Digital marketing and AI consulting for small businesses in Texas. Local SEO, Google Business Profile, and AI readiness assessments.",
        url: "https://raintreems.com",
        email: "mark@raintreems.com",
        areaServed: "Texas",
        founder: { "@type": "Person", name: "Mark Whitfill" },
      }) }} />

      {/* Nav */}
      <nav className="fixed top-0 w-full bg-warm-white/90 backdrop-blur-sm z-50 border-b border-forest/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-forest font-bold text-lg tracking-tight">Raintree<span className="font-normal text-charcoal-light"> Marketing Services</span></span>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="text-charcoal-light hover:text-forest transition-colors">Services</a>
            <a href="#pricing" className="text-charcoal-light hover:text-forest transition-colors">Pricing</a>
            <a href="#about" className="text-charcoal-light hover:text-forest transition-colors">About</a>
            <a href="#contact" className="bg-forest text-white px-4 py-2 rounded-lg font-medium hover:bg-forest-light transition-colors">Get Started</a>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="relative bg-forest text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #6B8A3A 0%, transparent 50%), radial-gradient(circle at 80% 50%, #96D2D2 0%, transparent 50%)" }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Your business has two problems.<br />We solve both.
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Buyers can&apos;t find you online. And you&apos;re spending hours on work that should run itself. Both problems have a fix. Both start with a $500 assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#visibility" className="inline-block bg-gold text-forest-dark px-7 py-4 rounded-xl font-bold text-base hover:bg-gold-dark transition-colors shadow-lg">
              Digital Visibility Assessment &rarr;
            </a>
            <a href="#ai" className="inline-block bg-white/15 border border-white/30 text-white px-7 py-4 rounded-xl font-bold text-base hover:bg-white/25 transition-colors">
              AI Readiness Assessment &rarr;
            </a>
          </div>
          <p className="text-sm text-white/40 mt-5">Both $500. Both delivered within 48 hours. Both credited toward any full engagement.</p>
        </div>
      </section>

      {/* ===== TWO PROBLEMS ===== */}
      <section id="services" className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">Two Ways We Help</span>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mt-3">Pick the problem that&apos;s costing you the most.</h2>
            <p className="text-charcoal-light mt-4 max-w-2xl mx-auto">Most businesses need both eventually. Start with whichever one is keeping you up at night.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <a href="#visibility" className="group block bg-white border-2 border-forest/10 hover:border-forest/40 rounded-2xl p-8 transition-all hover:shadow-md">
              <span className="text-3xl mb-4 block">📍</span>
              <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-forest transition-colors">&ldquo;Buyers can&apos;t find me online.&rdquo;</h3>
              <p className="text-charcoal-light leading-relaxed mb-4">Your Google listing is incomplete, your Pinterest is empty, and buyers are finding your competitors before they find you. We audit every channel and tell you exactly what to fix.</p>
              <span className="text-gold font-semibold text-sm">Digital Visibility Assessment — $500 &rarr;</span>
            </a>
            <a href="#ai" className="group block bg-white border-2 border-forest/10 hover:border-forest/40 rounded-2xl p-8 transition-all hover:shadow-md">
              <span className="text-3xl mb-4 block">⚡</span>
              <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-forest transition-colors">&ldquo;I&apos;m drowning in manual work.&rdquo;</h3>
              <p className="text-charcoal-light leading-relaxed mb-4">You&apos;re answering the same questions, building the same reports, and following up manually — work that should run itself. We find exactly where AI and automation can give you your time back.</p>
              <span className="text-gold font-semibold text-sm">AI Readiness Assessment — $500 &rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* ===== DIGITAL VISIBILITY ASSESSMENT ===== */}
      <section id="visibility" className="bg-forest/5 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">Assessment #1</span>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mt-3">Digital Visibility Assessment</h2>
            <p className="text-charcoal-light mt-4 max-w-2xl mx-auto text-lg">A complete audit of your Google presence, website, Instagram, Pinterest, and Facebook — scored, explained, and delivered with a specific 30-day action plan.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                { step: "01", title: "You fill out a short intake form", body: "10 minutes. Covers your business basics, your digital presence, how customers find you now, and your biggest frustrations." },
                { step: "02", title: "We do a complete manual audit", body: "We check your Google Business Profile, website, Instagram, Pinterest, and Facebook — and pull any Search Console data you can share." },
                { step: "03", title: "You get a scored, specific report", body: "Within 48 hours. A visibility score across 5 dimensions, specific gaps identified, 5 quick wins you can do yourself, and a financial impact estimate." },
                { step: "04", title: "We walk through it together", body: "A 30-minute call where we go section by section, answer your questions, and talk through what the next 90 days could look like." },
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
                Request Visibility Assessment &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== AI READINESS ASSESSMENT ===== */}
      <section id="ai" className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">Assessment #2</span>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mt-3">AI Readiness Assessment</h2>
            <p className="text-charcoal-light mt-4 max-w-2xl mx-auto text-lg">A 45-minute conversation about how your business actually runs — followed by a specific report identifying where AI and automation can give you your time back.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                { step: "01", title: "We talk for 45 minutes on Zoom", body: "No prep required. I ask you questions about your day-to-day — what tools you use, where time gets lost, what you repeat constantly, what falls through the cracks." },
                { step: "02", title: "We analyze your workflow with AI", body: "Your conversation becomes the source material. We identify the specific tasks and processes where AI tools or simple automations would have the highest impact." },
                { step: "03", title: "You get a specific action plan", body: "Within 48 hours. An effort vs. impact matrix, specific tool recommendations with pricing, a 4-day quick win implementation plan, and a financial impact estimate." },
                { step: "04", title: "We walk through it together", body: "A 30-minute follow-up call where we go section by section. Most clients leave with 2–3 things they can implement that week." },
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
              <p className="text-gold text-xs font-semibold uppercase tracking-wider mb-2">AI Readiness Assessment</p>
              <p className="text-4xl font-bold mt-2 mb-1">$500</p>
              <p className="text-white/60 text-sm mb-6">One-time. Delivered within 48 hours.</p>
              <ul className="space-y-3 text-sm text-white/80 mb-8">
                {[
                  "45-minute Zoom discovery call",
                  "Workflow and tool stack analysis",
                  "Effort vs. impact opportunity matrix",
                  "Specific AI tool recommendations",
                  "4-day quick win implementation plan",
                  "Financial impact estimate (time & money saved)",
                  "30-minute walkthrough call included",
                  "Fee credited toward any implementation work",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-gold mt-0.5">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="block text-center bg-gold text-forest-dark py-3 rounded-xl font-bold hover:bg-gold-dark transition-colors">
                Request AI Assessment &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHO WE HELP ===== */}
      <section className="bg-forest/5 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">Who We Work With</span>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mt-3">Built for Texas small businesses.</h2>
            <p className="text-charcoal-light mt-4 max-w-2xl mx-auto">From Round Top antique dealers to HVAC companies to professional services firms — any Texas small business that&apos;s underserved by big agencies and overcharged by generalists.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: "🏺", label: "Antique & Vintage Dealers" },
              { icon: "🔧", label: "Home Services (HVAC, Plumbing, Roofing)" },
              { icon: "🏡", label: "Boutique Lodging & B&Bs" },
              { icon: "💎", label: "Jewelry & Specialty Retail" },
              { icon: "🏠", label: "Real Estate Professionals" },
              { icon: "🎨", label: "Art Galleries & Creative Studios" },
              { icon: "🍽️", label: "Restaurants & Food Businesses" },
              { icon: "⚖️", label: "Professional Services Firms" },
              { icon: "🛋️", label: "Home Décor & Gift Shops" },
            ].map((item) => (
              <div key={item.label} className="bg-white border border-forest/10 rounded-xl px-6 py-5 flex items-center gap-4 hover:border-forest/30 transition-colors">
                <span className="text-2xl">{item.icon}</span>
                <span className="font-medium text-charcoal">{item.label}</span>
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
            <h2 className="text-3xl md:text-4xl font-bold mt-3">Start with an assessment. Everything else follows.</h2>
            <p className="text-white/60 mt-3">Both assessments are $500. Most clients do one, then come back for the other.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-5">
            {/* Visibility Assessment */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-7 border border-white/20">
              <p className="text-gold text-xs font-semibold uppercase tracking-wider mb-4">Option 1</p>
              <h3 className="text-lg font-bold mb-1">Digital Visibility Assessment</h3>
              <p className="text-3xl font-bold text-gold mt-3 mb-1">$500</p>
              <p className="text-sm text-white/60 mb-5">One-time. Delivered in 48 hours.</p>
              <ul className="space-y-2 text-sm text-white/80 mb-7">
                {[
                  "Full audit of Google, social & website",
                  "Visibility Score across 5 dimensions",
                  "5 specific 30-day quick wins",
                  "Financial impact estimate",
                  "30-minute walkthrough call",
                  "Credited toward full engagement",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-gold mt-0.5">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="block text-center border-2 border-gold text-gold py-3 rounded-xl font-bold hover:bg-gold hover:text-forest-dark transition-colors text-sm">
                Get Started &rarr;
              </a>
            </div>

            {/* AI Assessment */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-7 border border-white/20">
              <p className="text-gold text-xs font-semibold uppercase tracking-wider mb-4">Option 2</p>
              <h3 className="text-lg font-bold mb-1">AI Readiness Assessment</h3>
              <p className="text-3xl font-bold text-gold mt-3 mb-1">$500</p>
              <p className="text-sm text-white/60 mb-5">One-time. Delivered in 48 hours.</p>
              <ul className="space-y-2 text-sm text-white/80 mb-7">
                {[
                  "45-minute Zoom discovery call",
                  "Workflow & tool stack analysis",
                  "Effort vs. impact opportunity matrix",
                  "Specific AI tool recommendations",
                  "4-day quick win plan",
                  "Credited toward implementation work",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-gold mt-0.5">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="block text-center border-2 border-gold text-gold py-3 rounded-xl font-bold hover:bg-gold hover:text-forest-dark transition-colors text-sm">
                Get Started &rarr;
              </a>
            </div>

            {/* Combo */}
            <div className="bg-white text-charcoal rounded-2xl p-7 shadow-xl relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-forest-dark text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full whitespace-nowrap">Best Value</span>
              <p className="text-gold text-xs font-semibold uppercase tracking-wider mb-4 mt-2">Option 3</p>
              <h3 className="text-lg font-bold mb-1">Full Business Audit</h3>
              <p className="text-sm text-charcoal-light mb-2">Both assessments. Complete picture.</p>
              <p className="text-3xl font-bold text-forest mt-3 mb-1">$750</p>
              <p className="text-sm text-charcoal-light mb-5">Save $250 vs. buying separately.</p>
              <ul className="space-y-2 text-sm text-charcoal-light mb-7">
                {[
                  "Everything in both assessments:",
                  "Digital Visibility audit & score",
                  "AI Readiness workflow analysis",
                  "Two 30-minute walkthrough calls",
                  "Combined action plan & priorities",
                  "Credited toward any full engagement",
                ].map((item, i) => (
                  <li key={item} className={`flex items-start gap-2 ${i === 0 ? "font-semibold text-charcoal" : ""}`}>
                    <span className="text-forest mt-0.5">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="block text-center bg-forest text-white py-3 rounded-xl font-bold hover:bg-forest-light transition-colors text-sm">
                Get the Full Audit &rarr;
              </a>
            </div>

            {/* Growth Package */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-7 border border-white/20">
              <p className="text-gold text-xs font-semibold uppercase tracking-wider mb-4">Option 4</p>
              <h3 className="text-lg font-bold mb-1">Growth Package</h3>
              <p className="text-sm text-white/60 mb-2">90-day full engagement.</p>
              <p className="text-3xl font-bold text-gold mt-3 mb-1">$3,500</p>
              <p className="text-sm text-white/60 mb-5">Assessment credited if you sign within 30 days.</p>
              <ul className="space-y-2 text-sm text-white/80 mb-7">
                {[
                  "Everything in your assessment, plus:",
                  "Full implementation of recommendations",
                  "Google Business Profile optimization",
                  "Local SEO content (monthly)",
                  "Review generation system",
                  "Monthly performance reports",
                  "Direct access via email/text",
                ].map((item, i) => (
                  <li key={item} className={`flex items-start gap-2 ${i === 0 ? "font-semibold" : ""}`}>
                    <span className="text-gold mt-0.5">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="block text-center border-2 border-gold text-gold py-3 rounded-xl font-bold hover:bg-gold hover:text-forest-dark transition-colors text-sm">
                Request Proposal &rarr;
              </a>
            </div>
          </div>
          <p className="text-center text-sm text-white/40 mt-8">All engagements start with an assessment. No surprises, no lock-in.</p>
        </div>
      </section>

      {/* ===== CASE STUDY ===== */}
      <section id="results" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">Real Results</span>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mt-3">From zero online presence to ranking and generating leads.</h2>
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
              <p className="text-charcoal leading-relaxed">Within the first 30 days, Boga had a fully optimized GBP, city-specific pages live on their site, and a content calendar running. Rankings and lead generation improving month over month.</p>
              <p className="text-sm text-charcoal-light mt-4 italic">Results available upon request — references provided.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="bg-forest/5 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-8">
            <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">About</span>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mt-3">Built inside the community it serves.</h2>
          </div>
          <div className="text-charcoal-light text-lg leading-relaxed space-y-4">
            <p>I spent a decade running Round Top Wifi — the wireless internet infrastructure for the show grounds. That means I know this community from the inside. I know the vendors, the venues, the show rhythm, and what these businesses actually need. I&apos;m not a marketing agency that found Round Top in a Google search.</p>
            <p>Raintree Marketing Services applies enterprise-level digital strategy — the kind I learned managing corporate accounts at Nortel Networks — to the businesses that have always deserved it but could never access it at a price that made sense.</p>
            <p>The assessment is the starting point because it&apos;s honest. You shouldn&apos;t hire anyone before you know where your gaps actually are. We find out first, then we decide together what to do about it.</p>
          </div>
          <p className="text-sm text-charcoal-light mt-8 border-t border-forest/10 pt-6">
            <strong className="text-charcoal">Mark Whitfill</strong> · Founder, Raintree Marketing Services · Central Texas · mark@raintreems.com
          </p>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-charcoal mb-8 text-center">Common Questions</h2>
          <div className="space-y-3">
            {[
              { q: "Which assessment should I start with?", a: "If your biggest problem is that new customers can't find you online — start with the Digital Visibility Assessment. If your biggest problem is that you and your team are buried in manual, repetitive work — start with the AI Readiness Assessment. Not sure? Email me and I'll tell you which one fits your situation." },
              { q: "Can I do both assessments?", a: "Yes, and many clients do. They're solving different problems. The Visibility Assessment looks outward — how the world sees your business. The AI Assessment looks inward — how your business actually runs. Together they give you a complete picture." },
              { q: "Why start with an assessment instead of just hiring you?", a: "Because we don't know exactly where your gaps are until we look. The assessment tells us both — you get a specific diagnosis, and we know exactly what the engagement should focus on. It's a better outcome for everyone, and the $500 comes off the full engagement price if you sign within 30 days." },
              { q: "Do I need to be a Round Top vendor to work with you?", a: "No. Round Top is our home base, but we work with any Texas small business — home services, retail, professional services, restaurants, real estate. If you have 5–50 employees and you're underserved by the big agencies, we can help." },
              { q: "What does the 90-day Growth Package actually deliver?", a: "Full implementation of your assessment recommendations — optimized Google Business Profile, Pinterest presence, local SEO content, review system, and monthly reporting. By the end of 90 days, your digital foundation is solid." },
              { q: "How long before I see results?", a: "Google Business Profile improvements typically show movement within 30–60 days. AI and automation wins can show results in the first week. SEO and Pinterest compound over 3–6 months. We track everything monthly." },
              { q: "What do you need from me each month?", a: "Minimal. A quick monthly check-in and occasional approval on content before it goes live. We handle the rest." },
            ].map((faq) => (
              <details key={faq.q} className="border border-forest/10 rounded-xl group bg-white">
                <summary className="px-6 py-4 font-bold text-charcoal cursor-pointer hover:text-forest transition-colors">{faq.q}</summary>
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
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Request your assessment.</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">$500. Delivered within 48 hours. Tell us which assessment fits your situation — or let us know you&apos;re not sure and we&apos;ll help you pick.</p>
              <p className="text-sm text-white/40">No obligation beyond the assessment fee. Credited toward any full engagement.</p>
            </div>
            <form
              action="mailto:mark@raintreems.com"
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
                <label className="block text-xs text-white/60 mb-1">Which assessment are you interested in?</label>
                <select name="assessment_type" required className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-gold">
                  <option value="" className="text-charcoal">Select...</option>
                  <option value="Digital Visibility Assessment" className="text-charcoal">Digital Visibility Assessment — &ldquo;Buyers can&apos;t find me online&rdquo;</option>
                  <option value="AI Readiness Assessment" className="text-charcoal">AI Readiness Assessment — &ldquo;I&apos;m drowning in manual work&rdquo;</option>
                  <option value="Full Business Audit ($750)" className="text-charcoal">Full Business Audit — Both assessments ($750, save $250)</option>
                  <option value="Not sure" className="text-charcoal">Not sure — help me decide</option>
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
              <input type="hidden" name="_subject" value="Assessment Request — Raintree Marketing Services" />
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
          <p>&copy; {new Date().getFullYear()} Raintree Marketing Services. All rights reserved.</p>
          <a href="mailto:mark@raintreems.com" className="hover:text-gold transition-colors">mark@raintreems.com</a>
        </div>
      </footer>
    </>
  );
}
