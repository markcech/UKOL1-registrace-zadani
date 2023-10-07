import React, { useState } from "react";
import "../../style.css";

const Registration = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleBlur = () => {
    if (user.email.includes("@") && user.username === "") {
      setUser({ ...user, username: user.email.split("@")[0] });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div className="container">
      <h1>REGISTRATION</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="email"
          value={user.email}
          name="email"
          placeholder="Email Address"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          onBlur={handleBlur}
        />

        <input
          className="input"
          type="text"
          value={user.username}
          name="username"
          placeholder="User Name"
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />

        <input
          className="input"
          type="password"
          value={user.password}
          name="password"
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />

        <input
          className="input"
          type="password"
          value={user.passwordConfirm}
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={(e) =>
            setUser({ ...user, passwordConfirm: e.target.value })
          }
        />

        <button className="button" type="submit">
          REGISTER
        </button>
      </form>
    </div>
  );
};

export default Registration;
