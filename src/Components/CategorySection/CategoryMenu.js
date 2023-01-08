import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import './Category.css'
import Menu from './Menu';

// import apiHandler

import GetApiRequest from '../../ApiRequest/GetApiRequest'

// import asset

import business from '../../assets/business.png'


function Category() {

  const [menuItems,setMenuItems] = useState([]);
  
  const {data,isLoading} = useQuery('category', () => GetApiRequest('GET', 'products'));

  useEffect(() => {
    if(data){
      setMenuItems(data.data);
    }
  },[data])


  if(isLoading){
    return <h1>Loading...</h1>
  }

  return (
    <section className='container categories-section'>

      <div className='categories-title'>
        <h3>პოპულარული პროდუქტები</h3>
      </div>
      <Menu menuItems={menuItems}/>

      <div className="photo-container">
        <img src={business}></img>
      </div>
    </section>
  )
}

export default Category