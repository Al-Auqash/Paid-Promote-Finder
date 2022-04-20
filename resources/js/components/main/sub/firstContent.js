import React from "react";

import Main from "../../../../img/main.png";
import "./style.css";

const firstContent = () => {
    return (
        <div class="display-flex-row height-full w-100">
            <div class="display-flex-col mx-4 w-100">
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
                            placeholder="Try to type 'Anniversary' "
                            aria-label="Try to type 'Anniversary' "
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
            <div class="display-flex-col mx-4 w-100">
                <img src={Main} class="image" />
            </div>
        </div>
    );
};

export default firstContent;
