function SearchMovieElem({ search, setSearch , placeholder }) {
  return (
    <input
      type="text"
      value={search}
      onChange={(event) => setSearch(event.target.value)}
      placeholder={placeholder}
      className="w-3/5 max-sm:w-10/12 lg:w-1/3 p-2 outline-none rounded-lg border-[2px] border-violet-500 max-xs:text-sm"
    />
  );
}

export default SearchMovieElem;
