import React, {useState} from 'react'
import { Link } from 'react-router-dom';



function CategorySection({thumbnail,title,price , activeList , id }) {

            //  imgHoverStates

            const [showElement,setShowElement] = useState(false);

            const handleImage = () => {
                setShowElement(true);
            }

            //  imgHoverStates

        return (
            <div className={activeList ? 'dummy-cat-card-list' : 'dummy-cat-card'}>

                <div className='dummy-cat-img-box'>
                    <img src={thumbnail} onMouseOver={handleImage}></img>
                    {showElement && <div className='dummy-love'><Link to={`/product/${id}`}><button className='dummy-detail-cart'>დეტალურად</button></Link></div> }
                </div>

                <div className='dummy-card-info'>
                    <h4 className='dummy-cat-card-title'>{title}</h4>
                    <p className='dummy-cat-card-price'>{price} ლ</p>
                </div>

            </div>
    )

}

export default CategorySection;