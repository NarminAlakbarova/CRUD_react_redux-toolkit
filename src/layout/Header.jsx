import React from 'react'
import { NavLink } from 'react-router-dom'
import "./header.scss"
const Header = () => {
  return (
    <div id='header'>
      <NavLink to={"/customers"}>Customer List</NavLink>
      <NavLink to={"/form"}>Add Customer</NavLink>
      <NavLink to={"/favCustomers"}>Fav Customers</NavLink>
    </div>
  )
}

export default Header
