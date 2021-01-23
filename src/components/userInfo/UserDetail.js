import React from "react";

const UserDetail = ({user}) => {
    return (
        <div className="user-info-container">
            <p className="user-info">
                <span className="user-detail">GitHub username</span>
                <span className="user-text">{user.login}</span>
            </p>
            {user.company !== null && <p className="user-info">
                <span className="user-detail">Company</span>
                <span className="user-text">{user.company}</span>
            </p>}
            <p className="user-info">
                <span className="user-detail">Public repositories</span>
                <span className="user-text">{user.public_repos}</span>
            </p>
            <p className="user-info">
                <span className="user-detail">Followers</span>
                <span className="user-text">{user.followers}</span>
            </p>
            <p className="user-info">
                <span className="user-detail">GitHub url</span>
                <a className="user-text user-detail-link" href={user.html_url} target="_blank">User profile</a>
            </p>
        </div>
    )
}

export default UserDetail;