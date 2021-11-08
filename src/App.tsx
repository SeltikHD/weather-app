function App() {
  return (
    <div className="app">
      <form className="weather-form">
        <h1>Weather App</h1>

        <label htmlFor="country">País: <input type="text" id="country" name="country"></input></label>
        <label htmlFor="city">Cidade: <input type="text" id="city" name="city"></input></label>
        <input type="submit" value="Ver clima da região"></input>
      </form>
    </div>
  );
}

export default App;
