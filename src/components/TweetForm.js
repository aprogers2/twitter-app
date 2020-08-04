import React from 'react';

export default class TweetForm extends React.Component {
    state = {
        user: '',
        content: '',
        error: ''
    }
    onUserChange = (e) => {
        const user = e.target.value;
        this.setState(() => ({ user }));
    }
    onContentChange = (e) => {
        const content = e.target.value;
        this.setState(() => ({ content }));
    }
    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.user || !this.state.content) {
            this.setState(() => ({ error: 'Enter user and message'}));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                user: this.state.user,
                content: this.state.content
            });
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="User"
                        autoFocus
                        value={this.state.user}
                        onChange={this.onUserChange}
                    />
                    <input
                        type="text"
                        placeholder="Message"
                        value={this.state.content}
                        onChange={this.onContentChange}
                    />
                    <button>Post Tweet</button>
                </form>
            </div>
        )
    }
}