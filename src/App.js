import FilterContent from "./components/FilterContent";
import filters from "./filters";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <FilterContent filters={filters} selected="Websites" />
      </div>
    </div>
  );
}

export default App;
