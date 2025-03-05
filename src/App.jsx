import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(true)
  useEffect(()=>{
    document.body.style.backgroundColor=count?"white":"black"
  },[count])

  return (
    <div >
      <button onClick={()=>setCount(!count)} >Colour Switcher</button>
    </div>
  )
}

export default App
