import { useState } from "react";
import { Form } from "./Components/Form";

export const App = () => {
  const [values, setValue] = useState('');

   const handleChange = ( newHandleChange ) => {
    if( newHandleChange  <= 1) return;
    console.log( newHandleChange )
    setValue([ newHandleChange, ...values])
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
