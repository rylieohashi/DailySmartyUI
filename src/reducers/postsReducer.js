import {
    SET_RECENT_POSTS
} from '../actions/types';

const INIT_STATE = {
    posts: [],
    recentPosts: []
}

export default function(state = INIT_STATE, action) {
    switch (action, type )//switch statement. can hit down arrow key when typing and then enter for skeleton
        
    {
        case SET_RECENT_POSTS:
            
            return [...state, recentPosts: action.payload];
    
        default:
            return state;
    }
}