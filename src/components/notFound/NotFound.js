import React from "react";
import {Link} from "react-router-dom";
import * as ROUTER from "../../constants/routes";

const NotFound = () => {
    return (
        <div className="container-not-found">
            <nav className="user-nav">
                <Link className="user-info-link" to={ROUTER.HOME}>
                    <i className="fas fa-arrow-left"></i>
                    Back
                </Link>
            </nav>
            <h2 className="title-not-found">Ooops... Can`t find page!</h2>
        </div>
    )
}

export default NotFound;