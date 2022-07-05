import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import loggedIn from "../../authentication/LoggedIn";

const yourAds = () => {
    const user_id = localStorage.getItem("user_id");
    const params = {
        user_id: user_id,
    };
    const [ads, setAds] = useState([]);
    const navigate = useNavigate();

    const getYourAds = () => {
        axios
            .get("/api/browse/your-ads", {
                params: { user_id: params.user_id },
            })
            .then((response) => {
                setAds(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const submitDeleteAds = (event) => {
        event.preventDefault();

        axios
            .post("/api/browse/delete-your-ads", {
                params: { id: ads.id },
            })
            .then((response) => {
                console.log(response);
                navigate("/browse/your-ads");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getYourAds();
    }, []);

    return (
        <>
            {ads?.length ? (
                ads.map((ads) => (
                    <div className="card mb-3 background-grey" key={ads.id}>
                        <div className="row g-0">
                            <div className="col-md-2">
                                <img
                                    src={
                                        ads.image_path?.length
                                            ? "../images/" + ads.image_path
                                            : "../images/daph_cat.jpg"
                                    }
                                    className="card-img-right rounded yourAdsImage"
                                    alt="..."
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <p className="card-title fw-bold">
                                        {"(" + ads.category_name + ")"}{" "}
                                        {ads.title}
                                    </p>
                                    <p className="card-text text-truncate">
                                        {" "}
                                        {ads.description}
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="card-body">
                                    <Link
                                        to={{
                                            pathname: `/browse/result/${ads.id}`,
                                        }}
                                        className="btn text-white background-dark-orange w-100 mb-3"
                                    >
                                        Review
                                    </Link>
                                    <Link
                                        to={{
                                            pathname: `/browse/edit-your-ads/${ads.id}`,
                                        }}
                                        className="btn text-white background-dark-orange w-100 mb-3"
                                    >
                                        Edit
                                    </Link>
                                    <a
                                        onClick={submitDeleteAds}
                                        className="btn text-white background-dark-orange w-100"
                                    >
                                        Delete
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>No Ads Found</p>
            )}
        </>
    );
};

export default yourAds;
