export const Filter = (props) => {
  const search = props.search; // pass props from base component
  const setSearch = props.setSearch; // pass props from base component

  const onChange = (event) => {
    event.persist();
    let keyword = event.target.value;
    setSearch(keyword);
  };

  return (
    <form noValidate>
      <div>
        filter shown with:
        <input type="text" name="filter" value={search} onChange={onChange} />
      </div>
    </form>
  );
};
