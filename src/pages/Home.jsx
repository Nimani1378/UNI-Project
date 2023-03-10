import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import heroImg from "../assets/images/hero.png";
import "../styles/hero-section.css";

import { Link } from "react-router-dom";

import Category from "../components/UI/category/Category.jsx";

import "../styles/home.css";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import products from "../assets/fake-data/products.js";

import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";

import ProductCard from "../components/UI/product-card/ProductCard.jsx";

import whyImg from "../assets/images/location.png";

import networkImg from "../assets/images/network.png";

import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },

  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
];

const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "BREAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content  ">
                <h5 className="mb-3">???????? ???????? ?????? ???????? ?????????? ??????</h5>
                <h1 className="mb-4 hero__title">
                  <span>?????????? ??????</span> ???? ???????? ???? <br /> ???????????? ????
                  <span> ?????? </span>
                </h1>

                <p>
                  ???????? ???????????? ?????? ???????????? ???? ?????????? ?????????? ?????????????? ???? ???????? ?????? ?? ???? ?????????????? ???? ???????????? ???????????? ?????? ?????????????? ?? ???????? ???????? ?????????????? ?? ???????? ???? ???????? ?? ?????????????????? ???? ???????? ??????.
                </p>

                <div className="hero__btns d-flex align-items-center gap-3 mt-4">
                  <Link to='/cart'>
                    <button className="order__btn d-flex align-items-center justify-content-center">
                      <span>?????????????? <i class="ri-arrow-left-s-line"></i></span>
                    </button>
                  </Link>
                  <Link to="/foods">
                    <button className="all__foods-btn">
                      ???????? ??????????????
                    </button>
                  </Link>
                </div>

                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-car-line"></i>
                    </span>{" "}
                    ?????????? ????????????
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-shield-check-line"></i>
                    </span>{" "}
                    ???????????? 100 ???????? ??????
                  </p>
                </div>
              </div>
            </Col>


          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Category />
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>?????????????? ??????????</h2>
            </Col>

            <Col lg="12">
              <div className="food__category d-flex align-items-center">
                <button
                  className={`all__btn  ${category === "ALL" ? "foodBtnActive" : ""
                    } `}
                  onClick={() => setCategory("ALL")}
                >
                  ??????
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${category === "BURGER" ? "foodBtnActive" : ""
                    } `}
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={foodCategoryImg01} alt="" />
                  ????????
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${category === "PIZZA" ? "foodBtnActive" : ""
                    } `}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={foodCategoryImg02} alt="" />
                  ??????????
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${category === "BREAD" ? "foodBtnActive" : ""
                    } `}
                  onClick={() => setCategory("BREAD")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  ??????
                </button>
              </div>
            </Col>

            {allProducts.map((item,index) => {
              if(index<4){
                return(
                  <Col lg="3" md="4" sm="6" xs="12" key={item.id} className="mt-5">
                    <ProductCard item={item} />
                  </Col>
                )
              }
            })}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
