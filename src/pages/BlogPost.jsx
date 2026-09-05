import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { BLOG_POSTS } from "../data";
import WhatsAppButton from "../components/WhatsAppButton";

export default function BlogPost() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return <Navigate to="/blog" replace />;

  return (
    <section className="max-w-3xl mx-auto section-pad-sm">
      <div className="px-6">
        <Link to="/blog" className="text-brand font-semibold text-sm mb-6 inline-flex items-center gap-1.5">
          <ArrowLeft size={15} /> All insights
        </Link>

        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${post.tagColor}`}>{post.tag}</span>
        <h1 className="text-3xl font-bold text-navy mt-4 mb-6">{post.title}</h1>

        <img src={post.image} alt={post.title} className="w-full h-56 object-cover rounded-2xl shadow-soft-lg mb-8" />

        <div className="space-y-4">
          {post.content.map((para, i) => (
            <p key={i} className="text-gray-600 text-sm leading-relaxed">{para}</p>
          ))}
        </div>

        <div className="mt-10"><WhatsAppButton /></div>
      </div>
    </section>
  );
}
