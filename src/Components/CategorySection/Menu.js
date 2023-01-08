import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Pagination from './Pagination';
import { useModalContext } from '../../useContext/useContext';

function Menu({menuItems}) {


    const {openModal} = useModalContext();

    // state for pagination

    const [currentPage,setCurrentPage] = useState(1);
    const [postPerPage,setPostPerPage] = useState(4);


    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;

    const currentPosts = menuItems.slice(firstPostIndex,lastPostIndex);

  return (
    <>
        <div className='menu-container'>
            {currentPosts.map((menu) => {
                const {id,title,image} = menu;
                return (
                    <div key={id} className='menu-card'>
                        <img src={image} alt={title}></img>
                        <p>{title}</p>
                        <Link to={`/detail/${id}`}>
                          <button onClick={openModal} className="detail-btn">დეტალურად</button>
                        </Link>
                    </div>
                )
            })}
        </div>

      <Pagination totalPosts={menuItems.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </>
  )
}

export default Menu