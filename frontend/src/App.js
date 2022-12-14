import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

import Home from "./components/Home";
import ProductDetails from "./components/product/ProductDetails";

// Cart Imports
import Cart from "./components/cart/Cart";
import ConfirmOrder from "./components/cart/ConfirmOrder";
import Shipping from "./components/cart/Shipping";
// import Payment from "./components/cart/Payment";
import OrderSuccess from "./components/cart/OrderSuccess";

// Order Imports
import ListOrders from "./components/order/ListOrders";
import OrderDetails from "./components/order/OrderDetails";

// Auth or User imports
import ForgotPassword from "./components/user/ForgotPassword";
import Login from "./components/user/Login";
import NewPassword from "./components/user/NewPassword";
import Profile from "./components/user/Profile";
import Register from "./components/user/Register";
import UpdatePassword from "./components/user/UpdatePassword";
import UpdateProfile from "./components/user/UpdateProfile";

// Admin Imports
import Dashboard from "./components/admin/Dashboard";
import NewProduct from "./components/admin/NewProduct";
import OrdersList from "./components/admin/OrdersList";
import ProcessOrder from "./components/admin/ProcessOrder";
import ProductReviews from "./components/admin/ProductReviews";
import ProductsList from "./components/admin/ProductsList";
import UpdateProduct from "./components/admin/UpdateProduct";
import UpdateUser from "./components/admin/UpdateUser";
import UsersList from "./components/admin/UsersList";

import { useSelector } from "react-redux";
import { loadUser } from "./actions/userActions";
import ProtectedRoute from "./components/route/ProtectedRoute";
import store from "./store";
// import axios from "axios";

// Payment
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
import HomeProducts from "./components/HomeProducts";

function App() {
        // https://shopit-admin.herokuapp.com/
        // const [stripeApiKey, setStripeApiKey] = useState("");

        useEffect(() => {
                store.dispatch(loadUser());

                // async function getStripApiKey() {
                //         const { data } = await axios.get("/api/v1/stripeapi");

                //         setStripeApiKey(data.stripeApiKey);
                // }

                // getStripApiKey();
        }, []);

        const { user, isAuthenticated } = useSelector((state) => state.auth); //loading

        return (
                <Router>
                        <div className="App">
                                <Header />

                                {/* <Switch> */}
                                <Route path="/" component={Home} exact />
                                <Route
                                        path="/search/:keyword"
                                        component={HomeProducts}
                                        exact
                                />
                                <div className="container">
                                        <Route
                                                path="/product/:id"
                                                component={ProductDetails}
                                                exact
                                        />

                                        <Route
                                                path="/cart"
                                                component={Cart}
                                                exact
                                        />
                                        <ProtectedRoute
                                                path="/shipping"
                                                component={Shipping}
                                        />
                                        <ProtectedRoute
                                                path="/confirm"
                                                component={ConfirmOrder}
                                                exact
                                        />
                                        <ProtectedRoute
                                                path="/success"
                                                component={OrderSuccess}
                                        />
                                        {/* {stripeApiKey && (
                                                <Elements
                                                        stripe={loadStripe(
                                                                stripeApiKey
                                                        )}
                                                >
                                                        <ProtectedRoute
                                                                path="/payment"
                                                                component={
                                                                        Payment
                                                                }
                                                        />
                                                </Elements>
                                        )} */}

                                        <Route
                                                path="/login"
                                                component={Login}
                                        />
                                        <Route
                                                path="/register"
                                                component={Register}
                                        />
                                        <Route
                                                path="/password/forgot"
                                                component={ForgotPassword}
                                                exact
                                        />
                                        <Route
                                                path="/password/reset/:token"
                                                component={NewPassword}
                                                exact
                                        />
                                        <ProtectedRoute
                                                path="/me"
                                                component={Profile}
                                                exact
                                        />
                                        <ProtectedRoute
                                                path="/me/update"
                                                component={UpdateProfile}
                                                exact
                                        />
                                        <ProtectedRoute
                                                path="/password/update"
                                                component={UpdatePassword}
                                                exact
                                        />

                                        <ProtectedRoute
                                                path="/orders/me"
                                                component={ListOrders}
                                                exact
                                        />
                                        <ProtectedRoute
                                                path="/order/:id"
                                                component={OrderDetails}
                                                exact
                                        />
                                </div>

                                <ProtectedRoute
                                        path="/dashboard"
                                        isAdmin={true}
                                        component={Dashboard}
                                        exact
                                />
                                <ProtectedRoute
                                        path="/admin/products"
                                        isAdmin={true}
                                        component={ProductsList}
                                        exact
                                />
                                <ProtectedRoute
                                        path="/admin/product"
                                        isAdmin={true}
                                        component={NewProduct}
                                        exact
                                />
                                <ProtectedRoute
                                        path="/admin/product/:id"
                                        isAdmin={true}
                                        component={UpdateProduct}
                                        exact
                                />
                                <ProtectedRoute
                                        path="/admin/orders"
                                        isAdmin={true}
                                        component={OrdersList}
                                        exact
                                />
                                <ProtectedRoute
                                        path="/admin/order/:id"
                                        isAdmin={true}
                                        component={ProcessOrder}
                                        exact
                                />
                                <ProtectedRoute
                                        path="/admin/users"
                                        isAdmin={true}
                                        component={UsersList}
                                        exact
                                />
                                <ProtectedRoute
                                        path="/admin/user/:id"
                                        isAdmin={true}
                                        component={UpdateUser}
                                        exact
                                />
                                <ProtectedRoute
                                        path="/admin/reviews"
                                        isAdmin={true}
                                        component={ProductReviews}
                                        exact
                                />
                                {/* </Switch> */}

                                {(!isAuthenticated ||
                                        user.role !== "admin") && <Footer />}
                        </div>
                </Router>
        );
}

export default App;
