
import React from "react";
import {
    Link, 
} from "react-router-dom";

const AppOne = () => {

    function renderLinks() {
        return [1, 2, 3].map(item => {
            return <Link to={{ pathname: `/app1/${item}`, id: item }} key={item} >
                <div>App1 Item: {item}</div>
            </Link>
        })
    }

    return (
        <div>
            {renderLinks()}
        </div>
    );
};

export default AppOne;