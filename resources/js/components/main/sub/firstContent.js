import React from "react";

import "./Style.css";

const firstContent = () => {
    return (
        <div className="bg-image">
            <div className="display-flex-row vh-100 w-100 bg-content">
                <div className="display-flex-col mx-4 w-100">
                    <h2>PAID PROMOTE FINDER</h2>
                    <p>
                        find an upcoming event below and have them promote your
                        product
                    </p>
                    <form method="post">
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control searchInput"
                                placeholder="Try to type 'Anniversary' "
                                aria-label="Try to type 'Anniversary' "
                                aria-describedby="button-addon2"
                            />
                            <button
                                className="btn btn-outline-secondary searchBtn"
                                type="button"
                                id="searchBtn"
                            >
                                Search
                            </button>
                        </div>
                    </form>
                    <a href="/authentication/signUp" className="joinBtn">or join for free</a>
                </div>
                <div className="display-flex-col mx-4 w-100"></div>
            </div>
        </div>
    );
};

export default firstContent;
