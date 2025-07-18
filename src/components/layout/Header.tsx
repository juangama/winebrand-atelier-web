
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, ShoppingBag, User, X } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="py-4 px-6 w-full fixed top-0 z-50 bg-white border-b border-gray-100 transition-all duration-300">
      <div className="flex items-center justify-between">
        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="p-2"
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center space-x-10">
          <Link to="/shop" className="header-link">Shop</Link>
          <Link to="/lookbook" className="header-link">Lookbook</Link>
          <Link to="/about" className="header-link">About</Link>
        </nav>

        {/* Logo with transition */}
        <Link to="/" className="flex-1 lg:flex-none text-center">
          <div className="relative h-8 flex items-center justify-center">
            {scrolled ? (
              <img 
                src="/lovable-uploads/eb1e642a-2774-4441-8dcf-951196bfe5d7.png" 
                alt="WINEBRAND Logo" 
                className="h-8 w-auto transition-opacity duration-300"
              />
            ) : (
              <h1 className="text-xl md:text-2xl font-serif tracking-wider transition-opacity duration-300">
                WINEBRAND
              </h1>
            )}
          </div>
        </Link>

        {/* Right side icons */}
        <div className="flex items-center space-x-4">
          <button className="p-1" aria-label="Search">
            <Search size={18} />
          </button>
          <Link to="/account" className="p-1">
            <User size={18} />
          </Link>
          <Link to="/cart" className="p-1">
            <ShoppingBag size={18} />
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col p-6 sm:p-10 lg:hidden animate-fade-in">
          <div className="flex justify-end">
            <button 
              onClick={() => setMenuOpen(false)} 
              className="p-2 text-white"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col items-start space-y-6 sm:space-y-8 mt-12 sm:mt-16">
            <Link 
              to="/shop" 
              className="text-lg sm:text-xl text-white uppercase tracking-widest hover:opacity-70 transition-opacity"
              onClick={() => setMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              to="/lookbook" 
              className="text-lg sm:text-xl text-white uppercase tracking-widest hover:opacity-70 transition-opacity"
              onClick={() => setMenuOpen(false)}
            >
              SS25 Lookbook
            </Link>
            <Link 
              to="/news" 
              className="text-lg sm:text-xl text-white uppercase tracking-widest hover:opacity-70 transition-opacity"
              onClick={() => setMenuOpen(false)}
            >
              News
            </Link>
            <Link 
              to="/about" 
              className="text-lg sm:text-xl text-white uppercase tracking-widest hover:opacity-70 transition-opacity"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
