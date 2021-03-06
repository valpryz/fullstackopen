const Filter = ({ searchText, handleSearch }) => {
  return (
    <label>
      filter shown with
      <input value={searchText} onChange={handleSearch} />
    </label>
  );
};

export default Filter;
