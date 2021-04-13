import React from "react";
import { Link } from "react-router-dom";

const Back = () => {
    return (
        <div className="m-5" style={{ alignItems: "center" }}>
            <Link to="">
                <button  type="button" className="btn btn-primary"  style={{ fontFamily: 'smb2', fontSize: '10px', width: '250px' }}>
                    Return to Main Menu
                </button>
            </Link>
        </div>
    );
};

export default Back;
