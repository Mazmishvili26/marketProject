import React from 'react'
import { useEffect } from 'react'

function Alert({setClickedCart}) {

    useEffect(() => {
        const timeout = setTimeout(() => {
            setClickedCart(false);
        },2000)
        return () => clearTimeout(timeout);
    },[])

  return (
    <div className='success-msg'>წარმატებით დაემატა</div>
  )
}

export default Alert