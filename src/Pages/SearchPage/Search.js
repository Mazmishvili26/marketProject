import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './Search.css'
import { Link, useSearchParams } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import { useQuery } from 'react-query'


// import icons

import {IoHome} from 'react-icons/io5'
import {MdOutlineDoubleArrow} from 'react-icons/md'
import {BiError} from 'react-icons/bi'


// import assets
import Loading from '../../assets/loading.gif'

// for get api

import GetDummyRequest from '../../ApiRequest/GetDummyRequest'


// import pagination component

import Pagination from '../../Components/CategorySection/Pagination'
import Footer from '../../Components/Footer/Footer'

function Categories() {

   // Search States

    const [searchParams,setSearchParams] = useSearchParams();
    const [searchValue,setSearchValue] = useState('');
 
   useEffect(() => {
     setSearchValue(searchParams.get('search'));
   },[])
 
   const onSearchSubmit = (e) => {
     e.preventDefault();
     setSearchParams({
       search : searchValue
     })
   }


   // Search States

  const [getDummyProducts,setGetDummyProducts] = useState([]);
  const [currentPage,setCurrentPage] = useState(1);
  const [postsPerPage,setPostsPerPage] = useState(16);

  const {data,isLoading} = useQuery(['dummyProduct' , searchParams.get('search')], () => GetDummyRequest('GET', `products/search?q=${searchParams.get('search') || ''}`));
  
  useEffect(() => {
    if(data){
      setGetDummyProducts(data.data.products);
    }
  },[data])

  if(isLoading){
    return <img src={Loading} className="loading-gif"></img>
  }

  const lastPostIndex  = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = getDummyProducts.slice(firstPostIndex, lastPostIndex);



  return (
    <>
      <Header onSearchSubmit={onSearchSubmit}>
          <div className='container'>

            <div className='men-category-title'>
                <Link to='/'>
                        <IoHome className='home-icon'/>
                </Link>
                <MdOutlineDoubleArrow className='arrow-icon'/>
                <h3>ძებნა</h3>
            </div>

            <div className='found-box'>
                <h2>{getDummyProducts.length >= 1 ? `სულ მოიძებნა ${getDummyProducts.length} პროდუქტი` : <div className='search-error-box'> <BiError className='search-error-icon' /> <h3 className='search-error'>არცერთი პროდუქტი არ მოიძებნა</h3></div>}</h2>
            </div>

              <div className='dummy-container'>
                {currentPost.map((dummyProduct) => {
                  const {id,thumbnail,title,price} = dummyProduct;
                  return (
                    <div className='dummy-card' key={id}>
                      <div className='dummy-img'>
                        <img src={thumbnail}></img>
                      </div>
                      <div className='dummy-desc'>
                        <Link to={`/product/${id}`}>
                          <h3>{title}</h3>
                        </Link>
                        <p>{price} ლ </p>
                      </div>
                    </div>  
                  )
                })}
              </div>

              {getDummyProducts.length > 16 ? <Pagination totalPosts={getDummyProducts.length} postPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>  : null }

          </div>

      
      </Header>

      <Footer/>
    </>
    
  )
}

export default Categories