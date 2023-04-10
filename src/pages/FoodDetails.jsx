import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";

import { useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";

import "../styles/product-details.css";

import ProductCard from "../components/UI/product-card/ProductCard";

const FoodDetails = () => {
  const imageUrl = 'https://fvhcvimvvacsyotpdkhr.supabase.co/storage/v1/object/public/images/';
  const [tab, setTab] = useState("desc");
  const [product,setProduct] = useState({
    name:null,
    des:null,
    price:null,
    image:null,
    category:null
  })
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [reviewMsg, setReviewMsg] = useState("");
  const [relatedProduct,setRelated] = useState(null)
  const { id } = useParams();
  const dispatch = useDispatch();

  
  

  //const relatedProduct = products.filter((item) => category === item.category);

  const addItem = () => {
    dispatch(
      cartActions.addItem({
        id:product.id,
        title:product.name,
        price:product.price,
        image01:imageUrl+product.image,
      })
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(enteredName, enteredEmail, reviewMsg);
  };

  const getRelatedProduct = async(cat)=>{
    try{
      const { data, error } = await supabase
          .from('foods')
          .select('*')
          .eq('category', cat);
        if(error){throw error}
        else{
          setRelated(data)
        }
    } catch(error){
      alert(error.message)
    }
  }

  useEffect(() => {
    const getDetails = async (id) => {
      try {
        const { data, error } = await supabase
          .from('foods')
          .select('*')
          .eq('id', id);
        if(error){
          throw error
        }else{
          getRelatedProduct(data[0].category)
          setProduct(data[0]);
        }

      } catch (error) {
        alert(error.message);
      }
    }
    getDetails(id);
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <Helmet title="Product-details">
      <CommonSection title={product.name} />

      <section>
        <Container>
          <Row>
            <Col lg="4" md="4">
              <div className="product__main-img">
                <img src={imageUrl+product.image} alt="" className="w-100" />
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="single__product-content">
                <h2 className="product__title mb-3">{product.name}</h2>
                <p className="product__price">
                  {" "}
                  قیمت: <span>{product.price} تومان</span>
                </p>
                <p className="category mb-5">
                  دسته بندی: <span>{product.category}</span>
                </p>

                <button onClick={addItem} className="addTOCart__btn">
                  افزودن به سبد خرید
                </button>
              </div>
            </Col>

            <Col lg="12">
              <div className="tabs d-flex align-items-center gap-5 py-3">
                <h3
                  className={` ${tab === "desc" ? "tab__active" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  توضیحات
                </h3>
                <h3
                  className={` ${tab === "rev" ? "tab__active" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  نظرات
                </h3>
              </div>

              {tab === "desc" ? (
                <div className="tab__content">
                  <p>{product.des}</p>
                </div>
              ) : (
                <div className="tab__form mb-3">
                  <div className="review pt-5">
                    <p className="user__name mb-0">Jhon Doe</p>
                    <p className="user__email">jhon1@gmail.com</p>
                    <p className="feedback__text">great product</p>
                  </div>

                  <div className="review">
                    <p className="user__name mb-0">Jhon Doe</p>
                    <p className="user__email">jhon1@gmail.com</p>
                    <p className="feedback__text">great product</p>
                  </div>

                  <div className="review">
                    <p className="user__name mb-0">Jhon Doe</p>
                    <p className="user__email">jhon1@gmail.com</p>
                    <p className="feedback__text">great product</p>
                  </div>
                  <form className="form" onSubmit={submitHandler}>
                    <div className="form__group">
                      <input
                        type="text"
                        placeholder="Enter your name"
                        onChange={(e) => setEnteredName(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form__group">
                      <input
                        type="text"
                        placeholder="Enter your email"
                        onChange={(e) => setEnteredEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form__group">
                      <textarea
                        rows={5}
                        type="text"
                        placeholder="Write your review"
                        onChange={(e) => setReviewMsg(e.target.value)}
                        required
                      />
                    </div>

                    <button type="submit" className="addTOCart__btn">
                      ثبت
                    </button>
                  </form>
                </div>
              )}
            </Col>

            <Col lg="12" className="mb-2 mt-2">
              <h2 className="related__Product-title">محصولات مرتبط</h2>
            </Col>
            
          </Row>
          {relatedProduct && (
              <div className="related_Slider">
                {relatedProduct.map((item) => (
                  <div className="related__Product-card" key={item.id}>
                    <ProductCard item={item} />
                  </div>
                ))}
              </div>
            )}
        </Container>
      </section>
    </Helmet>
  );
};

export default FoodDetails;
