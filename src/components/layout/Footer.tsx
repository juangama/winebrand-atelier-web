
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import NewsletterForm from '../ui/NewsletterForm';

const Footer = () => {
  return (
    <footer className="bg-wine-DEFAULT text-white py-16 mt-24">
      <div className="editorial-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Navigation */}
          <div>
            <h4 className="text-lg mb-6 font-serif">Navigation</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Shop</Link></li>
              <li><Link to="/lookbook" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Lookbook</Link></li>
              <li><Link to="/about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">About</Link></li>
              <li><Link to="/news" className="text-sm opacity-80 hover:opacity-100 transition-opacity">News</Link></li>
            </ul>
          </div>

          {/* Column 2: Legal */}
          <div>
            <h4 className="text-lg mb-6 font-serif">Legal</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Terms & Conditions</Link></li>
              <li><Link to="/about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Privacy Policy</Link></li>
              <li><Link to="/about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Shipping & Returns</Link></li>
              <li><Link to="/about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">FAQ</Link></li>
            </ul>
          </div>

          {/* Column 3: Social */}
          <div>
            <h4 className="text-lg mb-6 font-serif">Connect</h4>
            <div className="flex space-x-4 mb-6">
              <a href="https://instagram.com/winebrand" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <Instagram size={18} />
              </a>
              <a href="https://facebook.com/winebrand" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com/winebrand" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <Twitter size={18} />
              </a>
            </div>
            <p className="text-sm opacity-80">
              Bogotá, Colombia<br />
              info@winebrand.com
            </p>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-lg mb-6 font-serif">Newsletter</h4>
            <p className="text-sm opacity-80 mb-4">Stay updated on our latest releases and stories.</p>
            <NewsletterForm minimal={true} />
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-white border-opacity-20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-70 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} WINEBRAND. All rights reserved.
          </p>
          <p className="text-sm font-serif italic opacity-70">
            WINEBRAND — Harvesting quality.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
