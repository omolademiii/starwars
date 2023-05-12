import axios from "axios";
import React, { useEffect, useState } from "react";

const Starship = ({ url }) => {
  const [starship, setShip] = useState({});
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setShip(res.data))
      .catch((err) => console.log(err));
  }, []);
  return <div>{starship?.name}</div>;
};

export default Starship;
