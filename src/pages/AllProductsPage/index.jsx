import React, { useEffect } from 'react'
import ProductsContainer from '../../components/ProductContainer'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../store/requests/getAllProducts';

export default function AllProductsPage() {
    const dispatch = useDispatch();
   
    useEffect(()=> dispatch(getAllProducts),[])
    const productsState = useSelector(state => state.allProducts)
  
    return (
      <div>
      <ProductsContainer productsState={productsState}/>
      </div>
    )
}

