import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Tilápia Pro</h3>
            <p className="text-gray-300 leading-relaxed">
              O método mais completo e prático para você começar sua criação de tilápias 
              e ter uma renda extra sustentável trabalhando em casa.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Sobre o Método</h4>
            <ul className="space-y-2 text-gray-300">
              <li>✅ 120 páginas de conteúdo</li>
              <li>✅ Passo a passo ilustrado</li>
              <li>✅ Planilhas incluídas</li>
              <li>✅ Suporte via WhatsApp</li>
              <li>✅ Garantia de 7 dias</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resultados</h4>
            <ul className="space-y-2 text-gray-300">
              <li>📊 +500 alunos satisfeitos</li>
              <li>💰 Método comprovado</li>
              <li>⭐ Avaliação: 4.9/5</li>
              <li>✅ Taxa de sucesso: 87%</li>
              <li>🚀 Potencial lucrativo</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-white transition-colors">Contato</a>
            </div>
            
            <div className="text-sm text-gray-400">
              © 2025 Tilápia Pro. Todos os direitos reservados.
            </div>
          </div>
          
          <div className="mt-6 text-center text-xs text-gray-500">
            <p>
              Este produto é comercializado com base na lei do direito autoral (Lei 9.610/98). 
              Os resultados podem variar de pessoa para pessoa, dependendo do comprometimento e aplicação do método.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;