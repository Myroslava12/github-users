import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { 
    usersSelector, 
    sinceSelector, 
    totalCountSelector, 
    pageSelector,
    usersSearchSelector,
    usersErr,
    usersByUsernameSelector
} from "../../duck/selectors";
import { getUsersRequest } from "../../duck/users/action";
import { getUsersSearchNextRequest } from "../../duck/usersSearch/action";

import User from "../user/User";
import Loader from "../loader/Loader";
import Form from "../form/Form";

const Home = () => {
    const dispatch = useDispatch();
    const users = useSelector(usersSelector);
    const since = useSelector(sinceSelector);
    const totalCount = useSelector(totalCountSelector);
    const page = useSelector(pageSelector);
    const usersSearch = useSelector(usersSearchSelector);
    const err = useSelector(usersErr);
    const loader = useRef(null);
    const history = useHistory();
    const query = new URLSearchParams(history.location.search);
    const queryValue = query.get("query");
    const [usersIsVisible, setUsersIsVisible] = useState(false);
    const [usersSearchIsVisible, setUsersSearchIsVisible] = useState(false);
    const usersByUsername = useSelector(usersByUsernameSelector);
    
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "20px",
            threshold: 1.0
        };
        const observer = new IntersectionObserver(handleObserver, options);
        if (loader.current) {
            observer.observe(loader.current)
        }
        return () => {
            observer.disconnect();
        };
    }, [users, usersSearch]);

    console.log(usersByUsername);

    useEffect(() => {
        if (!users.length && !queryValue) {
            setUsersIsVisible(true);
            setUsersSearchIsVisible(false);
            dispatch(getUsersRequest(since));
        }  else if (!usersSearch.length && queryValue) {
            setUsersSearchIsVisible(true);
            setUsersIsVisible(false);
            dispatch(getUsersSearchNextRequest(queryValue, page));
        }
    }, []);

    const handleObserver = (entities) => {
        const target = entities[0];
        if (target.isIntersecting && !queryValue) {
            dispatch(getUsersRequest(since + 30));
        } else if (target.isIntersecting && queryValue) {
            if (usersSearch.length <= totalCount) {
                dispatch(getUsersSearchNextRequest(queryValue, page + 1));
            }
        }
    }

    const isUsersSearch = (usersSearchIsVisible && usersSearch.length !== totalCount && usersSearch.length > 0);
    const isUsers = (usersIsVisible && users.length > 0);
    const countTotalUsers = (usersSearch.length > 0 && usersByUsername.total_count !== undefined);

    return (
        <div className="container">
            <header className="header-section">
                <h1 className="title">GitHub Users Information</h1>
                <Form />
            </header>
            {err && <h2 className="title-not-found">Ooops... Can't find the user!</h2>}
            {countTotalUsers && <p className="title-count">
                Users: 
                <span> {usersByUsername.total_count}</span>
            </p>}
            <ul className="users-list">
                {queryValue ? usersSearch.map((user, id) => {
                    return <li key={id} className="user-item">
                        <User user={user} />
                    </li>;
                }) : users.map((user, id) => {
                    return <li key={id} className="user-item">
                        <User user={user} />
                    </li>;
                })}
            </ul>
            {(isUsers && !isUsersSearch) ? <Loader loader={loader} /> : <Loader loader={loader} />}
        </div>
    )
}

export default Home;