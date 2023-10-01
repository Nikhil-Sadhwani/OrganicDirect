import LogContext from "./LogContext";
import { useCookies } from "react-cookie";

const LogState = (props) => {
  const [cookies, setCookies] = useCookies([
    "access_Token",
    "id",
    "email",
    "role",
  ]);

  const handleCookies = (data) => {
    if (data !== null) {
      setCookies("access_Token", data.token);
      setCookies("id", data.data["_id"]);
      setCookies("email", data.data["email"]);
      setCookies("role", data.data["role"]);
      window.localStorage.setItem("userId", data.data["_id"]);
      window.localStorage.setItem("email", data.data["email"]);
      window.localStorage.setItem("role", data.data["role"]);
    } else {
      setCookies("access_Token", "");
      setCookies("id", "");
      setCookies("email", "");
      setCookies("role", "");
      window.localStorage.removeItem("userId");
      window.localStorage.removeItem("email");
      window.localStorage.removeItem("role");
    }
  };

  return (
    <LogContext.Provider value={{ handleCookies, cookies, setCookies }}>
      {props.children}
    </LogContext.Provider>
  );
};

export default LogState;
