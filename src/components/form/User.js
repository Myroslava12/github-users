import React from "react";
import {Link} from "react-router-dom";

const User = ({user}) => {

    return <li className="autocomplete-item">
        <div className="user-img-autocomplete-box">
            <img src={user.avatar_url} alt="avatar" className="user-img-autocomplete" />
        </div>
        <div className="user-box-info">
            <p className="user-username">{user.login}</p>
            <Link className="user-autocomplete-link" to={`/user/${user.login}`}>User info</Link>
        </div>
    </li>
}

export default User;