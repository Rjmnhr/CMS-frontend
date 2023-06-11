import { useApplicationContext } from "../../context/app-context";
import "./blog-data-view.css";

const BlogDataView = () => {
  const { contentData } = useApplicationContext();

  return (
    <>
      <div className="content-main-container">
        {contentData.length > 0 ? (
          <>
            {contentData.map((data) => {
              return (
                <>
                  <a
                    className=" content-container"
                    href={`/article/${data._id}`}
                    key={data._id}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <img src={data.image} alt="" />

                    <div
                      style={{
                        textAlign: "start",
                        paddingLeft: "20px",
                        paddingBottom: "10px",
                      }}
                    >
                      {" "}
                      <h3>{data.title.toUpperCase()}</h3>
                      <p
                        style={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "GrayText",
                        }}
                      >
                        <img
                          className="avatar-head"
                          src={data.profilePic}
                          alt=""
                        />
                        {data.author}, {data.createdAt.slice("-", 10)}
                      </p>
                    </div>

                    <div className="content-description">
                      <p>{data.desc.slice("", 180)}.....</p>
                    </div>
                  </a>
                </>
              );
            })}
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default BlogDataView;
