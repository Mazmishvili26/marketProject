import React, {useState} from 'react'
import './Category.css'
import { useParams } from 'react-router-dom'
import {useQuery} from 'react-query'
import { Link } from 'react-router-dom'



// import tippy/js
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'



// import components
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import CategorySection from './CategorySection'




// import apiRequestHandler
import GetDummyRequest from '../../ApiRequest/GetDummyRequest'
import { useEffect } from 'react'


// import icons

import {IoHome} from 'react-icons/io5'
import {MdOutlineDoubleArrow} from 'react-icons/md'
import {AiOutlineUnorderedList} from 'react-icons/ai'
import {AiOutlineTable} from 'react-icons/ai'

// import assets
import Loading from '../../assets/loading.gif'


function Category() {

    // tooltipActiveStates

    const [activeList,setActiveList] = useState(false);
    const [activeTable,setActiveTable] = useState(true);

    const handleList = () => {
        setActiveList(true);
        setActiveTable(false);
    }

    const handleTable = () => {
        setActiveTable(true);
        setActiveList(false);
    }
    
     // tooltipActiveStates


    // general request states

    const params = useParams();
    const {data,isLoading} = useQuery(['dummyCategory' ,params.categoryID ], () => GetDummyRequest('GET', `products/category/${params.categoryID}`));
    const [dummyCategory,setDummyCategory] = useState([]);

    useEffect(() => {
        if(data){
            setDummyCategory(data.data.products);
        }
    },[data])

    if(isLoading){
        return <img src={Loading} className="loading-gif"></img>
    }



    return (
        <>
        <Header>
            <div className='container dummy-cat-container'>

                <div className='men-category-title'>
                    <Link to='/'>
                        <IoHome className='home-icon'/>
                    </Link>
                    <MdOutlineDoubleArrow className='arrow-icon'/>
                    <h3 className='dummy-title'>{params.categoryID}</h3>
                </div>

                <div className='dummy-cat-title'>
                    <h3>თქვენ ათვალიერებთ კატეგორიას {" -> "}<span className='category-name'>{params.categoryID}</span></h3>
                </div>


                <div className='dummy-cat-tools-wrapper'>
                    
                    <Tippy content={'სია'}>
                        <div className={activeList ? 'dummy-tool-list' : 'dummy-tool'} onClick={handleList}>
                            <AiOutlineUnorderedList size={16} color={'white'}/>
                        </div>
                    </Tippy>
                    
                    <Tippy content={'ცხრილი'}>
                        <div className={activeTable ? 'dummy-tool-table' : 'dummy-tool'} onClick={handleTable}>
                            <AiOutlineTable/>
                        </div>
                    </Tippy>

                </div>

                <div className={activeList ? 'dummy-card-wrapper-list' : 'dummy-card-wrapper'}>
                    {dummyCategory.map((category) => {
                        return (
                            <CategorySection key={category.id} {...category} id={category.id} activeList={activeList} />
                        )
                    })}
                </div>
            
            </div>
        </Header>
        <Footer/>
        </>
    )
}

export default Category