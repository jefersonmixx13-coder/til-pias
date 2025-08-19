import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Preciso de muito espaço para criar tilápias?",
      answer: "Não! Você pode começar com apenas 15m² no seu quintal. Um tanque de 4m x 2m já é suficiente para produzir até 200kg de tilápia por ciclo, gerando uma renda de R$ 2.000 a R$ 3.000."
    },
    {
      question: "Funciona para iniciantes que nunca criaram peixes?",
      answer: "Absolutamente! O método foi criado especialmente para iniciantes. Tudo é explicado de forma simples e didática, com ilustrações passo a passo. Mais de 80% dos nossos alunos nunca haviam criado peixes antes."
    },
    {
      question: "Quanto tempo leva para ter o primeiro lucro?",
      answer: "Em média 90-120 dias para o primeiro lote estar pronto para venda. Depois disso, você pode ter ciclos contínuos, garantindo renda mensal constante. Muitos alunos recuperam o investimento inicial já na primeira venda."
    },
    {
      question: "Qual o investimento inicial necessário?",
      answer: "Você pode começar com R$ 800 a R$ 1.500. Isso inclui tanque, aerador, alimentação inicial e alevinos. O método ensina como maximizar seus resultados e ter um bom retorno do investimento."
    },
    {
      question: "E se eu não conseguir vender os peixes?",
      answer: "A demanda por tilápia é constante e crescente no Brasil. No ebook, você aprende as melhores estratégias de venda: restaurantes, peixarias, vizinhos e até vendas online. Fornecemos uma lista de compradores por região."
    },
    {
      question: "Funciona em apartamento ou só em casas?",
      answer: "O ideal é ter um quintal ou área externa, mas já tivemos casos de sucesso em apartamentos com varandas amplas usando tanques menores. O importante é ter acesso à água e energia elétrica."
    },
    {
      question: "Vou ter suporte se tiver dúvidas?",
      answer: "Sim! Você terá acesso ao nosso grupo exclusivo no WhatsApp com mais de 500 criadores experientes. Além disso, fornecemos contatos diretos de fornecedores e veterinários especializados."
    },
    {
      question: "A garantia é real? Como funciona?",
      answer: "A garantia é de 7 dias, incondicional. Se você não ficar satisfeito por qualquer motivo, basta enviar um email solicitando o reembolso. Devolvemos 100% do valor sem perguntas ou burocracia."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Dúvidas <span className="text-blue-700">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-600">
            Respondemos as principais dúvidas sobre o método de criação de tilápias
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ainda tem dúvidas?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Lembre-se: você tem 7 dias de garantia total. Se não ficar satisfeito, 
            devolvemos 100% do seu dinheiro. Não há risco algum!
          </p>
          
          <button
            onClick={() => {
              if (typeof window !== 'undefined' && window.fbq) {
                window.fbq('track', 'AddToCart');
              }
              window.open('https://pay.cakto.com.br/dbgf6ha_533635', '_blank');
            }}
            className="bg-white text-blue-600 px-12 py-4 rounded-xl text-xl font-bold hover:bg-gray-100 transition-colors transform hover:scale-105 shadow-xl"
          >
            Garantir Minha Cópia Agora - R$ 37
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;