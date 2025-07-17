
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      {/* Hero image - showing a winter scene with WINEBRAND apparel */}
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/68a24d84-4ea0-4014-a8a6-94bff79b56c7.png"
          alt="Person in WINEBRAND apparel in snow"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col justify-end h-full pb-16 sm:pb-20 px-4 sm:px-6 md:px-16 text-white">
        <div className="max-w-xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-6 sm:mb-8 leading-tight">
            Cuando todo suena igual, elegimos sonar distinto.
          </h2>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6">
            <Link 
              to="/shop" 
              className="btn-minimal bg-white text-wine-DEFAULT hover:bg-black hover:text-white transition-colors duration-300 text-center"
            >
              Explora la colección
            </Link>
            <Link 
              to="/about" 
              className="btn-minimal border border-white hover:bg-white hover:text-black transition-colors duration-300 text-center"
            >
              Lee nuestra historia
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
