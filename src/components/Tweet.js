import React from 'react';
import { connect } from 'react-redux';

const Tweet = ({ dispatch, id, user, content, date }) => (
    <div>
        <h5>----------------------------------------------</h5>
        <h4>@{user}:</h4>
        <p>{content}</p>
        <h6>{date}</h6>
    </div>
);

export default connect()(Tweet);