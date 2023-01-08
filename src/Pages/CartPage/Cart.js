import {Link} from 'react-router-dom'
import {  useState } from 'react'
import './Cart.css'

// import icons

import {IoHome} from 'react-icons/io5'
import {MdOutlineDoubleArrow} from 'react-icons/md'
import {TiDelete} from 'react-icons/ti'
import {BiError} from 'react-icons/bi'

// import components
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'


function Profile({cartItems , setCartItems}) {

  const deleteCart = (id) => {
    const delCart = cartItems.filter((cartItem) => cartItem.id !== id);
    setCartItems(delCart);
  }


  return (
    <>
      <Header>

        <div className='container'> 

            <div className='cart-category-title'>
              <Link to='/'>
                    <IoHome className='home-icon'/>
                </Link>
                <MdOutlineDoubleArrow className='arrow-icon'/>
                <h3>კალათა</h3>
            </div>

            <div className='cart-container'>
              <h3 className='cart-title'>{cartItems.length === 0 ? <div className='cart-error-box'><BiError className='search-error-icon' /> <h3 className='search-error'>კალათა ცარიელია!</h3>  </div> : 'კალათა'}</h3>
              {cartItems.map((cartItem) => {
                const {id,image,title,price} = cartItem;

                return (
                  <table key={id}>
                    <tr>
                      <th>სურათი</th>
                      <th>დასახელება</th>
                      <th>მოდელი</th>
                      <th>წაშლა</th>
                      <th>ღირებულება</th>
                    </tr>

                    <tr>

                      <td className='img-td'>
                
                        <img src={image}></img>
                
                      </td>

                      <td className='title-td'><p>{title}</p></td>

                      <td className='title-td'><p>{title}</p></td>

                      <td className='td-btn-container'>
                          <Link to={`/popular/${id}`}>
                            <button className='td-detail-btn'>დეტალურად</button>
                          </Link>
                          <button onClick={() => deleteCart(id)} className="td-delete-btn"><TiDelete size={25}/></button>
                      </td>

                      <td className='price-td'><p id='trigger'>{price}</p></td>
                    </tr>

                </table>
                )
              })}
            </div>


            <div className='cart-footer-container'>

              <div>
                <Link to='/'>
                  <button>შერჩევის გაგრძელება</button>
                </Link>
              </div>

            </div>
            
          </div>
        </Header>

        <Footer/>
    </>
  )
}

export default Profile