import React from "react";

import "./Style.css";

const CardCarousel = (props) => {
    return (
        <div>
            <div
                id="carouselExampleCaptions"
                className="carousel slide"
                data-bs-ride="false"
            >
                <div className="carousel-indicators">
                    {props.image1 && props.title1 && props.text1 && (
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                    )}
                    {props.image2 && props.title2 && props.text2 && (
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                        ></button>
                    )}
                    {props.image3 && props.title3 && props.text3 && (
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                        ></button>
                    )}
                    {props.image4 && props.title4 && props.text4 && (
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="3"
                            aria-label="Slide 4"
                        ></button>
                    )}
                    {props.image5 && props.title5 && props.text5 && (
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="3"
                            aria-label="Slide 5"
                        ></button>
                    )}
                </div>
                <div className="carousel-inner">
                    {props.image1 && props.title1 && props.text1 && (
                        <div
                            className="carousel-item active"
                            data-bs-interval="10000"
                        >
                            <img
                                src={props.image1}
                                className="d-block w-100 vh-50 imageCarousel"
                                alt="..."
                            />
                            <div className="carousel-caption d-none d-md-block bg-glass">
                                <h5>{props.title1}</h5>
                                <p>{props.text1}</p>
                            </div>
                        </div>
                    )}
                    {props.image2 && props.title2 && props.text2 && (
                        <div className="carousel-item" data-bs-interval="2000">
                            <img
                                src={props.image2}
                                className="d-block w-100 vh-50 imageCarousel"
                                alt="..."
                            />
                            <div className="carousel-caption d-none d-md-block bg-glass">
                                <h5>{props.title2}</h5>
                                <p>{props.text2}</p>
                            </div>
                        </div>
                    )}
                    {props.image3 && props.title3 && props.text3 && (
                        <div className="carousel-item" data-bs-interval="2000">
                            <img
                                src={props.image3}
                                className="d-block w-100 vh-50 imageCarousel"
                                alt="..."
                            />
                            <div className="carousel-caption d-none d-md-block bg-glass">
                                <h5>{props.title3}</h5>
                                <p>{props.text3}</p>
                            </div>
                        </div>
                    )}
                    {props.image4 && props.title4 && props.text4 && (
                        <div className="carousel-item" data-bs-interval="2000">
                            <img
                                src={props.image4}
                                className="d-block w-100 vh-50 imageCarousel"
                                alt="..."
                            />
                            <div className="carousel-caption d-none d-md-block bg-glass">
                                <h5>{props.title4}</h5>
                                <p>{props.text4}</p>
                            </div>
                        </div>
                    )}
                    {props.image5 && props.title5 && props.text5 && (
                        <div className="carousel-item">
                            <img
                                src={props.image5}
                                className="d-block w-100 vh-50 imageCarousel"
                                alt="..."
                            />
                            <div className="carousel-caption d-none d-md-block bg-glass">
                                <h5>{props.title5}</h5>
                                <p>{props.text5}</p>
                            </div>
                        </div>
                    )}
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default CardCarousel;
