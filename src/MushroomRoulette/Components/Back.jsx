import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Back = () => {
  return (
    <div className="m-5" style={{ display: "flex", alignItems: "center" }}>
      <Button variant="dark">
        <Link to="/">Back</Link>
      </Button>
    </div>
  );
};

export default Back;
