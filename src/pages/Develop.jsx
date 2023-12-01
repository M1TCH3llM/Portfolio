import "../styles/Develop.css";
import Img from "../components/DevelopImg";
import React, { useState, useEffect } from "react";

import Loading from "../components/Loading";

function Develop() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    // Use a combination of load event and a backup timeout
    window.addEventListener("load", handleLoad);

    // Set a timeout as a backup in case the load event doesn't fire
    const timeoutId = setTimeout(() => {
      handleLoad();
    }, 1000); // Adjust the timeout duration as needed

    // Cleanup the event listener and timeout on component unmount
    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timeoutId);
    };
  }, []);

  return <div>{loading ? <Loading /> : <Img />}</div>;
}

export default Develop;
