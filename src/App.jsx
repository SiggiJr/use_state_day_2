import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Input from './assets/components/Level_1_6/Input'
import MovieDataBase from './assets/components/Level_3_1/MovieDataBase/MovieDataBase'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Input/>
      <MovieDataBase/>
    </>
  )
}

export default App
