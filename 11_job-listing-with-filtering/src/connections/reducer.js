export default function reducer(state, action) {
  switch (action.type) {
    case "SET_JOBS_LIST": {
      console.log(action.payload);
      return { ...state, jobsList: action.payload };
    }

    case "FILTER_BY_TAGS": {
      const tagSelected = action.payload;
      let currentFilter = state.filterTags;
      if (currentFilter.includes(action.payload)) return { ...state };

      let jobsFilteredList =
        currentFilter.length === 0 ? state.jobsList : state.jobsFilteredList;

      jobsFilteredList = jobsFilteredList.filter((job) =>
        job.techs.includes(tagSelected)
      );

      currentFilter.push(tagSelected);
      // console.log(jobsFiltered);
      return {
        ...state,
        jobsFilteredList,
        filterTags: currentFilter,
      };
    }

    case "REMOVE_FILTER_TAG": {
      if (state.filterTags.length === 0) return { ...state };

      const filterTags = state.filterTags.filter(
        (tag) => tag !== action.payload
      );

      return { ...state, filterTags };
    }

    case "CLEAR_FILTER": {
      const filterTags = [];
      const jobsFilteredList = [];

      return { ...state, filterTags, jobsFilteredList };
    }
    default:
      return { ...state };
  }
}
