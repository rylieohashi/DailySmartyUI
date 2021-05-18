import { SET_RECENT_POSTS } from './types';

import axios from 'axios';;

export function fetchRecentPosts() {
    return function(dispatch) {
        //perform our request in here
       axios.get('https://api.dailysmarty.com/posts')
        .then(response => { //next create an action that can be dispatched to the reducer to get data in
            console.log(response.data.posts);
            dispatch({
                type: SET_RECENT_POSTS,
                payload: response.data.posts //then we set up postsReducer.js
            })
        })
    }
}