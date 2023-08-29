import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@telefonica/mistica/css/reset.css';
import '@telefonica/mistica/css/roboto.css';
import '@telefonica/mistica/css/mistica.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ThemeContextProvider, getVivoSkin } from '@telefonica/mistica';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ThemeContextProvider 
    theme={{
      skin: getVivoSkin(),
      i18n: {
        locale: 'es-ES',
        phoneNumberFormattingRegionCode: 'ES',
      },
  }}>
    <Router>
      <Routes>
          <Route path='/' element={<App />} />
      </Routes>
    </Router>
  </ThemeContextProvider>
);

reportWebVitals();