import { createStore } from 'redux'
import reducers from "./reducers"
import thunk from 'redux-thunk'
import { applyMiddleware} from 'redux'
import {persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig={
   key:'root',
   storage, 
}

const persistedReducer=persistReducer(persistConfig,reducers) 


const Store = createStore(persistedReducer,applyMiddleware(thunk));

export const persistor=persistStore(Store)

export default Store;