import React from "react";
import cat from "../../assets/octocat.svg";

const Loader = ({loader}) => {
    return (
        <div className="loader-spinner" ref={loader}>
            <img src={cat} className="loader-img" alt="octocat" />
        </div>
    )
}

export default Loader;