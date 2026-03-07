import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyMap from "./components/Mymap";
import SearchIPAddress from "./components/SearchIPAddress";
import InfoCard from "./components/InfoCard";
import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

function App() {
  const [data, setData] = useState(null);
  

  const fetchIP = async (ipAddress= "") => {
    try {
      const res = await axios.get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`,
      );
      //const data =await res.json();
      
      setData(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch user's IP on page load

  useEffect(() => {
    fetchIP();
  }, []);

  return (
    <main>
      <section>
      <SearchIPAddress fetchIp={fetchIP} />
      {data && <InfoCard data={data} />}
      {data && <MyMap 
      lat={data.location.lat} 
      lng={data.location.lng} />}
    
    </section>
    </main>
  );
}

export default App;
