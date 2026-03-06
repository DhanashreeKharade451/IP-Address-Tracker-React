import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyMap from './components/Mymap'
import SearchIPAddress from './components/SearchIPAddress'
const apiKey  = import.meta.env.VITE_API_KEY;

function App() {
  const [ipData, setIPData] = useState(null);

  // Fetch user's IP on page load

     useEffect(() =>{
      fetchIP();
     }, []); 

  const fetchIP = async(ip = "") => {
     try{
      const res =await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`);
      const data =await res.json();
      setIPData(data);

     }catch(error){
      console.error(error);
     }

  };

  return (
    <div>
<SearchIPAddress onSearch = {fetchIP}/>
    {ipData && <MyMap ipData ={ipData}/>}

    </div>
   
  )
}

export default App
