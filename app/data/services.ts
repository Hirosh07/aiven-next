export interface Service {
  path: string;
  title: string;
  desc: string;
  longDesc: string;
  features: string[];
  image: string;
}

export const servicesData: Service[] = [
  {
    path: "/app-development",
    title: "Apps Development",
    desc: "App Development process is like a signature recipe — clean code, intuitive UI, and powerful backend.",
    longDesc: "Our app development services focus on creating seamless, high-performance applications tailored to your business needs. We build scalable, secure, and user-centric iOS and Android applications.",
    features: ["Native iOS & Android Apps", "Cross-Platform React Native Apps", "Custom UI/UX Design", "API Development & Integration", "App Store Optimization"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    path: "/web-development",
    title: "Web Development",
    desc: "Professional web development ensures your site is fast, mobile-responsive, and optimized.",
    longDesc: "We build modern, fast, and SEO-optimized web applications using cutting-edge frameworks like Next.js and React. Our websites are built to convert visitors into loyal customers.",
    features: ["Custom Web Applications", "E-Commerce Solutions", "Landing Pages & CMS", "Performance Optimization", "SEO-Friendly Architecture"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  },
  {
    path: "/campagin-creation",
    title: "Digital Marketing",
    desc: "We boost brand awareness and visibility using Meta Ads & Google Ads.",
    longDesc: "Our data-driven digital marketing campaigns are designed to maximize your ROI. We manage everything from strategy and creative direction to ad placement and analytics.",
    features: ["Social Media Management", "Google & Meta Ads", "Content Strategy", "Email Marketing", "Conversion Rate Optimization"],
    image: "https://images.unsplash.com/photo-1432888117426-1d5ac087068b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    path: "/advertising",
    title: "O-O-H Ads",
    desc: "We deliver powerful outdoor campaigns including metro and billboard ads.",
    longDesc: "Out-of-Home (OOH) advertising remains one of the most effective ways to build mass brand awareness. We handle the design, placement, and execution of high-impact physical ads.",
    features: ["Billboard Advertising", "Transit & Metro Ads", "Digital OOH", "Street Furniture Advertising", "Strategic Placement Analysis"],
    image: "https://images.unsplash.com/photo-1542614995-171ef99ab0cb?q=80&w=2070&auto=format&fit=crop"
  },
  {
    path: "/cvs",
    title: "Corporate Video Shoots",
    desc: "High-quality shoots that showcase your brand identity and culture.",
    longDesc: "Tell your brand's story through stunning visuals. Our professional video production team creates corporate and commercial videos that resonate with your target audience.",
    features: ["Brand Documentaries", "Commercial Production", "Event Coverage", "Product Demos", "Drone & Aerial Videography"],
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop"
  },
  {
    path: "/trad-ads",
    title: "Traditional Advertisements",
    desc: "TV, radio & OTT ads across major platforms.",
    longDesc: "While digital is huge, traditional advertising still dominates specific demographics. We create compelling ad spots for television, radio, and emerging OTT platforms.",
    features: ["Television Commercials", "Radio Spots", "OTT & CTV Advertising", "Print Media", "Media Buying & Planning"],
    image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?q=80&w=2070&auto=format&fit=crop"
  },
  {
    path: "/graphics-design",
    title: "Graphics Design",
    desc: "We deliver stunning graphic designs that make your brand stand out.",
    longDesc: "Visual identity is everything. Our design team creates beautiful, cohesive brand assets—from logos and packaging to complex digital illustrations.",
    features: ["Brand Identity & Logo Design", "Marketing Collateral", "UI/UX Design", "Packaging Design", "Custom Illustrations"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop"
  },
  {
    path: "/ve-mg",
    title: "Video Editing/Motion Graphics",
    desc: "High-quality edits and motion graphics to elevate brand presence.",
    longDesc: "We take raw footage and transform it into dynamic, engaging content. Our motion graphics add that extra layer of polish that keeps viewers watching until the end.",
    features: ["Professional Video Editing", "2D/3D Motion Graphics", "Color Grading", "Audio Mixing", "Social Media Edits"],
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    path: "/Event-management",
    title: "Event Management",
    desc: "End-to-end event management from planning to flawless execution.",
    longDesc: "We create unforgettable experiences. From corporate seminars to large-scale brand activations, our team handles all logistics to ensure your event goes off without a hitch.",
    features: ["Corporate Events & Conferences", "Brand Activations", "Product Launches", "Venue Sourcing", "On-site Coordination"],
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop"
  }
];
