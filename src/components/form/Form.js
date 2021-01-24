import React, { useEffect, useRef, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import { getUsersByUsernameRequest } from "../../duck/usersByUsername/action";
import * as ROUTER from "../../constants/routes";
import User from "./User";
import SmallLoader from "../loader/SmallLoader";
import {getUsersSearch} from "../../duck/usersSearch/action";
import {usersByUsernameSelector, loaderUsersByUsernameSelector, pageSelector} from "../../duck/selectors";
import useOutsideClick from "./outsideClock"; 

const Form = () => {
    const dispatch = useDispatch();
    const usersByUsername = useSelector(usersByUsernameSelector);
    const loader = useSelector(loaderUsersByUsernameSelector);
    const history = useHistory();
    const page = useSelector(pageSelector);
    const query = new URLSearchParams(history.location.search);
    const queryValue = query.get("query");
    const [inputValue, setInputValue] = useState(queryValue !== null ? queryValue : '');
    const ref = useRef(null);
    const [isActive, setIsActive] = useState(true);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    useOutsideClick(ref, () => {
        setIsActive(false);
    });

    useEffect(() => {
        if (inputValue.length > 0) {
            setIsActive(true);
            dispatch(getUsersByUsernameRequest(inputValue, page));
        }
    }, [inputValue])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.length !== 0) {
            history.replace({pathname: ROUTER.HOME, search: `?query=${inputValue}`});
            dispatch(getUsersSearch(inputValue, page));
            setIsActive(false);
        } else {
            return history.replace({pathname: ROUTER.HOME, search: ''});
        }
    }

    const boxIsActive = usersByUsername.items && isActive;

    return (
        <div className="form-box">
            <form className="form" onSubmit={handleSubmit} autoComplete="off">
                <label htmlFor="name" className="form-label">
                    <input 
                        id="name"
                        type="text"
                        className="form-input"
                        placeholder="Enter username"
                        value={inputValue}
                        onChange={handleChange}
                    />
                </label>
                <button className="form-btn" type="submit">
                    <i className="fas fa-search" />
                </button>
            </form>
            {boxIsActive ? <ul ref={ref} className="autocomplete-users">
                {loader && <SmallLoader />}
                {usersByUsername.items.map((user, id) => {
                    return <User key={id} user={user} />
                })}
            </ul> : null}
        </div>
    )
}

export default Form;