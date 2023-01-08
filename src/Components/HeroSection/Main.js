import React from 'react'
import './Main.css'
import {Link} from 'react-router-dom'

// import assets

import first from '../../assets/1.png'
import second from '../../assets/2.png'
import third from '../../assets/3.png'
import fourth from '../../assets/4.png'
import electronic from '../../assets/test.jpg'
import jewelery from '../../assets/jewelery.jpg'

function Main() {
  return (
    <section className='container main-section'>
        <div className='main-section-container'>

            <div className='section-card'>

                <div className='section-card-img'>
                    <img src={first}></img>
                </div>

                <div className='section-card-desc'>
                    <p>მიწოდება</p>
                    <h5>საქართველოს მასშტაბით</h5>
                </div>

            </div>

            <div className='section-card'>

                <div className='section-card-img'>
                    <img src={second}></img>
                </div>

                <div className='section-card-desc'>
                    <p>გადახდის მეთოდები</p>
                    <h5>მარტივი პროცედურა</h5>
                </div>

            </div>

            <div className='section-card'>

                <div className='section-card-img'>
                    <img src={third}></img>
                </div>

                <div className='section-card-desc'>
                    <p>საჩუქრები</p>
                    <h5>სპეციალურად შენთვის</h5>
                </div>

            </div>

            <div className='section-card'>

                <div className='section-card-img'>
                    <img src={fourth}></img>
                </div>

                <div className='section-card-desc'>
                    <p>კორპორატიული გაყიდვები</p>
                    <h5>ნიკოლოზ მაზმიშვილი</h5>
                </div>

            </div>
        </div>


        {/* men's and women's clothing block */}

        <div className='category-container'>

            <div className='men-block'>

                <Link to={`/men/electronics`}>

                <div className='men-block-header'>
                    <h3>ელექტრონიკა</h3>
                </div> 

                <div className='men-block-img'>
                    <img src={electronic}></img>
                </div>

                </Link>

            </div>


            <div className='women-block'>

                <Link to={`/women/jewelery`}>
                    <div className='women-block-header'>
                        <h3>სამკაულები</h3>
                    </div> 

                    <div className='women-block-img'>
                        <img src={jewelery}></img>
                    </div>
                </Link>

            </div>

        </div>

    </section>
    )
}

export default Main