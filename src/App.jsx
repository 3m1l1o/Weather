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
    setValue([ newHandleChange, ...values])
    const data = await getWeatherByCity(newHandleChange)
    setWeatherData(data)
   };  

  return (
    <main className="container">
      <h1>Weather App</h1>
      <hr />
       <Form onNewHandleChange={  handleChange }/>
      <section></section>
      <h3>{ values }</h3> 
      <hr />
      <p>information</p>
      <footer>
        Weather App can show inaccurate information, handle data with caution
      </footer>
    </main>
  );
};
