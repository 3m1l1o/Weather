import { useState } from "react";
import { Form } from "./Components/Form";

export const App = () => {
  const [values, setValue] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue({
      ...values,
      [name]: value,
    });
  };
 
  
  return (
    <main className="container">
      <h1>Weather App</h1>
      <hr />
       <Form handleChange={ handleChange }/>
      <section></section>
      <h3>{values.name}</h3> 
      <hr />
      <p>information</p>
      <footer>
        Weather App can show inaccurate information, handle data with caution
      </footer>
    </main>
  );
};
