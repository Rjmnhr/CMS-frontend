import { Login } from "../../components/login/login";
import "./front-page.css";

const FrontPage = () => {
  return (
    <>
      <div className="front-page-container">
        <div className="left-container">
          <h1>CONTENT BLOGS.</h1>
          <p>Spend your time reading valuable contents</p>
        </div>
        <div className="login-form-container">
          <Login />
        </div>
      </div>
    </>
  );
};

export default FrontPage;
