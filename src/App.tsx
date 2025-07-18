
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';

import Layout from './pages/Layout';
import Index from './pages/Index';
import Shop from './pages/Shop';
import Lookbook from './pages/Lookbook';
import News from './pages/News';
import About from './pages/About';
import Community from './pages/Community';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Index /></Layout>} />
          <Route path="/shop" element={<Layout><Shop /></Layout>} />
          <Route path="/lookbook" element={<Layout><Lookbook /></Layout>} />
          <Route path="/news" element={<Layout><News /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/community" element={<Layout><Community /></Layout>} />
          <Route path="/products/:id" element={<Layout><ProductDetail /></Layout>} />
          <Route path="/cart" element={<Layout><Cart /></Layout>} />
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
