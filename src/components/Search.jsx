import loupe from "../img/icons/loupe.svg";
const Search = () => {
  return (
    <div className="search">
      <input placeholder="Search..."></input>
      <img src={loupe} />
    </div>
  );
};

export default Search;
