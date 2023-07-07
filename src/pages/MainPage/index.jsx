import React from 'react'
import CategoriesContainer from '../../components/CategoriesContainer'
import { Link } from 'react-router-dom'
import s from './index.module.css'

export default function MainPage() {
  return (
    <div>
        <div  className={s.mainPage}>      
          <h2 data-cy="h2">Categories</h2> 
         <Link to={'/categories'}>All Categories</Link></div>

        <CategoriesContainer />
      
    </div>
  )
}
