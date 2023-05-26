import React from 'react';

import './index.css';

import reportWebVitals from './app/reportWebVitals';
import App from './app/App';

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import axios from 'axios';
import { Provider } from 'react-redux';
import Store from './redux/Store';

axios.defaults.baseURL = "https://127.0.0.1:8000/";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={Store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

reportWebVitals();
