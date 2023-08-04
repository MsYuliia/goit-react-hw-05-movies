import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-toastify';
import { SearchMoviesForm } from './SearchMovies.styled';
import { PropTypes } from 'prop-types';

export const SearchMovies = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleValueChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (value.trim() === '') {
      toast.error('Please, enter a valid value');
      return;
    }
    onSubmit(value);
    setValue('');
  };

  return (
    <SearchMoviesForm onSubmit={handleSubmit}>
      <input
        className="input"
        value={value}
        onChange={handleValueChange}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
      />

      <button type="submit" className="button">
        <BsSearch size={18} />
      </button>
    </SearchMoviesForm>
  );
};

SearchMovies.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
