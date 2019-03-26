const isCurrentPostLoaded = (state = false, action) => {
  if (action.type === 'SHOW_CURRENT_POST') {
    return action.show;
  }
  return state;
};

export default isCurrentPostLoaded;
