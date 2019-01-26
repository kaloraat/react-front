import React, { Component } from "react";
import { isAuthenticated } from "../auth";
import { read } from "./apiUser";

class EditProfile extends Component {
    constructor() {
        super();
        this.state = {
            id: "",
            name: "",
            email: "",
            password: ""
        };
    }

    init = userId => {
        const token = isAuthenticated().token;
        read(userId, token).then(data => {
            if (data.error) {
                this.setState({ redirectToSignin: true });
            } else {
                this.setState({
                    id: data._id,
                    name: data.name,
                    email: data.email
                });
            }
        });
    };

    componentDidMount() {
        const userId = this.props.match.params.userId;
        this.init(userId);
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    clickSubmit = event => {
        event.preventDefault();
        const { name, email, password } = this.state;
        const user = {
            name,
            email,
            password
        };
        console.log(user);
        // signup(user).then(data => {
        //     if (data.error) this.setState({ error: data.error });
        //     else
        //         this.setState({
        //             error: "",
        //             name: "",
        //             email: "",
        //             password: "",
        //             open: true
        //         });
        // });
    };

    signupForm = (name, email, password) => (
        <form>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input
                    onChange={this.handleChange("name")}
                    type="text"
                    className="form-control"
                    value={name}
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input
                    onChange={this.handleChange("email")}
                    type="email"
                    className="form-control"
                    value={email}
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Password</label>
                <input
                    onChange={this.handleChange("password")}
                    type="password"
                    className="form-control"
                    value={password}
                />
            </div>
            <button
                onClick={this.clickSubmit}
                className="btn btn-raised btn-primary"
            >
                Update
            </button>
        </form>
    );

    render() {
        const { name, email, password } = this.state;
        return (
            <div className="container">
                <h2 className="mt-5 mb-5">Edit Profile</h2>

                {this.signupForm(name, email, password)}
            </div>
        );
    }
}

export default EditProfile;
