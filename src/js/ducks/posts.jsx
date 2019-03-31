const initialState = {
  allPosts: [],
  visiblePost: [],
};

// Actions
const LOADED = 'POSTS_LOADED';
const FILTERED = 'POSTS_FILTERED';

// Reducer
const reduser = (state = initialState, action) => {
  switch (action.type) {
    case LOADED:
      return { ...state, allPosts: [...action.posts] };
    case FILTERED:
      return { ...state, visiblePost: [...action.posts] };
    default:
      return state;
  }
};

// Action Creators
export function postsLoaded(posts) {
  return { type: LOADED, posts };
}

export function postsFiltred(posts) {
  return { type: FILTERED, posts };
}

export default reduser;
