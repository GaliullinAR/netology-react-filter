import { useState } from "react";
import FilterButtons from "./FilterButtons";
import FilterContentItems from "./FilterContenItems";

const FilterContent = (props) => {
  const { filters, selected } = props;
  const [select, setSelect] = useState(selected)
  const onSelectFilter = (e) => {
    setSelect(e.target.textContent);
  }

  return (
    <div className="filter__content">
      <FilterButtons filters={filters} selected={select} onSelectFilter={onSelectFilter} />
      <FilterContentItems selected={ select } />
    </div>
  );
  
}

export default FilterContent;