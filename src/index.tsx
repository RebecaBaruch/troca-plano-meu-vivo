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
import OfferDetails from './components/offer-details';
import MoreDigitalServices from './components/offer-details/more-digital-services';
import MoreOffers from './components/more-offers';
import NewPlan from './components/new-plan';

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
          <Route path='/mais-servicos-digitais' element={<MoreDigitalServices/>} />
          <Route path='/detalhes-ofertas' element={<OfferDetails />} />
          <Route path='/mais-ofertas' element={<MoreOffers/>} />
          <Route path='/checkout' element={<NewPlan/>} />
      </Routes>
    </Router>
  </ThemeContextProvider>
);

reportWebVitals();