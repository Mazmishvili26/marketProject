import React, { useEffect, useState } from "react";
import "./Modal.css";
import { Link, useParams } from "react-router-dom";
import { useModalContext } from "../../useContext/useContext";
import { useQuery } from "react-query";

// import icons

import { AiFillCloseCircle } from "react-icons/ai";

// import jsonholder
import GetApiRequest from "../../ApiRequest/GetApiRequest";
import Alert from "./Alert";

function Modal({ onAdd }) {
  // useModalContextHook

  const { isModalOpen, closeModal, clickedCart, setClickedCart } =
    useModalContext();

  // useModalContextHook

  // showMore state

  const [showMore, setShowMore] = useState(false);

  // showMore state

  const [productDetail, setProductDetail] = useState([]);

  const params = useParams();

  const { data, isLoading } = useQuery(["detail", params.productDetail], () =>
    GetApiRequest("GET", `products/${params.productDetail}`)
  );

  useEffect(() => {
    if (data) {
      setProductDetail(data.data);
    }
  }, [data]);

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  const description = productDetail.description || "";

  return (
    <div className={isModalOpen ? "modal-container show" : "modal-container"}>
      <div className="modal">
        <Link to="/">
          <AiFillCloseCircle
            className="modal-close-icon"
            onClick={closeModal}
          />
        </Link>

        <img src={productDetail.image}></img>

        <div className="desc-wrapper">
          <span>
            {showMore ? description : description.substring(0, 70) + " ..."}
          </span>

          <button
            className="view-more-btn"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "ნაკლების ნახვა" : "მეტის ნახვა"}
          </button>
        </div>

        <span className="price-span">{productDetail.price} ლ </span>

        <button
          onClick={() => onAdd(productDetail, setClickedCart)}
          className="add-basket-btn"
        >
          კალათაში დამატება
        </button>
        {clickedCart ? <Alert setClickedCart={setClickedCart} /> : null}
      </div>
    </div>
  );
}

export default Modal;
