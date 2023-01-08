import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import {useQuery} from 'react-query'
import GetApiRequest from '../../ApiRequest/GetApiRequest';
import {Link} from 'react-router-dom'
import './Men.css'

// import  Components
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer';


// import assets
import Loading from '../../assets/loading.gif'

// import icons

import {IoHome} from 'react-icons/io5'
import {BiShow} from 'react-icons/bi'
import {MdOutlineDoubleArrow} from 'react-icons/md'



function Men() {

    const params = useParams();

    const {data, isLoading} = useQuery('men', () => GetApiRequest('GET', `products/category/${params.menCategory}` ))

    const [men,setMen] = useState([]);

    useEffect(() => {
        if(data){
            setMen(data.data);
        }
    },[data])


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
                    <h3>ელექტრონიკა</h3>
                </div>

                <div className='men-category-wrapper'>
                    {men.map((man) => {
                        const {id,image,title,price} = man;
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
        </Header>
        <Footer/>
    </>
    )
}

export default Men