import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { getUsersByUsernameRequest } from "../../duck/actions";
import { usersByUsernameReducer } from "../../duck/usersByUsernameReducer";
import User from "./User";

const Form = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();
    const usersByUsername = useSelector((state) => state.usersByUsername.usersByUsername);
    const loader = useSelector((state) => state.usersByUsername.loading);

    const handleChange = (e) => {
        setInputValue(e.target.value);
        if (inputValue.length > 0) {
            dispatch(getUsersByUsernameRequest(inputValue));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="form-box">
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="name" className="form-label">
                    <input 
                        id="name"
                        className="form-input"
                        placeholder="Enter username"
                        value={inputValue}
                        onChange={handleChange}
                    />
                </label>
                <button className="form-btn" type="submit">
                    <i className="fas fa-search"></i>
                </button>
            </form>
            {usersByUsername.length > 0 ? <ul className="autocomplete-users">
                {usersByUsername.map(user => {
                    return <User user={user} />
                })}
            </ul> : null}
        </div>
    )
}

export default Form;