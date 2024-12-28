import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StartGame from './Components/StartGame'
import Navbar from './Components/Navbar'
import GamePlay from './Components/GamePlay'




function App() {
  const [isGameStarted, setisGameStarted] = useState(true);
 
const toggleGamePlay=()=>{
  setisGameStarted((prev)=>!prev)
}
  return (
<>
<Navbar/>
{
  isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />
}
</>
  )
}

export default App

