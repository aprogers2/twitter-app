import React from 'react';
import { connect } from 'react-redux';
import TweetFeed from './TweetFeed';
import TweetForm from './TweetForm';
import { addTweet } from '../actions/tweets';

const HomePage = (props) => (
    <div>
        <h1>
            Twitter App
        </h1>
        <TweetForm
            onSubmit={(tweet) => {
                props.dispatch(addTweet(tweet));
            }}
        />
        <TweetFeed />
    </div>
);

export default connect()(HomePage);