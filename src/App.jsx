import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyMap from './components/Mymap'
import searchIPAddress from './components/SearchIPAddress'

const API_KEY = "at_JRU4SsXqx6Kuf3txHZffrDCoIBaDM"

function App() {
  const [ipData, setIPData] = useState(null);

  // Fetch user's IP on page load

     useEffect(() =>{
      fetchIP();
     }, []); 

  const fetchIP = async(ip = "") => {
     

  }

  return (
    <div>
<searchIPAddress onSearch = {fetchIP}/>
    <MyMap/>

    </div>
   
  )
}

export default App
