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
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>

                    {props.image4 && (
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="3"
                            aria-label="Slide 4"
                        ></button>
                    )}
                    {props.image5 && (
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="3"
                            aria-label="Slide 5"
                        ></button>
                    )}
                </div>
                <div className="carousel-inner">
                    {props.image1 && (
                        <div className="carousel-item active">
                            <img
                                src={props.image1}
                                className="d-block w-100 vh-50 imageCarousel"
                                alt="..."
                            />
                        </div>
                    )}
                    {props.image2 && (
                        <div className="carousel-item">
                            <img
                                src={props.image2}
                                className="d-block w-100 vh-50 imageCarousel"
                                alt="..."
                            />
                        </div>
                    )}
                    {props.image3 && (
                        <div className="carousel-item">
                            <img
                                src={props.image3}
                                className="d-block w-100 vh-50 imageCarousel"
                                alt="..."
                            />
                        </div>
                    )}
                    {props.image4 && (
                        <div className="carousel-item">
                            <img
                                src={props.image4}
                                className="d-block w-100 vh-50 imageCarousel"
                                alt="..."
                            />
                        </div>
                    )}
                    {props.image5 && (
                        <div className="carousel-item">
                            <img
                                src={props.image5}
                                className="d-block w-100 vh-50 imageCarousel"
                                alt="..."
                            />
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
