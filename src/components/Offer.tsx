import React from 'react';
import { CheckCircle, Clock, Shield, Gift, Star } from 'lucide-react';

const Offer = () => {
  const handlePurchase = () => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Purchase', { value: 19, currency: 'BRL' });
    }
    window.open('https://pay.cakto.com.br/dbgf6ha_533635', '_blank');
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-red-600">OFERTA IMPERDÍVEL</span> por Tempo Limitado!
          </h2>
          <p className="text-xl text-gray-600">
            Adquira hoje o método completo com desconto de 60% + Bônus Exclusivos
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-green-50 border-2 border-blue-200 rounded-2xl p-8 md:p-12 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://i.imgur.com/yuSCBEN.png"
                alt="Método de Criação de Tilápias - Ebook Completo"
                className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-6">
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Método de Criação de Tilápias em Tanques
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Guia completo com tudo que você precisa saber para começar seu negócio de tilápias
                </p>
              </div>

              <div className="space-y-3">
                {[
                  "120 páginas com conteúdo exclusivo",
                  "Passo a passo ilustrado e detalhado",
                  "Planilhas de custos e lucros",
                  "Lista de fornecedores confiáveis",
                  "Técnicas de alimentação otimizada",
                  "Controle de qualidade da água",
                  "Estratégias de vendas e marketing",
                  "Acesso ao grupo VIP no WhatsApp"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Gift className="w-5 h-5 text-yellow-600" />
                  <span className="font-bold text-yellow-800">BÔNUS EXCLUSIVO:</span>
                </div>
                <p className="text-yellow-800">
                  Checklist completo para montagem do tanque ideal (Valor: R$ 17)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-white text-center mb-12">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-red-600 px-4 py-2 rounded-full text-sm font-bold mb-4">
              <Clock className="w-4 h-4" />
              OFERTA POR TEMPO LIMITADO
            </div>
            
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="text-2xl text-gray-400 line-through">De R$ 47</div>
              <div className="text-6xl font-bold text-green-400">R$ 19</div>
            </div>
            
            <p className="text-xl mb-6">
              Economia de <span className="text-green-400 font-bold">R$ 28 (60% de desconto)</span>
            </p>
          </div>

          <button
            onClick={handlePurchase}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-6 px-8 rounded-xl text-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl mb-6"
          >
            🚀 QUERO GARANTIR MINHA CÓPIA - R$ 19
          </button>

          <div className="grid md:grid-cols-3 gap-4 text-sm opacity-90">
            <div className="flex items-center justify-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Garantia de 7 dias</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Acesso imediato</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Star className="w-4 h-4" />
              <span>Suporte incluso</span>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center">
          <Shield className="w-16 h-16 text-green-600 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Garantia Incondicional de 7 Dias
          </h3>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
            Estamos tão confiantes no nosso método que oferecemos <strong>garantia total de 7 dias</strong>. 
            Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do seu dinheiro.
          </p>
          <div className="flex items-center justify-center gap-2 text-green-600 font-semibold">
            <CheckCircle className="w-5 h-5" />
            <span>Sem perguntas, sem burocracia</span>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg mb-4">
            <strong>Mais de 500 pessoas</strong> já garantiram sua cópia
          </p>
          <div className="flex items-center justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
            ))}
            <span className="ml-2 text-gray-600">(4.9/5 - 387 avaliações)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;