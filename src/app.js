import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import { addTweet, editTweet, removeTweet } from './actions/tweets';


const store = configureStore();

store.dispatch(addTweet({ user: 'alecrogers', content: 'First tweet ever!'}));

console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));