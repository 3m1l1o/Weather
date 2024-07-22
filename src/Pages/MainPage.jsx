import React from 'react'

export const MainPage = () => {
  return (
    <div>
              <h1>Weather App</h1>
      <hr />
      <Form onNewHandleChange={handleChange} />
      <section className="conteiner-temp">
        <ListData maxTemp={maxTemp} minTemp={minTemp} />
      </section>
      <Values values={values} />
      <hr />
      <p>information</p>
      <Footer />
    </div>
  )
}
