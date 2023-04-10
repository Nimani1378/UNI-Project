import { Container, Row, Col } from "reactstrap";
import CommonSection from "../common-section/CommonSection";
import Helmet from "../../Helmet/Helmet";
import { useState, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { supabase } from "../../../supabaseClient";
import { cartActions } from "../../../store/shopping-cart/cartSlice";


const CheckOutForm = ({ session }) => {
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch();
    const [userInfo, setUserInfo] = useState(null)
    const cartProducts = useSelector((state) => state.cart.cartItems);
    const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
    const shippingCost = 30;

    const totalAmount = cartTotalAmount + Number(shippingCost);

    useEffect(() => {

        const getProfile = async () => {
            try {
                setLoading(true)
                const { user } = session

                let { data, error, status } = await supabase
                    .from('users')
                    .select(`name, LastName, Phone, Address`)
                    .eq('id', user.id)
                    .single()

                if (error && status !== 406) {
                    throw error
                }

                if (data) {
                    setUserInfo({
                        name: data.name,
                        lastname: data.LastName,
                        phone: data.Phone,
                        address: data.Address
                    })
                }
            } catch (error) {
                console.log(error.message, 'from hre')
            } finally {
                setLoading(false)
            }
        }
        getProfile()
    }, [session])

    const handlesubmit = ()=>{
       alert('سفارش با موفقیت انجام شد')
       if(cartProducts.length>0){
        cartProducts.map((item)=>{
            dispatch(cartActions.deleteItem(item.id));
        })
       }
    }
    return (
        <>
            {loading ? (
                <div>بارگذاری</div>
            ) : (
                <Helmet title="Checkout">
                    <CommonSection title="رسید" />
                    <section>
                        <Container>
                            <Row>
                                <Col lg="8" md="6">
                                    <h6 className="mb-4">آدرس تحویل</h6>
                                    <form className="checkout__form">
                                        <div className="form__group">
                                            <input
                                                value={userInfo.name || ''}
                                                type="text"
                                                placeholder="نام"
                                                required
                                                onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="form__group">
                                            <input
                                                value={userInfo.lastname || ''}
                                                type="text"
                                                placeholder="نام خانوادگی"
                                                required
                                                onChange={(e) => setUserInfo({ ...userInfo, lastname: e.target.value })}
                                            />
                                        </div>


                                        <div className="form__group">
                                            <input
                                                value={userInfo.phone || ''}
                                                type="number"
                                                placeholder="شماره همراه"
                                                required
                                                onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
                                            />
                                        </div>
                                        <div className="form__group">
                                            <input
                                                value={userInfo.address || ''}
                                                type="text"
                                                placeholder="آدرس"
                                                required
                                                onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })}
                                            />
                                        </div>
                                        
                                    </form>
                                    <button onClick={handlesubmit} className="addTOCart__btn">
                                            پرداخت
                                        </button>
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
            )}
        </>
    )
}
export default CheckOutForm;