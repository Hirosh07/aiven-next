// src/app/blog/[slug]/page.jsx
import BlogDetails from "../../../components/BlogDetails";

export default function BlogSlugPage({ params }) {
  const { slug } = params; // /blog/high-converting-landing-page
  return <BlogDetails slug={slug} />;
}
