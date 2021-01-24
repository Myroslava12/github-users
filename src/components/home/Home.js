import React, { useEffect, useRef } from "react";
import { 
    usersSelector, 
    sinceSelector, 
    totalCountSelector, 
    pageSelector 
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
    const loader = useRef(null);
    const history = useHistory();
    const query = new URLSearchParams(history.location.search);
    const queryValue = query.get("query");
    
    console.log(users.items, totalCount);
    
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
    }, [users]);

    useEffect(() => {
        (!users.length && queryValue === null) ? dispatch(getUsersRequest(since)) : dispatch(getUsersSearch(queryValue, page));
    }, []);

    const handleObserver = (entities) => {
        const target = entities[0];
        if (target.isIntersecting && queryValue === null) {
            dispatch(getUsersRequest(since + 30));
        } else if (target.isIntersecting && queryValue.length) {
            users.length !== totalCount && dispatch(getUsersSearch(queryValue, page + 1));
        }
    }

    return (
        <div className="container">
            <header className="header-section">
                <h1 className="title">GitHub Users Information</h1>
                <Form />
            </header>
            <ul className="users--list">
                {users.map((user, id) => {
                    return <User key={id} user={user} />;
                })}
            </ul>
            {(users.length > 0 && users.length !== totalCount) && <Loader loader={loader} />}
        </div>
    )
}

export default Home;