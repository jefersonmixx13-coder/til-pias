import React from 'react';

const Story = () => {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id="water-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="2" fill="#3B82F6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#water-pattern)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Como Descobri o <span className="text-blue-700">Segredo</span> da Criação de Tilápias
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="mb-8">
            <img
              src="https://i.imgur.com/i3h8dc4.jpeg"
              alt="Tanques de criação de tilápias - exemplo de sucesso"
              className="w-full h-48 sm:h-56 md:h-64 object-contain bg-gray-50 rounded-lg shadow-lg"
            />
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl leading-relaxed mb-6">
              <strong>Há 5 anos atrás, eu estava desempregado</strong> e com contas se acumulando. Minha esposa grávida, 
              as despesas aumentando e eu sem perspectiva de uma renda fixa.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Foi quando um vizinho me mostrou os tanques de tilápia no quintal dele. <strong className="text-blue-700">
              "Isso aqui me ajuda com uma renda extra boa"</strong>, ele disse casualmente. Eu fiquei curioso.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <p className="text-lg font-semibold text-blue-800 mb-4">
                "Pensei que era muito complicado... até ver como funcionava"
              </p>
              <p className="text-gray-700">
                Em alguns meses, ele havia conseguido vender boa quantidade de tilápia para restaurantes da região. 
                Os resultados eram impressionantes!
              </p>
            </div>

            <p className="text-lg leading-relaxed mb-6">
              Decidi tentar. <strong>Gastei R$ 800 para montar meu primeiro tanque</strong> - dinheiro que peguei emprestado. 
              Nos primeiros dois meses, <span className="bg-red-100 px-2 py-1 rounded">perdi quase todos os peixes</span>.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Estava fazendo tudo errado: alimentação inadequada, qualidade da água péssima, densidade populacional incorreta. 
              <strong>Quase desisti.</strong>
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
              <p className="text-lg font-semibold text-green-800 mb-4">
                A mudança aconteceu quando conheci o João...
              </p>
              <p className="text-gray-700">
                João tinha 30 anos de experiência em piscicultura. Ele me ensinou os <strong>3 pilares fundamentais</strong> 
                que transformaram meu fracasso em sucesso: controle da água, alimentação estratégica e manejo correto.
              </p>
            </div>

            <p className="text-lg leading-relaxed mb-6">
              <strong className="text-green-600">Em alguns meses seguindo o método dele, consegui minha primeira venda bem-sucedida</strong>. 
              Foi o resultado do meu primeiro lote de tilápias seguindo as técnicas corretas.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Hoje, 5 anos depois, <strong className="text-blue-700">tenho uma boa renda extra</strong> 
              com criação de tilápias. E o melhor: <strong>é uma atividade que não toma muito tempo do dia</strong>.
            </p>

            <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-8 text-center">
              <p className="text-xl font-bold text-gray-900 mb-4">
                Por isso criei este método completo
              </p>
              <p className="text-lg text-gray-700">
                Para que você não passe pelas mesmas dificuldades que eu passei. 
                <strong className="text-blue-700">Tudo o que aprendi em 5 anos está neste ebook</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;