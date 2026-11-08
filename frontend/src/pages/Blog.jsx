import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { BLOG_POSTS } from "../data/content";

const API = `${import.meta.env.VITE_BACKEND_URL}/api`;

export default function Blog() {
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const featured = BLOG_POSTS.find((p) => p.featured);
  const rest = BLOG_POSTS.filter((p) => !p.featured);

  const subscribe = async (e) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setSending(true);
    try {
      await axios.post(`${API}/newsletter`, { email });
      toast.success("You're subscribed. Welcome aboard.");
      setEmail("");
    } catch {
      toast.error("Something went wrong subscribing. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div data-testid="blog-page">
      <Seo
        title="Blog — Insights on Software, AI, Blockchain & Marketing"
        description="Strategic insights for digital growth from SL Launchers: industry trends, practical guides and what's next in software, AI, blockchain and digital marketing."
        path="/blog"
      />

      {/* HERO */}
      <section className="bg-[#F3F7FF] border-b border-slate-200 pt-28 sm:pt-40 pb-14 sm:pb-20" data-testid="blog-hero">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <Reveal>
            <span className="text-xs tracking-[0.25em] uppercase font-bold text-blue-600">Insights</span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-[#0B1739] mt-5 max-w-3xl leading-[1.1]">
              Strategic insights for <span className="text-gradient-blue">digital growth</span>
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-slate-500 mt-6 max-w-2xl">
              Industry trends, practical guides and what's next in software, AI, blockchain and digital marketing.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FEATURED */}
      <section className="py-16 bg-white" data-testid="blog-featured">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <Reveal>
            <Link to={`/blog/${featured.slug}`} className="block" data-testid="featured-post-link">
              <div className="card-lift rounded-xl bg-white border border-slate-200 overflow-hidden grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-[#F3F7FF] min-h-64 lg:min-h-0 flex items-center justify-center">
                  <span className="font-heading text-6xl font-black text-blue-600/15">AI</span>
                </div>
                <div className="p-8 sm:p-10">
                  <span className="text-xs tracking-[0.2em] uppercase font-bold text-cyan-600">{featured.category}</span>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[#0B1739] mt-3" data-testid="featured-post-title">{featured.title}</h2>
                  <p className="text-sm sm:text-base text-slate-500 leading-relaxed mt-4">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 mt-6 text-xs text-slate-400">
                    <span>{featured.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {featured.readTime}</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm text-blue-600 font-medium mt-5">
                    Read article <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* GRID */}
      <section className="pb-20 sm:pb-28 bg-white" data-testid="blog-grid">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <Link to={`/blog/${p.slug}`} className="block h-full" data-testid={`blog-card-${p.slug}`}>
                <div className="card-lift rounded-xl bg-white border border-slate-200 p-8 h-full flex flex-col">
                  <span className="text-xs tracking-[0.2em] uppercase font-bold text-cyan-600">{p.category}</span>
                  <h3 className="font-heading text-xl font-bold text-[#0B1739] mt-3">{p.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mt-3 mb-6">{p.excerpt}</p>
                  <div className="mt-auto flex items-center gap-4 text-xs text-slate-400">
                    <span>{p.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {p.readTime}</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-20 sm:py-28 bg-[#F3F7FF] border-t border-slate-200" data-testid="newsletter-section">
        <div className="max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <Reveal>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1739]">
              Get growth insights in your inbox
            </h2>
            <p className="text-base text-slate-500 mt-4">
              One practical email a month on software, AI, blockchain and marketing. No spam.
            </p>
            <form onSubmit={subscribe} className="flex flex-col sm:flex-row gap-3 mt-8 max-w-md mx-auto" data-testid="newsletter-form" noValidate>
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white border-slate-200 focus:border-blue-500 h-12 text-[#0B1739] placeholder:text-slate-400 flex-1"
                data-testid="newsletter-email-input"
              />
              <Button type="submit" disabled={sending} className="h-12 rounded-md bg-blue-600 hover:bg-blue-500 text-white px-6" data-testid="newsletter-submit-button">
                {sending ? "Subscribing..." : "Subscribe"} <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
