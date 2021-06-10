import React from "react";
import { Link } from "react-router-dom";


export default function Page1() {
  return (

      <div className="whole-screen-center">
        <div className="d-flex align-items-center flex-column p-5 border border-white">
          <h1 className="text-center title-text">
            Welcome to the UFM Controller Dashboard
          </h1>
          <p className="subtitle-text text-center mt-5">
            You will be lead to a page with a dashboard for controlling the UFM.
            You may use the <b style={{ fontWeight: 900 }}>A, S, W and D keys for moving left, up, down and right respectively</b> of
            your keyboard in order to point the head of the UFM.
 
          </p>
            <br />
            <br />
<h2 className="title-text text-center">GOOD LUCK!</h2>
          <Link to="/dashboard" className="d-block mt-5 btn btn-info">
            Click here to continue!
          </Link>
        </div>
      </div>

  );
}
