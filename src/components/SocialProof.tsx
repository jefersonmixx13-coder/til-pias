import React from 'react';
import { Star, Quote } from 'lucide-react';

const SocialProof = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      age: 42,
      location: "São Paulo, SP",
      photo: "https://ui-avatars.com/api/?name=Maria+Silva&background=3B82F6&color=fff&size=80",
      text: "Em 6 meses já recuperei o investimento e agora tenho uma renda extra de R$ 2.800 mensais. Meu marido ficou impressionado!",
      earning: "Renda extra consistente"
    },
    {
      name: "João Santos",
      age: 48,
      location: "Minas Gerais",
      photo: "https://ui-avatars.com/api/?name=João+Santos&background=059669&color=fff&size=80",
      text: "Estava desempregado aos 48 anos. Hoje sustento minha família só com a criação de tilápias. Método realmente funciona!",
      earning: "Mudou minha vida"
    },
    {
      name: "Ana Costa",
      age: 35,
      location: "Rio de Janeiro, RJ",
      photo: "https://ui-avatars.com/api/?name=Ana+Costa&background=EA580C&color=fff&size=80",
      text: "Comecei com medo de não dar certo. Hoje tenho 3 tanques e uma clientela fiel. Melhor decisão que já tomei!",
      earning: "Negócio próspero"
    },
    {
      name: "Carlos Ferreira",
      age: 52,
      location: "Paraná",
      photo: "https://ui-avatars.com/api/?name=Carlos+Ferreira&background=7C3AED&color=fff&size=80",
      text: "Aposentei mais cedo graças à renda das tilápias. Agora ensino meus netos sobre criação de peixes. Negócio de família!",
      earning: "Aposentadoria tranquila"
    },
    {
      name: "Lucia Oliveira",
      age: 39,
      location: "Bahia",
      photo: "https://ui-avatars.com/api/?name=Lucia+Oliveira&background=DC2626&color=fff&size=80",
      text: "Nunca imaginei que criar peixes fosse tão simples. O método é realmente passo a passo. Qualquer um consegue seguir!",
      earning: "Método funciona"
    },
    {
      name: "Roberto Lima",
      age: 45,
      location: "Ceará",
      photo: "https://ui-avatars.com/api/?name=Roberto+Lima&background=059669&color=fff&size=80",
      text: "Trabalho apenas nos finais de semana com os peixes e já complemento bem minha renda. Sistema muito eficiente!",
      earning: "Renda complementar"
    }
  ];

  const renderStars = () => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
      ))}
    </div>
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Imagem acima do título */}
        <div className="text-center mb-12">
          <img
            src="https://i.imgur.com/v7ERN68.png"
            alt="Resultados comprovados"
            className="mx-auto max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mais de <span className="text-green-600">500 Pessoas</span> Já Mudaram de Vida
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Veja os depoimentos reais de quem seguiu nosso método e hoje tem uma renda extra consistente
          </p>
          
          {/* Slider animado com as duas imagens */}
          <div className="relative w-full max-w-4xl mx-auto mb-8 overflow-hidden rounded-lg shadow-lg">
            <div className="flex animate-[slide_8s_ease-in-out_infinite]">
              <div className="w-full flex-shrink-0">
                <img
                  src="https://i.imgur.com/NUFBMZz.jpeg"
                  alt="Depoimento 1"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="w-full flex-shrink-0">
                <img
                  src="https://i.imgur.com/XLrBgnN.jpeg"
                  alt="Depoimento 2"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">500+</div>
              <div className="text-gray-600">Alunos Satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600">87%</div>
              <div className="text-gray-600">Taxa de Sucesso</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600">Alta</div>
              <div className="text-gray-600">Satisfação</div>
            </div>
          </div>
          
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Quote className="w-8 h-8 text-blue-500 mb-4" />
              
              <div className="mb-4">
                {renderStars()}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}, {testimonial.age} anos</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                  <div className="text-sm font-bold text-green-600">{testimonial.earning}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Você Pode Ser o Próximo Caso de Sucesso!
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Mais de 500 pessoas já transformaram suas vidas com nosso método. 
            Pessoas comuns, como você, que decidiram ter uma renda extra criando tilápias
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white bg-opacity-20 rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-lg">Recomendam para amigos</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">4.9/5</div>
              <div className="text-lg">Avaliação média</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-lg">Garantia de satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;