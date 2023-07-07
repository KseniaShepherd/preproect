import React from 'react'
import ProductsItem from '../ProductItem'
import s from './index.module.css'

export default function ProductsContainer({productsState}) {
  return (
    <div className={s.productsContainer}>
        {productsState.map(el => <ProductsItem key={el.id} {...el}/>)}
    </div>
  )
}
