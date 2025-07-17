
import { useEffect, useState } from 'react';
import NewsletterForm from '../ui/NewsletterForm';

const NewsletterModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Wait 5 seconds before showing the modal
    const timer = setTimeout(() => {
      // Check if the user has already seen the modal
      const hasSeenModal = localStorage.getItem('newsletter-modal-seen');
      if (!hasSeenModal) {
        setIsVisible(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Set a flag in localStorage to prevent showing the modal again in this session
    localStorage.setItem('newsletter-modal-seen', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 animate-fade-in">
      <div className="w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <NewsletterForm onClose={handleClose} />
      </div>
    </div>
  );
};

export default NewsletterModal;
