import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import TrustBadge from "@/components/TrustBadge";
import CourseCard from "@/components/CourseCard";
import {
  GraduationCap,
  Users,
  Award,
  Trophy,
  Target,
  Lightbulb,
  BookOpen,
  Atom,
  Stethoscope,
  Building,
  Calculator,
  Medal,
  ArrowRight,
  Star,
  CheckCircle,
  Phone,
} from "lucide-react";

const Index = () => {
  const courses = [
    {
      icon: Atom,
      title: "IIT-JEE",
      description: "Comprehensive preparation for JEE Main & Advanced",
      features: ["Expert Faculty", "Regular Mock Tests", "Doubt Clearing Sessions"],
      color: "blue" as const,
    },
    {
      icon: Stethoscope,
      title: "NEET",
      description: "Complete medical entrance exam preparation",
      features: ["Biology Focus", "NCERT Based", "Previous Year Papers"],
      color: "green" as const,
    },
    {
      icon: Building,
      title: "AMU Entrance",
      description: "Specialized coaching for AMU XIth entrance",
      features: ["Pattern Analysis", "Time Management", "Expert Guidance"],
      color: "orange" as const,
    },
    {
      icon: Calculator,
      title: "Foundation",
      description: "Strong foundation for Class VIII, IX & X students",
      features: ["Board Exam Prep", "Competitive Edge", "Regular Tests"],
      color: "red" as const,
    },
  ];

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
              <span className="text-sm font-semibold">Scholarship up to 100% Available!</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-primary-foreground mb-6 leading-tight animate-slide-up">
              Gyan
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium mb-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              A Premier Coaching for IIT-JEE & NEET
            </p>
            <p className="text-base md:text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              VIII, IX, X, Foundation | XI, XII, Dropper
              <br />
              Join India's finest Short-cut Methods & Techniques
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Enroll Now
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
                title="IITian Faculty"
                description="Learn from the best"
              />
              <TrustBadge
                icon={Award}
                title="100% Scholarship"
                description="Weekly tests every Sunday"
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

      {/* Courses Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Our Programs"
            title="Courses We Offer"
            subtitle="Comprehensive coaching programs designed for your success in competitive exams"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="default" size="lg" asChild>
              <Link to="/courses">
                View All Courses
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
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
                subtitle="At Gyan Gurukulam, we combine expertise, dedication, and innovative teaching methods to help you achieve your dreams."
                centered={false}
              />
              <ul className="space-y-4">
                {[
                  "IIT Delhi Alumni Faculty with Industry Experience",
                  "Affordable Fee Structure for All Students",
                  "Weekly Scholarship Tests Every Sunday",
                  "Regular Batches for 2026 JEE/NEET",
                  "Personalized Attention & Doubt Clearing",
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
                100% Scholarship
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