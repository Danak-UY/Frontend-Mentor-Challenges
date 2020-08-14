import React from "react";

import Wrapper from "./Wrapper";
import TagFilter from "./TagFilter";

const FilterBar = () => {
  function clearFilter() {}
  return (
    <Wrapper>
      <section className="bg-white py-6 px-8 rounded-lg shadow-lg flex items-center justify-between -mt-24">
        <div className="flex flex-wrap">
          <TagFilter text="Frontend" />
          <TagFilter text="HTML" />
          <TagFilter text="CSS" />
        </div>
        <button
          className="text-cyan-darkGraysh hover:text-primary bg-transparent border-none font-bold leading-none"
          onClick={clearFilter}
        >
          Clear
        </button>
      </section>
    </Wrapper>
  );
};

export default FilterBar;
