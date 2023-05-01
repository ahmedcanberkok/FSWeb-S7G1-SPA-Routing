import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';


// Routeların çalışması için <App /> öğesini düzenlemeniz gerekir
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <App/>, 
    document.getElementById('root')
);