import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Clock } from "lucide-react";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import { BLOG_POSTS } from "../data/content";

export default function BlogPost() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <div data-testid="blog-post-page">
      <Seo
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
      />

      <section className="bg-[#F3F7FF] border-b border-slate-200 pt-28 sm:pt-40 pb-14 sm:pb-20">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <Reveal>
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-blue-600 font-medium hover:text-blue-500 transition-colors duration-200" data-testid="back-to-blog">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
            <div className="mt-8">
              <span className="text-xs tracking-[0.2em] uppercase font-bold text-cyan-600">{post.category}</span>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1739] mt-4 leading-[1.15]" data-testid="post-title">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 mt-5 text-sm text-slate-400">
                <span>{post.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          {post.content.map((block, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div className={i === 0 ? "" : "mt-10"}>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#0B1739]">{block.heading}</h2>
                <p className="text-base text-slate-500 leading-relaxed mt-4">{block.body}</p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.1}>
            <div className="mt-14 rounded-xl bg-[#F3F7FF] border border-slate-200 p-8 text-center" data-testid="post-cta">
              <h3 className="font-heading text-xl font-bold text-[#0B1739]">
                Ready to put this into practice?
              </h3>
              <p className="text-sm text-slate-500 mt-2">
                Talk to our team about your next project — development, AI, blockchain or growth.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-5 rounded-md bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 text-sm font-semibold transition-colors duration-200 min-h-11"
                data-testid="post-cta-button"
              >
                Discuss Your Project <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
