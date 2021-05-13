import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../actions';

class RecentPosts extends Component {

    componentDidMount() {
        this.props.fetchRecentPosts() //we got the props from the map state to props down at the bottom and connected it to our actions
    }

    render() {
        return (
            <div className="recent-posts">
                <div className="recent-posts__wrapper"></div>
                <div className="recent-posts__heading">Recent Posts</div>
                <ul className="recent-posts__posts">
                    <li>recent post 0</li>
                    <li>recent post 1</li>
                    <li>recent post 2</li>
                </ul>
            </div>
        )
    }
}

export default connect(null, actions)(RecentPosts); //dispatches actions

//export default SearchBar;