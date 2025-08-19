import React from 'react';
import { Home, DollarSign, Clock, TrendingUp, Shield, Users, Zap, CheckCircle } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Home,
      title: "Produção em Pouco Espaço",
      description: "Comece com apenas 15m² no seu quintal. Não precisa de propriedade rural ou grandes investimentos.",
      color: "bg-blue-500"
    },
    {
      icon: DollarSign,
      title: "Baixo Custo de Manutenção",
      description: "Gasto médio de R$ 300/mês para manter os tanques. Potencial de lucro interessante em cada ciclo.",
      color: "bg-green-500"
    },
    {
      icon: Clock,
      title: "Retorno Rápido",
      description: "Primeira venda em 90-120 dias. Ciclos contínuos garantem renda mensal constante.",
      color: "bg-orange-500"
    },
    {
      icon: TrendingUp,
      title: "Mercado em Crescimento",
      description: "Tilápia é o peixe mais consumido no Brasil. Demanda sempre crescente em restaurantes e mercados.",
      color: "bg-purple-500"
    },
    {
      icon: Shield,
      title: "Método Validado",
      description: "Sistema testado por mais de 500 pessoas. Taxa de sucesso de 87% seguindo o passo a passo.",
      color: "bg-red-500"
    },
    {
      icon: Users,
      title: "Para Toda Família",
      description: "Atividade que pode envolver toda a família. Ensine seus filhos sobre empreendedorismo sustentável.",
      color: "bg-indigo-500"
    },
    {
      icon: Zap,
      title: "Automatização Simples",
      description: "Sistemas de alimentação e oxigenação automáticos. Reduza o trabalho manual ao mínimo.",
      color: "bg-yellow-500"
    },
    {
      icon: CheckCircle,
      title: "Suporte Completo",
      description: "Grupo exclusivo no WhatsApp, planilhas prontas e acesso a fornecedores confiáveis.",
      color: "bg-teal-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Por Que <span className="text-blue-700">Milhares de Pessoas</span> Estão Escolhendo a Tilápia?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra as vantagens que fazem da criação de tilápias o negócio mais lucrativo e seguro 
            para quem quer renda extra trabalhando em casa
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`${benefit.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Imagine ter uma renda extra consistente...
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Trabalhando poucas horas por dia, no conforto da sua casa, 
            com um negócio sustentável e que não depende de patrão
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-lg">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-6 h-6" />
              <span>Sem precisar sair de casa</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-6 h-6" />
              <span>Sem depender de chefe</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-6 h-6" />
              <span>Renda passiva real</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;