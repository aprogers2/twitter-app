import { v4 as uuid } from 'uuid';
import moment from 'moment';

// Add Tweet
export const addTweet = ({ user, content, date }) => ({
    type: 'ADD_TWEET',
    tweet: {
        id: uuid(),
        user,
        content,
        date: moment().format()
    }
});

// Edit Tweet
export const editTweet = ( id, updates ) => ({
    type: 'EDIT_TWEET',
    id,
    updates
})

// Remove Tweet
export const removeTweet = ({ id } = {}) => ({ // TODO: Unsure if I need to provide empty default
    type: 'REMOVE_TWEET',
    id
});

