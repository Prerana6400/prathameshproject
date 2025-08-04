import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">
              Malhar <span className="text-primary">Patil</span>
            </h3>
            <p className="text-background/80 max-w-md mx-auto">
              Adaptable Biomedical Engineer & Electronics Enthusiast committed to healthcare innovation.
            </p>
          </div>
          
          <div className="border-t border-background/20 pt-8">
            <p className="text-background/60 text-sm flex items-center justify-center gap-2">
              Made with <Heart className="h-4 w-4 text-red-400 fill-current" /> by Malhar Patil
            </p>
            <p className="text-background/40 text-xs mt-2">
              © 2024 All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;