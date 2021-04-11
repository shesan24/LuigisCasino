import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Back = () => {
    return (
        <div className="m-5" style={{ display: "flex", alignItems: "center" }}>
            <Link to="">
                <Button variant="dark">
                    Back
                </Button>
            </Link>
        </div>
    );
};

export default Back;
