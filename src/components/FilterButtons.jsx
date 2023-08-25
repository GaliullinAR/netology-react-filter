import '../styles/FilterButtons.css';

const FilterButtons = (props) => {
  return (
    <div className="filter__buttons">
      {props.filters.map(button => (
        <button
          className={`filter__button ${props.selected === button ? 'selected' : ''}`}
          onClick={props.onSelectFilter
          }>{button}</button>
      ))}
    </div>
  )
}

export default FilterButtons;