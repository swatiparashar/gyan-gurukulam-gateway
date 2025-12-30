import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import gyanLogo from "@/assets/gyan-book-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Faculty", path: "/faculty" },
    { name: "Results", path: "/results" },
    { name: "Scholarship", path: "/scholarship" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={gyanLogo} 
              alt="Gyan Gurukulam Logo" 
              className="h-16 w-16 lg:h-20 lg:w-20 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-xl lg:text-2xl font-display font-bold text-primary leading-tight">
                Gyan
              </span>
              <span className="text-base lg:text-lg font-bold text-destructive underline underline-offset-2 -mt-1" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
                गुरुकुलम्
              </span>
              <span className="text-[10px] lg:text-xs text-muted-foreground font-medium">
                For IIT-JEE | NEET | Foundation | Olympiads | AMU Entrances
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA & Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:9528220991"
              className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>9528220991</span>
            </a>
            <Button variant="cta" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border animate-slide-up">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActive(link.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-secondary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-border flex flex-col gap-3">
                <a
                  href="tel:9528220991"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary"
                >
                  <Phone className="w-4 h-4" />
                  <span>9528220991</span>
                </a>
                <Button variant="cta" className="mx-4" asChild>
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;