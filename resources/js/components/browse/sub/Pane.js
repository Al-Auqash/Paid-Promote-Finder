import React from "react";
import { useNavigate } from "react-router-dom";

export const Pane = () => {
    const navigate = useNavigate();
    const toYourAds = () => {
        navigate("your-ads");
    };

    const toCreateYourAds = () => {
        navigate("create-your-ads");
    };

    const toBrowse = () => {
        navigate("/browse");
    };
    return (
        <div className="row mb-3 panel h-100">
            <div className="col pane pb-4 rounded">
                <p className="mt-2">Navigation Pane</p>
                <div className="form-group subFilterTitle">
                    <button
                        className="btn btn-warning w-100"
                        onClick={toBrowse}
                    >
                        <span className="m-2">Home</span>
                    </button>
                </div>
                <div className="form-group subFilterTitle">
                    <button
                        className="btn btn-warning w-100"
                        onClick={toCreateYourAds}
                    >
                        <span className="m-2">Create Ads</span>
                    </button>
                </div>
                <div className="form-group subFilterTitle">
                    <button
                        className="btn btn-warning w-100"
                        onClick={toYourAds}
                    >
                        <span className="m-2">Your Ads</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
