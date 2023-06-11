import { Header } from "../../components/header/header";
import SideBar from "../../components/side-bar/side-bar";
import { UserViewPage } from "../user-view-page/user-view-page";
import "./admin-page.css";

export const AdminPage = () => {
  const userToken = localStorage.getItem("accessToken");
  const isAdmin = localStorage.getItem("isAdmin");

  return (
    <>
      {userToken && isAdmin === "true" ? (
        <div className="admin-container">
          <Header />

          <div className="admin-sub-container">
            <div style={{ marginTop: "80px" }}>
              <SideBar />
            </div>
            <div style={{ marginTop: "35px" }} className="user-view">
              <UserViewPage />
            </div>
          </div>
        </div>
      ) : (
        "you don't have access to this page "
      )}
    </>
  );
};
