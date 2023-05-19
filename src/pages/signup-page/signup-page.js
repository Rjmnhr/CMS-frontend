import { SignUp } from "../../components/signup/signup";
import "./signup-page.css";

const SignUpPage = () => {
  return (
    <>
      <div className="signup-page-container">
        <div className="left-container">
          <h1>CONTENT BLOGS.</h1>
          <p>Spend your time reading valuable contents</p>
        </div>
        <div className="signup-form-container">
          <SignUp />
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
