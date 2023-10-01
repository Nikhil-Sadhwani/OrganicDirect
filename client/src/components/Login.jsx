import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/Form.css";
import LogContext from "../Context/logInOut/LogContext";
import axios from "axios";
import AlertContext from "../Context/alert/AlertContext";

export default function Login() {
  const LogObj = useContext(LogContext);
  const AlertObj = useContext(AlertContext);

  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const handleLogin = async () => {
    if (data.email !== "") {
      if (/.+@.+\.[A-Za-z]+$/.test(data.email)) {
        if (data.password !== null && data.password !== "") {
          await axios
            .post("http://localhost:8080/login", data)
            .then((response) => {
              if (
                response.data.message ===
                  "Email is Not Exists Please Signup first" ||
                response.data.message === "Incorrect Password"
              ) {
                AlertObj.showAlert(response.data.message, "Danger", "red");
              } else {
                AlertObj.showAlert(response.data.message, "Success", "green");
                LogObj.handleCookies(response.data);
                navigate("/home");
              }
            })
            .catch((err) => console.log(err));
        } else {
          AlertObj.showAlert("Password is empty", "Warning", "yellow");
        }
      } else {
        AlertObj.showAlert("In Valid Email Syntax", "Warning", "yellow");
      }
    } else {
      AlertObj.showAlert("Email is empty", "Warning", "yellow");
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
