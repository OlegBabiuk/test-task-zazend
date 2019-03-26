const posts = (state = [], action) => {
  if (action.type === 'POSTS_LOADED') {
    return [...action.posts];
  }
  return state;
};

export default posts;
