import { createStore } from 'redux';
import tweetReducer from '../reducers/tweets';

export default () => {
    const store = createStore(
        tweetReducer);

    return store;
};