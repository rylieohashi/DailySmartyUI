import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../actions';

class RecentPosts extends Component {

    componentDidMount() {
        this.props.fetchRecentPosts() //we got the props from the map state to props down at the bottom and connected it to our actions
    }

    renderPosts = function() {
        const posts = this.props.recentPosts.map((post, index) => {
            if(index < 3) {
                return (
                
                    <li key={index}>
                        {post.title}
                    </li>
                )
                    
            }
            
        })
        return posts
    }

    render() {
        return (
            <div className="recent-posts">
                <div className="recent-posts__wrapper"></div>
                <div className="recent-posts__heading">Recent Posts</div>
                <ul className="recent-posts__posts">
                    {this.renderPosts()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        recentPosts: state.posts.recentPosts
    }
}

export default connect(mapStateToProps, actions)(RecentPosts); //dispatches actions

//export default SearchBar;