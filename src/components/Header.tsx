import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleBuyNow = () => {
    // Track Meta Pixel event
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'InitiateCheckout');
    }
    window.open('https://pay.cakto.com.br/dbgf6ha_533635', '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-700">
              Tilápia Pro
            </div>
          </div>
          
          <div className="hidden md:block">
            <button
              onClick={handleBuyNow}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 lg:px-8 py-2 lg:py-3 rounded-lg font-semibold text-base lg:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Comprar Agora - R$ 19
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-blue-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-4 pt-4 pb-4 space-y-3">
              <button
                onClick={handleBuyNow}
                className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-colors shadow-md"
              >
                Comprar Agora - R$ 19
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;