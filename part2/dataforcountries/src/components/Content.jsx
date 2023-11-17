import { useState } from "react";
import Result from "./Result";

const Content = ({ country }) => {
  const [showResult, setShowResult] = useState(false);

  const onClick = () => {
    setShowResult(!showResult);
  };

  return (
    <div>
      {country.name.common} <button onClick={onClick}>show</button>
      {showResult && <Result country={country} />}
    </div>
  );
};

export default Content;
