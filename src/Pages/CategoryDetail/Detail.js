import React, {useState, useEffect} from 'react'
import ReactImageMagnify from 'react-image-magnify';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './Detail.css'


// import components

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';


// import assets
import Loading from '../../assets/loading.gif'
import tbc from '../../assets/tbc.png'
import geobank from '../../assets/geobank.png'
import credobank from '../../assets/credobank.png'
import spacebank from '../../assets/spacebank.png'


// import icons

import {IoHome} from 'react-icons/io5'
import {MdOutlineDoubleArrow} from 'react-icons/md'
import {MdOutlineBusinessCenter} from 'react-icons/md'


function Detail() {

    // images state

    const [imageCounter,setImageCounter] = useState(0);

    // images state

    const params = useParams();
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        const getProducts = async function () {
            try {
                const response = await fetch(`https://dummyjson.com/products/${params.catID}`);
                const getData = await response.json();
                setProducts(getData);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        getProducts();
    },[])

    if(loading){
        return <img src={Loading} className="loading-gif"></img>
    }

    return (
        <>
            <Header>
                
                <div className='container'>

                    <div className='men-category-title'>
                            <Link to='/'>
                                <IoHome className='home-icon'/>
                            </Link>
                            <MdOutlineDoubleArrow className='arrow-icon'/>
                            <div className='detail-title'><h3 className='geo-title'>პროდუქტის დასახელება:</h3> <h3 className='en-title'>{products.title}</h3></div>
                    </div>

                    <div className='detail-container-wrapper'>

                        <div className='left-box'>

                            <div className='left-block'>

                                <div className='add-img-block-wrapper'>

                                    <div className='add-img-block'>
                                        <img src={products.images[0]} onClick={() => setImageCounter(0)}></img>
                                    </div>

                                    <div className='add-img-block'>
                                        <img src={products.images[1]} onClick={() => setImageCounter(1)}></img>
                                    </div>

                                </div>

                                <div className='img-size'>
                                    <ReactImageMagnify {...{
                                        smallImage: {
                                            alt: products.title,
                                            isFluidWidth: true,
                                            src: products.images[imageCounter],
                                        },
                                        largeImage: {
                                            src: products.images[imageCounter],
                                            width: 1200,
                                            height: 1800
                                        }
                                    }} />
                                </div>

                            </div>

                        </div>


                        <div className='right-box'>

                            <div className='right-block'>

                                <div className='right-block-title'>
                                    <h2 className='right-main-title'>{products.description}</h2>
                                </div>
                                
                                <div className='right-block-detail'>

                                    <div className='right-block-detail-wrapper'>
                                        <h3 className='left-title'>კატეგორია:</h3>
                                        <h3 className='right-title'>{products.category}</h3>
                                    </div>

                                    <div className='right-block-detail-wrapper'>
                                        <h3 className='left-title'>ბრენდი:</h3>
                                        <h3 className='right-title'>{products.brand}</h3>
                                    </div>

                                    <div className='right-block-detail-wrapper'>
                                        <h3 className='left-title'>ფასი:</h3>
                                        <h3 className='right-title'>{products.price} $</h3>
                                    </div>

                                    <div className='right-block-detail-wrapper'>
                                        <h3 className='left-title'>რეიტინგი:</h3>
                                        <h3 className='right-title'>{products.rating}</h3>
                                    </div>

                                    <div className='right-block-detail-wrapper'>
                                        <h3 className='left-title'>მარაგშია:</h3>
                                        <h3 className='right-title'>{products.stock} ცალი</h3>
                                    </div>

                                </div>


                                <div className='right-block-more'>
                                    <div className='business-block'>
                                        <MdOutlineBusinessCenter size={21}/>
                                        <h4>შენი ბიზნესისთვის</h4>
                                    </div>
                                </div>

                                <div className='pay-methods'>
                                    <div className='pay-methods-title'>
                                        <h4>გადახდის მეთოდები</h4>
                                    </div>

                                    <div className='main-pay-methods'>
                                        <h4>საბანკო გადარიცხვა</h4>
                                        <h4>ბარათით გადახდა</h4>
                                    </div>
                                    
                                    <h4 className='pay-more-title'>ონლაინ განვადება</h4>

                                    <div className='pay-banks-wrapper'>
                                        <img src={tbc}></img>
                                        <img src={geobank}></img>
                                        <img src={credobank}></img>
                                        <img src={spacebank}></img>
                                    </div>

                                </div>
                            </div>


                        </div>
                        
                    </div>

                </div>

            </Header>
            <Footer/>
        </>
    )

}

export default Detail