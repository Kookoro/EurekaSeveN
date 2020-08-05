import React, { FunctionComponent, useState } from "react";
import { Input, Button, Modal } from "antd";
const Dialog = (props) => {
  const [state, setstate] = useState(props.state);
  const handleOk = (e: any) => {
    console.log(e);
    setstate({
      visible: false,
    });
  };
  const handleCancel = (e: any) => {
    console.log(e);
    setstate({
      visible: false,
    });
  };

  return (
    <div>
      <Modal
        centered
        title="个人信息"
        okText="保存"
        cancelText="取消"
        visible={state.visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <span>姓名：</span>
          <Input></Input>
        </div>
        <div>
          <span>性别：</span>
          <Input></Input>
        </div>
        <div>
          <span>年龄：</span>
          <Input></Input>
        </div>
        <div>
          <span>职位：</span>
          <Input></Input>
        </div>
      </Modal>
    </div>
  );
};

export default Dialog;
