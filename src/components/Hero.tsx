import React from 'react';
import { CheckCircle, Users, TrendingUp } from 'lucide-react';

const Hero = () => {
  const handleCTA = () => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'AddToCart');
    }
    window.open('https://pay.cakto.com.br/dbgf6ha_533635', '_blank');
  };

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Descubra o Método <span className="text-blue-700">Comprovado</span> para Criar Tilápias em Tanques e 
            <span className="text-green-600"> Ganhar Renda Extra</span> Sem Sair de Casa
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Mesmo que você nunca tenha criado peixes antes, este guia passo a passo vai te mostrar como 
            <strong className="text-blue-700"> lucrar de forma sustentável</strong> em apenas 90 dias
          </h2>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="font-semibold text-gray-700">Método Validado</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
              <Users className="w-5 h-5 text-blue-500" />
              <span className="font-semibold text-gray-700">+500 Alunos</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
              <TrendingUp className="w-5 h-5 text-orange-500" />
              <span className="font-semibold text-gray-700">Método Lucrativo</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl">
              <img
                src="https://i.imgur.com/yuSCBEN.png"
                alt="Método de Criação de Tilápias em Tanques - Ebook"
                className="w-full h-auto max-w-sm mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="order-1 md:order-2 space-y-6">
            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-r-lg">
              <p className="text-yellow-800 font-semibold">
                🔥 OFERTA ESPECIAL: De R$ 47 por apenas R$ 19 (desconto de 60%) - Aprenda o método
              </p>
            </div>

            <ul className="space-y-4">
              {[
                "Método completo em 120 páginas ilustradas",
                "Passo a passo desde o planejamento até a venda",
                "Técnicas de alimentação para crescimento acelerado",
                "Controle de qualidade da água simplificado",
                "Planilhas de custos e lucros prontas",
                "Bônus: Checklist para montar seu tanque ideal"
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{benefit}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={handleCTA}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4 sm:py-6 px-6 sm:px-8 rounded-xl text-lg sm:text-xl md:text-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              🚀 Quero Começar Agora - R$ 19
            </button>

            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
              <span>✅ Garantia de 7 dias</span>
              <span>✅ Acesso imediato</span>
              <span>✅ Suporte incluso</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;