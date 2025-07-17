
import { useState } from 'react';
import { X } from 'lucide-react';

interface NewsletterFormProps {
  minimal?: boolean;
  onClose?: () => void;
}

const NewsletterForm = ({ minimal = false, onClose }: NewsletterFormProps) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission - in a real app, this would call an API
    console.log('Newsletter signup:', email);
    
    // Show success state
    setSubmitted(true);
    
    // Reset form after 3 seconds if it's a modal
    if (onClose) {
      setTimeout(() => {
        onClose();
      }, 3000);
    }
  };

  if (minimal) {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="px-3 py-2 bg-transparent border-b border-white border-opacity-40 text-white placeholder-white placeholder-opacity-60 focus:outline-none focus:border-opacity-100"
        />
        <button 
          type="submit" 
          className="btn-minimal self-start border border-white p-0 px-4 py-2 text-xs"
        >
          SUBSCRIBE
        </button>
      </form>
    );
  }

  return (
    <div className="bg-wine-DEFAULT text-white p-8 md:p-12 relative">
      {onClose && (
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:opacity-70 transition-opacity"
          aria-label="Close"
        >
          <X size={24} />
        </button>
      )}

      <div className="max-w-md mx-auto">
        {!submitted ? (
          <>
            <h3 className="text-2xl md:text-3xl font-serif mb-4">Join Our Community</h3>
            <p className="mb-8">
              Sign up to receive updates on new releases, restocks, and exclusive content.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full px-0 py-3 bg-transparent border-b border-white border-opacity-70 text-white placeholder-white placeholder-opacity-60 focus:outline-none focus:border-opacity-100"
                />
              </div>
              
              <div className="pt-4">
                <button 
                  type="submit"
                  className="btn-minimal border border-white hover:bg-white hover:text-black"
                >
                  SUBSCRIBE
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <h3 className="text-2xl md:text-3xl font-serif mb-4">Thank You</h3>
            <p>
              You've been added to our mailing list. Welcome to the WINEBRAND community.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsletterForm;
