const currentPost = (state = {}, action) => {
  if (action.type === 'POST_LOADED') {
    return { ...action.post };
  }
  return state;
};

export default currentPost;
