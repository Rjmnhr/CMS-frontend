import { useApplicationContext } from "../../context/app-context";
import "./blog-data-view.css";

const BlogDataView = () => {
  const { contentData } = useApplicationContext();

  return (
    <>
      {contentData.length > 0 ? (
        <>
          {contentData.map((data) => {
            return (
              <>
                <div className=" content-container">
                  <h1>{data.title.toUpperCase()}</h1>
                  <img src={data.image} alt="" />
                  <div className="content-description">
                    <p>{data.desc}</p>
                  </div>
                </div>
              </>
            );
          })}
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default BlogDataView;
