export default function HomePage() {
  return (
    <>
      {/* ── Structured Data ─────────────────────────────────────────────── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Raintree Marketing Services",
        description: "Digital marketing, AI consulting, and POS software for small businesses in Texas.",
        url: "https://www.raintreems.com",
        email: "mark@raintreems.com",
        areaServed: { "@type": "State", name: "Texas" },
        founder: { "@type": "Person", name: "Mark Whitfill" },
      }) }} />

      {/* ── Nav ─────────────────────────────────────────────────────────── */}
      <nav className="fixed top-0 w-full bg-warm-white/95 backdrop-blur-sm z-50 border-b border-forest/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5">
            <span className="font-bold text-forest-dark text-lg tracking-tight leading-none">Raintree</span>
            <span className="hidden sm:inline text-charcoal-light text-sm font-normal tracking-wide">Marketing Services</span>
          </a>
          <div className="hidden md:flex items-center gap-1 text-sm">
            <a href="#pos"       className="px-3 py-1.5 rounded-lg text-charcoal-light hover:text-forest hover:bg-forest/5 transition-colors font-medium">POS</a>
            <a href="#marketing" className="px-3 py-1.5 rounded-lg text-charcoal-light hover:text-forest hover:bg-forest/5 transition-colors font-medium">Marketing</a>
            <a href="#pricing"   className="px-3 py-1.5 rounded-lg text-charcoal-light hover:text-forest hover:bg-forest/5 transition-colors font-medium">Pricing</a>
            <a href="/blog"      className="px-3 py-1.5 rounded-lg text-charcoal-light hover:text-forest hover:bg-forest/5 transition-colors font-medium">Blog</a>
            <a href="#about"     className="px-3 py-1.5 rounded-lg text-charcoal-light hover:text-forest hover:bg-forest/5 transition-colors font-medium">About</a>
            <a href="#contact"   className="ml-2 bg-forest text-white px-4 py-2 rounded-lg font-semibold hover:bg-forest-dark transition-colors">Get Started</a>
          </div>
        </div>
      </nav>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-forest-dark text-white pt-36 pb-24 overflow-hidden">
        {/* Subtle radial texture */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "radial-gradient(ellipse at 15% 60%, #5BBCC4 0%, transparent 45%), radial-gradient(ellipse at 85% 30%, #82B840 0%, transparent 45%)"
        }} />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block text-rain text-xs font-bold uppercase tracking-[0.25em] mb-5">
            Growing from one system
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Two products.<br />One company built for small business.
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12">
            Raintree builds the tools and does the work that helps independent businesses get found online and run smoother every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#pos" className="inline-flex items-center justify-center gap-2 bg-rain text-forest-dark px-7 py-4 rounded-xl font-bold text-base hover:bg-rain-light transition-colors shadow-lg">
              <span>🏪</span> Raintree POS
            </a>
            <a href="#marketing" className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/25 text-white px-7 py-4 rounded-xl font-bold text-base hover:bg-white/20 transition-colors">
              <span>📍</span> Marketing Services
            </a>
          </div>
        </div>
      </section>

      {/* ── Two Products ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-off-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">

            {/* POS Card */}
            <a href="#pos" className="group block bg-white rounded-2xl p-8 border-2 border-forest/10 hover:border-rain hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-rain/15 flex items-center justify-center text-2xl mb-5">🏪</div>
              <h2 className="text-xl font-bold text-charcoal mb-2 group-hover:text-forest transition-colors">Raintree POS</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Point-of-sale software built for consignment stores and antique malls. Track vendors, run checkout, accept card or cash, and see every payout — from $49/month. No setup fee.
              </p>
              <span className="text-rain font-semibold text-sm">See plans &rarr;</span>
            </a>

            {/* Marketing Card */}
            <a href="#marketing" className="group block bg-white rounded-2xl p-8 border-2 border-forest/10 hover:border-leaf hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-leaf/15 flex items-center justify-center text-2xl mb-5">📍</div>
              <h2 className="text-xl font-bold text-charcoal mb-2 group-hover:text-forest transition-colors">Marketing Services</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Google Business Profile, local SEO, Pinterest, and AI automation — for Texas small businesses that deserve better than a big agency. Starts with a $500 assessment.
              </p>
              <span className="text-leaf font-semibold text-sm">See services &rarr;</span>
            </a>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          RAINTREE POS
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="pos" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-rain text-xs font-bold uppercase tracking-[0.25em]">Product 1</span>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mt-3">Raintree POS</h2>
            <p className="text-charcoal-light mt-4 max-w-2xl mx-auto text-lg">
              Built specifically for consignment stores and antique malls. Track every vendor, run fast checkout, accept Square card payments, and know exactly what every vendor is owed — automatically.
            </p>
          </div>

          {/* Features grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
            {[
              { icon: "🛒", title: "Fast Checkout", body: "Enter booth number, add items, charge card or cash. A full sale in under 30 seconds." },
              { icon: "🏪", title: "Vendor Management", body: "Each booth has its own commission rate, rent amount, and running balance. All tracked automatically." },
              { icon: "💳", title: "Square Terminal", body: "Takes cards via Square Terminal — the same hardware your vendors already trust. No extra card readers." },
              { icon: "💵", title: "Cash with Change", body: "Enter cash tendered and see change due instantly. Every cash sale is logged and attributed." },
              { icon: "📊", title: "Vendor Balances", body: "Every sale updates vendor balances in real time. Know exactly what you owe every vendor at month end." },
              { icon: "📥", title: "Export & Reports", body: "Export transaction history and vendor payouts to CSV for your bookkeeping or QuickBooks." },
              { icon: "🔒", title: "Clerk PIN Login", body: "Clerks clock in with a PIN — no sharing owner passwords. Shifts are tracked separately." },
              { icon: "📶", title: "Works Offline", body: "Sales queue locally when the internet drops. Everything syncs when you're back online." },
              { icon: "🏗️", title: "No Setup Fee", body: "Onboarded in an afternoon. Month-to-month — no contracts, no cancellation fees." },
            ].map((f) => (
              <div key={f.title} className="bg-off-white rounded-xl p-6 border border-forest/8">
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-charcoal mb-1.5">{f.title}</h3>
                <p className="text-charcoal-light text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>

          {/* POS Pricing */}
          <div id="pricing-pos" className="text-center mb-10">
            <span className="text-rain text-xs font-bold uppercase tracking-[0.25em]">Pricing</span>
            <h3 className="text-2xl md:text-3xl font-bold text-charcoal mt-3">Simple, flat monthly pricing.</h3>
            <p className="text-charcoal-light mt-2">No setup fee. No per-transaction cut. Cancel any time.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5 mb-6">

            {/* Starter */}
            <div className="bg-white rounded-2xl p-7 border-2 border-forest/15 hover:border-rain transition-colors">
              <p className="text-rain text-xs font-bold uppercase tracking-wider mb-3">Starter</p>
              <p className="text-4xl font-bold text-charcoal mb-0.5">$49<span className="text-base font-normal text-charcoal-light">/mo</span></p>
              <p className="text-sm text-charcoal-light mb-6">Up to 35 vendors</p>
              <ul className="space-y-2.5 text-sm text-charcoal-light mb-8">
                {[
                  "Up to 35 vendor booths",
                  "Unlimited transactions",
                  "Square Terminal + cash checkout",
                  "Vendor balance tracking",
                  "CSV export",
                  "Email support",
                ].map(i => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-rain mt-0.5 font-bold">✓</span>{i}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="block text-center border-2 border-rain text-rain py-3 rounded-xl font-bold hover:bg-rain hover:text-white transition-colors text-sm">
                Get Started
              </a>
            </div>

            {/* Growth — highlighted */}
            <div className="bg-forest-dark text-white rounded-2xl p-7 border-2 border-forest-dark shadow-xl relative">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-rain text-forest-dark text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full whitespace-nowrap">Most Popular</span>
              <p className="text-rain text-xs font-bold uppercase tracking-wider mb-3 mt-2">Growth</p>
              <p className="text-4xl font-bold mb-0.5">$89<span className="text-base font-normal text-white/60">/mo</span></p>
              <p className="text-sm text-white/60 mb-6">Up to 75 vendors</p>
              <ul className="space-y-2.5 text-sm text-white/80 mb-8">
                {[
                  "Up to 75 vendor booths",
                  "Unlimited transactions",
                  "Square Terminal + cash checkout",
                  "Vendor balance tracking",
                  "Clerk PIN logins",
                  "CSV export + reports",
                  "Priority support",
                ].map(i => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-rain mt-0.5 font-bold">✓</span>{i}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="block text-center bg-rain text-forest-dark py-3 rounded-xl font-bold hover:bg-rain-light transition-colors text-sm">
                Get Started
              </a>
            </div>

            {/* Unlimited */}
            <div className="bg-white rounded-2xl p-7 border-2 border-forest/15 hover:border-leaf transition-colors">
              <p className="text-leaf text-xs font-bold uppercase tracking-wider mb-3">Unlimited</p>
              <p className="text-4xl font-bold text-charcoal mb-0.5">$139<span className="text-base font-normal text-charcoal-light">/mo</span></p>
              <p className="text-sm text-charcoal-light mb-6">Unlimited vendors</p>
              <ul className="space-y-2.5 text-sm text-charcoal-light mb-8">
                {[
                  "Unlimited vendor booths",
                  "Unlimited transactions",
                  "Square Terminal + cash checkout",
                  "Vendor balance tracking",
                  "Clerk PIN logins",
                  "Full reporting suite",
                  "Show mode (antique fairs)",
                  "Priority phone + email support",
                ].map(i => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-leaf mt-0.5 font-bold">✓</span>{i}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="block text-center border-2 border-leaf text-leaf py-3 rounded-xl font-bold hover:bg-leaf hover:text-white transition-colors text-sm">
                Get Started
              </a>
            </div>

          </div>
          <p className="text-center text-sm text-charcoal-light">No setup fee. No long-term contract. Works with your existing Square hardware.</p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          MARKETING SERVICES
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="marketing" className="py-24 bg-off-white">
        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-16">
            <span className="text-leaf text-xs font-bold uppercase tracking-[0.25em]">Product 2</span>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mt-3">Marketing Services</h2>
            <p className="text-charcoal-light mt-4 max-w-2xl mx-auto text-lg">
              Get found on Google. Automate the work you repeat every week. Both start with a $500 assessment so you know exactly where your gaps are before spending a dollar more.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">

            {/* Visibility */}
            <div className="bg-white rounded-2xl p-8 border border-forest/10">
              <span className="inline-block bg-leaf/10 text-leaf text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-5">Assessment #1</span>
              <h3 className="text-xl font-bold text-charcoal mb-3">Digital Visibility Assessment</h3>
              <p className="text-charcoal-light leading-relaxed mb-5">
                A complete audit of your Google Business Profile, website, Instagram, Pinterest, and Facebook — scored across 5 dimensions with a 30-day action plan.
              </p>
              <ul className="space-y-2 text-sm text-charcoal-light mb-6">
                {[
                  "Google Business Profile audit & score",
                  "Website effectiveness review",
                  "Instagram, Pinterest & Facebook assessment",
                  "5 specific quick wins (30-day action plan)",
                  "Financial impact estimate",
                  "30-minute walkthrough call",
                ].map(i => (
                  <li key={i} className="flex items-start gap-2"><span className="text-leaf mt-0.5">✓</span>{i}</li>
                ))}
              </ul>
              <div className="flex items-end justify-between pt-5 border-t border-forest/8">
                <div>
                  <p className="text-3xl font-bold text-charcoal">$500</p>
                  <p className="text-xs text-charcoal-light">Delivered in 48 hours. Credited toward full engagement.</p>
                </div>
                <a href="#contact" className="bg-leaf text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-gold-dark transition-colors">
                  Request &rarr;
                </a>
              </div>
            </div>

            {/* AI */}
            <div className="bg-white rounded-2xl p-8 border border-forest/10">
              <span className="inline-block bg-rain/15 text-rain text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-5">Assessment #2</span>
              <h3 className="text-xl font-bold text-charcoal mb-3">AI Readiness Assessment</h3>
              <p className="text-charcoal-light leading-relaxed mb-5">
                A 45-minute Zoom call about how your business actually runs — followed by a specific report identifying where AI and automation give you your time back.
              </p>
              <ul className="space-y-2 text-sm text-charcoal-light mb-6">
                {[
                  "45-minute Zoom discovery call",
                  "Workflow & tool stack analysis",
                  "Effort vs. impact opportunity matrix",
                  "Specific AI tool recommendations",
                  "4-day quick win implementation plan",
                  "30-minute walkthrough call",
                ].map(i => (
                  <li key={i} className="flex items-start gap-2"><span className="text-rain mt-0.5">✓</span>{i}</li>
                ))}
              </ul>
              <div className="flex items-end justify-between pt-5 border-t border-forest/8">
                <div>
                  <p className="text-3xl font-bold text-charcoal">$500</p>
                  <p className="text-xs text-charcoal-light">Delivered in 48 hours. Credited toward full engagement.</p>
                </div>
                <a href="#contact" className="bg-rain text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-forest transition-colors">
                  Request &rarr;
                </a>
              </div>
            </div>

          </div>

          {/* Full pricing row */}
          <div id="pricing" className="grid md:grid-cols-3 gap-5">

            <div className="bg-white rounded-2xl p-6 border border-forest/10">
              <p className="text-xs font-bold uppercase tracking-wider text-charcoal-light mb-2">Option 1</p>
              <h4 className="font-bold text-charcoal">Digital Visibility Assessment</h4>
              <p className="text-2xl font-bold text-leaf mt-2 mb-4">$500</p>
              <a href="#contact" className="block text-center border-2 border-leaf text-leaf py-2.5 rounded-xl font-bold text-sm hover:bg-leaf hover:text-white transition-colors">Get Started</a>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-forest/10">
              <p className="text-xs font-bold uppercase tracking-wider text-charcoal-light mb-2">Option 2</p>
              <h4 className="font-bold text-charcoal">AI Readiness Assessment</h4>
              <p className="text-2xl font-bold text-rain mt-2 mb-4">$500</p>
              <a href="#contact" className="block text-center border-2 border-rain text-rain py-2.5 rounded-xl font-bold text-sm hover:bg-rain hover:text-white transition-colors">Get Started</a>
            </div>

            <div className="bg-forest-dark text-white rounded-2xl p-6 relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-leaf text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full whitespace-nowrap">Best Value</span>
              <p className="text-xs font-bold uppercase tracking-wider text-white/50 mb-2 mt-1">Option 3</p>
              <h4 className="font-bold">Full Business Audit</h4>
              <p className="text-sm text-white/60 mt-0.5 mb-1">Both assessments bundled</p>
              <p className="text-2xl font-bold text-leaf mt-2 mb-4">$750 <span className="text-sm font-normal text-white/50">save $250</span></p>
              <a href="#contact" className="block text-center bg-leaf text-white py-2.5 rounded-xl font-bold text-sm hover:bg-gold-dark transition-colors">Get the Full Audit</a>
            </div>

          </div>

          <div className="mt-5 bg-white rounded-2xl p-6 border border-forest/10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <p className="font-bold text-charcoal">90-Day Growth Package — $3,500</p>
                <p className="text-sm text-charcoal-light mt-0.5">Full implementation: GBP optimization, local SEO content, review system, Pinterest, monthly reporting. Assessment credited if you sign within 30 days.</p>
              </div>
              <a href="#contact" className="flex-shrink-0 border-2 border-forest text-forest px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-forest hover:text-white transition-colors">
                Request Proposal &rarr;
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ── Who We Help ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-charcoal-light text-xs font-bold uppercase tracking-[0.25em]">Who We Work With</span>
            <h2 className="text-2xl md:text-3xl font-bold text-charcoal mt-3">Built for Texas independent businesses.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: "🏺", label: "Consignment & Antique Stores",    tag: "POS + Marketing" },
              { icon: "🔧", label: "Home Services (HVAC, Plumbing)",   tag: "Marketing" },
              { icon: "🏡", label: "Boutique Lodging & B&Bs",          tag: "Marketing" },
              { icon: "💎", label: "Jewelry & Specialty Retail",        tag: "POS + Marketing" },
              { icon: "🎨", label: "Art Galleries & Creative Studios",  tag: "POS + Marketing" },
              { icon: "🛋️", label: "Home Décor & Gift Shops",           tag: "POS + Marketing" },
              { icon: "🍽️", label: "Restaurants & Food Businesses",     tag: "Marketing" },
              { icon: "🏠", label: "Real Estate Professionals",         tag: "Marketing" },
              { icon: "⚖️", label: "Professional Services Firms",       tag: "Marketing" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between bg-off-white border border-forest/8 rounded-xl px-5 py-4 hover:border-forest/25 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-medium text-charcoal text-sm">{item.label}</span>
                </div>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full whitespace-nowrap ${item.tag === 'POS + Marketing' ? 'bg-rain/15 text-rain' : 'bg-leaf/15 text-forest-light'}`}>
                  {item.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ───────────────────────────────────────────────────────── */}
      <section id="about" className="py-20 bg-forest-dark text-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-rain text-xs font-bold uppercase tracking-[0.25em]">About</span>
            <h2 className="text-3xl font-bold mt-3">Built inside the community it serves.</h2>
          </div>
          <div className="text-white/75 text-lg leading-relaxed space-y-4">
            <p>I spent a decade running Round Top Wifi — the wireless internet infrastructure for the show grounds. That means I know this community from the inside: the vendors, the venues, the show rhythm, what these businesses actually need. I&apos;m not a marketing agency that found Round Top in a Google search.</p>
            <p>Raintree POS came directly from that experience. Consignment store owners need software that understands booth numbers, commission splits, and monthly vendor payouts — not generic retail POS built for a different world. We built it from scratch for this specific problem.</p>
            <p>Raintree Marketing Services applies enterprise-level digital strategy — the kind I learned managing corporate accounts at Nortel Networks — to the businesses that deserve it but have never been able to access it at a price that made sense.</p>
          </div>
          <p className="text-sm text-white/40 mt-8 pt-6 border-t border-white/10">
            <strong className="text-white/60">Mark Whitfill</strong> &nbsp;·&nbsp; Founder, Raintree Marketing Services &nbsp;·&nbsp; Central Texas &nbsp;·&nbsp; mark@raintreems.com
          </p>
        </div>
      </section>

      {/* ── Case Study ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-off-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-leaf text-xs font-bold uppercase tracking-[0.25em]">Real Results</span>
            <h2 className="text-2xl md:text-3xl font-bold text-charcoal mt-3">From zero online presence to ranking and generating leads.</h2>
          </div>
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-forest/10 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <span className="bg-forest text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">Case Study</span>
              <span className="text-charcoal-light text-sm">Boga Rugs — San Francisco, CA</span>
            </div>
            <h3 className="text-lg font-bold text-charcoal mb-2">Oriental rug cleaning and retail</h3>
            <p className="text-charcoal-light leading-relaxed mb-5">Boga Rugs had loyal customers but almost no digital presence — incomplete GBP, minimal reviews, and zero ranking for the searches their ideal customers were making.</p>
            <ul className="space-y-2 text-sm text-charcoal-light mb-6">
              {[
                "Complete GBP audit and optimization",
                "10 neighborhood-specific landing pages targeting SF search terms",
                "Local SEO content targeting interior designer searches",
                "Review generation system to build trust signals",
              ].map(i => <li key={i} className="flex items-start gap-2"><span className="text-leaf mt-0.5">✓</span>{i}</li>)}
            </ul>
            <div className="bg-forest/5 rounded-xl p-5">
              <p className="text-charcoal leading-relaxed text-sm">Within 30 days: fully optimized GBP, city-specific pages live, and a content calendar running. Rankings and lead generation improving month over month.</p>
              <p className="text-xs text-charcoal-light mt-3 italic">References provided upon request.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-charcoal mb-8 text-center">Common Questions</h2>
          <div className="space-y-3">
            {[
              { q: "What hardware does Raintree POS require?", a: "A Square Terminal for card payments — that's it. The POS runs in any modern browser (laptop, tablet, iPad). No special printer required for card sales; Square Terminal prints those receipts built-in." },
              { q: "Can I use Raintree POS without a Square account?", a: "You'll need a Square account for card payments, but the POS works for cash-only sales without one. Square accounts are free to open — you only pay the card processing fee when you run a card sale." },
              { q: "How does vendor balance tracking work?", a: "Every time you sell an item tagged to a booth, the system automatically calculates commission, deducts it, and credits the vendor's running balance. At month end you know exactly what each vendor is owed without touching a spreadsheet." },
              { q: "Which marketing assessment should I start with?", a: "If new customers can't find you online — start with the Digital Visibility Assessment. If you're buried in manual repetitive work — start with AI Readiness. Not sure? Email me and I'll help you decide." },
              { q: "Is the assessment fee credited toward anything?", a: "Yes. The $500 assessment fee comes off the full engagement price if you sign within 30 days." },
              { q: "Do I need to be in Round Top to work with you?", a: "No. We work with any Texas small business. Round Top is our home base, not our limit." },
            ].map((faq) => (
              <details key={faq.q} className="border border-forest/10 rounded-xl bg-off-white group">
                <summary className="px-6 py-4 font-semibold text-charcoal cursor-pointer hover:text-forest transition-colors list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-charcoal-light group-open:rotate-180 transition-transform text-sm">▾</span>
                </summary>
                <p className="px-6 pb-4 text-charcoal-light leading-relaxed text-sm">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ─────────────────────────────────────────────────────── */}
      <section id="contact" className="py-20 bg-forest-dark text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-rain text-xs font-bold uppercase tracking-[0.25em]">Get Started</span>
              <h2 className="text-3xl font-bold mt-3 mb-4">Tell us what you need.</h2>
              <p className="text-white/70 leading-relaxed mb-6">Whether it&apos;s Raintree POS for your store or a marketing assessment — fill out the form and we&apos;ll get back to you within one business day.</p>
              <div className="space-y-3 text-sm text-white/60">
                <p>📧 mark@raintreems.com</p>
                <p>📍 Central Texas &nbsp;·&nbsp; Serving Texas statewide</p>
              </div>
            </div>
            <form
              action="mailto:mark@raintreems.com"
              method="POST"
              encType="text/plain"
              className="bg-white/8 backdrop-blur-sm rounded-2xl p-6 space-y-4 border border-white/15"
            >
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-white/50 mb-1.5">First Name</label>
                  <input type="text" name="first_name" required className="w-full bg-white/10 border border-white/15 rounded-lg px-3 py-2.5 text-sm text-white placeholder-white/25 focus:outline-none focus:border-rain" />
                </div>
                <div>
                  <label className="block text-xs text-white/50 mb-1.5">Last Name</label>
                  <input type="text" name="last_name" required className="w-full bg-white/10 border border-white/15 rounded-lg px-3 py-2.5 text-sm text-white placeholder-white/25 focus:outline-none focus:border-rain" />
                </div>
              </div>
              <div>
                <label className="block text-xs text-white/50 mb-1.5">Business Name</label>
                <input type="text" name="business_name" required className="w-full bg-white/10 border border-white/15 rounded-lg px-3 py-2.5 text-sm text-white placeholder-white/25 focus:outline-none focus:border-rain" />
              </div>
              <div>
                <label className="block text-xs text-white/50 mb-1.5">I&apos;m interested in…</label>
                <select name="interest" required className="w-full bg-white/10 border border-white/15 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-rain">
                  <option value="" className="text-charcoal">Select…</option>
                  <option value="Raintree POS - Starter ($49/mo)" className="text-charcoal">Raintree POS — Starter ($49/mo, up to 35 vendors)</option>
                  <option value="Raintree POS - Growth ($89/mo)" className="text-charcoal">Raintree POS — Growth ($89/mo, up to 75 vendors)</option>
                  <option value="Raintree POS - Unlimited ($139/mo)" className="text-charcoal">Raintree POS — Unlimited ($139/mo)</option>
                  <option value="Digital Visibility Assessment ($500)" className="text-charcoal">Digital Visibility Assessment — $500</option>
                  <option value="AI Readiness Assessment ($500)" className="text-charcoal">AI Readiness Assessment — $500</option>
                  <option value="Full Business Audit ($750)" className="text-charcoal">Full Business Audit — $750</option>
                  <option value="Not sure" className="text-charcoal">Not sure — help me decide</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-white/50 mb-1.5">Email</label>
                  <input type="email" name="email" required className="w-full bg-white/10 border border-white/15 rounded-lg px-3 py-2.5 text-sm text-white placeholder-white/25 focus:outline-none focus:border-rain" />
                </div>
                <div>
                  <label className="block text-xs text-white/50 mb-1.5">Phone (optional)</label>
                  <input type="tel" name="phone" className="w-full bg-white/10 border border-white/15 rounded-lg px-3 py-2.5 text-sm text-white placeholder-white/25 focus:outline-none focus:border-rain" />
                </div>
              </div>
              <div>
                <label className="block text-xs text-white/50 mb-1.5">Website (optional)</label>
                <input type="url" name="website" placeholder="https://" className="w-full bg-white/10 border border-white/15 rounded-lg px-3 py-2.5 text-sm text-white placeholder-white/25 focus:outline-none focus:border-rain" />
              </div>
              <input type="hidden" name="_subject" value="Raintree Inquiry" />
              <button type="submit" className="w-full bg-rain text-forest-dark py-3.5 rounded-xl font-bold text-base hover:bg-rain-light transition-colors">
                Send Message &rarr;
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── Service Areas ────────────────────────────────────────────────── */}
      <section className="py-14 bg-off-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-charcoal-light text-sm mb-4">We serve businesses across Central Texas — Round Top, Brenham, Bryan–College Station, Bastrop, Fredericksburg, and beyond.</p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Round Top", "Bryan–College Station", "Brenham", "Bastrop", "Fredericksburg"].map((loc) => (
              <a key={loc} href={`/locations/${loc.toLowerCase().replace(/[–\s]+/g, '-')}`}
                className="px-4 py-1.5 border border-forest/15 rounded-full text-xs text-charcoal-mid hover:border-forest hover:text-forest hover:bg-white transition-all">
                {loc}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────── */}
      <footer className="bg-forest-dark text-white/40 py-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-3">
            <span className="font-bold text-white/70">Raintree</span>
            <span className="text-white/25">·</span>
            <span>Marketing Services</span>
            <span className="text-white/25">·</span>
            <span>Raintree POS</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="/blog" className="hover:text-white/60 transition-colors">Blog</a>
            <a href="mailto:mark@raintreems.com" className="hover:text-rain transition-colors">mark@raintreems.com</a>
            <span>&copy; {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    </>
  );
}
