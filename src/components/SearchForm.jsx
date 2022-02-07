import { useState } from "react";

const SearchForm = (props) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSearch(name, type);
    console.log(name, type);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="name of pokemon"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        type="text"
        placeholder="type of pokemon"
        onChange={(e) => setType(e.target.value)}
        value={name}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SearchForm;
