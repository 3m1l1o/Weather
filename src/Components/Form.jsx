import PropTypes from 'prop-types';
import { useState } from 'react';

export const Form = ({ handleChange }) => {  

  const [inputValue, setinputValue] = useState('');
  const onInputChange = (e)=>{
    setinputValue(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    handleChange( inputValue )
    e.target.reset('');
  };

  return (
    <form onSubmit={onSubmit}>
    <input
      placeholder="Search City"
      type="text"
      onChange={onInputChange}
    />
    <button type="submit">Search for city</button>
  </form>
 
  );
};
Form.propTypes = {
  handleChange:PropTypes.func,
};

