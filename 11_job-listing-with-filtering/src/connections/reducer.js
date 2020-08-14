function filterJobsByTags(list, tags) {
  tags.forEach((tag) => {
    list = list.filter((job) => {
      let techs = [
        job.role,
        job.level,
        ...(job.languages || []),
        ...(job.tools || []),
      ];

      return techs.includes(tag);
    });
  });

  return list;
}

export default function reducer(state, action) {
  switch (action.type) {
    case "SET_JOBS_LIST": {
      console.log(action.payload);
      return { ...state, jobsList: action.payload };
    }

    case "FILTER_BY_TAGS": {
      const tagSelected = action.payload;
      let filterTags = state.filterTags;
      if (filterTags.includes(tagSelected)) return { ...state };

      filterTags.push(tagSelected);
      let jobsFilteredList = filterJobsByTags(state.jobsList, filterTags);

      return {
        ...state,
        filterTags,
        jobsFilteredList,
      };
    }

    case "REMOVE_FILTER_TAG": {
      if (state.filterTags.length === 0) return { ...state };

      const filterTags = state.filterTags.filter(
        (tag) => tag !== action.payload
      );
      let jobsFilteredList = filterJobsByTags(state.jobsList, filterTags);

      return {
        ...state,
        filterTags,
        jobsFilteredList,
      };
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
