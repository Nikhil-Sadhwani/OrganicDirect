import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/Form.css";
import LogContext from "../Context/logInOut/LogContext";
import axios from "axios";
import AlertContext from "../Context/alert/AlertContext";
import { AiFillCalendar, AiOutlineCalendar } from "react-icons/ai";

export default function Login(props) {
  const LogObj = useContext(LogContext);
  const AlertObj = useContext(AlertContext);

  const navigate = useNavigate();

  const [data, setData] = useState({
    holdername: "",
    cardnumber: "",
    cvv: "",
    expiry: "",
  });

  const handleChange = (e) => {
    setData((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const handleUpdate = (id, status) => {
    const data = {
      status: status,
    };
    axios
      .put(`http://localhost:8080/inventory/${id}`, data)
      .then((response) => {
        AlertObj.showAlert(response.data.message, "Success", "green");
      })
      .catch((err) => console.log(err));
  };

  const handlePay = async () => {
    if (data.holdername !== "") {
      if (data.cardnumber !== "") {
        if (data.cvv !== "") {
          if (data.expiry !== "") {
            handleUpdate(props.cropId, "Complete");
            navigate(`/stocks/${props.id}`);
          } else {
            AlertObj.showAlert("Expiry is empty", "Warning", "yellow");
          }
        } else {
          AlertObj.showAlert("CVV is empty", "Warning", "yellow");
        }
      } else {
        AlertObj.showAlert("Card Number is empty", "Warning", "yellow");
      }
    } else {
      AlertObj.showAlert("Holder Name is empty", "Warning", "yellow");
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
            <h3 className="title text-2xl font-bold">Payment</h3>
            <div className="text-input">
              <i className="ri-user-fill"></i>
              <input
                type="text"
                name="holdername"
                onChange={(e) => handleChange(e)}
                placeholder="Holder Name"
              />
            </div>
            <div className="text-input">
              <i className="ri-user-fill"></i>
              <input
                type="text"
                name="cardnumber"
                onChange={(e) => handleChange(e)}
                placeholder="Card Number"
              />
            </div>
            <div className="text-input">
              <i className="ri-lock-fill"></i>
              <input
                type="password"
                name="cvv"
                onChange={(e) => handleChange(e)}
                placeholder="CVV"
              />
            </div>
            <div className="text-input">
              <AiOutlineCalendar />
              <input
                type="text"
                name="expiry"
                onChange={(e) => handleChange(e)}
                placeholder="Expiry"
              />
            </div>
            <button className="login-btn" onClick={handlePay}>
              Pay
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
