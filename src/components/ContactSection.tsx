import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: "Pune, Maharashtra, India",
      color: "text-red-600 bg-red-50"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+91 XXXXX XXXXX",
      color: "text-green-600 bg-green-50"
    },
    {
      icon: Mail,
      title: "Email",
      details: "malhar.patil@email.com",
      color: "text-blue-600 bg-blue-50"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            Let's discuss opportunities in biomedical engineering and medical technology innovation.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-bold text-foreground mb-8">
                Contact Information
              </h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl ${info.color}`}>
                          <info.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">
                            {info.title}
                          </h4>
                          <p className="text-muted-foreground">
                            {info.details}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
                <h4 className="text-xl font-bold text-foreground mb-4">
                  Open to Opportunities
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  I'm actively seeking opportunities in biomedical engineering, medical device development, and healthcare technology. Available for full-time positions, internships, and collaborative projects.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-scale-in">
              <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-8">
                    Send a Message
                  </h3>
                  
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          First Name
                        </label>
                        <Input 
                          placeholder="Your first name"
                          className="border-border/50 focus:border-primary transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Last Name
                        </label>
                        <Input 
                          placeholder="Your last name"
                          className="border-border/50 focus:border-primary transition-colors"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Email Address
                      </label>
                      <Input 
                        type="email"
                        placeholder="your.email@example.com"
                        className="border-border/50 focus:border-primary transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Subject
                      </label>
                      <Input 
                        placeholder="What's this about?"
                        className="border-border/50 focus:border-primary transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Message
                      </label>
                      <Textarea 
                        placeholder="Tell me about your project or opportunity..."
                        rows={5}
                        className="border-border/50 focus:border-primary transition-colors resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 rounded-xl shadow-lg hover:shadow-xl transition-all"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;