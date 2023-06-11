import { useEffect, useState } from "react";

import "./user-view-page.css";

import { useApplicationContext } from "../../context/app-context";
import BlogDataView from "../../components/blog-data-view/blog-data-view";
import AddContentModal from "../../components/modals/content-add-modal";

export const UserViewPage = () => {
  const [isValidUser, setValidUser] = useState(false);
  const { featuredData } = useApplicationContext();
  const [description, setDescription] = useState(
    "Spend your time reading valuable contents"
  );
  const [title, setTitle] = useState("Content Blogs.");
  const [headline, setHeadline] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const userID = localStorage.getItem("UserID");
    const fetchData = (id) => {
      const accessToken = localStorage.getItem("accessToken");

      fetch(`https://backendcms-renjithcmrenju.b4a.run/api/user/find/${id}`, {
        headers: {
          token: `Bearer ${accessToken}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data._id === id) {
            setValidUser(true);
          }

          // Handle content data here
        })
        .catch((error) => {
          console.error(error);
        });
    };

    fetchData(userID);
  }, []);

  const showContent = (id) => {
    const blogData = featuredData.find((data) => data._id === id);

    setDescription(blogData.desc);
    setTitle(blogData.title);
    setHeadline(blogData.headline);
    setImage(blogData.image);
  };

  return (
    <>
      <div className="view-container">
        {isValidUser ? (
          <div className="view-main-container">
            <AddContentModal />

            <div className="quote-container">
              <div className="quote-content">
                <h1>
                  Blogging is good for your career. A well-executed blog sets
                  you apart as an expert in your field{" "}
                </h1>
                <p style={{ color: "black" }}>~Cory Doctorow</p>
              </div>
            </div>
            <h2 className="section-title">Featured</h2>
            <div className="featured-content-container">
              <div className="grid-container">
                {featuredData.length > 0 ? (
                  <>
                    {featuredData.map((data) => {
                      return (
                        <>
                          <div
                            className="grid-item"
                            onClick={() => showContent(data._id)}
                          >
                            <div className="main-content">
                              <img src={data.image} alt="" />
                              <h2>{data.title}</h2>
                            </div>
                            <div className="sub-content">
                              <p>{data.headline}</p>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </>
                ) : (
                  ""
                )}
              </div>
              <div className="read-more-container">
                <h1>{title.toUpperCase()}</h1>
                <img src={image} alt="" />
                <h3>{headline}</h3>
                <p>{description}</p>
              </div>
            </div>
            <h2 className="section-title">Blog</h2>
            <div className="blog">
              <BlogDataView />
            </div>
          </div>
        ) : (
          <>
            <p>You don't have access to this page</p>
          </>
        )}
      </div>
    </>
  );
};
