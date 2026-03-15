export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
}

export const blogs: BlogPost[] = [
  {
    id: "1",
    title: "10 Reasons Why Your Business Needs a Makeover",
    slug: "reasons-business-makeover",
    excerpt: "In today's fast-paced digital world, adapting to new trends is critical. Learn why giving your business a digital makeover can skyrocket your growth.",
    content: "The corporate landscape is shifting faster than ever. What worked five years ago is now obsolete. Brands that refuse to adapt are fading, while agile companies are taking over their market share.\n\nThe first reason you need a makeover is brand perception. Your website, logo, and marketing materials are often the first interaction a customer has with your business. If they look outdated, potential clients will assume your services are outdated too.\n\nSecondly, user experience (UX) drives conversions. A clunky website with slow load times and confusing navigation will cost you sales. Redesigning with a focus on seamless user journeys can dramatically increase your ROI.\n\nUltimately, a digital makeover isn't just about looking pretty. It's about optimizing performance, updating your messaging to resonate with a modern audience, and ensuring your technical infrastructure can handle scale.",
    author: "Aiven Team",
    date: "March 15, 2026",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  },
  {
    id: "2",
    title: "Mastering Next-Gen App Development",
    slug: "mastering-next-gen-app-development",
    excerpt: "A deep dive into cross-platform frameworks, performance optimization, and creating apps that users actually want to keep on their phones.",
    content: "Building an app is easy. Building an app that survives the first 30 days of use is incredibly difficult. With millions of apps available, users have zero tolerance for poor performance or bad design.\n\nNative app development has its place, but the rise of powerful cross-platform tools like React Native and Flutter means that high-performance apps can be shipped faster than ever. However, writing code is only half the battle.\n\nTo build a next-gen app, you must focus relentlessly on offline-first capabilities, lightning-fast sync, and battery optimization. Users hate apps that drain their phone. Moreover, employing micro-interactions and smooth animations makes the experience inherently satisfying.",
    author: "Elena Rodriguez",
    date: "March 10, 2026",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "3",
    title: "The Power of Video in Modern Marketing",
    slug: "power-of-video-marketing",
    excerpt: "Static images are no longer enough. Here is why video marketing is dominating social media and how you can leverage it.",
    content: "If a picture is worth a thousand words, a video is worth a million. Algorithms across Instagram, TikTok, LinkedIn, and YouTube heavily favor video content because it keeps users on their platforms longer.\n\nCorporate video shoots and high-quality motion graphics allow you to tell a compelling story. It humanizes your brand, showing the people behind the product. Short-form video—typically under 60 seconds—is currently the most effective tool for organic reach.\n\nDon't have a massive budget? Start with authentic, behind-the-scenes clips. Polish them with good motion graphics and striking typography. The key is to capture attention within the first three seconds, otherwise, the user will scroll right past.",
    author: "Michael Chang",
    date: "February 28, 2026",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop"
  }
];
