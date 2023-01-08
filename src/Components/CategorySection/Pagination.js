import React from 'react'

function Pagination({totalPosts, postPerPage , setCurrentPage, currentPage}) {

    let pages = [];

    for(let i = 1; i <= Math.ceil(totalPosts/postPerPage); i++){
        pages.push(i)
      // pages.push(i)
    }

  return (
    <div className='container pagination-wrapper dummy-pagination'>
        {pages.map((page,index) => {
            return <button key={index} onClick={() => setCurrentPage(page)} className={page === currentPage ? 'pagination-btn active' : 'pagination-btn'}>{page}</button>
        })}
    </div>
  )
}

export default Pagination