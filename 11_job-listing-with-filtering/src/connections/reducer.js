export default function reducer(state, action) {
  switch (action.type) {
    case "SET_JOBS_LIST": {
      console.log(action.payload);
      return { ...state, jobsList: action.payload };
    }
    case "FILTER_BY_TAGS": {
      const tagSelected = action.payload;
      console.log(tagSelected);

      let currentFilter = state.filterTags;
      if (currentFilter.includes(action.payload)) return { ...state };

      let jobsFiltered =
        currentFilter.length === 0 ? state.jobsList : state.jobsFilteredList;

      jobsFiltered = jobsFiltered.filter((job) =>
        job.techs.includes(tagSelected)
      );

      currentFilter.push(tagSelected);
      console.log(jobsFiltered);
      return {
        ...state,
        filterTags: currentFilter,
        jobsFilteredList: jobsFiltered,
      };
    }
    case "CLEAR_FILTER": {
      const filterTags = [];
      const jobsFilteredList = [];

      return { ...state, filterTags, jobsFilteredList };
    }
    default:
      return state;
  }
}
