import React, { useEffect, useRef } from "react";
import User from "../user/User";
import {useDispatch, useSelector} from "react-redux";
import { getUsersRequest } from "../../duck/actions";
import Loader from "../loader/Loader";
import Form from "../form/Form";

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

        return () => {
            observer.disconnect();
        };
    }, [users]);

    useEffect(() => {
        if(!users.length) dispatch(getUsersRequest(page));
    }, []);

    const handleObserver = (entities) => {
        const target = entities[0];
        if (target.isIntersecting) {
            dispatch(getUsersRequest(page + 30));
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
            {users.length > 0 && <Loader loader={loader} />}
        </div>
    )
}

export default Home;