import { useState, useEffect } from "react";
import axios from "axios";

import Filter from "./components/Filter";

function App() {
  const [result, setResult] = useState([]);
  const [countryName, setCountryName] = useState("");

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        setResult(response.data);
      });
  }, []);

  const handleSearchChange = (event) => {
    setCountryName(event.target.value);
  };

  return (
    <div>
      <form>
        Find country:{" "}
        <input value={countryName} onChange={handleSearchChange} />
      </form>
      <div>
        <Filter key={result.id} name={countryName} list={result} />
      </div>
    </div>
  );
}

export default App;
