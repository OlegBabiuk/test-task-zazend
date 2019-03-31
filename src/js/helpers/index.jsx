// Selectors
export function postsSlice(state) {
  const { posts, pagination } = state;
  const finishPosition = pagination.currentPage * pagination.displayed;
  const startPosition = finishPosition - pagination.displayed;
  return posts.allPosts.slice(startPosition, finishPosition);
}

export function getPagesCount(state) {
  const { posts, pagination } = state;
  const numberOfPosts = posts.allPosts.length;
  return Math.ceil(numberOfPosts / pagination.displayed);
}
