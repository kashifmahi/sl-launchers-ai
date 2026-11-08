import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { ArrowRight, Clock } from "lucide-react";
import Reveal from "../components/Reveal";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { BLOG_POSTS } from "../data/content";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Blog() {
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const featured = BLOG_POSTS.find((p) => p.featured);
  const rest = BLOG_POSTS.filter((p) => !p.featured);

  const subscribe = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error("Please enter your email.");
      return;
    }
    setSending(true);
    try {
      await axios.post(`${API}/newsletter`, { email });
      toast.success("You're subscribed. Welcome aboard.");
      setEmail("");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div data-testid="blog-page">
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 sm:pt-44 pb-16 sm:pb-24" data-testid="blog-hero">
        <div className="hero-glow w-[500px] h-[500px] bg-blue-600/20 -top-40 -left-40" />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
          <Reveal>
            <span className="text-xs tracking-[0.25em] uppercase font-bold text-blue-500">Insights</span>
            <h1 className="font-heading text-5xl sm:text-6xl font-black tracking-tighter mt-5 max-w-3xl leading-[1.05]">
              Strategic insights for <span className="text-gradient-blue">digital growth</span>
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-zinc-400 mt-6 max-w-2xl">
              Industry trends, practical guides and what's next in software, AI, blockchain and digital marketing.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FEATURED */}
      <section className="pb-16" data-testid="blog-featured">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="card-lift rounded-lg bg-zinc-900 border border-white/5 overflow-hidden grid grid-cols-1 lg:grid-cols-2">
              <div className="bg-zinc-800 min-h-64 lg:min-h-0 flex items-center justify-center relative overflow-hidden">
                <div className="hero-glow w-72 h-72 bg-blue-600/30" />
                <span className="font-heading text-6xl font-black text-blue-600/30 relative">AI</span>
              </div>
              <div className="p-8 sm:p-10">
                <span className="text-xs tracking-[0.2em] uppercase font-bold text-cyan-400">{featured.category}</span>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight mt-3" data-testid="featured-post-title">{featured.title}</h2>
                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mt-4">{featured.excerpt}</p>
                <div className="flex items-center gap-4 mt-6 text-xs text-zinc-500">
                  <span>{featured.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {featured.readTime}</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* GRID */}
      <section className="pb-24 sm:pb-32" data-testid="blog-grid">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <div className="card-lift rounded-lg bg-zinc-900 border border-white/5 p-8 h-full flex flex-col" data-testid={`blog-card-${p.slug}`}>
                <span className="text-xs tracking-[0.2em] uppercase font-bold text-cyan-400">{p.category}</span>
                <h3 className="font-heading text-xl font-bold mt-3">{p.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed mt-3 mb-6">{p.excerpt}</p>
                <div className="mt-auto flex items-center gap-4 text-xs text-zinc-500">
                  <span>{p.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {p.readTime}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-24 sm:py-32 bg-zinc-950 border-t border-white/5" data-testid="newsletter-section">
        <div className="max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <Reveal>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight">
              Get growth insights in your inbox
            </h2>
            <p className="text-base text-zinc-400 mt-4">
              One practical email a month on software, AI, blockchain and marketing. No spam.
            </p>
            <form onSubmit={subscribe} className="flex flex-col sm:flex-row gap-3 mt-8 max-w-md mx-auto" data-testid="newsletter-form">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-zinc-900 border-white/10 focus:border-blue-500 h-12 text-white placeholder:text-zinc-500 flex-1"
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
