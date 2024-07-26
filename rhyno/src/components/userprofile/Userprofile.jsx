import React from 'react'
import './Userprofile.css'
import { useContext } from "react";
import {userLoginContext} from '../../contexts/userLoginContext'
import { Link,Outlet } from 'react-router-dom';
import { FaProductHunt } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { CiEdit } from "react-icons/ci";
function Userprofile() {
  let {currentUser}=useContext(userLoginContext)
  let navigate = useNavigate()
  function onedit()
  {
    navigate("../edit-user");
  }
  
  return (
   <div>
    <div className='text-end text-end p-3'>
      <img src={currentUser.profileImage} width='75px' alt="" className='rounded-circle' />
      <p className='fs-3'>{currentUser.username}
      <CiEdit  className='text-warning fs-2 ' onClick={onedit}/>
      </p>
    </div>
    <div>
    <ul className='nav fs-5 p-3 justify-content-around my-2'>
    <li className='nav-item'>
        <Link to="products" className='nav-link text-info'>
        <FaProductHunt  className='fs-4 text-warning '/>Products</Link>
      </li>
      <li className='nav-item'>
        <Link to="cart" className='nav-link text-info'>
        <FaShoppingCart className='fs-4 text-warning'/>Cart</Link>
      </li>
      </ul>
      <Outlet/>
    </div>
   </div>
  )
}

export default Userprofile