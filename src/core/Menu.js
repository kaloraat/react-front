import React from "react";
import { Link, withRouter } from "react-router-dom";

const isActive = (history, path) => {
    if (history.location.pathname === path) return { color: "#ff9900" };
    else return { color: "#ffffff" };
};

export const signout = next => {
    if (typeof window !== "undefined") localStorage.removeItem("jwt");
    next();
    return fetch("http://localhost:8080/signout", {
        method: "GET"
    })
        .then(response => {
            console.log("signout", response);
            return response.json();
        })
        .catch(err => console.log(err));
};

const Menu = ({ history }) => (
    <div>
        <ul className="nav nav-tabs bg-primary">
            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/")}
                    to="/"
                >
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/signin")}
                    to="/signin"
                >
                    Sign In
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/signup")}
                    to="/signup"
                >
                    Sign Up
                </Link>
            </li>
            <li className="nav-item">
                <a
                    className="nav-link"
                    style={
                        (isActive(history, "/signup"),
                        { cursor: "pointer", color: "#fff" })
                    }
                    onClick={() => signout(() => history.push("/"))}
                >
                    Sign Out
                </a>
            </li>
        </ul>
    </div>
);

export default withRouter(Menu);
