import axios from "axios";
import React, { useState } from "react";
import "./add-content.css";
import { message } from "antd";
import { useApplicationContext } from "../context/app-context";
import { LoadingOutlined } from "@ant-design/icons";

const AddContent = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(null);
  const [messageApi, contextHolder] = message.useMessage();
  const { setIsContentUpdated } = useApplicationContext();
  const [isLoading, setIsLoading] = useState(false);

  const userData = JSON.parse(localStorage.getItem("userData"));

  const author = userData.name;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("image", image);
    formData.append("author", author);

    // Upload image

    axios
      .post(
        "https://backendcms-renjithcmrenju.b4a.run/api/content/post/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setIsContentUpdated(true);
        setIsLoading(false);
        success();
        setTitle("");
        setDesc("");
        setImage(null);
      })
      .catch((err) => console.log(err));

    // Clear form
  };

  const success = () => {
    messageApi.open({
      type: "success",
      content: "uploaded successfully",
    });
  };

  return (
    <>
      {contextHolder}
      <div className="add-content-container">
        <div className="add-content-form">
          <form onSubmit={handleSubmit}>
            <div className="detail-inputs">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="detail-inputs">
              <label>Content</label>
              <textarea
                id="content"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="detail-inputs">
              <label htmlFor="image">Image</label>
              <input
                type="file"
                id="image"
                onChange={(e) => setImage(e.target.files[0])}
                required
              />
            </div>

            <button type="submit">
              {" "}
              {isLoading ? <LoadingOutlined /> : "Create Post"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddContent;
