import PropTypes from 'prop-types';

export const ListData = ({ minTemp, maxTemp }) => {
  return (
    <>
      <h3>Temperatura Mínima: {minTemp} °C</h3>
      <h3>Temperatura Máxima: {maxTemp} °C</h3>
    </>
  )
}
ListData.propTypes = {
      minTemp:PropTypes.number,
      maxTemp:PropTypes.number,
    };
    