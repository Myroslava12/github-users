import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getUserDataRequest} from "../../duck/actions";
import {Link} from "react-router-dom";
import * as ROUTER from "../../constants/routes";
import Loader from "../loader/Loader";
import cx from "classnames";

const UserInfo = () => {
    const {login} = useParams();
    const dispatch = useDispatch();
    const data = useSelector(state => state.userData.userData);
    const loading = useSelector(state => state.userData.loading);
    console.log(loading);

    useEffect(() => {
        dispatch(getUserDataRequest(login));
    }, []);

    return (
        <div className="container">
            {loading && <Loader />}
            <nav className="user--nav">
                <Link className="user-link" to={ROUTER.HOME}>
                    <i className="fas fa-arrow-left"></i>
                    Back
                </Link>
            </nav>
            <div className={cx("user-card", {
                "hidden": loading === true,
            })}>
                <div className="user--box--img">
                    <img className="user--img" src={data.avatar_url} />
                </div>
                <div className="user--info">
                    <h2 className="user--info--name">{data.name}</h2>
                    <p className="user--info--username">{data.username}</p>
                    <a className="user--info--link" href={data.html_url} target="_blank">Profil on GitHub Platform</a>
                    <p className="user--info--repos">Public Repositories: {data.public_repos}</p>
                </div>
            </div>
        </div>
    )
}

export default UserInfo;