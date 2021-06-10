import React from "react";
import { useEffect, useState } from "react";
import Graph from "./Graph.png";

export default function Page2() {
  let [topPosition, setTop] = useState(400);
  let [degrees, setDegrees] = useState({top: 0, left: 0})
  let [rightPostion, setRight] = useState(480);
  useEffect(()=> {
    setDegrees({
      right: Math.floor((480-rightPostion)/220 * 30 )
    })
  }, [rightPostion, topPosition])
  useEffect(() => {
    function keyfunction({ key }) {
      console.log(key, topPosition, rightPostion);
      switch (key) {
        case "w":
          setTop((t) => (t > 100 ? t - 5 : t));
          break;
        case "d":
          setRight((r) => (r > 260 ? r - 5 : r));
          break;
        case "s":
          setTop((t) => (t < 440 ? t + 5 : t));
          break;
        case "a":
          setRight((r) => (r < 700 ? r + 5 : r));
          break;
        default:
          break;
      }
    }
    document.addEventListener("keypress", keyfunction);
    return () => document.removeEventListener("keypress", keyfunction);
  }, []);

  return (
    <div className="d-flex justify-content-between">
      <div className="p-4">
        <div className="details font-weight-bold">
          <p>-- Incident Details --</p>
          <span>Incident Location:</span>
          <span className="font-weight-normal">
            {" "}
            Tuas View Mall 1.3521° N, 103.8198° E
          </span>
          <br />
          <span>Category:</span>
          <span className="font-weight-normal"> Level 4 (Fire At Large)</span>
          <br />
          <span>Type:</span>
          <span className="font-weight-normal"> Industrial Fire</span>
          <br />
          <span>Ground Command in-charge:</span>
          <span className="font-weight-normal"> STN 23 ROTA 2 RC</span>
          <br />
        </div>
        <div className="details font-weight-bold mt-5">
          <p>-- UFM Status --</p>
          <span>Water Supply:</span>
          <span className="font-weight-normal text-success font-weight-bolder">
            {" "}
            Connected, Activated
          </span>
          <br />
          <span>Power Supply:</span>
          <span className="font-weight-normal text-success font-weight-bolder">
            {" "}
            500/650 MHh
          </span>
          <br />
          <span>Type:</span>
          <span className="font-weight-normal"> Industrial Fire</span>
          <br />
          <span>Ground Command in-charge:</span>
          <span className="font-weight-normal"> STN 23 ROTA 2 RC</span>
          <br />
        </div>{" "}
      </div>
      <div className=" position-relative">
        <img src={Graph} alt="A graph"></img>
        <div
          className="position-absolute d-flex justify-content-center align-items-center rounded-circle border-danger border"
          style={{
            height: "200px",
            width: "200px",
            top: topPosition,
            right: rightPostion,
          }}
        >{degrees.right} degrees</div>
      </div>
    </div>
  );
}
