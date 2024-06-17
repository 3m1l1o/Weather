import { useState } from "react";

export const App = () => {
  const [values, setValue] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue({
      ...values,
      [name]: value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(values)
    e.target.reset('')

  };
  
  return (
    <main className="container">
      <h1>Weather App</h1>
      <hr />
      <form onSubmit={onSubmit}>
        <input
          placeholder="Search City"
          type="text"
          name="name"
          onChange={handleChange}
        />
        <button type="submit">Search for city</button>
      </form> 
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
