import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/Form.css";
import axios from "axios";
import AlertContext from "../Context/alert/AlertContext";

export default function SignUp() {
  const AlertObj = useContext(AlertContext);
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmpassword: "",
    role: "user",
  });

  const handleChange = (e) => {
    setData((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const handleSignup = async () => {
    if (data.email !== "") {
      if (/.+@.+\.[A-Za-z]+$/.test(data.email)) {
        if (data.password !== "") {
          if (data.password === data.confirmpassword) {
            await axios
              .post("http://localhost:8080/signup", data)
              .then((response) => {
                if (response.data.message === "Email is Already Exists") {
                  AlertObj.showAlert(
                    response.data.message,
                    "Warning",
                    "yellow"
                  );
                } else {
                  AlertObj.showAlert(response.data.message, "Success", "green");
                  navigate("/login");
                }
              })
              .catch((err) => console.log(err));
          } else {
            AlertObj.showAlert(
              "Confirm Password is not same as Password",
              "Warning",
              "yellow"
            );
          }
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
            <h3 className="title text-2xl font-bold">User Signup</h3>
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
            <div className="text-input">
              <i className="ri-lock-fill"></i>
              <input
                type="password"
                name="confirmpassword"
                onChange={(e) => handleChange(e)}
                placeholder="Confirm Password"
              />
            </div>
            <button className="login-btn" onClick={() => handleSignup()}>
              SIGNUP
            </button>

            <div className="create">
              <Link to="/login">
                Already have an account
                <i className="ri-arrow-right-fill"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
