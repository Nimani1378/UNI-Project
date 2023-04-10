import React from "react";

import "../../../styles/product-card.css";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

const ProductCard = (props) => {
  const imageUrl = 'https://fvhcvimvvacsyotpdkhr.supabase.co/storage/v1/object/public/images/';
  const { id, name, image, price } = props.item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title:name,
        image01:imageUrl+image,
        price,
      })
    );
  };

  return (
    <div className="product__item">
      <div className="product__img">
        <Link to={`/product/${id}`}><img src={imageUrl+image} alt="product-img" className="w-75" /></Link>
        <h5>
          <Link to={`/product/${id}`}>{name}</Link>
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
