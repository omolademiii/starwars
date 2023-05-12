import axios from "axios";
import React, { useEffect, useState } from "react";

const Planet = ({ url }) => {
  const [planet, setPlanet] = useState({});
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setPlanet(res.data))
      .catch((err) => console.log(err));
  }, []);

  return <div>{planet?.name}</div>;
};

export default Planet;
