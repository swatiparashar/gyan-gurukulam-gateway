import { Link } from "react-router-dom";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Youtube,
  Clock
} from "lucide-react";
import gyanLogo from "@/assets/gyan-book-logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Faculty", path: "/faculty" },
    { name: "Results", path: "/results" },
    { name: "Scholarship", path: "/scholarship" },
    { name: "Contact", path: "/contact" },
  ];

  const courses = [
    "IIT-JEE (Main & Advanced)",
    "NEET Preparation",
    "Foundation Courses",
    "AMU Entrance",
    "Class IX & X Board",
    "Olympiads",
  ];

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src={gyanLogo} 
                alt="Gyan Gurukulam Logo" 
                className="h-24 w-24 object-contain rounded-lg"
              />
              <div className="flex flex-col">
                <span className="text-xl font-display font-bold leading-tight">
                  Gyan
                </span>
                <span className="text-lg font-bold text-primary underline underline-offset-2 -mt-1" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
                  गुरुकुलम्
                </span>
                <span className="text-xs text-primary-foreground/70">
                  For IIT-JEE | NEET | Foundation | Olympiads
                </span>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Empowering students to achieve their dreams through quality education 
              and expert guidance. 28+ years of teaching excellence.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/gyan.gurukulam?igsh=Z3hha2VsbzlsMjJ3"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/80 hover:text-primary hover:translate-x-1 transition-all inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Courses</h3>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course}>
                  <Link
                    to="/courses"
                    className="text-sm text-primary-foreground/80 hover:text-primary hover:translate-x-1 transition-all inline-block"
                  >
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/80">
                  Avantika II, Ramghat Road, Aligarh, Uttar Pradesh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <div className="text-sm text-primary-foreground/80 space-y-1">
                  <a href="tel:9528220991" className="block hover:text-primary transition-colors">
                    9528220991
                  </a>
                  <a href="tel:7906725040" className="block hover:text-primary transition-colors">
                    7906725040
                  </a>
                  <a href="tel:9411418190" className="block hover:text-primary transition-colors">
                    9411418190
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="text-sm text-primary-foreground/80 space-y-1">
                  <a
                    href="mailto:guptaharsh22@gmail.com"
                    className="block hover:text-primary transition-colors"
                  >
                    guptaharsh22@gmail.com
                  </a>
                  <a
                    href="mailto:dcgupta.gyan@gmail.com"
                    className="block hover:text-primary transition-colors"
                  >
                    dcgupta.gyan@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  Mon - Sat: 8:00 AM - 8:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>© {new Date().getFullYear()} Gyan गुरुकुलम्. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;