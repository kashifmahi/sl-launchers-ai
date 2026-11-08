import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Rocket, Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { CONTACT } from "../data/content";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? "bg-black/80 backdrop-blur-xl border-white/10"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5" data-testid="logo-link">
          <span className="w-9 h-9 rounded-md bg-blue-600 flex items-center justify-center">
            <Rocket className="w-5 h-5 text-white" />
          </span>
          <span className="font-heading font-800 font-extrabold text-lg tracking-tight">
            SL <span className="text-gradient-blue">Launchers</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1" data-testid="nav-links">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              data-testid={`nav-${l.label.toLowerCase()}`}
              className={({ isActive }) =>
                `px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive ? "text-white bg-white/10" : "text-zinc-400 hover:text-white"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
            className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
            data-testid="nav-phone-link"
          >
            <Phone className="w-4 h-4" /> {CONTACT.phone}
          </a>
          <Button asChild className="rounded-md bg-blue-600 hover:bg-blue-500 text-white" data-testid="nav-cta-button">
            <Link to="/contact">Book a Call</Link>
          </Button>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          data-testid="mobile-menu-toggle"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl px-5 py-4 flex flex-col gap-1" data-testid="mobile-menu">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              data-testid={`mobile-nav-${l.label.toLowerCase()}`}
              className={({ isActive }) =>
                `px-4 py-3 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive ? "text-white bg-white/10" : "text-zinc-400"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Button asChild className="mt-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white" data-testid="mobile-nav-cta-button">
            <Link to="/contact">Book a Call</Link>
          </Button>
        </div>
      )}
    </header>
  );
}
