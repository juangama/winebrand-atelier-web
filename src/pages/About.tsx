
import Layout from './Layout';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src="/lovable-uploads/d5b5c9d4-ff16-446c-8ee5-19a27fdbe20e.png"
                alt="WINEBRAND"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Content Section */}
          <div className="order-1 lg:order-2 space-y-8">
            <h1 className="text-4xl sm:text-5xl font-light tracking-wide text-gray-900">
              About
            </h1>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-700 max-w-lg">
                WINEBRAND is from Bogotá, Colombia. With a strong focus on simple yet 
                powerful design, we are driven to create timeless work by portraying an 
                aesthetic that is uniquely our own.
              </p>
              
              <div className="pt-4">
                <Link 
                  to="/shop" 
                  className="text-gray-500 hover:text-gray-900 transition-colors underline"
                >
                  Click here for more info
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
