import "../styles/Develop.css";
import Img from "../components/DevelopImg";
import React, { useState, useEffect } from "react";

import Loading from "../components/Loading";

function Develop() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., 2 seconds)
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? <Loading /> : <Img />}
    </div>
  );
}

export default Develop;
