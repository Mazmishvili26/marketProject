import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { useModalContext } from "../../useContext/useContext";

// import icons
import { AiOutlineHome } from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import { RiContactsLine } from "react-icons/ri";
import { FiSend } from "react-icons/fi";
import { AiOutlineFacebook } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";

// import asset
import support from "../../assets/support.png";

function Footer({ children, setShowBurger }) {
  const { closeFooterModal } = useModalContext();

  return (
    <>
      {children}
      <section className="footer-section">
        <div className="footer-btn-wrapper">
          <div className="footer-icon-wrapper">
            <Link to="/">
              <AiOutlineHome
                size={20}
                onClick={closeFooterModal}
                color="white"
              />
            </Link>
            <p>მთავარი</p>
          </div>

          <div
            className="footer-icon-wrapper"
            onClick={() => setShowBurger(true)}
          >
            <BiCategoryAlt size={20} color="white" />
            {/* {isFooterModalOpen ?  <div className='show-category'></div> : null} */}
            <p>კატეგორიები</p>
          </div>
        </div>

        {/* responsive 1500px footer */}

        <div className="container footer-wrapper">
          <div className="footer-header-wrapper">
            <div className="footer-header">
              <div className="footer-header-icon">
                <FiSend size={50} />
              </div>

              <div className="footer-header-title">
                <h3>გამოიწერეთ სიახლეები</h3>
                <p>მიიღე სპეციალური შეთავაზებები ელ. ფოსტით</p>
              </div>
            </div>

            <div className="footer-header-input">
              <input type="text" placeholder="შეიყვანეთ ელ.ფოსტა..."></input>
              <button>გამოწერა</button>
            </div>
          </div>
        </div>

        <div className="container footer-description-wrapper">
          <div className="footer-contact">
            <h5>დამიკავშირდით</h5>
            <div className="footer-info">
              <h5>იმეილი: </h5>
              <p>nikoloz.mazmishvili.1@btu.edu.ge</p>
            </div>

            <div className="footer-info">
              <h5>ტელეფონი: </h5>
              <p>593 20 99 77</p>
            </div>
          </div>

          <div className="footer-contact">
            <h5>ინფორმაცია</h5>
            <div className="footer-info">
              <ul className="footer-ul">
                <li>ჩვენს შესახებ</li>
                <li>საგარანტიო მომსახურება</li>
                <li>ნივთის უკან დაბრუნება</li>
                <li>მთავარი</li>
              </ul>
            </div>
          </div>

          <div className="footer-contact">
            <h5>ჩემი ანგარიში</h5>
            <div className="footer-info">
              <ul className="footer-ul">
                <li>ჩემი ანგარიში</li>
                <li>შეკვეთების ისტორია</li>
                <li>სურვილების სია</li>
                <li>სიახლეების წერილი</li>
              </ul>
            </div>
          </div>

          <div className="footer-contact-last">
            <h5>დამატებით</h5>
            <div className="footer-info">
              <ul className="footer-ul">
                <li>ბრენდები</li>
                <li>დაგვიკავშირდით</li>
                <li>საიტის რუქა</li>
                <li>ვაკანსიები</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container footer-bottom">
          <div className="footer-bottom-wrapper">
            <div className="footer-social">
              <AiOutlineFacebook size={30} />
              <FiInstagram size={30} />
            </div>

            <div>
              <p className="footer-copyright">
                &copy; Copyright - Nika Mazmishvili
              </p>
            </div>

            <div>
              <img src={support}></img>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
