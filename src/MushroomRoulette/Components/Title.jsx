import React from "react";

import title from "../assets/title.png";

const Title = () => {
  return (
    <div
      className="m-5"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={title} />
    </div>
  );
};

export default Title;
