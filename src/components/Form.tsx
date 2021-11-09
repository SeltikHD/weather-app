import { useState } from "react";

import "../form.css";

export default function Form() {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  return (
    <form className="weather-form">
      <label>
        País:
        <input
          type="text"
          name="country"
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
          }}
          autoFocus
        />
      </label>
      <label>
        Cidade:
        <input
          type="text"
          name="city"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
      </label>
      <input type="submit" value="Ver clima da região" />
    </form>
  );
}
