import HomeBanner from "./HomeBanner";
import HomeAd from "./HomeAd";
import HomeBrands from "./HomeBrands";
import HomeCategories from "./HomeCategories";
import { Fragment, useEffect } from "react";
import Loader from "./layout/Loader";
import { useDispatch, useSelector } from "react-redux";
import MetaData from "./layout/MetaData";
import Product from "./product/Product";
import { getAdminProducts } from "../actions/productActions";
import { useAlert } from "react-alert";

const Home = () => {
        const alert = useAlert();
        const dispatch = useDispatch();
        const { loading, error, products } = useSelector(
                (state) => state.products
        );
        useEffect(() => {
                if (error) {
                        return alert.error(error);
                }
                dispatch(getAdminProducts());
        }, [alert, dispatch, error]);
        return (
                <>
                        {loading ? (
                                <Loader />
                        ) : (
                                <Fragment>
                                        <MetaData
                                                title={
                                                        "Buy Best Products Online"
                                                }
                                        />
                                        <section>
                                                <HomeBanner />
                                        </section>

                                        <section className="mb-5">
                                                <HomeAd />
                                        </section>

                                        <section className="mb-5">
                                                <HomeBrands />
                                        </section>

                                        <section className="mb-5">
                                                <HomeCategories />
                                        </section>

                                        <section className="container">
                                                <h2
                                                        id="products_heading"
                                                        className="text-center"
                                                >
                                                        <span className="primary_color">
                                                                Latest
                                                        </span>{" "}
                                                        <span className="secondary_color">
                                                                Products
                                                        </span>
                                                </h2>
                                                <div className="row">
                                                        {products.length < 8 ? (
                                                                <Fragment>
                                                                        {products
                                                                                .filter(
                                                                                        (
                                                                                                value
                                                                                        ) =>
                                                                                                value.price >
                                                                                                50
                                                                                )
                                                                                .map(
                                                                                        (
                                                                                                product
                                                                                        ) => (
                                                                                                <Product
                                                                                                        key={
                                                                                                                product._id
                                                                                                        }
                                                                                                        product={
                                                                                                                product
                                                                                                        }
                                                                                                        col={
                                                                                                                3
                                                                                                        }
                                                                                                />
                                                                                        )
                                                                                )}
                                                                        {/* <button className="btn btn-warning">
                                                                                View
                                                                                More
                                                                        </button> */}
                                                                </Fragment>
                                                        ) : (
                                                                <Fragment>
                                                                        {products.map(
                                                                                (
                                                                                        product
                                                                                ) => (
                                                                                        <Product
                                                                                                key={
                                                                                                        product._id
                                                                                                }
                                                                                                product={
                                                                                                        product
                                                                                                }
                                                                                                col={
                                                                                                        3
                                                                                                }
                                                                                        />
                                                                                )
                                                                        )}
                                                                </Fragment>
                                                        )}
                                                </div>
                                        </section>
                                </Fragment>
                        )}
                </>
        );
};

export default Home;
