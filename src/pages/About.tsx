import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import {
  Target,
  Eye,
  Heart,
  GraduationCap,
  Award,
  Users,
  BookOpen,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for academic excellence in everything we do",
    },
    {
      icon: Heart,
      title: "Dedication",
      description: "Committed to every student's success and growth",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a supportive learning environment together",
    },
    {
      icon: BookOpen,
      title: "Innovation",
      description: "Modern teaching methods for better understanding",
    },
  ];

  const milestones = [
    { year: "1996", event: "Founded by D.C. Gupta with a vision to provide quality education" },
    { year: "2000", event: "Expanded to include IIT-JEE and NEET programs" },
    { year: "2022", event: "Er. Harsh Gupta (IIT Delhi) joins as Managing Director" },
    { year: "2025", event: "Introduced Upto 100% Scholarship program - GGST" },
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
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              Our Story
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Building futures through quality education and dedicated mentorship since 1996
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card border border-border/50">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide world-class coaching for competitive examinations like IIT-JEE, NEET, 
                and AMU Entrance at affordable prices. We believe every deserving student should 
                have access to quality education regardless of their financial background.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Quality education for all",
                  "Affordable fee structure",
                  "Merit-based scholarships",
                  "Personalized mentorship",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <CheckCircle className="w-5 h-5 text-success" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card border border-border/50">
              <div className="w-16 h-16 bg-gradient-success rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-success-foreground" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                Our Vision
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To become the most trusted and result-oriented coaching institute in Aligarh 
                and surrounding regions. We envision a future where every talented student 
                achieves their dream of studying at premier institutions like IITs, AIIMS, 
                and AMU.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-secondary/50 rounded-xl">
                  <div className="text-2xl font-bold text-primary">2025</div>
                  <div className="text-sm text-muted-foreground">Target Year</div>
                </div>
                <div className="text-center p-4 bg-secondary/50 rounded-xl">
                  <div className="text-2xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-muted-foreground">Students Goal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Our Values"
            title="What We Stand For"
            subtitle="The principles that guide everything we do at Gyan"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-card border border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Our Journey"
            title="Milestones We've Achieved"
            subtitle="A look at our growth and achievements over the years"
          />
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />
              
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-start gap-6 mb-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Year Badge */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center z-10">
                    <div className="w-3 h-3 bg-primary-foreground rounded-full" />
                  </div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="bg-card p-6 rounded-xl shadow-card border border-border/50">
                      <span className="text-primary font-bold text-lg">{milestone.year}</span>
                      <p className="text-foreground mt-2">{milestone.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IITian Credibility */}
      <section className="py-16 lg:py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMCAwaDIwdjIwSDB6TTIwIDIwaDIwdjIwSDIweiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary-foreground/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-10 h-10 text-primary-foreground" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6">
              Led by Experienced Educators
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              With 28+ years of teaching experience and expertise in Physics & Chemistry, 
              our faculty brings proven methods and deep understanding of what it 
              takes to crack competitive exams.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6">
                <Award className="w-10 h-10 text-primary-foreground mx-auto mb-3" />
                <h4 className="font-semibold text-primary-foreground">28+ Years Experience</h4>
                <p className="text-sm text-primary-foreground/70 mt-1">Decades of teaching excellence</p>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6">
                <BookOpen className="w-10 h-10 text-primary-foreground mx-auto mb-3" />
                <h4 className="font-semibold text-primary-foreground">Published Authors</h4>
                <p className="text-sm text-primary-foreground/70 mt-1">Books by Disha Publication</p>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6">
                <Users className="w-10 h-10 text-primary-foreground mx-auto mb-3" />
                <h4 className="font-semibold text-primary-foreground">Industry Experience</h4>
                <p className="text-sm text-primary-foreground/70 mt-1">Real-world knowledge & insights</p>
              </div>
            </div>
            <div className="mt-10">
              <Button variant="hero" size="xl" asChild>
                <Link to="/faculty">
                  Meet Our Faculty
                  <ArrowRight className="w-5 h-5" />
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

export default About;