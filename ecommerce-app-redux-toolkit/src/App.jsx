import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductsList from './features/producst/ProductsList'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <h2 className='tex4 font-bold text-center'>e-commerce app</h2>
    <ProductsList />
  </div>
  )
}

export default App
