import { useEffect, useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [messageApi, contextHolder] = message.useMessage();

  const navigate = useNavigate();

  useEffect(() => {
    let timeoutId;
    if (isLoading) {
      timeoutId = setTimeout(() => {
        setIsLoading(false);
        error("Check your internet connection");
      }, 15000);
    }
    return () => clearTimeout(timeoutId);
  }, [isLoading]);

  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    fetch("https://backendcms-renjithcmrenju.b4a.run/api/auth/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        if (typeof data === "string") {
          error(data);
          return;
        }
        success();
        const accessToken = data.accessToken;
        if (!accessToken) return error(data);

        const isAdmin = data.isAdmin;

        const UserId = data._id;

        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("UserID", UserId);
        localStorage.setItem("userData", JSON.stringify(data));
        localStorage.setItem("isAdmin", isAdmin);
        setEmail("");
        setPassword("");
        navigation(isAdmin);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const navigation = (admin) => {
    if (admin === true) {
      navigate("/admin");
    } else {
      navigate("/main");
    }
  };

  const handleNavigate = (page) => {
    const route = "/" + page;
    navigate(route);
  };

  const error = (data) => {
    messageApi.open({
      type: "error",
      content: data,
    });
  };

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Login successfully",
    });
  };

  return (
    <>
      {contextHolder}
      <div className="login-container">
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="detail-input">
            <label>Email</label>
            <input
              type="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="detail-input">
            <label>Password</label>
            <input
              type="password"
              value={password}
              placeholder="Enter yor password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">
            {isLoading ? <LoadingOutlined /> : "LOGIN"}
          </button>
        </form>
        <p>
          don't have an account?{" "}
          <span
            className="signup-link"
            onClick={() => handleNavigate("signup")}
            style={{ color: "blue" }}
          >
            Signup
          </span>{" "}
          here
        </p>
      </div>
    </>
  );
};
