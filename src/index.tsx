import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import objectFitImages from 'object-fit-images';
import '@/styles/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

objectFitImages(null);

const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
