import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product, col }) => {
        return (
                <div className={`col-sm-12 col-md-4 col-lg-${col} my-3`}>
                        <div className="card p-2 rounded" id="product_hover" style={{ height: "45vh"}}>
                                <Link to={`/product/${product._id}`} className="nav-link">
                                        <img
                                                className="card-img-top mx-auto "
                                                src={product.images[0].url}
                                                alt="product images"
                                                style={{ height: "20vh" }}
                                        />
                                        <div className="card-body d-flex flex-column">
                                                <h6 className="card-title">
                                                        <Link
                                                                to={`/product/${product._id}`}
                                                        >
                                                                {(product.name?.length < 52)
                                                                ? product.name
                                                                : product.name?.slice(0,51) + "..."
                                                                }
                                                        </Link>
                                                </h6>
                                                <div style={{position:"absolute",bottom: "0",top: "77%"}}>
                                                        <div className="ratings mt-auto">
                                                                <div className="rating-outer">
                                                                        <div
                                                                                className="rating-inner"
                                                                                style={{
                                                                                        width: `${
                                                                                                (product.ratings /
                                                                                                        5) *
                                                                                                100
                                                                                        }%`,
                                                                                }}
                                                                        ></div>
                                                                </div>
                                                                <span id="no_of_reviews">
                                                                        ({product.numOfReviews}{" "}
                                                                        Reviews)
                                                                </span>
                                                        </div>
                                                        <p className="card-text text-dark">
                                                                ${product.price}
                                                        </p>
                                                </div>
                                                {/* <Link
                                                        to={`/product/${product._id}`}
                                                        id="view_btn"
                                                        className="btn btn-block"
                                                >
                                                        View Details
                                                </Link> */}
                                        </div>
                                </Link>
                        </div>
                </div>
        );
};

export default Product;
