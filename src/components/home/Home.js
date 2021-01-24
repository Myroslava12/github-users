import React, { useEffect, useRef } from "react";
import { 
    usersSelector, 
    sinceSelector, 
    totalCountSelector, 
    pageSelector,
    usersSearchSelector
} from "../../duck/selectors";
import User from "../user/User";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { getUsersRequest } from "../../duck/users/action";
import { getUsersSearch } from "../../duck/usersSearch/action";
import Loader from "../loader/Loader";
import Form from "../form/Form";

const Home = () => {
    const dispatch = useDispatch();
    const users = useSelector(usersSelector);
    const since = useSelector(sinceSelector);
    const totalCount = useSelector(totalCountSelector);
    const page = useSelector(pageSelector);
    const usersSearch = useSelector(usersSearchSelector);
    const loader = useRef(null);
    const history = useHistory();
    const query = new URLSearchParams(history.location.search);
    const queryValue = query.get("query");
    
    console.log(usersSearch.length, page);
    
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

    useEffect(() => {
        if (!users.length && !queryValue) {
            dispatch(getUsersRequest(since))
        }  else if (!usersSearch.length && queryValue) {
            dispatch(getUsersSearch(queryValue, page));
        }
    }, []);

    const handleObserver = (entities) => {
        const target = entities[0];
        if (target.isIntersecting && !queryValue) {
            dispatch(getUsersRequest(since + 30));
        } else if (target.isIntersecting && queryValue) {
            usersSearch.length !== totalCount && dispatch(getUsersSearch(queryValue, page + 1));
        }
    }

    const usersSearchIsTruth = usersSearch.length <= totalCount && usersSearch.length !== totalCount;
    const isUsers = users.length > 0 && users;

    return (
        <div className="container">
            <header className="header-section">
                <h1 className="title">GitHub Users Information</h1>
                <Form />
            </header>
            <ul className="users--list">
                {!queryValue ? users.map((user, id) => {
                    return <User key={id} user={user} />;
                }) : usersSearch.map((user, id) => {
                    return <User key={id} user={user} />
                })}
            </ul>
            {isUsers && <Loader loader={loader} />}
            {usersSearchIsTruth && <Loader loader={loader} />}
        </div>
    )
}

export default Home;