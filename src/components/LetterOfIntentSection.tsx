import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Building } from "lucide-react";

const LetterOfIntentSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Letter of Intent
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm animate-fade-in-up group hover:shadow-2xl transition-all duration-500 hover:scale-105">
            <CardContent className="p-12 text-center">
              <div className="mb-8">
                <div className="p-4 bg-blue-600/10 rounded-2xl inline-block group-hover:scale-110 transition-transform duration-300 animate-float">
                  <Building className="h-12 w-12 text-blue-600 group-hover:animate-bounce-gentle" />
                </div>
              </div>
              
              <Badge className="bg-blue-600 text-white mb-6 text-lg px-6 py-2">
                Target Company
              </Badge>
              
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Philips Healthcare India
              </h3>
              
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <FileText className="h-6 w-6 text-blue-600" />
                  <span className="text-blue-600 font-semibold">Letter of Intent</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  "I am deeply interested in contributing to Philips Healthcare India's mission of improving lives through meaningful innovation. My background in biomedical engineering, combined with hands-on experience in medical equipment handling and electronics testing, aligns perfectly with Philips' commitment to advancing healthcare technology."
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  Medical Technology Focus
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  Healthcare Innovation
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  Global Impact
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LetterOfIntentSection;