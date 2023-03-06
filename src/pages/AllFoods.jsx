import React, { useEffect, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";

import { Container, Row, Col } from "reactstrap";

import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import ReactPaginate from "react-paginate";

import "../styles/all-foods.css";
import "../styles/pagination.css";
import { useParams } from "react-router-dom";

const AllFoods = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [pageNumber, setPageNumber] = useState(0);

  const {cat} = useParams();
  const [category,setCategoty] = useState(cat)
  const searchedProduct = products.filter((item)=>(category===undefined ? true : (item.category===category))).filter((item) => {
    if (searchTerm.value === "") {
      return item;
    }
    if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    } else {
      return console.log("not found");
    }
  });

  const productPerPage = 12;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  

  return (
    <Helmet title="All-Foods">
      {console.log(category)}
      <CommonSection title="لیست محصولات" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" xs="12" className="px-3">
              <div className="search__widget d-flex align-items-center justify-content-between ">
                <input
                  type="text"
                  placeholder="غذاتو پیدا کن..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" xs="12" className="mb-5 px-3" >
              <div className="sorting__widget text-end">
                <select className="w-50">
                  <option>پیش فرض</option>
                  <option value="high-price">بیشترین قیمت</option>
                  <option value="low-price">کمترین قیمت</option>
                </select>
              </div>
            </Col>

            {displayPage.length>0 ? (displayPage.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-0 p-0">
                <ProductCard item={item} />
              </Col>
            ))) : (
              <Col lg="3" md="4" sm="6" xs="6" className="mb-4">
                <div>موردی یافت نشد</div>
              </Col>
            )}

            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel={"قبل"}
                nextLabel={"بعد"}
                containerClassName=" paginationBttns "
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFoods;
