import Content from "./Content";
import Result from "./Result";
const Filter = ({ name, list }) => {
  let filterList = [];

  if (name.length > 0) {
    filterList = list.filter((list) =>
      list.name.common.toLowerCase().includes(name.toLowerCase())
    );
  } else {
    filterList = list;
  }

  if (filterList.length > 10) {
    return "Too many matches, specify another filter";
  } else if (filterList.length === 1) {
    console.log(filterList);
    return filterList.map((country) => (
      <Result key={country.name.common} country={country} />
    ));
  } else {
    console.log(filterList);
    return filterList.map((country) => (
      <Content key={country.name.common} country={country} />
    ));
  }
};

export default Filter;
