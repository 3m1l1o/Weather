import { useState, useEffect } from "react";
import { Form } from "./Components/Form";
import { getWeatherByCity } from "./Services/WeatherServices";

export const App = () => {
  const [values, setValue] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    
  }, [weatherData]);

   const handleChange = async ( newHandleChange ) => {
    if( newHandleChange  <= 1) return;
    console.log( newHandleChange )
    setValue([ newHandleChange ])
    const data = await getWeatherByCity(newHandleChange)
    setWeatherData(data)
    console.log(data)
   };  
   const minTemp = weatherData?.main?.temp_min;
   const maxTemp = weatherData?.main?.temp_max;
  return (
    <main className="container">
      <h1>Weather App</h1>
      <hr />
       <Form onNewHandleChange={  handleChange }/>
      <section className="conteiner-temp">
        <h3>Temperatura Mínima: {minTemp} °C</h3>
        <h3>Temperatura Máxima: {maxTemp} °C</h3>
        </section>
      <h3>{ values }</h3> 
      <hr />
      <p>information</p>
      <footer>
        Weather App can show inaccurate information, handle data with caution
      </footer>
    </main>
  );
};
