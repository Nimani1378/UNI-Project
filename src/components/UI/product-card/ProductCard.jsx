import React from "react";

import "../../../styles/product-card.css";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

const ProductCard = (props) => {
  const { id, title, image01, price } = props.item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
  };

  return (
    <div className="product__item">
      <div className="product__img">
        <Link to={`/foods/${id}`}><img src={image01} alt="product-img" className="w-75" /></Link>
        <h5>
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
      </div>

      <div className="product__content">
        
        <div className=" d-flex align-items-center justify-content-center flex-wrap">
          <span className="product__price">{price} تومان</span>
          <button className="addTOCart__btn" onClick={addToCart}>
            افزودن به سبد
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
