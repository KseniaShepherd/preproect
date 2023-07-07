import React, { useEffect } from 'react'
import ProductsContainer from '../../components/ProductContainer'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import{ getProductsByCategory} from '../../store/requests/getProductsByCategory'

export default function ProductsByCategoryPage() {
  const dispatch = useDispatch();
  const{category} = useParams();
  useEffect(()=> dispatch(getProductsByCategory(category),[]))
  const productsState = useSelector(state => state.productsByCategory)

  return (
    <div>
    <ProductsContainer productsState={productsState}/>
    </div>
  )
}
