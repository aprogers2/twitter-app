const tweetsReducerDefaultState = [];

export default (state = tweetsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_TWEET':
            return [
                ...state,
                action.tweet
            ]
        case 'EDIT_TWEET':
            return state.map((tweet) => {
                if (tweet.id === action.id) {
                    return {
                        ...tweet,
                        ...action.updates
                    };
                } else {
                    return tweet;
                }
            });
        case 'REMOVE_TWEET':
            return state.filter(({ id }) => id !== action.id);
        default:
            return state;
    }
};