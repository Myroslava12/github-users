import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { useParams } from "react-router-dom";
import { getUserDataRequest } from "../../duck/actions";
import {Link} from "react-router-dom";
import * as ROUTER from "../../constants/routes";
import Loader from "../loader/Loader";
import cx from "classnames";
import UserDetail from "./UserDetail";

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
            {loading && <Loader />}
            <nav className="user-nav">
                <Link className="user-info-link" to={ROUTER.HOME}>
                    <i className="fas fa-arrow-left"></i>
                    Back
                </Link>
            </nav>
            <div className={cx("user-card", {
                "hidden": loading,
            })}>
                <div className="user-bg-box">
                    <div className="user-box-img">
                        <img className="user-img" src={data.avatar_url} />
                    </div>
                    <div className="user-info-box">
                        <h2 className="user-info-name">{data.name}</h2>
                        <p className="user-location">{data.location}</p>
                        <UserDetail user={data} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserInfo;