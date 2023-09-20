import React, { ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeContextProvider, getVivoSkin } from '@telefonica/mistica';

interface AllTheProvidersProps {
  children: ReactNode;
}

const AllTheProviders = ({ children }: AllTheProvidersProps) => {
  return (
    <ThemeContextProvider 
      theme={{
        skin: getVivoSkin(),
        i18n: {
          locale: 'es-ES',
          phoneNumberFormattingRegionCode: 'ES',
        },
      }}>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeContextProvider>
  );
};

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
