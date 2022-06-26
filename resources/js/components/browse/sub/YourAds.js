import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import loggedIn from "../../authentication/LoggedIn";

const yourAds = () => {
    const user_id = localStorage.getItem("user_id");
    const params = {
        user_id: user_id,
    };
    const [ads, setAds] = useState([]);
    const navigate = useNavigate();

    const getYourAds = async () => {
        await axios
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

    useEffect(() => {
        if (loggedIn) {
            getYourAds();
        } else {
            navigate("/");
        }
    });

    return (
        <>
            {ads.map((ads) => (
                <div className="card mb-3 background-dark-orange">
                    <div className="row g-0">
                        <div className="col-md-2">
                            <img
                                src={
                                    ads.image
                                        ? ads.image
                                        : "../images/daph_cat.jpg"
                                }
                                className="card-img-right yourAdsImage"
                                alt="..."
                            />
                        </div>
                        <div className="col-md-8">
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
                        <div className="col-md-2">
                            <div className="card-body">
                                <a href="/edit" className="btn border border-white text-white background-orange w-100 mb-3">Edit</a>
                                <a href="/delete" className="btn border border-white text-white background-orange w-100">Delete</a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default yourAds;
