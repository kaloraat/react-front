import React from "react";
import Posts from "../post/Posts";

const Home = () => (
  <div>
    <div className="jumbotron">
      <h2 className="font-weight-bold">
        React Node MongoDB Social Network App
      </h2>
      <p className="lead">
        Node API, React web app, Authentication, User Profile, Follow/Unfollow,
        Like/Unlike, Comments, Social Login and more
      </p>
    </div>
    <div className="container">
      <Posts />
    </div>
  </div>
);

export default Home;
