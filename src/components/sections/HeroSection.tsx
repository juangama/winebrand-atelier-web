
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-50">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 z-10"></div>
      
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/lovable-uploads/68a24d84-4ea0-4014-a8a6-94bff79b56c7.png')"
        }}
      />
      
      <div className="relative z-20 text-center text-white px-4 sm:px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif mb-6 sm:mb-8 leading-tight">
          Cuando todo suena igual,<br />
          elegimos sonar distinto.
        </h1>
        
        <p className="text-lg sm:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto opacity-90 leading-relaxed">
          Una camiseta bien hecha dice más que mil frases vacías.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <a 
            href="/shop" 
            className="btn-minimal border border-white text-white hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto text-center"
          >
            Explora la colección
          </a>
          <a 
            href="/about" 
            className="btn-minimal border border-white text-white hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto text-center"
          >
            Lee nuestra historia
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
