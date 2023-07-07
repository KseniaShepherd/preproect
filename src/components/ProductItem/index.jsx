import React from 'react'
import s from './index.module.css'

export default function ProductsItem({image, price, title}) {
  return (
    <div className={s.productsItem}>
        <img src={image} alt={title}/>
        <p>{price}</p>,
        <p>{title}</p> </div>
  )
}
