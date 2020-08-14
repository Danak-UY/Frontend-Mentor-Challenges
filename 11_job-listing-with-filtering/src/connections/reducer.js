export default function reducer(state, action) {
  switch (action.type) {
    case "SET_JOBS_LIST": {
      return { ...state, jobsList: action.payload };
    }
    case "FILTER_BY_TAGS": {
      return { ...state };
    }
    default:
      return state;
  }
}
