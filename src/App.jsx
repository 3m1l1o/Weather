import { useState} from "react";
import { Form } from "./Components/Form";
import { getWeatherByCity } from "./Services/WeatherServices";
import { Values } from "./Utils/Values";
import { Footer } from "./Utils/Footer";
import { ListData } from "./Components/ListData";

export const App = () => {
  const [values, setValue] = useState('');
  const [weatherData, setWeatherData] = useState(null);

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
        <ListData maxTemp={maxTemp} minTemp={minTemp}/>
        </section>
      <Values values={values}/>
      <hr />
      <p>information</p>
      <Footer />
    </main>
  );
};
