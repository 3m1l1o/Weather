import PropTypes from 'prop-types';
import { useState } from 'react';

export const Form = ({ onNewHandleChange }) => {  

  const [inputValue, setinputValue] = useState('');
  const onInputChange = (e)=>{
    setinputValue(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
  onNewHandleChange( inputValue.trim() )
    setinputValue('');
  };

  return (
    <form onSubmit={onSubmit}>
    <input
      placeholder="Search City"
      type="text"
      value={inputValue}
      onChange={onInputChange}
    />
    <button type="submit">Search for city</button>
  </form>
 
  );
};
Form.propTypes = {
  onNewHandleChange:PropTypes.func,
};

