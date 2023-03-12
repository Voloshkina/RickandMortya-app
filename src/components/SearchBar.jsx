import '../assets/scss/style.scss';

function SearchBar() {
  return (
    <div className='wrapper-input'>
      <input
        className='input-field'
        type='text'
        placeholder='Filter by name...'
      />
    </div>
  );
}

export default SearchBar;
