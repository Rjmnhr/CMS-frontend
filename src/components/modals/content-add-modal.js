import { Button, Modal } from "antd";
import { useState } from "react";

import { FolderAddOutlined } from "@ant-design/icons";
import AddContent from "../../add-content/add-content";
const AddContentModal = () => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <div type="primary" onClick={showModal}>
        <FolderAddOutlined />
        <p>New Content</p>
      </div>
      <Modal
        open={open}
        title="Write your Blog"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
        ]}
      >
        <AddContent />
      </Modal>
    </>
  );
};
export default AddContentModal;
