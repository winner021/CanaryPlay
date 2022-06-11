import React from 'react'
import App from "./App"
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import { applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk'
import Store from "./Store"
import {PersistGate} from "redux-persist/integration/react";
import {persistor}  from "./Store"






ReactDOM.render(
   <Provider store={Store}>
   <PersistGate persistor={persistor}>
   <App/>
   </PersistGate>
</Provider>  
       

       

,document.querySelector("#root"))