import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom';


export default function CategoryItem({ category }) {
    const categoryUp = category[0].toUpperCase() + category.slice(1);
    const categoryUrl = `/categories/${category}`
    return (
        <Link to={categoryUrl}>  <div className={s.categoryItem}>{categoryUp}</div></Link>
      
    )
}
