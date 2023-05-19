import axios from "axios";
import { useApplicationContext } from "../../context/app-context";
import "./cms-page.css";

const CmsPage = () => {
  const { contentData } = useApplicationContext();

  const deleteContent = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:8002/api/content/delete/${id}`)
      .then((response) => {
        console.log("response", response.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="grid-containers">
        {contentData ? (
          <>
            {contentData.map((data) => {
              return (
                <>
                  <div className="grid-items">
                    <div className="main-contents">
                      <img src={data.image} alt="" />
                      <div className="sub-content">
                        <h2 style={{ color: "white" }}>{data.title}</h2>
                        <button onClick={() => deleteContent(data._id)}>
                          delete
                        </button>
                      </div>
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
    </>
  );
};

export default CmsPage;
