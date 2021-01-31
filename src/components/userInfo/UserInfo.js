import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import cx from "classnames";

import { getUserDataRequest } from "../../duck/userInfo/action";
import { 
    userInfoSelector, 
    loaderUserInfoSelector, 
    userInfoErr 
} from '../../duck/selectors';
import * as ROUTER from "../../constants/routes";

import Loader from "../loader/Loader";
import UserDetail from "./UserDetail";

const UserInfo = () => {
    const {login} = useParams();
    const dispatch = useDispatch();
    const data = useSelector(userInfoSelector);
    const loading = useSelector(loaderUserInfoSelector);
    const err = useSelector(userInfoErr);

    useEffect(() => {
        {!err && dispatch(getUserDataRequest(login))};
    }, []);

    return (
        <div className="container user-container">
            {loading && <Loader />}
            <nav className="user-nav">
                <Link className="user-info-link" to={ROUTER.HOME}>
                    <i className="fas fa-arrow-left"></i>
                    Back
                </Link>
            </nav>
            {err && <h2 className="title-not-found">Ooops... Can't find the user!</h2>}
            {!err && <div className={cx("user-card", {
                "hidden": loading,
            })}>
                <div className="user-bg-box">
                    <div className="user-box-img">
                        <img className="user-img" src={data.avatar_url} alt="user" />
                    </div>
                    <div className="user-info-box">
                        <h2 className="user-info-name">{data.name}</h2>
                        <p className="user-location">{data.location}</p>
                        <UserDetail user={data} />
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default UserInfo;