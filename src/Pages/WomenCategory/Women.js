import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import {useQuery} from 'react-query'
import GetApiRequest from '../../ApiRequest/GetApiRequest'
import {Link} from 'react-router-dom'

// import assets

import Loading from '../../assets/loading.gif'

// import components

import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

// import icons

import {IoHome} from 'react-icons/io5'
import {BiShow} from 'react-icons/bi'
import {MdOutlineDoubleArrow} from 'react-icons/md'

function Women() {

    const params = useParams();

    const [womens,setWomens] = useState([]);

    const {data, isLoading} = useQuery('GET', () => GetApiRequest('GET', `products/category/${params.womenCategory}`));


    useEffect(() => {
        if(data){
        setWomens(data.data);
       }
    },[data]);

    if(isLoading){
        return <img src={Loading} className="loading-gif"></img>
    }

  return (
    <>
        <Header>
            <div className='container men-category-container'>
                
                <div className='men-category-title'>
                    <Link to='/'>
                        <IoHome className='home-icon'/>
                    </Link>
                    <MdOutlineDoubleArrow className='arrow-icon'/>
                    <h3>სამკაულები</h3>
                </div>

                <div className='men-category-wrapper'>
                    {womens.map((women) => {
                        const {id,image,title,price} = women;
                        return (
                            <div className='men-card' key={id}>
                                <img src={image}></img>
                                <div className='men-card-title'>
                                    <p>{title}</p>
                                </div>


                                <div className='men-card-detail'>

                                    <div>
                                        <BiShow className='show-icon'/>
                                    </div>

                                    <div>
                                        <Link to={`/popular/${id}`}>
                                            <button>დეტალურად</button>
                                        </Link>
                                    </div>
                                    
                                </div>

                                <div className='men-card-price'>
                                    <span>{price} ლ</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            {/* {men.map((man) => {
                const {image,id} = man;
                return <img src={image} key={id}></img>
            })} */}
        </Header>
        <Footer/>
    </>
  )
}

export default Women