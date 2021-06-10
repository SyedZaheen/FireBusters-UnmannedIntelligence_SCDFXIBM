import React from "react";
import { useEffect, useState } from "react";
import Graph from "./Graph.png";

export default function Page2() {
  let [topPosition, setTop] = useState(480);
  let [degrees, setDegrees] = useState({ top: 0, left: 0 });
  let [rightPostion, setRight] = useState(480);
  const [inControl, setInControl] = useState(true);
  const [temp, setTemp] = useState(75);

  useEffect(() => {
    function redo() {
      setTimeout(() => {
        let p = Math.random();
        if (p < 0.2) {
          setTemp((t) => {
            let newValue = t + (2 - Math.ceil(Math.random() * 3));
            return newValue;
          });
        }
        redo();
      }, 100);
    }
    redo();
  }, []);

  useEffect(() => {
    document.onkeydown = ({ key }) =>
      (key === "w") | (key === "a") | (key === "s") | (key === "d") &&
      setInControl(false);
    document.onkeyup = ({ key }) =>
      (key === "w") | (key === "a") | (key === "s") | (key === "d") &&
      setInControl(true);
  });

  useEffect(() => {
    setDegrees({
      right: Math.floor(((480 - rightPostion) / 270) * 30),
      top: Math.floor((480 - topPosition) / 11),
    });
  }, [rightPostion, topPosition]);
  useEffect(() => {
    function keyfunction({ key }) {
      console.log(key, topPosition, rightPostion);
      switch (key) {
        case "w":
          setTop((t) => (t > 40 ? t - 5 : t));
          break;
        case "d":
          setRight((r) => (r > 210 ? r - 5 : r));
          break;
        case "s":
          setTop((t) => (t < 590 ? t + 5 : t));
          break;
        case "a":
          setRight((r) => (r < 750 ? r + 5 : r));
          break;
        default:
          break;
      }
    }
    document.addEventListener("keypress", keyfunction);
    return () => document.removeEventListener("keypress", keyfunction);
  }, []);

  return (<>
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
          <span>Outside Temperature:</span>
          <span
            className={`font-weight-bold ${
              temp > 75 ? "text-danger" : "text-success"
            }`}
          >
            {" "}
            {temp} degrees C
          </span>
          <br />
        </div>
        <div className="details font-weight-bold mt-5">
          <p>-- AI Status --</p>
          <span>Control:</span>
          <span
            className={`font-weight-normal font-weight-bolder ${
              inControl ? "text-danger" : "text-success"
            }`}
          >
            {" "}
            {inControl ? "FULL AI CONTROL" : "MANUAL HUMAN CONTROL"}
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
      <div className="position-relative pt-4">
        <h2 className="font-weight-bold text-center">
          Gyro Horizon Indicator (press ASDW to control!)
        </h2>
        <img src={Graph} alt="A graph"></img>
        <div
          className="position-absolute d-flex justify-content-center align-items-center rounded-circle border-danger border"
          style={{
            height: "200px",
            width: "200px",
            top: topPosition,
            right: rightPostion,
          }}
        >
          <div className="rounded-circle border border-danger p-2 bg-danger"></div>
          <div
            className="position-absolute"
            style={{ fontSize: 12, lineHeight: 0, bottom: 100 }}
          >
            <p>x-axis: {degrees.right} degrees</p>
            <p>y-axis: {degrees.top} degrees</p>
          </div>
        </div>
      </div>
    </div>
    <div className="whole-screen-center">

    </div></>
  );
}
