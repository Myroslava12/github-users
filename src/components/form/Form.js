import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import { getUsersByUsernameRequest } from "../../duck/actions";
import * as ROUTER from "../../constants/routes";
import User from "./User";
import SmallLoader from "../loader/SmallLoader";
import {getUsersBySearch} from "../../duck/actions";

const Form = () => {
    const dispatch = useDispatch();
    const usersByUsername = useSelector((state) => state.usersByUsername.usersByUsername);
    const loader = useSelector((state) => state.usersByUsername.loading);
    const history = useHistory();
    const query = new URLSearchParams(history.location.search);
    const queryValue = query.get("query");
    const [inputValue, setInputValue] = useState(queryValue ? queryValue : '');

    const handleChange = (e) => {
        setInputValue(e.target.value);
        if (inputValue.length > 0) {
            dispatch(getUsersByUsernameRequest(inputValue));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.length !== 0) {
            history.replace({pathname: ROUTER.HOME, search: `?query=${inputValue}`});
        } else {
            return history.replace({pathname: ROUTER.HOME, search: ''});
        }
        dispatch(getUsersBySearch(inputValue));
    }

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
            {usersByUsername.length > 0 ? <ul className="autocomplete-users">
                {loader && <SmallLoader />}
                {usersByUsername.map((user, id) => {
                    return <User key={id} user={user} />
                })}
            </ul> : null}
        </div>
    )
}

export default Form;