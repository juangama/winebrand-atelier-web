import { Button } from '@/components/ui/button';

const LandingPage = () => {
  const handleEnter = () => {
    window.location.href = '/home';
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-primary/20 via-background to-secondary/10 flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5"></div>
      </div>
      
      <div className="text-center z-10 px-8 max-w-4xl mx-auto">
        {/* Logo/Brand */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent mb-4">
            WINEBRAND
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        {/* Main content */}
        <div className="space-y-8">
          <h2 className="text-2xl md:text-4xl font-light text-foreground/90 leading-relaxed">
            Harvesting Quality
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Descubre nuestra excepcional colección de vinos premium, 
            cuidadosamente seleccionados para los paladares más exigentes.
          </p>

          {/* CTA Button */}
          <div className="pt-8">
            <Button 
              onClick={handleEnter}
              size="lg"
              className="text-lg px-12 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-medium tracking-wide transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              INGRESAR
            </Button>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="mt-16 text-sm text-muted-foreground/70">
          Una experiencia única en cada botella
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
      <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-secondary/30 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-accent/40 rounded-full animate-pulse delay-500"></div>
    </div>
  );
};

export default LandingPage;