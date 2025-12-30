import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import FacultyCard from "@/components/FacultyCard";
import { ArrowRight, Award, BookOpen, GraduationCap, Users } from "lucide-react";
import dcGuptaImage from "@/assets/dc-gupta-new.jpg";
import harshGuptaImage from "@/assets/harsh-gupta.jpeg";

const Faculty = () => {
  const faculty = [
    {
      name: "D.C. Gupta",
      qualification: "M.Tech - Director",
      specialization: "Physics HOD",
      experience: "28+ Years Teaching Experience",
      image: dcGuptaImage,
      achievements: [
        "Author of IIT/NEET Books - Disha Publication, Delhi",
        "Original approach in concept analysis",
        "Helped thousands achieve IIT & NEET dreams",
        "His unique style makes Physics easy & interesting",
      ],
    },
    {
      name: "Er. Harsh Gupta",
      qualification: "B.Tech (IIT Delhi) - Managing Director",
      specialization: "Chemistry & Mathematics HOD",
      experience: "Expert in JEE & NEET Chemistry + Mathematics",
      image: harshGuptaImage,
      achievements: [
        "Introduced latest study material & methodology",
        "Developed magical methods for Chemistry",
        "Makes subject easy and interesting",
        "\"Chemistry is not about wrote learning\"",
      ],
    },
  ];

  const highlights = [
    {
      icon: GraduationCap,
      title: "28+ Years Experience",
      description: "Decades of teaching excellence",
    },
    {
      icon: BookOpen,
      title: "Published Authors",
      description: "Books published by national publishers",
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Consistent results year after year",
    },
    {
      icon: Users,
      title: "Student-Centric",
      description: "Personalized attention to every student",
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
              Our Team
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              Meet Our Faculty
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Learn from the best minds in competitive exam preparation
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Highlights */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="text-center p-4 bg-card rounded-xl shadow-card border border-border/50"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Cards */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Expert Educators"
            title="Your Mentors at Gyan Gurukulam"
            subtitle="Our faculty brings years of experience and expertise to guide you towards success"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faculty.map((member, index) => (
              <FacultyCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              badge="Our Approach"
              title="Teaching Philosophy"
              subtitle="How we ensure your success in competitive exams"
            />
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
                <h3 className="text-xl font-bold text-foreground mb-4">Concept-First Learning</h3>
                <p className="text-muted-foreground mb-4">
                  We believe in building strong fundamentals. Our teaching methodology focuses 
                  on deep conceptual understanding rather than rote memorization.
                </p>
                <ul className="space-y-2">
                  {["Visual Learning Aids", "Real-World Examples", "Interactive Sessions"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
                <h3 className="text-xl font-bold text-foreground mb-4">Practice & Performance</h3>
                <p className="text-muted-foreground mb-4">
                  Regular practice with immediate feedback helps students identify weak areas 
                  and improve continuously throughout their preparation journey.
                </p>
                <ul className="space-y-2">
                  {["Daily Practice Problems", "Weekly Assessment Tests", "Performance Analytics"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-2 h-2 bg-success rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMCAwaDIwdjIwSDB6TTIwIDIwaDIwdjIwSDIweiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6">
              Learn from the Best
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Join our batches and get mentored by experienced educators who have helped 
              thousands of students achieve their dreams.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Join Now
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

export default Faculty;