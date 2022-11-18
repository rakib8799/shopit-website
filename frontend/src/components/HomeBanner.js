const HomeBanner = () => {
        return (
                <>
                        <div
                                id="carouselExampleIndicators"
                                className="carousel slide shadow mb-5"
                                data-ride="carousel"
                                style={{ height: "60vh" }}
                        >
                                <ol className="carousel-indicators">
                                        <li
                                                data-target="#carouselExampleIndicators"
                                                data-slide-to="0"
                                                className="active"
                                        ></li>
                                        <li
                                                data-target="#carouselExampleIndicators"
                                                data-slide-to="1"
                                        ></li>
                                        <li
                                                data-target="#carouselExampleIndicators"
                                                data-slide-to="2"
                                        ></li>
                                </ol>
                                <div className="carousel-inner">
                                        <div className="carousel-item active">
                                                <img
                                                        src="https://res.cloudinary.com/mkrakib/image/upload/v1665306457/products/bg-1_mah6fx.jpg"
                                                        className="d-block w-100"
                                                        alt="..."
                                                        style={{
                                                                height: "60vh",
                                                        }}
                                                />
                                        </div>
                                        <div className="carousel-item">
                                                <img
                                                        src="https://res.cloudinary.com/mkrakib/image/upload/v1665306457/products/bg-2_su02hp.jpg"
                                                        className="d-block w-100"
                                                        alt="..."
                                                        style={{
                                                                height: "60vh",
                                                        }}
                                                />
                                        </div>
                                        <div className="carousel-item">
                                                <img
                                                        src="https://res.cloudinary.com/mkrakib/image/upload/v1665306457/products/bg-3_vgykfp.jpg"
                                                        className="d-block w-100"
                                                        alt="..."
                                                        style={{
                                                                height: "60vh",
                                                        }}
                                                />
                                        </div>
                                </div>
                                <a
                                        className="carousel-control-prev"
                                        href="#carouselExampleIndicators"
                                        role="button"
                                        data-slide="prev"
                                >
                                        <span
                                                className="carousel-control-prev-icon"
                                                aria-hidden="true"
                                        ></span>
                                        <span className="sr-only">
                                                Previous
                                        </span>
                                </a>
                                <a
                                        className="carousel-control-next"
                                        href="#carouselExampleIndicators"
                                        role="button"
                                        data-slide="next"
                                >
                                        <span
                                                className="carousel-control-next-icon"
                                                aria-hidden="true"
                                        ></span>
                                        <span className="sr-only">Next</span>
                                </a>
                        </div>
                </>
        );
};

export default HomeBanner;
