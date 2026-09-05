import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { BLOG_POSTS } from "../data";

export default function Blog() {
  return (
    <section className="container-page section-pad-sm max-w-3xl">
      <p className="tag-chip mb-3"><span className="tag-dot" /> Insights</p>
      <h1 className="text-3xl font-bold text-navy mb-10">From the field</h1>
      <div className="space-y-4">
        {BLOG_POSTS.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="card-surface overflow-hidden flex items-center gap-4 cursor-pointer group"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-28 h-24 object-cover shrink-0"
            />
            <div className="flex-1 flex items-center justify-between gap-4 py-4 pr-5">
              <div>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${post.tagColor}`}>{post.tag}</span>
                <h4 className="font-bold text-navy mt-2 group-hover:text-brand transition-colors">{post.title}</h4>
              </div>
              <ArrowUpRight className="text-gray-300 group-hover:text-brand transition-colors shrink-0" size={18} />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
