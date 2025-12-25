import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import CourseCard from "@/components/CourseCard";
import {
  Atom,
  Stethoscope,
  Building,
  Calculator,
  Medal,
  BookOpen,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Calendar,
} from "lucide-react";

const Courses = () => {
  const allCourses = [
    {
      icon: Atom,
      title: "IIT-JEE (Main & Advanced)",
      description: "Comprehensive 2-year program for JEE aspirants with focus on Physics, Chemistry & Mathematics",
      features: [
        "Expert IITian Faculty",
        "Daily Practice Problems",
        "Weekly Tests & Analysis",
        "Doubt Clearing Sessions",
        "Complete Study Material",
      ],
      color: "blue" as const,
      duration: "2 Years",
      batch: "Class XI & XII",
    },
    {
      icon: Stethoscope,
      title: "NEET Preparation",
      description: "Focused medical entrance preparation with Biology, Physics & Chemistry coverage",
      features: [
        "NCERT Based Teaching",
        "Biology Special Focus",
        "Previous Year Analysis",
        "Mock Tests (NTA Pattern)",
        "Medical Counseling Support",
      ],
      color: "green" as const,
      duration: "2 Years",
      batch: "Class XI & XII",
    },
    {
      icon: Building,
      title: "AMU XIth Entrance",
      description: "Specialized coaching for AMU Class 11 entrance examination",
      features: [
        "Pattern-Based Preparation",
        "Previous Year Papers",
        "Time Management Skills",
        "Mock Tests",
        "Interview Preparation",
      ],
      color: "orange" as const,
      duration: "6-12 Months",
      batch: "Class X Students",
    },
    {
      icon: Calculator,
      title: "Foundation Course",
      description: "Strong foundation building for Class VIII, IX & X students",
      features: [
        "Board Exam Excellence",
        "Olympiad Preparation",
        "Competitive Edge",
        "Conceptual Learning",
        "Regular Assessments",
      ],
      color: "red" as const,
      duration: "1 Year",
      batch: "Class VIII, IX & X",
    },
    {
      icon: BookOpen,
      title: "Class X Board Exam",
      description: "Intensive preparation for Class X board examinations with excellent results",
      features: [
        "Complete Syllabus Coverage",
        "Sample Paper Practice",
        "Board Pattern Tests",
        "Subject-wise Focus",
        "Revision Sessions",
      ],
      color: "blue" as const,
      duration: "1 Year",
      batch: "Class X",
    },
    {
      icon: Medal,
      title: "Olympiad Programs",
      description: "Preparation for various Olympiads - NSO, IMO, NCO and more",
      features: [
        "National Level Prep",
        "International Standards",
        "Problem Solving Skills",
        "Critical Thinking",
        "Award Opportunities",
      ],
      color: "green" as const,
      duration: "6 Months",
      batch: "Class VI-XII",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAzMHYySDE4di0yaDE4ek0zMCAyNHYySDEydi0yaDE4eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4 bg-primary-foreground/20 text-primary-foreground">
              Our Programs
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              Courses We Offer
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Comprehensive coaching programs designed by IITians for your success
            </p>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-card border border-border/50">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">2026 Batches</h4>
                <p className="text-sm text-muted-foreground">Now Enrolling</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-card border border-border/50">
              <div className="w-12 h-12 bg-gradient-success rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-success-foreground" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Small Batches</h4>
                <p className="text-sm text-muted-foreground">Personal Attention</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-card border border-border/50">
              <div className="w-12 h-12 bg-gradient-cta rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-cta-foreground" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Flexible Timing</h4>
                <p className="text-sm text-muted-foreground">Morning & Evening</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Courses */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Complete Programs"
            title="Choose Your Path to Success"
            subtitle="Select the program that aligns with your goals and aspirations"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allCourses.map((course, index) => (
              <div key={index} className="flex flex-col">
                <div className="bg-card rounded-2xl border-2 border-border/50 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden flex-1 flex flex-col">
                  {/* Course Header */}
                  <div className="p-6 border-b border-border/50">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 ${
                        course.color === "blue" ? "bg-gradient-primary" :
                        course.color === "green" ? "bg-gradient-success" :
                        course.color === "orange" ? "bg-warning" :
                        "bg-gradient-cta"
                      } rounded-xl flex items-center justify-center shrink-0`}>
                        <course.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{course.title}</h3>
                        <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {course.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            {course.batch}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Course Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
                    <ul className="space-y-2 flex-1">
                      {course.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                          <CheckCircle className="w-4 h-4 text-success shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="mt-6 w-full" asChild>
                      <Link to="/contact">
                        Enquire Now
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMCAwaDIwdjIwSDB6TTIwIDIwaDIwdjIwSDIweiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6">
              Not Sure Which Course is Right for You?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Schedule a free counseling session with our experts to discuss your goals
              and find the perfect program for your needs.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Book Free Counseling
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;