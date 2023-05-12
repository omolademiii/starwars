import axios from "axios";
import React, { useEffect, useState } from "react";

const Character = ({ url }) => {
  const [character, setCharacter] = useState({});
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setCharacter(res.data))
      .catch((err) => console.log(err));
  }, []);
  return <li>{character?.name}</li>;
};

export default Character;
