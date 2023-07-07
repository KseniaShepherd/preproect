import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'

export default function NavMenu() {
  return (
    <div className={s.navMenu}>
        <Link to={'/'}>Main</Link>
        <Link to={'/categories'}>Categories</Link>
        <Link to={'/products'}>All products</Link>
        <Link to={'/cart'}>Cart</Link>

    </div>
  )
}
