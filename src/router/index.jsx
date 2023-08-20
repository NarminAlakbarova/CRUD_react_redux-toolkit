import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Customers from '../components/Customers'
import Form from '../pages/Form'
import FavCustomers from '../pages/FavCustomers'

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path='/customers' element={<Customers/>}/>
        <Route path='/' element={<Customers/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/favCustomers' element={<FavCustomers/>}/>
      </Routes>
    </div>
  )
}

export default Routing
