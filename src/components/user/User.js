import React from "react";
import {Link} from "react-router-dom";

const User = ({user}) => {
    return <li className="user-item">
        <div className="user-bg-box">
            <div className="user-img-box">
                <img className="user-img-home" src={user.avatar_url} />
            </div>
            <div className="user-information">
                <p className="user-name">
                    <i className="fas fa-user"></i>
                    {user.login}
                </p>
                <Link className="user-link" to={`/user/${user.login}`}>
                    <i className="fas fa-file-alt"></i>
                    User info
                </Link>
                <a href={user.html_url} target="_blank" className="user-link">
                    <i className="fab fa-github"></i>
                    GitHub profile
                </a>
            </div>
        </div>
    </li>
}

export default User;