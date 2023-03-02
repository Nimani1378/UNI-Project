import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";

import "../../styles/footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className=" footer__logo flex-wrap d-flex gap-3">
              <div className="d-flex flex-column align-items-center">
                <img className="logo_img" src={logo} alt="logo" />
                <h2>زودفود</h2>
              </div>
              <p>
              با استفاده از وبسایت و اپلیکیشن سفارش آنلاین غذای زودفود شما میتونید به راحتی و در سریع ترین زمان ممکن غذای مورد علاقه‌ی خودتون رو سفارش بدید.
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h3 className="footer__title">ساعات کار</h3>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>شنبه - پنج شنبه</span>
                <p>10 صبح تا 11 شب</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">تماس با ما</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p>اصفهان. میدان امام حسین. خیابان طالقانی</p>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>تلفن : 0313554395</span>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>فکس : 031352955</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">خبرنامه</h5>
            <p>با وارد کردن ایمیل خود عضو شوید</p>
            <div className="newsletter">
              <input type="email" placeholder="ایمیل خود را وارد کنید" />
              <span>
                <i class="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              حق کپی رایت این وبسایت متعلق به شرکت زود فود میباشد
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">مارا دنبال کنید</p>
              <span>
                {" "}
                
                  <i class="ri-facebook-line"></i>
                {" "}
              </span>

              <span>
                
                  <i class="ri-github-line"></i>
                
              </span>

              <span>
                {" "}
                
                  <i class="ri-youtube-line"></i>
                
              </span>

              <span>
                {" "}
                
                  <i class="ri-linkedin-line"></i>
                {" "}
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
