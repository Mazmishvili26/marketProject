import { useEffect, useState } from "react";
import "./Header.css";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { GoogleLogout } from "react-google-login";

// import icons
import { IoIosSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiBasket } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import { GoPlusSmall } from "react-icons/go";
import { HiOutlineMinusSm } from "react-icons/hi";

// import assets

import logo from "../../assets/logo.png";

// import useModalContext

import { useModalContext } from "../../useContext/useContext";

// googleAuthentication clientID

const clientID =
  "209823746236-3vptats44ghm6jeuoe6qj5inm6mqfjcf.apps.googleusercontent.com";

// googleAuthentication clientID

function Header({
  children,
  setToken,
  cartItems,
  onSearchSubmit,
  showBurger,
  setShowBurger,
}) {
  // showBurgetState

  const [showBurgerCategory, setShowBurgerCategory] = useState(false);
  {
    showBurger
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }

  // showBurgerState

  // hoverCart

  const [hoverCart, setHoverCart] = useState(false);

  // categoriesHovering

  const { isSubmenuOpen, openSubmenu, closeSubmenu } = useModalContext();

  const categoryURL = "https://dummyjson.com/products/categories";

  const [getCategories, setGetCategories] = useState([]);

  useEffect(() => {
    const getCategory = async function () {
      const response = await fetch(categoryURL);
      const getData = await response.json();
      setGetCategories(getData);
    };
    getCategory();
  }, []);

  const handleSubmenu = (e) => {
    if (
      e.target.classList.contains(
        "header-section" || "main-header" || "men-category-title"
      )
    ) {
      closeSubmenu();
    }
  };

  // categoriesHovering

  // headerSeach

  const navigate = useNavigate();
  const location = useLocation();

  const [headerSearch, setHeaderSearch] = useState("");

  onSearchSubmit = (e) => {
    e.preventDefault();
    if (location.pathname === "/search") {
      navigate({
        search: `?search=${headerSearch}`,
      });
    } else {
      navigate({
        pathname: "/search",
        search: `?search=${headerSearch}`,
      });
    }
  };

  useEffect(() => {
    setHeaderSearch(headerSearch);
  }, []);

  // headerSeach

  const onSuccess = () => {
    console.log("logout success");
    setToken(null);
    localStorage.clear();
  };

  const handleCart = () => {
    setHoverCart(!hoverCart);
  };

  return (
    <>
      <section className="header-section" onMouseOver={handleSubmenu}>
        <header className="main-header">
          <div className="container header-wrapper">
            <Link to="/">
              <div className="header-logo">
                <img src={logo} className="header-img-logo"></img>
              </div>
            </Link>

            {/* search component */}

            <div className="header-search-box">
              <form onSubmit={onSearchSubmit}>
                <input
                  className="header-search"
                  placeholder="ძებნა"
                  value={headerSearch}
                  onChange={(e) => setHeaderSearch(e.target.value)}
                ></input>
                <div className="search-icon-box">
                  <button type="submit" className="search-submit-btn">
                    <IoIosSearch className="search-icon" />
                  </button>
                </div>
              </form>
            </div>

            {/* <Search onSearchSubmit={onSearchSubmit} searchValue={searchValue} inputChange={inputChange} SearchParams={SearchParams}/> */}

            {/* search component */}

            <div className="header-basket-container">
              <div className="header-basket-container">
                {cartItems ? (
                  <>
                    <div className="header-basket">
                      <Link to={"/cart"}>
                        <BiBasket className="header-basket-icon" />
                      </Link>
                    </div>

                    <Link
                      to={cartItems.length === 0 ? "/" : "/cart"}
                      onClick={cartItems.length === 0 ? handleCart : null}
                    >
                      <p className="header-basket-title">კალათა:</p>
                    </Link>
                  </>
                ) : (
                  <div className="header-user-profile">
                    <GoogleLogout
                      clientId={clientID}
                      buttonText="გასვლა"
                      onLogoutSuccess={onSuccess}
                    />
                  </div>
                )}

                <div className="cart-item-counter">
                  <span>{cartItems ? cartItems.length + "ცალი" : null} </span>
                </div>
              </div>

              {hoverCart && (
                <div className="empty-cart">თქვენი კალათა ცარიელია!</div>
              )}
            </div>
          </div>
        </header>

        <div className="container header-nav">
          <div className="header-burger-box">
            <GiHamburgerMenu
              className="header-burger-icon"
              onClick={() => setShowBurger(true)}
            />
          </div>

          {showBurger && (
            <div className={showBurger ? "blur" : null}>
              <div className="burger-menu">
                <div className="burger-menu-header">
                  <h3>კატეგორიები</h3>
                  <IoIosClose size={35} onClick={() => setShowBurger(false)} />
                </div>

                <div className="burger-content">
                  <div className="burger-categories">
                    <h3>კატეგორიები</h3>
                    {showBurgerCategory ? (
                      <HiOutlineMinusSm
                        size={35}
                        color={"#ED2A7C"}
                        onClick={() => setShowBurgerCategory(false)}
                      />
                    ) : (
                      <GoPlusSmall
                        size={35}
                        color={"#ED2A7C"}
                        onClick={() => setShowBurgerCategory(true)}
                      />
                    )}
                  </div>

                  {showBurgerCategory && (
                    <ul className="burger-ul">
                      {getCategories.map((category) => {
                        return (
                          <>
                            <Link to={`/category/${category}`}>
                              <li className="burger-li">{category}</li>
                            </Link>
                          </>
                        );
                      })}
                    </ul>
                  )}

                  <ul className="burger-header-ul">
                    <li className="burger-header-li">ყიდვა</li>
                    <li className="burger-header-li">განვადება</li>
                    <li className="burger-header-li">მიწოდება</li>
                    <li className="burger-header-li">შენი ბიზნესისთვის</li>
                    <li className="burger-header-li">კონტაქტი</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {location.pathname === "/" ? (
            <nav className="header-nav-box">
              <ul className="header-ul">
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active-nav" : null)}
                >
                  <li className="categories" onMouseOver={openSubmenu}>
                    კატეგორიები
                  </li>
                </NavLink>

                {isSubmenuOpen && (
                  <div className="categories-hover-block">
                    {getCategories.map((category) => {
                      return (
                        <ul>
                          <Link to={`/category/${category}`}>
                            <li className="link-btn">{category}</li>
                          </Link>
                        </ul>
                      );
                    })}
                  </div>
                )}

                <li>ყიდვა</li>
                <li>განვადება</li>
                <li>მიწოდება</li>
                <li>შენი ბიზნესისთვის</li>
                <li>კონტაქტი</li>
              </ul>
            </nav>
          ) : null}

          {setToken ? (
            <div className="header-user-profile">
              <GoogleLogout
                clientId={clientID}
                buttonText="გასვლა"
                onLogoutSuccess={onSuccess}
              />
            </div>
          ) : null}
        </div>
      </section>

      {children}
    </>
  );
}

export default Header;
