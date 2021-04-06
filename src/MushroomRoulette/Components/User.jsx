import React from "react";

const User = ({ username, coins }) => {
  return (
    <div className="m-5" style={{ display: "flex", alignItems: "center" }}>
      <h3>
        Username: {username} | Coins: {coins}
      </h3>
    </div>
  );
};

export default User;
