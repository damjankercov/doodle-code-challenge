import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './redux/configureStore';
import AppRoutes from './routes';

const store = configureStore();

ReactDOM.render(
        <React.StrictMode>
                <Provider store={store.store}>
                        <PersistGate loading={null} persistor={store.persistor}>
                                <AppRoutes />
                        </PersistGate>
                </Provider>
        </React.StrictMode>,
        document.getElementById('root')
);
