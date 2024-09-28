import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routing';
import { IntlProvider } from 'react-intl';

// Supongamos que tienes un archivo con traducciones
import messages_es from './es.json';
import messages_en from './en.json';

// Definir el idioma predeterminado
const messages = {
  'es': messages_es,
  'en': messages_en
};
const language = navigator.language.split(/[-_]/)[0];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <IntlProvider locale={language} messages={messages[language]}>
    <BrowserRouter>
      <Routing></Routing>
    </BrowserRouter>
  </IntlProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
