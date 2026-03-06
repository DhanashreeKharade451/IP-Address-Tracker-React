import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyMap from './components/Mymap'
import searchIPAddress from './components/SearchIPAddress'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
<searchIPAddress/>
    <MyMap/>

    </div>
   
  )
}

export default App
