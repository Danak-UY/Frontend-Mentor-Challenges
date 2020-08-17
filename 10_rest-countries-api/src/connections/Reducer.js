function filterByRegion(list, region) {
  return list.filter((country) => country.region === region || region === "");
}
function filterByName(list, name) {
  return list.filter((country) =>
    country.name.toLowerCase().includes(name.toLowerCase())
  );
}

export default function reducer(state, action) {
  switch (action.type) {
    case "SET_COUNTRY_LIST": {
      let filterByRegion = "";
      let filterByName = "";
      return {
        ...state,
        countryList: action.payload,
        filterByRegion,
        filterByName,
      };
    }

    case "SET_COUNTRY_BY_NAME": {
      let list = state.countryList;
      const filterText = action.payload.toLowerCase();

      if (filterText === "" && state.filterByRegion === "") {
        return { ...state, countryFilteredList: [], filterByName: "" };
      }
      if (state.filterByRegion !== "") {
        list = filterByRegion(list, state.filterByRegion);
      }
      const coutryFilteredList = filterByName(list, filterText);

      return {
        ...state,
        coutryFilteredList,
        filterByName: filterText,
      };
    }

    case "FILTER_BY_REGION": {
      const regionSelected = action.payload;

      if (regionSelected === "") {
        return { ...state, coutryFilteredList: [], filterByRegion: "" };
      }
      let coutryFilteredList = filterByRegion(
        state.countryList,
        regionSelected
      );
      if (state.filterByName !== "") {
        coutryFilteredList = filterByName(
          coutryFilteredList,
          state.filterByName
        );
      }

      return {
        ...state,
        coutryFilteredList,
        filterByRegion: regionSelected,
      };
    }

    default: {
      return state;
    }
  }
}
