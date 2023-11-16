const SearchFilter = ({ text, filterName, handleChange }) => {
  return (
    <div>
      {text} <input value={filterName} onChange={handleChange} />
    </div>
  );
};

export default SearchFilter;
