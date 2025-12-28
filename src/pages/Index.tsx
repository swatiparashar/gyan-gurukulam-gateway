import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import TrustBadge from "@/components/TrustBadge";
import {
  GraduationCap,
  Users,
  Award,
  Trophy,
  Target,
  Lightbulb,
  BookOpen,
  Medal,
  ArrowRight,
  Star,
  CheckCircle,
  Phone,
} from "lucide-react";

const Index = () => {
  const stats = [
    { value: "1000+", label: "Students Trained" },
    { value: "28+", label: "Years Experience" },
    { value: "1 Crore", label: "Scholarship Worth" },
    { value: "99.62%", label: "JEE Main Top Score" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAzMHYySDE4di0yaDE4ek0zMCAyNHYySDEydi0yaDE4eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        
        <div className="relative container mx-auto px-4 py-16 md:py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Scholarship Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/20 rounded-full text-success-foreground mb-6 animate-fade-in backdrop-blur-sm border border-success/30">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-semibold">Scholarship Upto 100% Available!</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-primary-foreground mb-4 leading-tight animate-slide-up">
              <span className="block">Gyan</span>
              <span className="text-warning underline underline-offset-4" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>गुरुकुलम्</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 font-semibold mb-2 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Coaching led by IITian
            </p>
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium mb-4 animate-slide-up" style={{ animationDelay: "0.15s" }}>
              For IIT-JEE | NEET | Foundation | Olympiads | AMU Entrances
            </p>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <span className="text-xl md:text-2xl font-semibold">VIII, IX, X, Foundation/Academics | XI, XII, Dropper</span>
              <br />
              Join India's finest Short-cut Methods & Techniques
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/courses">
                  Explore Courses
                </Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <TrustBadge
                icon={GraduationCap}
                title="Expert Faculty"
                description="28+ years experience"
              />
              <TrustBadge
                icon={Award}
                title="Upto 100% Scholarship"
                description="Every Sunday 2-3 PM"
              />
              <TrustBadge
                icon={Trophy}
                title="Proven Results"
                description="Consistent success rate"
              />
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="hsl(var(--background))"
            />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-card rounded-2xl shadow-card border border-border/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Our Vision"
            title="Shaping Future Leaders"
            subtitle="At Gyan गुरुकुलम्, we envision creating a generation of confident, knowledgeable, and morally upright individuals who excel in their chosen fields."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Excellence in Education</h3>
              <p className="text-muted-foreground">Providing world-class coaching with proven methodologies and expert guidance from IITians.</p>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-success" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Holistic Development</h3>
              <p className="text-muted-foreground">Nurturing not just academic brilliance but also character, values, and life skills in every student.</p>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-warning" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Proven Success</h3>
              <p className="text-muted-foreground">28+ years of consistent results with thousands of students achieving their dreams.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                badge="Why Choose Us"
                title="Your Success is Our Mission"
            subtitle="At Gyan, we combine expertise, dedication, and innovative teaching methods to help you achieve your dreams."
            centered={false}
              />
              <ul className="space-y-4">
                {[
                  "28+ Years of Teaching Excellence",
                  "Published Authors - Disha Publication",
                  "Weekly Scholarship Tests Every Sunday",
                  "Regular Batches for 2026 JEE/NEET",
                  "Personalized Mentorship and Guidance",
                  "Comprehensive Study Material & Mock Tests",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button variant="cta" size="lg" asChild>
                  <Link to="/about">
                    Learn More About Us
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-hero rounded-3xl p-8 md:p-12">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <Target className="w-10 h-10 text-primary-foreground mx-auto mb-3" />
                    <h4 className="font-semibold text-primary-foreground">Focused Learning</h4>
                  </div>
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <Lightbulb className="w-10 h-10 text-primary-foreground mx-auto mb-3" />
                    <h4 className="font-semibold text-primary-foreground">Expert Guidance</h4>
                  </div>
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <BookOpen className="w-10 h-10 text-primary-foreground mx-auto mb-3" />
                    <h4 className="font-semibold text-primary-foreground">Quality Material</h4>
                  </div>
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <Users className="w-10 h-10 text-primary-foreground mx-auto mb-3" />
                    <h4 className="font-semibold text-primary-foreground">Small Batches</h4>
                  </div>
                </div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-success text-success-foreground px-6 py-3 rounded-xl shadow-lg font-semibold animate-float">
                <Medal className="w-5 h-5 inline mr-2" />
                Upto 100% Scholarship
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMCAwaDIwdjIwSDB6TTIwIDIwaDIwdjIwSDIweiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Join Gyan today and take the first step towards your dream career. 
              Learn India's finest Short-cut Methods & Techniques!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  <Phone className="w-5 h-5" />
                  Contact Us Now
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/scholarship">
                  Apply for Scholarship
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;