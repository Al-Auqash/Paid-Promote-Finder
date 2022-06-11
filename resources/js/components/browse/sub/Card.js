import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const card = () => {
    const [ads, setAds] = useState([]);

    useEffect(async () => {
        await axios
            .get("/api/browse")
            .then((response) => {
                // console.log(response)
                setAds(
                    response.data,
                );
                // console.log(ads);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    console.log("aaaaaaaa", ads);
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
            {ads.map((ads) => {
                <Link
                    to="/browse/result"
                    className="my-3 card-search-text"
                    key={ads.id}
                >
                    <img
                        src="images/daph_cat.jpg"
                        className="card-img-top"
                        alt="..."
                    />
                    <div className="card-body">
                        <p className="card-title fw-bold">{ads.title}</p>
                        <p className="card-text">{ads.description}</p>
                    </div>
                </Link>
            })}
        </div>
    );
};

export default card;
