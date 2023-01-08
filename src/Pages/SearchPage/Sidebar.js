import React, {useState, useEffect} from 'react'

function Sidebar() {
    const [getDummyCategories,setGetDummyCategories] = useState([]);

    useEffect(() => {
        const getDummyCategories = async function () {
            const response = await fetch('https://dummyjson.com/products/categories');
            const getData = await response.json();
            setGetDummyCategories(getData);
        }
        getDummyCategories();
    },[])


    return (
        <div className='dummy-filter'>
            <div className='dummy-categories'>
            <div className='dummy-title'>
                <h5>კატეგორიები</h5>
            </div>
            {getDummyCategories.map((category) => {
                return <ul>
                <li>{category}</li>
                </ul>
            })}
            </div>
        </div>

    )
}

export default Sidebar