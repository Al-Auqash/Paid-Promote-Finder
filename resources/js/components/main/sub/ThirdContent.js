import React from "react";

const ThirdContent = () => {
    return (
        <div className="m-5 vh-100">
            <h2 className="w-100 text-center">OUR CLIENTS</h2>
            <div className="d-flex justify-content-evenly flex-wrap h-100 p-0 my-4 secondContent">
                <div className="mx-5 card-client background-grey py-2">
                    <img className="card-img-top p-2 logoPartner" src="/images/coffee-logo.png" width="100" />
                </div>
                <div className="mx-5 card-client background-grey py-2">
                    <img className="card-img-top p-2 logoPartner" src="/images/cat-logo.png" width="100" />
                </div>
                <div className="mx-5 card-client background-grey py-2 d-flex flex-row align-items-center">
                    <img className="card-img-top p-2 logoPartner" src="/images/lotus-logo.png" width="100" />
                </div>
                <div className="mx-5 card-client background-grey py-2">
                    <img className="card-img-top p-2 logoPartner" src="/images/starbucks-logo.png" width="100" />
                </div>
            </div>
        </div>
    );
};

export default ThirdContent;
