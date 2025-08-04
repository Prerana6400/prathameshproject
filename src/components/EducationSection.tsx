import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "B.Tech in Electronics & Telecommunication",
      institution: "PCCOE, Pune",
      duration: "Expected 05/2027",
      status: "In Progress",
      description: "Comprehensive study of electronics, telecommunications, and embedded systems",
      isOngoing: true
    },
    {
      degree: "Diploma in Medical Electronics",
      institution: "Govt Polytechnic Nanded",
      duration: "Completed 06/2024",
      status: "Completed",
      description: "Specialized training in biomedical equipment, medical electronics, and healthcare technology",
      isOngoing: false
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-card/80 backdrop-blur-sm animate-fade-in-up group hover:scale-105 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                      <GraduationCap className="h-8 w-8 text-primary group-hover:animate-bounce-gentle" />
                    </div>
                    <Badge 
                      variant={edu.isOngoing ? "default" : "secondary"}
                      className={edu.isOngoing ? "bg-primary text-primary-foreground" : "bg-green-100 text-green-800"}
                    >
                      {edu.status}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">
                    {edu.degree}
                  </h3>
                  
                  <p className="text-lg text-primary font-semibold mb-3">
                    {edu.institution}
                  </p>
                  
                  <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{edu.duration}</span>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;