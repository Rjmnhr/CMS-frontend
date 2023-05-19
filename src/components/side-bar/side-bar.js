import { EditOutlined, EyeOutlined } from "@ant-design/icons";
import "./side-bar.css";
import AddContentModal from "../modals/content-add-modal";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/cms");
  };
  return (
    <>
      <div className="sidebar-container">
        <div className="tab">
          <EyeOutlined />
          <p>Content View</p>
        </div>
        <div className="tab">
          <AddContentModal />
        </div>
        <div onClick={handleNavigate} className="tab">
          <EditOutlined />
          <p>Content Management</p>
        </div>
      </div>
    </>
  );
};

export default SideBar;
