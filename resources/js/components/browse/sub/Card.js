import React from "react";
import { Link } from "react-router-dom";

const card = () => {
    return (
        <div className="grid-wrapper">
            <Link to="/browse/result" className="my-3 card-search-text">
                <div className="card background-orange">
                    <img
                        src="images/daph_cat.jpg"
                        className="card-img-top"
                        alt="..."
                    />
                    <div className="card-body">
                        <p className="card-title fw-bold">Anniversary</p>
                        <p className="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default card;
