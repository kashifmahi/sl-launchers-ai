import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { CONTACT } from "../data/content";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/#industries", label: "Industries" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 border-b ${
        scrolled || open
          ? "bg-[#060B1D]/85 backdrop-blur-xl border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center shrink-0" data-testid="logo-link" aria-label="SL Launchers home">
          <img
            src="/sl-logo-t.png"
            alt="SL Launchers — Software Solutions"
            className="h-10 sm:h-12 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-1" data-testid="nav-links" aria-label="Main navigation">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              data-testid={`nav-${l.label.toLowerCase()}`}
              className={({ isActive }) =>
                `px-4 py-2.5 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive && !l.to.includes("#") ? "text-white bg-white/10" : "text-slate-300 hover:text-white hover:bg-white/5"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
            className="hidden lg:flex text-sm text-slate-300 hover:text-white transition-colors duration-200 items-center gap-2"
            data-testid="nav-phone-link"
          >
            <Phone className="w-4 h-4" /> {CONTACT.phone}
          </a>
          <Button asChild className="rounded-full bg-blue-600 hover:bg-blue-500 text-white min-h-11 px-5 shadow-lg shadow-blue-600/30" data-testid="nav-cta-button">
            <Link to="/contact">Book a Call</Link>
          </Button>
        </div>

        <button
          className="md:hidden text-white p-2.5 min-w-11 min-h-11 flex items-center justify-center"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          data-testid="mobile-menu-toggle"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#060B1D] px-5 py-4 flex flex-col gap-1" data-testid="mobile-menu">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              data-testid={`mobile-nav-${l.label.toLowerCase()}`}
              className={({ isActive }) =>
                `px-4 py-3.5 rounded-md text-sm font-medium transition-colors duration-200 min-h-11 flex items-center ${
                  isActive && !l.to.includes("#") ? "text-white bg-white/10" : "text-slate-300"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Button asChild className="mt-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white min-h-11" data-testid="mobile-nav-cta-button">
            <Link to="/contact">Book a Call</Link>
          </Button>
        </div>
      )}
    </header>
  );
}
