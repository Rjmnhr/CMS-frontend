import { BrowserRouter, Route, Routes } from "react-router-dom";

import FrontPage from "../pages/front-page/front-page";
import SignUpPage from "../pages/signup-page/signup-page";
import { UserViewPage } from "../pages/user-view-page/user-view-page";
import { AdminPage } from "../pages/admin-page/admin-page";
import { Header } from "../components/header/header";
import CmsPage from "../pages/cms-page/cms-page";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div style={{ overflow: "hidden" }} className="main-container">
                  <FrontPage />
                </div>
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <div style={{ overflow: "hidden" }} className="main-container">
                  <SignUpPage />
                </div>
              </>
            }
          />

          <Route
            path="/main"
            element={
              <>
                <div
                  style={{ display: "flex", flexDirection: "column" }}
                  className="main-container"
                >
                  <Header />
                  <div style={{ marginTop: "40px" }}>
                    <UserViewPage />
                  </div>
                </div>
              </>
            }
          />
          <Route
            path="/admin"
            element={
              <>
                <div className="main-container">
                  <AdminPage />
                </div>
              </>
            }
          />
          <Route
            path="/cms"
            element={
              <>
                <div className="main-container">
                  <Header />
                  <div style={{ marginTop: "50px" }}>
                    <CmsPage />
                  </div>
                </div>
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <div className="main-container">
                  <h1>Error 404</h1>
                  <h3>Page not found</h3>
                </div>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
