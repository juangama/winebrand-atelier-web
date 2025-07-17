
import { useState } from 'react';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import { X } from 'lucide-react';

interface NewsletterFormProps {
  minimal?: boolean;
  onClose?: () => void;
}

const NewsletterForm = ({ minimal = false, onClose }: NewsletterFormProps) => {
  const [email, setEmail] = useState('');
  const [categories, setCategories] = useState({
    womenswear: false,
    menswear: false,
    kids: false,
  });
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [profiling, setProfiling] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscription form submitted:', { email, categories, privacyAccepted, profiling });
    setEmail('');
    setCategories({ womenswear: false, menswear: false, kids: false });
    setPrivacyAccepted(false);
    setProfiling(false);
    
    // In a real application, you would send this data to your backend
  };

  if (minimal) {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="flex">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
            className="flex-1 px-3 py-2 bg-transparent border-b border-white text-white placeholder-white placeholder-opacity-60 focus:outline-none"
          />
          <button 
            type="submit" 
            className="px-4 py-2 text-white uppercase text-xs tracking-widest border-b border-white hover:bg-white hover:text-wine-DEFAULT transition-colors"
          >
            Join
          </button>
        </div>
      </form>
    );
  }

  return (
    <div className="bg-white text-wine-DEFAULT p-8 md:p-12 relative max-w-2xl mx-auto">
      {onClose && (
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4"
          aria-label="Close newsletter"
        >
          <X size={24} />
        </button>
      )}
      
      <h2 className="text-2xl md:text-3xl font-serif mb-4">JOIN THE WINEBRAND™ COMMUNITY</h2>
      
      <p className="mb-6">
        Join our mailing list to enjoy up to 10% off your first order and stay up to date with new arrivals, 
        promotions and events from WINEBRAND™.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email*"
            required
            className="w-full px-4 py-3 border border-wine-DEFAULT focus:outline-none"
          />
        </div>
        
        <div className="flex flex-wrap gap-8">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="womenswear" 
              checked={categories.womenswear}
              onCheckedChange={(checked) => 
                setCategories(prev => ({ ...prev, womenswear: checked as boolean }))
              }
              className="border-wine-DEFAULT data-[state=checked]:bg-wine-DEFAULT"
            />
            <Label htmlFor="womenswear" className="text-sm">Womenswear</Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="menswear" 
              checked={categories.menswear}
              onCheckedChange={(checked) => 
                setCategories(prev => ({ ...prev, menswear: checked as boolean }))
              }
              className="border-wine-DEFAULT data-[state=checked]:bg-wine-DEFAULT"
            />
            <Label htmlFor="menswear" className="text-sm">Menswear</Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="kids" 
              checked={categories.kids}
              onCheckedChange={(checked) => 
                setCategories(prev => ({ ...prev, kids: checked as boolean }))
              }
              className="border-wine-DEFAULT data-[state=checked]:bg-wine-DEFAULT"
            />
            <Label htmlFor="kids" className="text-sm">Kids</Label>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-2">
            <Checkbox 
              id="privacy" 
              checked={privacyAccepted}
              onCheckedChange={(checked) => setPrivacyAccepted(checked as boolean)}
              required
              className="border-wine-DEFAULT data-[state=checked]:bg-wine-DEFAULT mt-1"
            />
            <Label htmlFor="privacy" className="text-sm">
              *I have read the <a href="/privacy" className="underline">Privacy Policy</a> and consent to the processing of my personal 
              data for marketing purposes (Newsletters, News and Promotions)
            </Label>
          </div>
          
          <div className="flex items-start space-x-2">
            <Checkbox 
              id="profiling" 
              checked={profiling}
              onCheckedChange={(checked) => setProfiling(checked as boolean)}
              className="border-wine-DEFAULT data-[state=checked]:bg-wine-DEFAULT mt-1"
            />
            <Label htmlFor="profiling" className="text-sm">
              I consent to the collection and processing of my personal data for profiling purposes
            </Label>
          </div>
        </div>
        
        <button 
          type="submit" 
          className="w-full bg-wine-DEFAULT text-white py-4 uppercase tracking-wider hover:bg-black transition-colors"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterForm;
