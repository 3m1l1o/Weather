import PropTypes from 'prop-types';

export const Values = ({ values }) => {
  return (
    <>
      <h3>{values}</h3>
    </>
  );
};
Values.propTypes = {
      values:PropTypes.any,
    };