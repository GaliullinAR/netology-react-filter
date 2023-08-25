import filterContentItems from '../filterContentItems';
import Masonry from 'react-masonry-css';
import '../styles/FilterContentItems.css';
const FilterContentItems = (props) => {

  const filterCallback = (item) => item.category === props.selected;
  const filter = props.selected === 'All' ? filterContentItems : filterContentItems.filter(filterCallback);
  
  return (
    <Masonry className="my-masonry-grid" columnClassName="my-masonry-grid_column" breakpointCols={3}>
      {filter.map(filterItem => (
        <div className="filter__content-item">
          <img src={filterItem.img} className="filter__content-img" />
        </div>
      ))}
    </Masonry>
  );
}

export default FilterContentItems;