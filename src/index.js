import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ModelProvider } from './context/ModelContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ModelProvider><App /></ModelProvider>
);

reportWebVitals();
