
import React from "react";
import {
    Link, 
} from "react-router-dom";

const AppTwo = () => {

    function renderLinks() {
        return [1, 2, 3].map(item => {
            return <Link to={{ pathname: `/app2/${item}`, id: item }} key={item} >
                <div>App2 Item: {item}</div>
            </Link>
        })
    }

    return (
        <div>
            {renderLinks()}
        </div>
    );
};

export default AppTwo;