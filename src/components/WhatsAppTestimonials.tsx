import React from 'react';
import { MessageCircle, Star, Users } from 'lucide-react';

const WhatsAppTestimonials = () => {
  const testimonialImages = [
    {
      src: "https://i.imgur.com/aNov3RU.png",
      alt: "Depoimento WhatsApp 1"
    },
    {
      src: "https://i.imgur.com/ciqQLkO.png", 
      alt: "Depoimento WhatsApp 2"
    },
    {
      src: "https://i.imgur.com/siXyVsJ.png",
      alt: "Depoimento WhatsApp 3"
    },
    {
      src: "https://i.imgur.com/BJABBrB.png",
      alt: "Depoimento WhatsApp 4"
    },
    {
      src: "https://i.imgur.com/HpdZfnc.png",
      alt: "Depoimento WhatsApp 5"
    }
  ];

  const handleCTA = () => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'AddToCart');
    }
    window.open('https://pay.cakto.com.br/dbgf6ha_533635', '_blank');
  };

  return (
    <section id="whatsapp-testimonials" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <MessageCircle className="w-12 h-12 text-green-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Depoimentos <span className="text-green-600">Reais</span> dos Nossos Alunos
            </h2>
          </div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Veja as mensagens que recebemos diariamente no WhatsApp de pessoas que 
            transformaram suas vidas com o método de criação de tilápias
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
              <Users className="w-5 h-5 text-green-500" />
              <span className="font-semibold text-gray-700">Mensagens Reais</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="font-semibold text-gray-700">Resultados Comprovados</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
              <MessageCircle className="w-5 h-5 text-blue-500" />
              <span className="font-semibold text-gray-700">Suporte Ativo</span>
            </div>
          </div>
          
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        {/* Slider de Depoimentos */}
        <div className="mb-16">
          <div className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-2xl shadow-2xl bg-white">
            <div className="flex animate-[testimonialSlide_15s_ease-in-out_infinite]">
              {testimonialImages.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 relative"
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.alt}
                    className="w-full h-auto object-contain bg-gray-50"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    ✓ Verificado
                  </div>
                </div>
              ))}
            </div>
            
            {/* Indicadores */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {testimonialImages.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-white opacity-50"
                  style={{
                    animation: `indicatorPulse 15s ease-in-out infinite ${index * 3}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <div className="mb-8">
            <MessageCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Você Também Pode Ter Esses Resultados!
            </h3>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Estes são apenas alguns dos centenas de depoimentos que recebemos. 
              <strong className="text-green-600"> Pessoas comuns como você</strong> que decidiram 
              mudar de vida com a criação de tilápias.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-green-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-700 font-semibold">Mensagens Recebidas</div>
            </div>
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">87%</div>
              <div className="text-gray-700 font-semibold">Taxa de Sucesso</div>
            </div>
            <div className="bg-orange-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-orange-600 mb-2">24h</div>
              <div className="text-gray-700 font-semibold">Suporte Ativo</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 text-white mb-8">
            <h4 className="text-2xl font-bold mb-4">
              🎯 Não Perca Esta Oportunidade!
            </h4>
            <p className="text-lg mb-6 opacity-90">
              Junte-se aos nossos alunos de sucesso e comece sua jornada rumo à independência financeira
            </p>
            
            <button
              onClick={handleCTA}
              className="bg-white text-green-600 px-8 sm:px-12 py-4 rounded-xl text-lg sm:text-xl font-bold hover:bg-gray-100 transition-colors transform hover:scale-105 shadow-xl"
            >
              Garantir Minha Cópia Agora - R$ 19
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <span>✅ Garantia de 7 dias</span>
            <span>✅ Acesso imediato</span>
            <span>✅ Grupo VIP WhatsApp</span>
            <span>✅ Suporte completo</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppTestimonials;