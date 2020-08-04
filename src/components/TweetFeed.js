import React from 'react';
import { connect } from 'react-redux';
import Tweet from './Tweet';
import tweets from '../reducers/tweets';

const TweetFeed = (props) => (
    <div>
        <h1>Tweets</h1>
        {[...props.tweets].reverse().map((tweet) => {
            return <Tweet key={tweet.id} {...tweet}/>
        })}
    </div>
);

const mapStateToProps = (state) => {
    return {
        tweets: state
    };
};

export default connect(mapStateToProps)(TweetFeed);