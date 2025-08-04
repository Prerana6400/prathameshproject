import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Presentation, Award, Users } from "lucide-react";

const AccomplishmentsSection = () => {
  const accomplishments = [
    {
      icon: Trophy,
      title: "Hardware Hackathon Participation",
      event: "Utkarsh 2025",
      description: "Participated in national-level hardware innovation challenges",
      type: "Competition",
      color: "text-yellow-600 bg-yellow-50"
    },
    {
      icon: Presentation,
      title: "Technical Presentation",
      event: "Dipex 2025",
      description: "Presented innovative solutions in diploma exhibition",
      type: "Presentation",
      color: "text-blue-600 bg-blue-50"
    },
    {
      icon: Users,
      title: "Club Founder",
      event: "TANTRiX Club",
      description: "Founded innovation club for Electronics & Telecommunication students",
      type: "Leadership",
      color: "text-green-600 bg-green-50"
    },
    {
      icon: Award,
      title: "Assistive Technology Development",
      event: "Voice-to-Text Device",
      description: "Developed assistive communication device for hearing-impaired individuals",
      type: "Innovation",
      color: "text-purple-600 bg-purple-50"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Accomplishments & Activities
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {accomplishments.map((item, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur-sm animate-scale-in group hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl ${item.color} group-hover:scale-110 transition-transform`}>
                      <item.icon className="h-6 w-6" />
                    </div>
                    <Badge variant="outline" className="border-primary/20 text-primary">
                      {item.type}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-lg text-primary font-semibold mb-3">
                    {item.event}
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Activities */}
          <div className="mt-12 animate-fade-in">
            <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                  Additional Activities & Honors
                </h3>
                <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Participated in national-level AICTE technical events
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Conducted technical workshops for junior students
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Active member in college technical committees
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Mentored students in electronics projects
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccomplishmentsSection;