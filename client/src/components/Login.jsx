import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/Form.css";

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const handleLogin = () => {
    if (data.email !== "") {
      if (/.+@.+\.[A-Za-z]+$/.test(data.email)) {
        if (data.password !== null && data.password !== "") {
          console.log(data);
        } else {
          console.log("Password is empty");
        }
      } else {
        console.log("In Valid Email");
      }
    } else {
      console.log("Email is empty");
    }
  };
  return (
    <>
      <div className="mainContainer">
        <div className="container">
          <div className="design">
            <div className="pill-1 rotate-45"></div>
            <div className="pill-2 rotate-45"></div>
            <div className="pill-3 rotate-45"></div>
            <div className="pill-4 rotate-45"></div>
          </div>
          <div className="login">
            <h3 className="title text-2xl font-bold">User Login</h3>
            <div className="text-input">
              <i className="ri-user-fill"></i>
              <input
                type="email"
                name="email"
                onChange={(e) => handleChange(e)}
                placeholder="Email"
              />
            </div>
            <div className="text-input">
              <i className="ri-lock-fill"></i>
              <input
                type="password"
                name="password"
                onChange={(e) => handleChange(e)}
                placeholder="Password"
              />
            </div>
            <button className="login-btn" onClick={handleLogin}>
              LOGIN
            </button>

            <div className="create">
              <Link to="/signup">
                Create Your Account
                <i className="ri-arrow-right-fill"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
