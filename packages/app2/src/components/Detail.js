
import React from "react";
import {
    useParams,
} from "react-router-dom";

const Detail = () => {
    const params = useParams()

    return (
        <div>
            App2 Item Details {params.id}
        </div>
    );
};

export default Detail;