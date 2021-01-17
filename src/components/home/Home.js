import React, { useEffect, useRef } from "react";
import User from "../user/User";
import {useDispatch, useSelector} from "react-redux";
import {getUsersRequest, pageCounter} from "../../duck/actions";
import Loader from "../loader/Loader";
import {data} from "../../data";

const Home = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users);
    const page = useSelector((state) => state.users.page);
    const loader = useRef(null);
    
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
    }, []);

    useEffect(() => {
        if (!users.length) dispatch(getUsersRequest(page));
    }, []);

    useEffect(() => {
        dispatch(getUsersRequest(page));
    }, [page]);

    const handleObserver = (entities) => {
        const target = entities[0];
        if (target.isIntersecting) {
            dispatch(pageCounter());
        }
    }

    console.log(page, users.length);

    return (
        <div className="container">
            <h1 className="title">GitHub Users Information</h1>
            <ul className="users--list">
                {data.map((user, id) => {
                    return <User key={id} user={user} />
                })}
            </ul>
            <Loader loader={loader} />
        </div>
    )
}

export default Home;