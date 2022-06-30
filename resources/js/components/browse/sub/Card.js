import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const card = ({ state }) => {
    return (
        <div className="grid-wrapper">
            {state?.length ? (
                state.map((ads) => (
                    <Link
                        to={{
                            pathname: `/browse/result/${ads.id}`,
                        }}
                        className="my-3 card-search-text"
                        key={ads.id}
                    >
                        <div className="card background-grey h-100">
                            <img
                                src={
                                    ads.image_path?.length
                                        ? "../images/" + ads.image_path
                                        : "../images/daph_cat.jpg"
                                }
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <p className="card-title fw-bold">
                                    {" "}
                                    {ads.title}
                                </p>
                                <p className="card-text text-truncate">
                                    {" "}
                                    {ads.description}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))
            ) : (
                <p>No data found</p>
            )}
        </div>
    );
};

export default card;
