import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProducts } from './productSlice'

const ProductsList = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchProducts())
  })

  return (
    <div>ProductsList</div>
  )
}

export default ProductsList