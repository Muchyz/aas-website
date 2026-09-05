#!/usr/bin/env python3
"""
Adds full blog article content, a BlogPost detail page, routing, and makes
the Blog.jsx cards clickable. Run from project root: python3 add_blog_posts.py
"""

def replace_in_file(path, old, new, label):
    with open(path, "r") as f:
        content = f.read()
    if old not in content:
        print(f"⚠️  SKIPPED ({label}): anchor text not found in {path}")
        return
    content = content.replace(old, new, 1)
    with open(path, "w") as f:
        f.write(content)
    print(f"✅ Updated {path} ({label})")

def write_file(path, content, label):
    with open(path, "w") as f:
        f.write(content)
    print(f"✅ Wrote {path} ({label})")

# ---------- 1. Add BLOG_POSTS to data.js ----------
blog_posts_export = '''

export const BLOG_POSTS = [
  {
    slug: "signs-your-control-panel-needs-attention",
    title: "Signs your control panel needs attention before it fails",
    tag: "Maintenance",
    tagColor: "text-amber-500 bg-amber-500/10",
    image: "https://picsum.photos/seed/blog-panel/900/500",
    content: [
      "Most control panel failures don't happen out of nowhere. There are usually warning signs weeks or months before a breakdown — the challenge is that they're easy to miss if nobody is looking for them.",
      "Discoloured or heat-stained components inside the panel are one of the clearest signs. Overheating leaves visible marks on terminals, breakers, and wiring insulation long before anything actually fails. If you open a panel and see browning or a faint burnt smell, that's not cosmetic — it's a fault developing in real time.",
      "Frequent nuisance tripping is another red flag. A breaker or overload relay that trips occasionally for no obvious reason is often reacting to a real underlying issue: a loose connection, a failing component drawing excess current, or a load that has grown beyond what the panel was originally sized for.",
      "Loose or corroded terminals are easy to overlook but are one of the most common causes of unplanned downtime. Vibration, thermal cycling, and time all work against tight connections. A scheduled inspection that includes torque-checking terminals catches this before it becomes an arc fault.",
      "Unusual noise — humming, buzzing, or clicking that wasn't there before — is worth investigating immediately. Contactors and relays have a normal operating sound; anything that changes noticeably is signaling wear.",
      "The fix for all of these is the same: scheduled inspection, not reactive repair. A short annual or bi-annual check by someone who knows what to look for costs a fraction of what an unplanned shutdown does.",
    ],
  },
  {
    slug: "what-a-plc-retrofit-actually-involves",
    title: "What a PLC retrofit actually involves",
    tag: "Automation",
    tagColor: "text-sky-600 bg-sky-500/10",
    image: "https://picsum.photos/seed/blog-plc/900/500",
    content: [
      "A PLC retrofit sounds like a simple swap — old controller out, new one in — but in practice it's closer to a small engineering project than a parts replacement.",
      "It starts with understanding the existing system fully. Before anything is touched, we document the current program logic, I/O wiring, and any quirks operators have learned to work around over the years. Old systems often carry undocumented logic changes made during past emergencies, and losing that knowledge during a retrofit is how new problems get introduced.",
      "Next comes selecting the replacement hardware. This isn't just about brand preference — I/O count, communication protocols, memory requirements, and physical panel space all narrow the options. Where possible, we choose hardware that can reuse existing wiring terminations to reduce downtime during changeover.",
      "The programming itself is usually the bulk of the work. Old ladder logic or function block programs are translated, not simply copied, into the new platform, since instruction sets and addressing rarely map one-to-one between manufacturers. This is also the point where obvious inefficiencies in the original program get cleaned up.",
      "Testing happens in stages: first on the bench with simulated inputs, then on-site during a planned shutdown window, running the machine through every mode of operation before it goes back into production. Skipping staged testing is the single most common cause of retrofit projects overrunning their downtime window.",
      "Finally, documentation and training. A retrofit is only successful long-term if the operators and maintenance team understand the new system — updated wiring diagrams, program backups, and a short handover session are part of every retrofit we deliver.",
    ],
  },
  {
    slug: "maintenance-contracts-for-multi-shift-plants",
    title: "Getting maintenance contracts right for multi-shift plants",
    tag: "Case study",
    tagColor: "text-violet-600 bg-violet-500/10",
    image: "https://picsum.photos/seed/blog-maintenance/900/500",
    content: [
      "Plants running two or three shifts face a maintenance problem single-shift operations don't: there's rarely a clean window when the line is actually stopped and safe to work on.",
      "The first adjustment is scheduling. A maintenance contract built around a standard business-hours service window doesn't fit a plant that's running at 2am. Response times, call-out availability, and even routine inspection slots need to be structured around the plant's actual production calendar, not a generic business day.",
      "The second is spare parts strategy. With less downtime available for troubleshooting, having critical spares on-site, or at least reserved with a fast-access agreement, matters more than in a single-shift operation where a day's delay is less costly. Contracts should specify which parts are stocked, where, and what the replacement lead time is for anything that isn't.",
      "Communication handover is the piece that's easiest to get wrong. If an issue is flagged during a night shift, the maintenance provider needs a clear channel to both the outgoing and incoming shift supervisors, otherwise fixes get delayed simply because the right person wasn't told in time.",
      "Finally, a good multi-shift maintenance contract builds in a review cadence — monthly or quarterly checkpoints to look at recurring fault patterns across shifts. A machine that keeps tripping only on the night shift, for example, might point to a load, temperature, or staffing pattern worth investigating rather than a random fault.",
      "None of this is complicated, but it does require the contract to be written around how the plant actually operates, not adapted from a template built for a single eight-hour day.",
    ],
  },
];
'''

with open("src/data.js", "a") as f:
    f.write(blog_posts_export)
print("✅ Appended BLOG_POSTS to src/data.js")

# ---------- 2. Rewrite Blog.jsx to use BLOG_POSTS + Link ----------
blog_jsx = '''import { Link } from "react-router-dom";
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
'''
write_file("src/pages/Blog.jsx", blog_jsx, "rewrite with Link + BLOG_POSTS")

# ---------- 3. Create BlogPost.jsx detail page ----------
blogpost_jsx = '''import { useParams, Link, Navigate } from "react-router-dom";
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
'''
write_file("src/pages/BlogPost.jsx", blogpost_jsx, "create BlogPost detail page")

# ---------- 4. Wire up App.jsx: import + route ----------
replace_in_file(
    "src/App.jsx",
    'import Blog from "./pages/Blog";',
    'import Blog from "./pages/Blog";\nimport BlogPost from "./pages/BlogPost";',
    "import BlogPost",
)

replace_in_file(
    "src/App.jsx",
    '        <Route path="/blog" element={<Blog />} />',
    '        <Route path="/blog" element={<Blog />} />\n        <Route path="/blog/:slug" element={<BlogPost />} />',
    "add /blog/:slug route",
)

print("\nDone. Run 'npm run dev' to preview.")
print("Blog cards are now clickable and lead to full articles.")
