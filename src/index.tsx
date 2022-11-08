import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux";
import App from 'App';
import { store, persistor } from 'store';
import { PersistGate } from 'redux-persist/integration/react';
import 'index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <PersistGate loading={null} persistor={persistor}>
                    <App />
                </PersistGate>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);