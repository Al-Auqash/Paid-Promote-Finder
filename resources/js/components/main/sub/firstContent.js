import React from "react";

import Main from "../../../../img/main.png";
import "./style.css";

const firstContent = () => {
    return (
        <div class="d-flex flex-row align-item-center justify-content-center height-full p-0 my-4">
            <div class="d-flex flex-column align-item-center justify-content-center m-2">
                <p>
                    PAID PROMOTE FINDER
                </p>
                <p>
                    find upcoming event below and have them promote your product
                </p>
                <form method="post">
                    <div class="input-group mb-3">
                        <input
                            type="text"
                            class="form-control searchInput"
                            placeholder="Try type 'Anniversary' "
                            aria-label="Try type 'Anniversary' "
                            aria-describedby="button-addon2"
                        />
                        <button
                            class="btn btn-outline-secondary searchBtn"
                            type="button"
                            id="searchBtn"
                        >
                            Search
                        </button>
                    </div>
                </form>
                <a class="joinBtn">or join for free</a>
            </div>
            <div class="d-flex flex-column align-item-center justify-content-center m-2">
                <img src={Main} class="image" />
            </div>
        </div>
    );
};

export default firstContent;
