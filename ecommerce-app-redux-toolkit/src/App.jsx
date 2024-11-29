
import ProductsList from './features/producst/ProductsList'
import AddProducts from './features/producst/AddProducts'
import { useState } from 'react'

function App() {
const [isEdit,setIsEdit]=useState(false)
const [productToEdit, setProductToEdit]=useState({})

const handleProductEdit=(product)=>{
setProductToEdit(product)
setIsEdit(true)
}
  return (
  <div>
    <h2 className='tex4 font-bold text-center'>e-commerce app</h2>
    <AddProducts productToEdit={productToEdit} isEdit={isEdit} />
    <ProductsList onHandleProductEdit={handleProductEdit}/>
  </div>
  )
}

export default App
