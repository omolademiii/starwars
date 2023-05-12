import axios from "axios";
import React, { useEffect, useState } from "react";

const Specie = ({ url }) => {
  const [specie, setSpecie] = useState({});
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setSpecie(res.data))
      .catch((err) => console.log(err));
  }, []);
  return <div>{specie?.name}</div>;
};

export default Specie;
