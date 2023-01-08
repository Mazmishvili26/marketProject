import React from "react";
import { useContext, useState } from "react";

const ModalContext = React.createContext();

const GlobalProvider = ({ children }) => {
  // cartAddstate

  const [clickedCart, setClickedCart] = useState(false);

  // cartAddstate

  // Categories Navbar Submenu

  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const openSubmenu = () => {
    setIsSubmenuOpen(true);
  };

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  // Categories Navbar Submenu

  // Product Modal Open/Close

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setClickedCart(false);
  };

  // Product Modal Open/Close

  // Footer Categories Open/Close

  const [isFooterModalOpen, setIsFooterModalOpen] = useState(false);

  const openFooterModal = () => {
    setIsFooterModalOpen(true);
  };

  const closeFooterModal = () => {
    setIsFooterModalOpen(false);
  };

  // Footer Categories Open/Close

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        isFooterModalOpen,
        openFooterModal,
        closeFooterModal,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        clickedCart,
        setClickedCart,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  return useContext(ModalContext);
};

export { ModalContext, GlobalProvider };
