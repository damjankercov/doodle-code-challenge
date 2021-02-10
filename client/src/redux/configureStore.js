import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const persistConfig = {
    key: 'root',
    storage,
}

const configureStore = () => {
    const middleware = [thunk];
    const persistedReducer = persistReducer(persistConfig, rootReducer)

    let store = createStore(
        persistedReducer,
        applyMiddleware(...middleware)
    );

    let persistor = persistStore(store)

    return { store, persistor }
}

export default configureStore;