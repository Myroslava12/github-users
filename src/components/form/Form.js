import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import * as ROUTER from "../../constants/routes";
import { getUsersByUsernameRequest } from "../../duck/usersByUsername/action";
import { getUsersSearch } from "../../duck/usersSearch/action";
import { 
    usersByUsernameSelector, 
    loaderUsersByUsernameSelector, 
    usersByUsernameErr 
} from "../../duck/selectors";

import User from "./User";
import useOutsideClick from "./outsideClick"; 
import SmallLoader from "../loader/SmallLoader";

const Form = () => {
    const dispatch = useDispatch();
    const usersByUsername = useSelector(usersByUsernameSelector);
    const loader = useSelector(loaderUsersByUsernameSelector);
    const history = useHistory();
    const query = new URLSearchParams(history.location.search);
    const queryValue = query.get("query");
    const [inputValue, setInputValue] = useState(queryValue !== null ? queryValue : '');
    const ref = useRef(null);
    const [isActive, setIsActive] = useState(true);
    const error = useSelector(usersByUsernameErr);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    useOutsideClick(ref, () => {
        setIsActive(false);
    });

    useEffect(() => {
        if (inputValue.length > 0) {
            setIsActive(true);
            dispatch(getUsersByUsernameRequest(inputValue, 1));
        }
    }, [inputValue])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.length !== 0) {
            history.replace({pathname: ROUTER.HOME, search: `?query=${inputValue}`});
            dispatch(getUsersSearch(inputValue, 1));
            setIsActive(false);
        } else {
            return history.replace({pathname: ROUTER.HOME, search: ''});
        }
    }

    const boxIsActive = usersByUsername.items && isActive;

    const resetValue = () => {
        setInputValue('');
        setIsActive(false);
        history.replace({pathname: ROUTER.HOME, search: ''});
        dispatch(getUsersByUsernameRequest('', 1));
    }

    return (
        <div className="form-box">
            <form className="form" onSubmit={handleSubmit} autoComplete="off">
                <input 
                    id="name"
                    type="text"
                    className="form-input"
                    placeholder="Enter username"
                    value={inputValue}
                    onChange={handleChange}
                />
                {inputValue.length !== 0 && <button onClick={resetValue} className="form-reset-btn">x</button>}
                <button className="form-btn" type="submit">
                    <i className="fas fa-search" />
                </button>
            </form>
            {boxIsActive ? <div className="autocomplete-users-box">
                <ul ref={ref} className="autocomplete-users">
                    {loader && <SmallLoader />}
                    {error || usersByUsername.items.length === 0 && <p className="form-error">Ooops... can't find the users</p>}
                    {usersByUsername.items.length > 0 && usersByUsername.items.map((user, id) => {
                        return <li key={id} className="autocomplete-item">
                            <User user={user} />
                        </li>
                    })}
                </ul>
            </div> : null}
        </div>
    )
}

export default Form;