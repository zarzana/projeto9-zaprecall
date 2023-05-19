import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './componenets/App.jsx';
import { GlobalStyle, ResetStyle } from './theme/globalStyles.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)
