import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight, Award, Trophy, Star, GraduationCap } from "lucide-react";

const Results = () => {
  const jeeResults = [
    { name: "Arjun Gupta", achievement: "NIT Varanasi" },
    { name: "Kushagra Gupta", achievement: "IIT Gandhi Nagar" },
    { name: "Vishal Gupta", achievement: "IIT Jodhpur" },
    { name: "Satyam Singh", achievement: "IIT Roorkee" },
    { name: "Shivam Singh", achievement: "IIT BHU" },
    { name: "Rajat Kant Goyal", achievement: "NIT District Topper" },
    { name: "Pravir Agarwal", achievement: "NIT Bhangal" },
    { name: "Gaurav Sharma", achievement: "IIT Roorkee" },
    { name: "Deepak Gautam", achievement: "IIT AIR 671" },
    { name: "Tanishk Varshney", achievement: "JEE Qualified" },
  ];

  const neetResults = [
    { name: "Taniskha", achievement: "NEET Score: 590+" },
    { name: "Saumya Yadav", achievement: "NEET Score: 656+" },
    { name: "Prashant Pachauri", achievement: "NEET Score: 715+" },
    { name: "Devish Sharma", achievement: "AFMC Selected" },
    { name: "Megha Varshney", achievement: "NEET Qualified" },
    { name: "Sangam Singh", achievement: "AIIMS Selected" },
    { name: "Poojarani", achievement: "NEET AIR 1729" },
    { name: "Amol Mittal", achievement: "NEET AIR 243" },
    { name: "Tushar Varshney", achievement: "NEET AIR 1772" },
    { name: "Vinit Singh", achievement: "AIIMS Selected" },
  ];

  const boardResults = [
    { name: "Pranav Agrawal", achievement: "CBSE 98.6%" },
    { name: "Arjun Gupta", achievement: "CBSE 97.4%" },
    { name: "Hadeed Ahmad", achievement: "AMU 93.8%" },
    { name: "Aarna Chabra", achievement: "CBSE 93%" },
  ];

  const highlights = [
    { value: "99.62%", label: "JEE Main Top Percentile" },
    { value: "AIR 243", label: "Best NEET Rank" },
    { value: "98.6%", label: "Best Board Score" },
    { value: "50+", label: "IIT/NIT Selections" },
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
              <Trophy className="w-4 h-4 fill-current" />
              <span className="text-sm font-semibold">Proven Track Record</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              Our Results
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Celebrating the success of our students in IIT-JEE, NEET & Board Exams
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 bg-card rounded-xl shadow-card border border-border/50"
              >
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {item.value}
                </div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IIT-JEE Results */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="IIT-JEE"
            title="JEE Main & Advanced Results"
            subtitle="Our students securing seats in premier engineering institutions"
          />
          <div className="max-w-5xl mx-auto">
            <div className="bg-card rounded-3xl p-6 md:p-8 shadow-card border border-border/50">
              <div className="flex items-center justify-center gap-3 mb-8 p-4 bg-gradient-primary rounded-xl">
                <Award className="w-8 h-8 text-primary-foreground" />
                <span className="text-2xl font-bold text-primary-foreground">JEE (MAIN) 99.62% Top Percentile</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {jeeResults.map((student, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors"
                  >
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shrink-0">
                      <span className="text-lg font-bold text-primary-foreground">
                        {student.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{student.name}</h4>
                      <p className="text-sm text-primary font-medium">{student.achievement}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEET Results */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="NEET"
            title="NEET Results"
            subtitle="Medical dreams fulfilled - selections in top medical colleges"
          />
          <div className="max-w-5xl mx-auto">
            <div className="bg-card rounded-3xl p-6 md:p-8 shadow-card border border-border/50">
              <div className="flex items-center justify-center gap-3 mb-8 p-4 bg-gradient-success rounded-xl">
                <Star className="w-8 h-8 text-success-foreground" />
                <span className="text-2xl font-bold text-success-foreground">AIIMS & Top Medical Selections</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {neetResults.map((student, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors"
                  >
                    <div className="w-12 h-12 bg-gradient-success rounded-full flex items-center justify-center shrink-0">
                      <span className="text-lg font-bold text-success-foreground">
                        {student.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{student.name}</h4>
                      <p className="text-sm text-success font-medium">{student.achievement}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board Results */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Board Exams"
            title="High School Best Performance"
            subtitle="Outstanding results in CBSE and other board examinations"
          />
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {boardResults.map((student, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 shadow-card border border-border/50 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-1">{student.name}</h4>
                  <p className="text-2xl font-bold text-primary">{student.achievement}</p>
                </div>
              ))}
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
              Be Our Next Success Story
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Join Gyan and let our expert faculty guide you to achieve your dreams. 
              Your success is our mission!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Enroll Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfXdI_QUxdUyJemx9MGVDbFKd5IiK6t3pL2PaPHRiaElnNnZA/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                  Apply for Scholarship
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Results;