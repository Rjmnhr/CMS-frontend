import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./article-page.css";
import { ArrowLeftOutlined } from "@ant-design/icons";

const Article = () => {
  const [articleData, setArticleData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    fetch(`https://backendcms-renjithcmrenju.b4a.run/api/content/article/${id}`)
      .then(async (response) => {
        const data = await response.json();
        console.log(data);
        setArticleData(data);
      })
      .catch((err) => console.log(err));
  }, [setArticleData, id]);
  return (
    <div className="article-main-container">
      {articleData ? (
        <>
          <div className="article-container">
            <h1 style={{ paddingBottom: "20px" }}>{articleData.title}</h1>
            <img
              style={{ paddingBottom: "20px" }}
              src={articleData.image}
              alt="not available"
            />
            <div className="paragraph">
              <p>{articleData.desc}</p>
            </div>
            <a
              className="link"
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "bold",
              }}
              href="/main"
            >
              <ArrowLeftOutlined /> Go Back
            </a>
          </div>
        </>
      ) : (
        <p>No Data</p>
      )}
    </div>
  );
};

export default Article;
