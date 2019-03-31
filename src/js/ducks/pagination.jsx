const initialState = {
  currentPage: 1,
  displayed: 6,
  totalPages: 0,
};
// Actions
const NEXT = 'NEXT_PAGE';
const PREV = 'PREVIOUS_PAGE';
const SELECTED = 'SELECTED_PAGE';
const COUNTED = 'PAGES_COUNTED';

// Reducer
const reduser = (state = initialState, action) => {
  switch (action.type) {
    case NEXT:
      return {
        ...state,
        currentPage: (
          state.currentPage + 1 > state.totalPages
        ) ? state.totalPages : state.currentPage + 1,
      };
    case PREV:
      return {
        ...state,
        currentPage: (state.currentPage - 1 < 1)
          ? 1
          : state.currentPage - 1,
      };
    case SELECTED:
      return { ...state, currentPage: action.page };
    case COUNTED:
      return { ...state, totalPages: action.number };
    default:
      return state;
  }
};

// Action Creators
export function nextPage() {
  return { type: NEXT };
}

export function prevPage() {
  return { type: PREV };
}

export function getPage(page) {
  return { type: SELECTED, page };
}

export function getTotalPages(number) {
  return { type: COUNTED, number };
}

export default reduser;
