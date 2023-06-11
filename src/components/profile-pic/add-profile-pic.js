import { Button, Modal } from "antd";
import { useState } from "react";
import { Dropdown } from "antd";
import axios from "axios";
import { useEffect } from "react";
import SignOut from "../sign-out";
import { LoadingOutlined } from "@ant-design/icons";

const AddProfilePic = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profilePic, setProfilePic] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const userID = localStorage.getItem("UserID");
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    setImageUrl(userData.profilePic);
  }, [imageUrl]);
  const items = [
    {
      key: "1",
      label: (
        <p type="primary" onClick={showModal}>
          Profile Picture
        </p>
      ),
    },
    {
      key: "2",
      label: <p> Edit Profile</p>,
    },
    {
      key: "3",
      label: (
        <p>
          {" "}
          <SignOut />
        </p>
      ),
    },
  ];

  const handleUpload = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append("image", profilePic);

    axios
      .put(
        `https://backendcms-renjithcmrenju.b4a.run/api/user/update/${userID}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        const data = response.data;
        console.log(data);

        setImageUrl(data.profilePic);
        localStorage.setItem("userData", JSON.stringify(data));
        setIsLoading(false);
        setIsModalOpen(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Dropdown
        menu={{
          items,
        }}
        placement="bottomLeft"
        arrow
      >
        <img
          className="avatar-head"
          src={
            imageUrl
              ? imageUrl
              : "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg"
          }
          alt=""
        />
      </Dropdown>

      <Modal
        title="Change profile picture"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div
          style={{
            display: "flex",
            gap: "10px",
            flexDirection: "column",
            padding: "10px",
          }}
        >
          <input
            type="file"
            onChange={(e) => setProfilePic(e.target.files[0])}
          />
          <Button onClick={handleUpload}>
            {" "}
            {isLoading ? <LoadingOutlined /> : "Upload"}
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default AddProfilePic;
