import React from "react";
import cat from "../../assets/octocat.svg";

const SmallLoader = () => {
    return (
        <div className="loader-spinner loader-spinner-small">
            <img src={cat} className="loader-img loader-img-small" alt="octocat" />
        </div>
    )
}

export default SmallLoader;