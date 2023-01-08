import {QueryClient, QueryClientProvider} from 'react-query'
import {BrowserRouter, Routes, Route, useSearchParams} from 'react-router-dom'
import { GlobalProvider } from './useContext/useContext';
import React, {useEffect, useState } from 'react';
import { gapi } from 'gapi-script';
import './App.css';


// import pages
import FirstPage from './Pages/FirstPage/FirstPage';
import Men from './Pages/MenCategory/Men';
import Women from './Pages/WomenCategory/Women';
import Cart from './Pages/CartPage/Cart';
import Login from './Pages/Login/Login';
import Search from './Pages/SearchPage/Search'
import Category from './Pages/CategoryPage/Category'
import CategoryDetail from './/Pages/CategoryDetail/Detail'
import Pdetail from './Pages/PopularDetail/Pdetail';

// import queryClient

const queryClient = new QueryClient();

// import queryClient



// google authentication ClientID

const clientID = '209823746236-3vptats44ghm6jeuoe6qj5inm6mqfjcf.apps.googleusercontent.com'

// google authentication ClientID


  // getUserCartValue from localstorage

    function getUserCartValues () {
      const storedValues = localStorage.getItem('userCart') ? JSON.parse(localStorage.getItem('userCart')) : [];
      return storedValues;
    };
  
  // getUserCartValue from localstorage



function App() {


  const [token,setToken] = useState(localStorage.getItem('userToken') ?? null);
  const [userInfo,setUserInfo] = useState(true);
  const [cartItems,setCartItems] = useState(getUserCartValues);


  console.log(token);


  // userGoogleLogin

  useEffect(() => {
    function start () {
      gapi.client.init({
        clientId : clientID,
        scope : ""
      })
    }
    gapi.load('client:auth2', start);
  },[]);

  // userGoogleLogin



  // userAddCart

  const onAdd = (product , setClickedCart) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }

    setClickedCart(true);
  };

  useEffect(() => {
    localStorage.setItem('userCart', JSON.stringify(cartItems));
  },[cartItems])


 // userAddCart




  if(token === null){
    return <Login setUserInfo={setUserInfo} setToken={setToken}/> 
  }
  else if(token !== null){
      return (
        <>
          <QueryClientProvider client={queryClient}>
              <GlobalProvider>
                  <BrowserRouter>
                    <Routes>
                          <Route path='/' element={<FirstPage cartItems={cartItems} setToken={setToken}/>}></Route>
                          <Route path='/men/:menCategory' element={<Men/>}></Route>
                          <Route path='/women/:womenCategory' element={<Women/>}></Route>
                          <Route path='/detail/:productDetail' element={<FirstPage onAdd={onAdd} cartItems={cartItems}/> }></Route>
                          <Route path='/cart' element={<Cart userInfo={userInfo} cartItems={cartItems} setCartItems={setCartItems} onAdd={onAdd}/>}></Route>
                          <Route path='/search' element={<Search/>}></Route>
                          <Route path='/category/:categoryID' element={<Category/>}></Route>
                          <Route path='/product/:catID' element={<CategoryDetail/>}></Route>
                          <Route path='/popular/:pID' element={<Pdetail/>}></Route>
                    </Routes>
                  </BrowserRouter>
                </GlobalProvider>
          </QueryClientProvider>
        </>
      );
  }

}

export default App;
