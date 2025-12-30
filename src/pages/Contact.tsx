import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  ArrowRight,
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["Gayatri Villa, Gyan Coaching Institute", "Avantika-2nd, Ramghat Road, Aligarh"],
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["9528220991", "7906725040", "9411418190"],
      isPhone: true,
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["guptaharsh22@gmail.com", "dcgupta.gyan@gmail.com"],
      isEmail: true,
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Sat: 8:00 AM - 8:00 PM", "Sunday: 9:00 AM - 2:00 PM"],
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
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Have questions? We're here to help you start your journey
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <SectionHeading
              badge="Reach Us"
              title="Get In Touch"
              subtitle="We're always happy to hear from you. Reach out through any of these channels."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 shadow-card border border-border/50 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  <div className="space-y-1">
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">
                        {item.isPhone ? (
                          <a href={`tel:${detail}`} className="hover:text-primary transition-colors">
                            {detail}
                          </a>
                        ) : item.isEmail ? (
                          <a href={`mailto:${detail}`} className="hover:text-primary transition-colors">
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Enquiry CTA */}
            <div className="bg-gradient-hero rounded-3xl p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground mb-4">
                Have a Question or Want to Enroll?
              </h3>
              <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                Fill out our enquiry form and we'll get back to you within 24 hours with all the information you need.
              </p>
              <Button variant="hero" size="xl" asChild>
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdkQnRK5W2lHrQw99cLhG_uZT9CEqBWkhgiqHaRK-PkLNwzFA/viewform?usp=publish-editor" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Send className="w-5 h-5" />
                  Send Enquiry
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Find Us"
            title="Our Location"
            subtitle="Visit us at our center in Aligarh"
          />
          <div className="max-w-5xl mx-auto">
            <div className="bg-card rounded-3xl overflow-hidden shadow-card border border-border/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.5!2d78.0789!3d27.8974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGayatri+Villa+Gyan+Coaching+Institute+Avantika+2nd+Ramghat+Road+Aligarh!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gyan Gurukulam Location"
                className="w-full"
              />
              <div className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">
                    Gayatri Villa, Gyan Coaching Institute, Avantika-2nd, Ramghat Road, Aligarh
                  </span>
                </div>
                <Button variant="outline" asChild>
                  <a
                    href="https://www.google.com/maps/search/Gayatri+Villa+Gyan+Coaching+Institute+Avantika+2nd+Ramghat+Road+Aligarh"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;