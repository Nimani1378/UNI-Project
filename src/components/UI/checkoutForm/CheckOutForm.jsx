import { Container, Row, Col } from "reactstrap";
import CommonSection from "../common-section/CommonSection";
import Helmet from "../../Helmet/Helmet";
import { useState } from "react";
import { useSelector } from "react-redux";

const CheckOutForm = () => {
    const [enterName, setEnterName] = useState("");
    const [enterEmail, setEnterEmail] = useState("");
    const [enterNumber, setEnterNumber] = useState("");
    const [enterCountry, setEnterCountry] = useState("");
    const [enterCity, setEnterCity] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const shippingInfo = [];
    const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
    const shippingCost = 30;

    const totalAmount = cartTotalAmount + Number(shippingCost);

    const submitHandler = (e) => {
        e.preventDefault();
        const userShippingAddress = {
            name: enterName,
            email: enterEmail,
            phone: enterNumber,
            country: enterCountry,
            city: enterCity,
            postalCode: postalCode,
        };

        shippingInfo.push(userShippingAddress);
        console.log(shippingInfo);
    };
    return (
        <Helmet title="Checkout">
            <CommonSection title="رسید" />
            <section>
                <Container>
                    <Row>
                        <Col lg="8" md="6">
                            <h6 className="mb-4">آدرس تحویل</h6>
                            <form className="checkout__form" onSubmit={submitHandler}>
                                <div className="form__group">
                                    <input
                                        type="text"
                                        placeholder="نام خود را وارد کنید"
                                        required
                                        onChange={(e) => setEnterName(e.target.value)}
                                    />
                                </div>

                                <div className="form__group">
                                    <input
                                        type="email"
                                        placeholder="ایمیل خود را وارد کنید"
                                        required
                                        onChange={(e) => setEnterEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form__group">
                                    <input
                                        type="number"
                                        placeholder="شماره همراه"
                                        required
                                        onChange={(e) => setEnterNumber(e.target.value)}
                                    />
                                </div>
                                <div className="form__group">
                                    <input
                                        type="text"
                                        placeholder="کشور"
                                        required
                                        onChange={(e) => setEnterCountry(e.target.value)}
                                    />
                                </div>
                                <div className="form__group">
                                    <input
                                        type="text"
                                        placeholder="شهر"
                                        required
                                        onChange={(e) => setEnterCity(e.target.value)}
                                    />
                                </div>
                                <div className="form__group">
                                    <input
                                        type="number"
                                        placeholder="کد پستی"
                                        required
                                        onChange={(e) => setPostalCode(e.target.value)}
                                    />
                                </div>
                                <button type="submit" className="addTOCart__btn">
                                    پرداخت
                                </button>
                            </form>
                        </Col>

                        <Col lg="4" md="6">
                            <div className="checkout__bill">
                                <h6 className="d-flex align-items-center justify-content-between mb-3">
                                    جمع سفارش ها: <span>{cartTotalAmount} تومان</span>
                                </h6>
                                <h6 className="d-flex align-items-center justify-content-between mb-3">
                                    ارسال: <span>{shippingCost} تومان</span>
                                </h6>
                                <div className="checkout__total">
                                    <h5 className="d-flex align-items-center justify-content-between">
                                        جمع کل: <span>{totalAmount} تومان</span>
                                    </h5>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}
export default CheckOutForm;