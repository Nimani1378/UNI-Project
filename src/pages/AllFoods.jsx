import React, { useEffect, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";

import { Container, Row, Col } from "reactstrap";

import ProductCard from "../components/UI/product-card/ProductCard";
import ReactPaginate from "react-paginate";
import { supabase } from "../supabaseClient";

import "../styles/all-foods.css";
import "../styles/pagination.css";
import { useParams } from "react-router-dom";

const AllFoods = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [pageNumber, setPageNumber] = useState(0);
  const [data, setData] = useState(null);
  const { cat } = useParams();
  const [category, setCategoty] = useState(cat)
  useEffect(() => {
    const getFoods = async () => {
      try {
        let { data, error } = await supabase
          .from('foods')
          .select('*');
        if (error) { throw error }
        else { setData(data);}
      } catch (error) {
        alert(error.massege)
      }
    }
    getFoods();
  }, [])

  let searchedProduct = [];
  if(data){
      searchedProduct = data.filter((item)=>(item.count>0)).filter((item) => (category === undefined ? true : (item.category === category))).filter((item) => {
      if (searchTerm.value === "") {
        return item;
      }
      if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return item;
      } else {
        return console.log("not found");
      }
    });
  }
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
      {!data ? (
        <div className="d-flex p-3 justify-content-center">
          <div>در حال بارگذاری</div>
          <div class="spinner-border text-danger spinner-border-sm" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>

      ) : (
        <section>
          <Container>
            <Row>
            <Col lg="6" md="6" sm="6" xs="12" className=" mb-4 px-3" >
                <div className="sorting__widget text-end">
                  <select defaultValue={'همه'} className="w-50" value={category} onChange={(e)=>{setCategoty(e.target.value)}}>
                    <option value='همه'>پیش فرض</option>
                    <option value="پیتزا">پیتزا</option>
                    <option value="برگر">برگر</option>
                    <option value="غذای_سنتی">غذای سنتی</option>
                    <option value="دسر">دسر</option>
                  </select>
                </div>
              </Col>
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
              

              {displayPage.length > 0 ? (displayPage.map((item) => (
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
      )}
    </Helmet>
  );
};

export default AllFoods;
