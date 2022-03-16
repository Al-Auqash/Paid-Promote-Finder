import React from "react";

import Main from "../../../../img/main.png";
import "./style.css";

const firstContent = () => {
    return (
        <div class="row h-100 p-0 m-0">
            <div class="w-50 d-flex flex-column align-item-center justify-content-center">
                <p>
                    find upcoming event below and have them promote your product
                </p>
                <form method="post">
                    <div class="input-group mb-3">
                        <input
                            type="text"
                            class="form-control"
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
            <div class="w-50 d-flex align-item-center justify-content-center">
                <img src={Main} class="image" />
            </div>
        </div>
    );
};

export default firstContent;
