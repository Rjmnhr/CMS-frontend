import React from "react";
import { useNavigate } from "react-router-dom";

const SignOut = () => {
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.setItem("accessToken", "");
    localStorage.setItem("userData", "");
    localStorage.setItem("userID", "");
    localStorage.setItem("isAdmin", "");

    navigate("/");
  };
  return (
    <div>
      <p className="sign-out" onClick={signOut}>
        Sign out
      </p>
    </div>
  );
};

export default SignOut;
