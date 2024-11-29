import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from './productSlice'

const ProductsList = () => {
const {products, isLoading, error}=useSelector((state)=>state.productsR)
console.log(products)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchProducts())
  },[dispatch])

  return (
    <div>ProductsList</div>
  )
}

export default ProductsList