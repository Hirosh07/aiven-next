"use client";

import Link from "next/link";

// Your blog content object stays exactly the same
const blogContent = {
  "high-converting-landing-page": {
    title: "Key Elements of a High-Converting Landing Page",
    date: "September 20, 2025",
    content: `
<p>A good landing page isn’t just about design — it’s about purpose. When a page has a clear headline, a strong call-to-action, and content that speaks directly to the audience, conversion rates go up noticeably. Especially in Chennai and Bangalore, where competition is high, having a fast, mobile-friendly landing page makes all the difference. At Aiven Creatives, we don’t just build websites — we build results.</p>

<p><strong>1. Clear & Powerful Headline</strong><br/>
Your headline should grab attention and communicate your value immediately. Example: “Boost Your Brand Visibility in Chennai — Book a Free Marketing Audit.”</p>

<p><strong>2. Compelling Visuals</strong><br/>
Use high-quality visuals — explainer videos, motion graphics, or custom illustrations. At Aiven Creatives, we ensure visuals connect with your audience.</p>

<p><strong>3. Persuasive Copywriting</strong><br/>
Address customer pain points and highlight clear benefits. Use local keywords like “digital marketing services in Chennai” or “event management in Bangalore.”</p>

<p><strong>4. Single, Clear Call-To-Action (CTA)</strong><br/>
Whether it’s “Call Now,” “Get a Quote,” or “Book a Free Demo,” your CTA should be bold, visible, and repeated multiple times.</p>

<p><strong>5. Trust Builders</strong><br/>
Showcase testimonials, client logos, certifications, or awards to build credibility.</p>

<p><strong>6. Mobile Responsiveness</strong><br/>
More than 70% of traffic in India is mobile — your landing page must be fast, responsive, and scroll-friendly.</p>

<p><strong>7. Fast Load Speed</strong><br/>
Compress images, use lightweight code, and optimized hosting for best performance.</p>
    `,
  },

  "digital-technology-growth-2025": {
    title: "How to Grow Your Business Using Modern Digital Technology in 2025",
    date: "September 25, 2025",
    content: `
<p>In today’s fast-moving digital economy, growing a business isn’t about working harder — it’s about working smarter with the right technology. Whether you're a startup in Chennai or a retail brand in Bangalore, digital tools help reach more customers, automate operations, and scale profitably.</p>

<p>At Aiven Creatives, we help brands unlock digital growth using modern strategies. Here’s how you can leverage technology in 2025:</p>

<p><strong>1. Build a Strong Digital Presence (Website + SEO)</strong><br/>
Your website is your digital storefront. In 2025, more than 80% of Indian consumers search online before making a purchase. A responsive, SEO-optimized site is essential.</p>

<p><strong>2. Automate Marketing with AI & CRM Tools</strong><br/>
Use platforms like Mailchimp, HubSpot, or Zoho CRM to nurture leads, personalize offers, and engage users without manual effort.</p>

<p><strong>3. Invest in Video Marketing (Shorts, Reels, Testimonials)</strong><br/>
Video content is the #1 driver of engagement in 2025. Brands using Reels and Shorts see 2X higher click-through rates and stronger trust.</p>

<hr/>

<p><strong>Let’s Grow Your Business — Together</strong><br/>
At Aiven Creatives, we help brands with strategy, design, video, advertising, and content.<br/>
📍 Chennai | Bangalore | India<br/>
📞 Contact us today for a free consultation.</p>
    `,
  },

  "building-trust-transparency-2025": {
    title: "Building Trust in Business: Why Transparency Wins in 2025",
    date: "September 30, 2025",
    content: `
<p>In 2025, trust isn’t just a value — it’s a business strategy. Clients want honesty, consistency, and clarity. Whether you're a creative agency in Chennai or a startup in Bangalore, the businesses that thrive are those that build trust through transparency.</p>

<p>At Aiven Creatives, we’ve seen how openness in pricing, communication, and delivery creates stronger relationships and long-term growth.</p>

<p><strong>1. Transparent Pricing Builds Confidence</strong><br/>
Hidden costs are red flags. Clear, itemized quotes eliminate surprises and show value.</p>

<p><strong>2. Clear Communication Creates Stronger Relationships</strong><br/>
Clients expect consistent updates. Poor communication is one of the top reasons businesses lose clients.</p>

<p><strong>3. Process Transparency = Trust in Delivery</strong><br/>
Share your working style — tools, timelines, processes — so clients feel part of the journey.</p>

<p><strong>4. Honesty Builds Reputation (Even When It’s Uncomfortable)</strong><br/>
Mistakes happen. Being upfront during tough moments strengthens loyalty.</p>

<p><strong>5. Transparent Teams Perform Better</strong><br/>
Inside your team, transparency builds ownership and motivation.</p>

<hr/>

<p><strong>Need a Transparent Creative Partner?</strong><br/>
At Aiven Creatives, we believe in fair pricing, open communication, and full transparency from branding to video production.<br/>
Let’s build something real.<br/>
📍 Chennai | Bangalore | India</p>
    `,
  },
};

const BlogDetails = ({ slug }) => {
  const post = blogContent[slug];

  if (!post) {
    return (
      <h2 className="text-center mt-10 text-red-500">
        Blog post not found.
      </h2>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#FEFAF8] py-16 lg:px-32 px-6">
      <h1 className="text-3xl font-semibold text-[#7A6960]">{post.title}</h1>
      <p className="text-gray-500 text-sm mt-2">{post.date}</p>

      <div
        className="prose max-w-none text-gray-700 mt-6 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <Link
        href="/blog"
        className="inline-block mt-8 text-orange-600 hover:underline"
      >
        ← Back to Blog
      </Link>
    </div>
  );
};

export default BlogDetails;
