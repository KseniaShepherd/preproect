import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../store/requests/getCategories';
import CategoryItem from '../CategoryItem';
import s from './index.module.css'


export default function CategoriesContainer() {
    const categories = useSelector(state => state.categories);
  const dispatch = useDispatch();
  useEffect(()=>
    dispatch(getCategories)
  ,[])
  return (
    <div className={s.categoryContainer}>
        {categories.map((el, index)=> <CategoryItem key={index} category={el}/>)}
    </div>
  )
}
