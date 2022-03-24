import React from "react";

import FirstContent from "./sub/firstContent";
import SecondContent from "./sub/secondContent";

const Index = () => {
    return (
        <div class="d-flex flex-column justify-content-center p-4">
            <FirstContent />
            <SecondContent />
        </div>
    );
};

export default Index;
