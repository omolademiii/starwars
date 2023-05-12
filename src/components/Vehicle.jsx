import axios from "axios";
import React, { useEffect, useState } from "react";

const Vehicle = ({ url }) => {
  const [vehicle, setVehicle] = useState({});
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setVehicle(res.data))
      .catch((err) => console.log(err));
  }, []);
  return <div>{vehicle?.name}</div>;
};

export default Vehicle;
