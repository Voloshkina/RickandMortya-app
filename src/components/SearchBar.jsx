import '../assets/scss/style.scss';

export const SearchBar = () => {
  return (
    <div className='wrapper-input'>
      <input
        className='input-field'
        type='text'
        placeholder='Filter by name...'
      />
    </div>
  );
};
