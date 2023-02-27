import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
/*Prime React Import */
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

/*React Toastify CSS import */
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById('root')
);
