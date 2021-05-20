import React from "react";
import "./icon-loading.scss";

interface loadingiconProps {
  width?: string;
  height?: string;
  scale?: string;
}

function LoadingIcon(props: loadingiconProps) {
  return (
    <div
      style={{
        width: props.width,
        height: props.height,
      }}
    >
      <div className="loading">
        <div className="pic" style={{ transform: `scale(${props.scale})` }}>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>
      </div>
    </div>
  );
}

export default LoadingIcon;
