import PropTypes from 'prop-types';

export const Form = ({ handleChange }) => {  

  const onSubmit = (e) => {
    e.preventDefault();
    handleChange([e.target.values])
    e.target.reset('')

  };

  return (
    <form onSubmit={onSubmit}>
    <input
      placeholder="Search City"
      type="text"
      onChange={handleChange}
    />
    <button type="submit">Search for city</button>
  </form>
 
  );
};
Form.propTypes = {
  handleChange:PropTypes.func,
};

