import React, { useState } from "react";

// import Components

import Header from "../../Components/Header/Header";
import Slider from "../../Components/Slider/Slider";
import Main from "../../Components/HeroSection/Main";
import CategoryMenu from "../../Components/CategorySection/CategoryMenu";
import Modal from "../../Components/ModalPage/Modal";
import Footer from "../../Components/Footer/Footer";

function FirstPage({ setToken, onAdd, cartItems = { cartItems } }) {
  const [showBurger, setShowBurger] = useState(false);

  return (
    <>
      <Header
        setToken={setToken}
        cartItems={cartItems}
        showBurger={showBurger}
        setShowBurger={setShowBurger}
      />
      <Slider />
      <Main />
      <CategoryMenu />
      <Modal onAdd={onAdd} />
      <Footer setShowBurger={setShowBurger} />
    </>
  );
}

export default FirstPage;
