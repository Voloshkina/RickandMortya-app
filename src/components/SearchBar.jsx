import '../assets/scss/style.scss';

export const SearchBar = ({ query, handleChange }) => {
  return (
    <div className='wrapper-input'>
      <input
        className='input-field'
        type='text'
        placeholder='Filter by name...'
        onChange={handleChange}
        value={query}
      />
    </div>
  );
};
