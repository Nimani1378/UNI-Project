import React from "react";
import { Link } from "react-router-dom";

import { Container, Row, Col } from "reactstrap";

import categoryImg01 from "../../../assets/images/category-01.png";
import categoryImg02 from "../../../assets/images/category-02.png";
import categoryImg03 from "../../../assets/images/category-03.png";
import categoryImg04 from "../../../assets/images/category-04.png";

import "../../../styles/category.css";

const categoryData = [
  {
    display: "برگر",
    imgUrl: categoryImg01,
    cat:'برگر'
  },
  {
    display: "پیتزا",
    imgUrl: categoryImg02,
    cat:'پیتزا'
  },

  {
    display: "غذای سنتی",
    imgUrl: categoryImg03,
    cat:'غذای_سنتی'
  },

  {
    display: "دسر",
    imgUrl: categoryImg04,
    cat:'دسر'
  },
];

const Category = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((item, index) => (
          <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
            <Link to={`/foods/${item.cat}`}>
            <div className="category__item d-flex align-items-center gap-3">
              <div className="category__img">
                <img src={item.imgUrl} alt="category__item" />
              </div>
              <h6>{item.display}</h6>
            </div>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
