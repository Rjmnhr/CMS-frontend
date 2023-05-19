import { useNavigate } from "react-router-dom";
import "./header.css";

export const Header = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userData"));
  const signOut = () => {
    localStorage.setItem("accessToken", "");
    localStorage.setItem("userData", "");

    navigate("/");
  };

  return (
    <>
      <div className="header-container">
        <h3>Content Blogs.</h3>
        <div className="right-end">
          <p onClick={signOut}>Sign out</p>
          <div className="profile">
            <p style={{ fontWeight: "bold" }}>{userData.name.toUpperCase()}</p>
            <img
              className="avatar-head"
              src="https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
