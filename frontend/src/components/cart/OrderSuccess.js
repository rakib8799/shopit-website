import React, { Fragment, useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearErrors, createOrder } from "../../actions/orderActions";
import MetaData from "../layout/MetaData";

const OrderSuccess = () => {
        const alert = useAlert();
        const dispatch = useDispatch();

        // const { user } = useSelector((state) => state.auth);
        const { cartItems, shippingInfo } = useSelector((state) => state.cart);
        const { error } = useSelector((state) => state.newOrder);
        useEffect(() => {
                if (error) {
                        alert.error(error);
                        dispatch(clearErrors());
                }
        }, [dispatch, alert, error]);

        const order = {
                orderItems: cartItems,
                shippingInfo,
        };
        const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
        if (orderInfo) {
                order.itemsPrice = orderInfo.itemsPrice;
                order.shippingPrice = orderInfo.shippingPrice;
                order.taxPrice = orderInfo.taxPrice;
                order.totalPrice = orderInfo.totalPrice;
        }

        // const paymentData = {
        //         amount: Math.round(orderInfo.totalPrice * 100),
        // };

        const submitHandler = () => {
                // e.preventDefault();
                document.querySelector("#order").disabled = true;
                try {
                        dispatch(createOrder(order));
                } catch (error) {
                        document.querySelector("#order").disabled = false;
                        alert.error(error.response.data.message);
                }
        };

        // name: user.name,
        //                                                 email: user.email,
        return (
                <Fragment>
                        <MetaData title={"Order Success"} />

                        <div className="row justify-content-center">
                                <div className="col-6 mt-5 text-center">
                                        <img
                                                className="my-5 img-fluid d-block mx-auto"
                                                src="/images/order_success.png"
                                                alt="Order Success"
                                                width="200"
                                                height="200"
                                        />

                                        <h2>
                                                Your Order has been placed
                                                successfully.
                                        </h2>

                                        <Link
                                                to="/orders/me"
                                                onClick={submitHandler}
                                                id="order"
                                        >
                                                Go to Orders
                                        </Link>
                                </div>
                        </div>
                </Fragment>
        );
};

export default OrderSuccess;
