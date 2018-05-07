import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/indexredux';

import App from './App/App';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />  
        </Provider>
    </BrowserRouter>, 
    document.getElementById("root")
);