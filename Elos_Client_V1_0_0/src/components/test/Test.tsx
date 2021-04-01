import { Alert, Button, Input, Upload } from "antd";
import React, { useState, useContext } from "react";
import { UploadOutlined } from "@ant-design/icons";
import axios, { AxiosResponse } from "axios";
interface Father {
  name: string;
  age?: number;
  job?: string;
}
const obj: Father = {
  name: "张三",
  age: 25,
  job: "worker",
};
const appContext = React.createContext(obj);

export function Test() {
  const [user, setUser] = useState({
    father: {
      name: "张三",
    },
  });
  function setName(name: string): void {
    setUser({
      father: {
        name,
      },
    });
  }
  const [len, setlen] = useState(0);
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress: (progressEvent) => {
      if (progressEvent.lengthComputable) {
        const complete =
          ((progressEvent.loaded / progressEvent.total) * 100) | 0;

        setlen(complete * 10);

        if (complete >= 100) {
          setlen(0);
        }
      }
    },
  };
  function onFileChange(file) {
    const formData = new FormData();
    formData.append("file", file.currentTarget.files[0]);
    axios
      .post("http://192.168.1.124:8762/baseSetting/upload", formData, config)
      .then((res) => {
        console.log(res);
      });
  }

  //   const props = {
  //     action: "http://192.168.1.124:8762/baseSetting/upload",
  //     onChange(info) {
  //       console.log(info);
  //     },
  //   };
  function getStatus() {
    axios.get("http://192.168.1.124:8762/baseSetting/getStatus").then((res) => {
      console.log(res);
    });
  }
  return (
    <div>
      <appContext.Provider value={user.father}>
        姓名：<Input value={user.father.name}></Input>
        <Son setName={setName}></Son>
        进度：
        <div
          style={{
            height: 100,
            width: 1000,
            backgroundColor: "#282A36",
          }}
        >
          <div
            style={{ height: 100, width: len, backgroundColor: "#00ACC1" }}
          ></div>
        </div>
        <input type="file" onChange={onFileChange} />
        <Button onClick={getStatus}>Click to Get</Button>,
      </appContext.Provider>
    </div>
  );
}

function Son(props) {
  const appContextValue = useContext(appContext);
  function setName(e) {
    appContextValue.name = e.target.value;
  }
  return (
    <div>
      父亲：
      <Input value={appContextValue.name} onChange={setName}></Input>
      <Grandson></Grandson>
    </div>
  );
}
function Grandson() {
  return (
    <div>
      <appContext.Consumer>
        {(value) => (
          <div>
            爷爷:<Input value={value.name}></Input>
          </div>
        )}
      </appContext.Consumer>
    </div>
  );
}
