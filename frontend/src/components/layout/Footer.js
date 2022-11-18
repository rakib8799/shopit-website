import React, { Fragment } from "react";

const Footer = () => {
        return (
                <Fragment>
                        <footer className="pt-5 primary_bg mt-5 pb-1">
                                <div className="d-flex container">
                                        <div className="mission w-50">
                                                <h5 className="text-center">
                                                        Our Mission
                                                </h5>
                                                <p className="text-muted text-justify">
                                                        Lorem ipsum dolor sit,
                                                        amet consectetur
                                                        adipisicing elit. Totam
                                                        eligendi debitis iusto
                                                        consequuntur nam
                                                        consequatur accusantium
                                                        laboriosam earum dolore
                                                        omnis quibusdam ipsum
                                                        laudantium mollitia
                                                        aspernatur, provident
                                                        obcaecati, culpa
                                                        corrupti excepturi?
                                                </p>
                                        </div>
                                        <div className="links w-25">
                                                <h5 className="text-center">
                                                        Quick Links
                                                </h5>
                                                <p className="text-center">
                                                        Home
                                                </p>
                                                <p className="text-center">
                                                        Shop
                                                </p>
                                                <p className="text-center">
                                                        Product
                                                </p>
                                                <p className="text-center">
                                                        Bank
                                                </p>
                                                <p className="text-center">
                                                        Contact
                                                </p>
                                        </div>
                                        <div className="contact w-25 text-center">
                                                <h5>Contact Us</h5>
                                                <div className="office">
                                                        <h6>Head Office</h6>
                                                        <p className="text-muted">
                                                                Lorem ipsum
                                                                dolor sit amet.
                                                        </p>
                                                </div>
                                                <div className="phone">
                                                        <h6>Phone Number</h6>
                                                        <p className="text-muted">
                                                                Lorem ipsum
                                                                dolor sit amet.
                                                        </p>
                                                </div>
                                                <div className="email">
                                                        <h6>Email</h6>
                                                        <p className="text-muted">
                                                                Lorem ipsum
                                                                dolor sit amet.
                                                        </p>
                                                </div>
                                        </div>
                                </div>
                                <p
                                        className="text-center mt-5 py-2"
                                        style={{ background: "#333333" }}
                                >
                                        Copyright &copy; Shopping Cart-
                                        {new Date().getFullYear()},All Rights
                                        Reserved
                                </p>
                        </footer>
                </Fragment>
        );
};

export default Footer;
