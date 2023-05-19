import { useState } from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://backendcms-renjithcmrenju.b4a.run/api/auth/signup/",
        {
          name,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const data = response.data;
        console.log(data);
        alert("Signed up successfully!");
        setName("");
        setEmail("");
        setPassword("");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="detail-input">
          <label>Name</label>
          <input
            type="text"
            value={name}
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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

        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account?{" "}
        <span
          className="login-link"
          onClick={() => handleNavigate()}
          style={{ color: "blue" }}
        >
          login
        </span>{" "}
        here
      </p>
    </>
  );
};
