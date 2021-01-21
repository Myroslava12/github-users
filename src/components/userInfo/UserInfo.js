import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { useParams } from "react-router-dom";
import { getUserDataRequest } from "../../duck/actions";
import {Link} from "react-router-dom";
import * as ROUTER from "../../constants/routes";
import Loader from "../loader/Loader";
import cx from "classnames";

const UserInfo = () => {
    const {login} = useParams();
    const dispatch = useDispatch();
    const data = useSelector(state => state.userData.userData);
    const loading = useSelector(state => state.userData.loading);
    console.log(data);

    useEffect(() => {
        dispatch(getUserDataRequest(login));
    }, []);

    return (
        <div className="container user-container">
            <div className="circle-bg"/>
            {loading && <Loader />}
            <nav className="user-nav">
                <Link className="user-link" to={ROUTER.HOME}>
                    <i className="fas fa-arrow-left"></i>
                    Back
                </Link>
            </nav>
            <div className={cx("user-card", {
                "hidden": loading,
            })}>
                <div className="user-box-img">
                    <img className="user-img" src={data.avatar_url} />
                </div>
                <div className="user-info-box">
                    <h2 className="user-info-name">{data.name}</h2>
                    <p className="user-location">{data.location}</p>
                    <div className="user-info-container">
                        <p className="user-info">
                            <span className="user-detail">GitHub username</span>
                            <span className="user-text">{data.login}</span>
                        </p>
                        {data.company !== null && <p className="user-info">
                            <span className="user-detail">Company</span>
                            <span className="user-text">{data.company}</span>
                        </p>}
                        <p className="user-info">
                            <span className="user-detail">Public repositories</span>
                            <span className="user-text">{data.public_repos}</span>
                        </p>
                        <p className="user-info">
                            <span className="user-detail">Followers</span>
                            <span className="user-text">{data.followers}</span>
                        </p>
                        <p className="user-info">
                            <span className="user-detail">GitHub url</span>
                            <a className="user-text user-detail-link" href={data.html_url} target="_blank">User profile</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserInfo;