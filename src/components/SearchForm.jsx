export default function SearchForm({ query, onQueryChange }) {
  return (
    <form
      className="d-flex mb-2 mb-lg-0 ms-auto"
      role="search"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="search"
        className="form-control me-1"
        placeholder="Search"
        aria-label="Search movies"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
      />
      <button className="btn btn-outline-light" type="submit" aria-label="Search">
        <i className="bi bi-search" aria-hidden="true"></i>
      </button>
    </form>
  );
}
