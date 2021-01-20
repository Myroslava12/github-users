import React from "react";

const User = ({user}) => {
    return <li className="autocomplete-item">
        <div className="user-img-autocomplete">
            <img src={user.avatar_url} alt="avatar" />
        </div>
        <div className="user-box-info">
            <p className="user-username">{user.login}</p>
        </div>
    </li>
}

export default User;