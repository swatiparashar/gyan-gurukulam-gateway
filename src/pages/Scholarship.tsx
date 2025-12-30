import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import {
  Award,
  Calendar,
  Clock,
  Trophy,
  Star,
  CheckCircle,
  ArrowRight,
  Gift,
  Target,
  Users,
} from "lucide-react";

const Scholarship = () => {
  const scholarshipTiers = [
    {
      percentage: "100%",
      criteria: "Top 1 Rank in Test",
      benefits: ["Full Fee Waiver", "Free Study Material", "Premium Batch Access"],
      color: "bg-gradient-success",
    },
    {
      percentage: "75%",
      criteria: "Top 2-3 Ranks",
      benefits: ["75% Fee Discount", "Free Study Material", "Regular Batch Access"],
      color: "bg-gradient-primary",
    },
    {
      percentage: "50%",
      criteria: "Top 4-10 Ranks",
      benefits: ["50% Fee Discount", "Discounted Material", "Regular Batch Access"],
      color: "bg-primary",
    },
    {
      percentage: "25%",
      criteria: "Top 11-20 Ranks",
      benefits: ["25% Fee Discount", "Regular Batch Access", "Doubt Sessions"],
      color: "bg-warning",
    },
  ];

  const testDetails = [
    { icon: Calendar, label: "Test Day", value: "Every Sunday" },
    { icon: Clock, label: "Duration", value: "1 Hour" },
    { icon: Users, label: "Eligibility", value: "Class VIII-XII" },
    { icon: Target, label: "Subjects", value: "PCM/PCB Based" },
  ];

  const steps = [
    {
      step: 1,
      title: "Register",
      description: "Fill the registration form online or visit our center",
    },
    {
      step: 2,
      title: "Appear for Test",
      description: "Take the scholarship test on Sunday at our center",
    },
    {
      step: 3,
      title: "Get Results",
      description: "Results announced within 48 hours of the test",
    },
    {
      step: 4,
      title: "Claim Scholarship",
      description: "Complete admission with your scholarship benefit",
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/20 rounded-full text-success-foreground mb-6 backdrop-blur-sm border border-success/30">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-semibold">Up to 100% Scholarship!</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              Scholarship Program
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Your talent deserves recognition. Prove yourself and study for free!
            </p>
          </div>
        </div>
      </section>

      {/* Test Details */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {testDetails.map((item, index) => (
              <div
                key={index}
                className="text-center p-4 bg-card rounded-xl shadow-card border border-border/50"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-foreground text-sm">{item.label}</h4>
                <p className="text-primary font-bold mt-1">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarship Tiers */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Scholarship Tiers"
            title="Scholarship Based on Merit"
            subtitle="Your rank determines your scholarship percentage"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {scholarshipTiers.map((tier, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl shadow-card border border-border/50 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`${tier.color} py-6 text-center`}>
                  <div className="text-4xl font-bold text-primary-foreground">{tier.percentage}</div>
                  <div className="text-sm text-primary-foreground/80 mt-1">Scholarship</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Trophy className="w-5 h-5 text-warning" />
                    <span className="font-semibold text-foreground text-sm">{tier.criteria}</span>
                  </div>
                  <ul className="space-y-2">
                    {tier.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-success shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Simple Process"
            title="How to Apply"
            subtitle="Four easy steps to claim your scholarship"
          />
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50 text-center h-full">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-primary-foreground">{item.step}</span>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-muted-foreground" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Test Info */}
      <section className="py-16 lg:py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMCAwaDIwdjIwSDB6TTIwIDIwaDIwdjIwSDIweiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4 bg-primary-foreground/20 text-primary-foreground">
                  Every Sunday
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6">
                  Weekly Scholarship Test
                </h2>
                <p className="text-lg text-primary-foreground/80 mb-6">
                  We conduct scholarship tests every Sunday at our center. This gives 
                  every student multiple opportunities to prove their merit and earn 
                  scholarships throughout the year.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "No registration fee for the test",
                    "Open to all students from Class VIII to XII",
                    "Based on NCERT syllabus",
                    "Results within 48 hours",
                    "Scholarship valid for entire course duration",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-primary-foreground">
                      <Gift className="w-5 h-5 text-success shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              <Button variant="hero" size="xl" asChild>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfXdI_QUxdUyJemx9MGVDbFKd5IiK6t3pL2PaPHRiaElnNnZA/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                  Register for Test
                  <ArrowRight className="w-5 h-5" />
                </a>
                </Button>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-8 text-center">
                <div className="w-24 h-24 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-12 h-12 text-success-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                  Next Test: This Sunday
                </h3>
                <div className="grid grid-cols-2 gap-4 text-primary-foreground/80">
                  <div>
                    <div className="text-3xl font-bold text-primary-foreground">2:00</div>
                    <div className="text-sm">PM Start Time</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary-foreground">3:00</div>
                    <div className="text-sm">PM End Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Scholarship;