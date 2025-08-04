import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const LanguagesSection = () => {
  const languages = [
    {
      name: "Marathi",
      flag: "🇮🇳",
      level: "Native",
      progress: 100,
      description: "Native speaker"
    },
    {
      name: "English",
      flag: "🇬🇧",
      level: "Proficient",
      progress: 85,
      description: "Professional working proficiency"
    },
    {
      name: "Hindi",
      flag: "🇮🇳",
      level: "Proficient",
      progress: 90,
      description: "Fluent in speaking and writing"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Languages
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {languages.map((language, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur-sm animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {language.flag}
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {language.name}
                  </h3>
                  
                  <p className="text-primary font-semibold mb-4">
                    {language.level}
                  </p>
                  
                  <div className="mb-4">
                    <Progress 
                      value={language.progress} 
                      className="h-2"
                    />
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    {language.description}
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

export default LanguagesSection;