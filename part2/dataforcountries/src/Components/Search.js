export const SearchForm = ({ setSearch }) => {
  const onChange = (event) => {
    event.persist();
    let keyword = event.target.value;
    setSearch(keyword);
  };

  return (
    <form noValidate>
      <label>find countries</label>
      <input type="text" name="countries" onChange={onChange} />
    </form>
  );
};
