import React from 'react';
import { screen, render } from '../test-utils/custom-render';
import OfferRecommended from '../components/offer-recommended';

test('Renderiza os detalhes da oferta corretamente', async () => {
  render(<OfferRecommended />);
  
  // Espera que o texto esteja presente no documento
  expect(await screen.findByText('Vivo Fibra 300 Mega')).toBeInTheDocument();
  expect(await screen.findByText('Tenha ainda mais velocidade por até R$59,69 a mais por mês')).toBeInTheDocument();
  
  // Encontra todos os elementos de texto na página
  const textElements = screen.getAllByText((content, element) => {
    const parent = element?.parentElement;
    const parentText = parent && parent.textContent;
    const formattedPrice = 'R$ 119,99';

    return content === formattedPrice || parentText === formattedPrice;
  });

  // Espera que pelo menos um dos elementos tenha o texto desejado
  expect(textElements.length).toBeGreaterThan(0);
});
