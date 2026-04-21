export interface CityData {
  slug: string;
  city: string;
  state: string;
  metaTitle: string;
  metaDescription: string;
  canonical: string;
  h1: string;
  tagline: string;
  intro: string[];
  businessTypes: string[];
  localProblem: string;
  localWhy: string;
  faqs: { q: string; a: string }[];
}

export const cities: CityData[] = [
  {
    slug: "round-top",
    city: "Round Top",
    state: "TX",
    metaTitle: "Digital Marketing for Round Top Vendors & Businesses | Raintree",
    metaDescription:
      "Raintree Marketing Services helps Round Top antique vendors, boutiques, and lodging businesses stay visible online between shows. Start with a $500 assessment.",
    canonical: "https://www.raintreems.com/locations/round-top",
    h1: "Round Top businesses don't stop needing customers when the show ends.",
    tagline: "Serving Round Top, TX — antique vendors, boutiques, lodging, and more.",
    intro: [
      "The show runs twice a year. The internet runs every day. If your business only exists in buyers' minds during the Spring and Fall shows, you're leaving serious revenue on the table during the 300 days in between.",
      "Round Top buyers — mostly women, planning-oriented, willing to drive 3 hours for the right find — are searching on Google and Pinterest months before they ever set foot on the show grounds. If your Google Business Profile is incomplete, your website is outdated, or you have no Pinterest presence, they're finding your competitors instead.",
      "Raintree Marketing Services is based in Central Texas. We built our business inside the Round Top community. We know the show rhythm, the vendor landscape, and exactly what buyers search before a trip out here. This isn't generic marketing advice — it's specific to your market.",
    ],
    businessTypes: [
      "Antique and vintage dealers",
      "Art galleries and painters",
      "Boutique fashion and jewelry vendors",
      "Bed & breakfasts and vacation rentals",
      "Restaurants and food vendors",
      "Home decor and gift shops",
      "Year-round retail in the Round Top area",
    ],
    localProblem:
      "The biggest digital gap we see with Round Top vendors: a Google Business Profile that hasn't been updated since it was created, no Pinterest presence at all, and an Instagram that goes quiet between shows. Your buyers are searching year-round. Your digital presence should be working year-round.",
    localWhy:
      "We operate Round Top Finder — the most comprehensive directory of Round Top vendors and venues — which means we have real data on how buyers search for businesses like yours. We know which search terms drive show traffic, what buyers look at before making the drive, and how to position your business to capture that intent before the competition does.",
    faqs: [
      {
        q: "Do I need to be a show vendor to work with you?",
        a: "No. We work with any business in or around Round Top — year-round shops, lodging, restaurants, and service businesses. But yes, we also specialize in show vendors who want to stay visible between events.",
      },
      {
        q: "What's the biggest digital gap you see with Round Top businesses?",
        a: "Pinterest. Your buyers — 85% female, planning their trips months out — are actively using Pinterest to discover vendors before the show. Most Round Top vendors have no Pinterest presence at all. That's the fastest high-impact fix we make.",
      },
      {
        q: "Can you help me show up on Google for Round Top searches?",
        a: "Yes. Between your Google Business Profile, your website, and the right content strategy, we can get your business in front of buyers searching 'Round Top antiques,' 'Round Top lodging,' and related terms.",
      },
      {
        q: "How does the assessment work for a show vendor specifically?",
        a: "We audit your Google presence, website, Instagram, Pinterest, and Facebook — and pull in your Round Top Finder listing data. You get a scored report, specific gaps identified, and 5 quick wins you can implement before the next show.",
      },
    ],
  },

  {
    slug: "bryan-college-station",
    city: "Bryan–College Station",
    state: "TX",
    metaTitle: "Local SEO & Digital Marketing for Bryan–College Station | Raintree",
    metaDescription:
      "Raintree Marketing Services helps Bryan–College Station small businesses compete on Google against chains and bigger agencies. $500 assessment, 48-hour delivery.",
    canonical: "https://www.raintreems.com/locations/bryan-college-station",
    h1: "Bryan–College Station small businesses are fighting for the same Google spots. Here's how to win.",
    tagline: "Serving Bryan–College Station, TX — local businesses ready to compete.",
    intro: [
      "Bryan–College Station is a market with a real tension: 250,000 people in the metro, heavy foot traffic from the university, and a growing local business community — competing against chains, franchises, and businesses with real marketing budgets. If you're a small business without a dedicated marketing team, you're getting outranked by businesses that spend more on ads in a week than you do in a year.",
      "But local SEO is the equalizer. A well-optimized Google Business Profile, the right content strategy, and consistent local signals can put an independent restaurant, service business, or boutique in front of buyers who specifically want to support local — and there are a lot of them in Aggieland.",
      "Raintree Marketing Services works with small businesses in the Brazos Valley who need enterprise-level digital strategy without the agency overhead. We move fast, we're specific, and we don't do retainers that cost more than they return.",
    ],
    businessTypes: [
      "Restaurants and food & beverage",
      "Local retail and boutiques",
      "Home services (HVAC, plumbing, landscaping)",
      "Professional services (law, accounting, healthcare)",
      "Real estate and property management",
      "Gyms, salons, and wellness businesses",
      "Event venues and caterers",
    ],
    localProblem:
      "The most common issue we see with BCS small businesses: a Google Business Profile that's half-complete, fewer than 20 reviews, and no strategy for asking customers to leave one. Meanwhile, a competitor with the same quality of service has 200 reviews and shows up first. Reviews and GBP optimization are the fastest wins in this market.",
    localWhy:
      "The Brazos Valley market rewards consistency. Buyers here are loyal when they find a business they trust — they come back, they refer friends, and they leave reviews. The businesses that win long-term in Bryan–College Station are the ones who invest in showing up well on Google and making it easy for happy customers to tell others. We build that system.",
    faqs: [
      {
        q: "Is local SEO actually worth it for a small business in BCS?",
        a: "For most small businesses, yes — especially in service categories. When someone searches 'HVAC repair Bryan TX' or 'best brunch College Station,' the businesses that show up in the top 3 of Google Maps capture the vast majority of those clicks. Getting there requires GBP optimization, reviews, and local content — all of which we do.",
      },
      {
        q: "How competitive is the Bryan–College Station market for local search?",
        a: "Moderate. It's more competitive than a small town but far less than Austin or Houston. Most small businesses here haven't fully optimized — which means the gap between doing nothing and doing the basics is large, and the payoff is real.",
      },
      {
        q: "Can you help with AI tools to save my team time?",
        a: "Yes — that's our AI Readiness Assessment. We do a 45-minute call, analyze your workflows, and identify where AI tools and automation can eliminate the most manual work. Common wins: automated customer follow-ups, AI-drafted responses, scheduling automation, and meeting transcription.",
      },
    ],
  },

  {
    slug: "brenham",
    city: "Brenham",
    state: "TX",
    metaTitle: "Digital Marketing for Brenham Small Businesses | Raintree",
    metaDescription:
      "Raintree Marketing Services helps Brenham boutiques, restaurants, B&Bs, and local businesses get found online. $500 assessment, 48-hour delivery.",
    canonical: "https://www.raintreems.com/locations/brenham",
    h1: "Brenham visitors plan their trips before they leave home. Is your business easy to find?",
    tagline: "Serving Brenham, TX — boutiques, lodging, dining, and local retail.",
    intro: [
      "Brenham draws visitors from Houston, Austin, and Dallas who are looking for a slower weekend — the downtown shops, the Blue Bell Creameries, the antique stores, the B&Bs. These buyers don't just show up. They search. They read Google reviews. They look up businesses on Instagram. They pin places to their Pinterest boards months before the trip.",
      "If your business in Brenham doesn't show up when those searches happen, you're invisible to the exact customers most likely to spend money with you. And in a market this size, the difference between showing up on page one of Google and not showing up at all can be measured in real revenue.",
      "We work with Brenham businesses that are good at what they do but haven't had time — or known where to start — with digital. We find the gaps fast, prioritize what actually moves the needle, and deliver a plan you can act on in days, not months.",
    ],
    businessTypes: [
      "Boutiques and specialty retail",
      "Bed & breakfasts and vacation rentals",
      "Restaurants and cafés",
      "Antique shops and dealers",
      "Wedding venues and event spaces",
      "Home decor and gift shops",
      "Local service businesses",
    ],
    localProblem:
      "The most common gap we see in Brenham: businesses with loyal local customers but almost no online presence for visitors who don't already know them. A new couple planning a day trip from Houston is searching on Google — and they're booking the B&B and the lunch spot that shows up, not the one they'd find if they drove down Main Street.",
    localWhy:
      "Brenham's tourism economy depends on first-time visitors becoming repeat visitors. The businesses that convert casual Google searches into loyal customers are the ones with complete Google Business Profiles, consistent reviews, and content that shows up when buyers are in planning mode. We build that infrastructure.",
    faqs: [
      {
        q: "My business mostly serves locals — do I still need digital marketing?",
        a: "Even businesses that are 80% local customers benefit from a strong Google presence. When locals search for a restaurant, a gift for someone, or a service provider, they're searching on Google. And if visitors are any part of your revenue, digital is non-negotiable.",
      },
      {
        q: "What's the fastest win for a Brenham small business?",
        a: "Google Business Profile optimization. Most businesses in Brenham have incomplete profiles — missing hours, no recent photos, few reviews, no posts. A fully optimized GBP starts showing results within 30–60 days and costs nothing beyond the time to set it up right.",
      },
      {
        q: "Can you help with getting more Google reviews?",
        a: "Yes — that's one of the first things we address. We build a simple review request system that makes it easy to ask happy customers and dramatically increases the percentage who follow through.",
      },
    ],
  },

  {
    slug: "bastrop",
    city: "Bastrop",
    state: "TX",
    metaTitle: "Digital Marketing for Bastrop Small Businesses | Raintree",
    metaDescription:
      "Raintree Marketing Services helps Bastrop's fast-growing small business community get found online. $500 assessment, 48-hour delivery.",
    canonical: "https://www.raintreems.com/locations/bastrop",
    h1: "Bastrop is growing fast. Your digital presence should be growing with it.",
    tagline: "Serving Bastrop, TX — local businesses in a fast-growing community.",
    intro: [
      "Bastrop is one of the fastest-growing communities in Central Texas. New residents are arriving from Austin every month, and they're looking for local restaurants, services, contractors, shops, and everything else that makes a place feel like home. The businesses that establish a strong digital presence now — before the market gets crowded — will own those search results for years.",
      "The challenge is that most established Bastrop businesses built their reputation on word of mouth and haven't needed to think about digital. That worked in a slower-growth environment. As more businesses open and more transplants arrive with higher digital expectations, the businesses that show up on Google and have recent reviews are the ones that win the new customer.",
      "We work with Bastrop businesses that are ready to take their digital presence seriously — before a competitor with a bigger marketing budget takes the spot they should own.",
    ],
    businessTypes: [
      "Restaurants and food & beverage",
      "Home services (contractors, HVAC, landscaping)",
      "Retail shops and boutiques",
      "Health and wellness businesses",
      "Real estate and property services",
      "Professional services",
      "Entertainment and recreation",
    ],
    localProblem:
      "The biggest opportunity in Bastrop right now: most established local businesses are underoptimized for search, while new residents are searching constantly. Whoever gets to the top of Google Maps for their category first tends to stay there. The cost of waiting is market position that's hard to recover once a competitor claims it.",
    localWhy:
      "New residents in a fast-growing market are actively searching for businesses they can trust. They don't have word-of-mouth networks yet — so they rely entirely on Google reviews, social proof, and what shows up when they search. Businesses that invest in digital now are setting up a referral engine that compounds over time.",
    faqs: [
      {
        q: "My business has been here for years and does fine on referrals. Why do I need this?",
        a: "Referrals are your most loyal customers. But Bastrop's growth means a new population of buyers who don't have referral networks yet — they're searching on Google. If you're not there, a newer competitor captures them first. And once a buyer has a relationship with a business, they rarely switch.",
      },
      {
        q: "How long does it take to see results from local SEO?",
        a: "Google Business Profile improvements typically show movement in 30–60 days. For organic search rankings, 3–6 months for meaningful progress. The businesses in Bastrop that start now will be well-positioned when the market gets more competitive.",
      },
      {
        q: "Do you do AI and automation consulting for service businesses?",
        a: "Yes. Our AI Readiness Assessment is a great fit for home services, professional services, and any business where the owner or team is handling customer communication manually. Automated follow-ups, AI-assisted scheduling, and basic chatbots can free up 5–10 hours a week for the typical service business.",
      },
    ],
  },

  {
    slug: "fredericksburg",
    city: "Fredericksburg",
    state: "TX",
    metaTitle: "Digital Marketing for Fredericksburg Small Businesses | Raintree",
    metaDescription:
      "Raintree Marketing Services helps Fredericksburg wineries, boutiques, B&Bs, and restaurants capture more of the visitors already looking for them online. $500 assessment.",
    canonical: "https://www.raintreems.com/locations/fredericksburg",
    h1: "Fredericksburg visitors research their trips for weeks. Is your business showing up when they search?",
    tagline: "Serving Fredericksburg, TX — wineries, boutiques, lodging, and dining.",
    intro: [
      "Fredericksburg draws over two million visitors a year. They come for the wineries, the shopping, the German history, and the Hill Country setting. And almost every one of them plans their trip online first — searching for the best wineries, reading Yelp and Google reviews, browsing Instagram, and saving places to Pinterest boards labeled 'Fredericksburg trip' weeks before they load up the car.",
      "The businesses that capture those visitors are the ones with complete Google Business Profiles, recent high-quality photos, strong review counts, and — especially — a Pinterest presence built for the trip-planning mindset. The buyers in this market are highly visual, plan-oriented women who make the restaurant and shopping decisions for the group. Pinterest is underutilized by most Fredericksburg businesses and it's one of the fastest wins available.",
      "Raintree Marketing Services brings the same approach we've applied to Round Top's tourism-driven businesses to the Fredericksburg market. Your buyers are the same profile. The digital gaps are the same. The fixes are specific and fast.",
    ],
    businessTypes: [
      "Wineries and tasting rooms",
      "Boutiques and specialty retail",
      "Bed & breakfasts and vacation rentals",
      "Restaurants and dining",
      "Art galleries",
      "Outdoor recreation and tour operators",
      "Spas and wellness businesses",
    ],
    localProblem:
      "Fredericksburg's biggest underutilized digital channel: Pinterest. Visitors to the Hill Country are overwhelmingly using Pinterest in trip-planning mode — searching for 'Fredericksburg winery itinerary,' 'Fredericksburg shopping,' and 'Hill Country road trip.' The businesses with a curated Pinterest presence are getting discovered weeks before the trip. Most Fredericksburg businesses have no pins at all.",
    localWhy:
      "Tourism-driven markets reward visibility at the planning stage. By the time a buyer is on Main Street, they've already decided where they're eating lunch and which boutiques they're hitting. Winning in Fredericksburg means showing up during trip planning — on Google, on Pinterest, and on Instagram — not just when they've already arrived. We build the digital presence that captures them early.",
    faqs: [
      {
        q: "Is Pinterest really worth it for a Fredericksburg business?",
        a: "For tourism-dependent businesses, yes — it's one of the highest-ROI digital investments. Pinterest users in this demographic are actively searching for trip inspiration and saving places they plan to visit. A consistent Pinterest strategy puts your business in front of buyers 60–90 days before they arrive.",
      },
      {
        q: "How do I compete with the bigger wineries that have full marketing teams?",
        a: "By being better at the local digital details that big operations often overlook: responding to every review, keeping photos fresh, posting consistently, and showing up for the long-tail searches buyers use when planning. Local SEO rewards consistency and specificity more than budget.",
      },
      {
        q: "Can you help with Google reviews for a seasonal business?",
        a: "Yes. We build review request systems timed to your customer touchpoints — checkout, follow-up email, post-visit text. The goal is a consistent trickle of new reviews year-round so your rating stays visible and your review count keeps growing.",
      },
      {
        q: "Do you work with lodging properties specifically?",
        a: "Yes. B&Bs, vacation rentals, and boutique lodging have specific digital needs: Google Business Profile optimization for lodging categories, booking platform presence, and content that captures searches like 'Fredericksburg B&B' and 'Hill Country getaway.' We know this sector.",
      },
    ],
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find((c) => c.slug === slug);
}
