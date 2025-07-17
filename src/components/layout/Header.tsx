
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, ShoppingBag, User, X } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="py-4 px-6 w-full fixed top-0 z-50 bg-white border-b border-gray-100">
      <div className="flex items-center justify-between">
        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button 
            onClick={() => setMenuOpen(true)} 
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

        {/* Logo */}
        <Link to="/" className="flex-1 lg:flex-none text-center">
          <h1 className="text-xl md:text-2xl font-serif tracking-wider">WINEBRAND</h1>
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
        <div className="fixed inset-0 bg-wine-DEFAULT bg-opacity-95 z-50 flex flex-col p-10 lg:hidden animate-fade-in">
          <div className="flex justify-end">
            <button 
              onClick={() => setMenuOpen(false)} 
              className="p-2 text-white"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col items-start space-y-8 mt-16">
            <Link 
              to="/shop" 
              className="text-xl text-white uppercase tracking-widest hover:opacity-70 transition-opacity"
              onClick={() => setMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              to="/lookbook" 
              className="text-xl text-white uppercase tracking-widest hover:opacity-70 transition-opacity"
              onClick={() => setMenuOpen(false)}
            >
              SS25 Lookbook
            </Link>
            <Link 
              to="/news" 
              className="text-xl text-white uppercase tracking-widest hover:opacity-70 transition-opacity"
              onClick={() => setMenuOpen(false)}
            >
              News
            </Link>
            <Link 
              to="/about" 
              className="text-xl text-white uppercase tracking-widest hover:opacity-70 transition-opacity"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/stores" 
              className="text-xl text-white uppercase tracking-widest hover:opacity-70 transition-opacity"
              onClick={() => setMenuOpen(false)}
            >
              Stores
            </Link>
            <Link 
              to="/cafe" 
              className="text-xl text-white uppercase tracking-widest hover:opacity-70 transition-opacity"
              onClick={() => setMenuOpen(false)}
            >
              Café
            </Link>
            <Link 
              to="/art" 
              className="text-xl text-white uppercase tracking-widest hover:opacity-70 transition-opacity"
              onClick={() => setMenuOpen(false)}
            >
              Art
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
