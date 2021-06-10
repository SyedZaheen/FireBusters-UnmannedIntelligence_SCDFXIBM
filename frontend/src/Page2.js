import React from "react";
import { useEffect, useState } from "react";
import Graph from "./Graph.png";
import { useMediaPredicate } from "react-media-hook";

export default function Page2() {
  let [topPosition, setTop] = useState(270);
  let [degrees, setDegrees] = useState({ top: 0, left: 0 });
  let [rightPostion, setRight] = useState(270);
  const [inControl, setInControl] = useState(true);
  const [temp, setTemp] = useState(75);
  let acceptable1 = useMediaPredicate("(min-width: 1200px)");
  let acceptable2 = useMediaPredicate("(max-width: 1700px)");
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
      right: Math.floor(((270 - rightPostion) / 160) * 30),
      top: Math.floor(((270 - topPosition) / 60) * 10),
    });
  }, [rightPostion, topPosition]);
  useEffect(() => {
    function keyfunction({ key }) {
      console.log(key, topPosition, rightPostion);
      switch (key) {
        case "w":
          setTop((t) => (t > 30 ? t - 5 : t));
          break;
        case "d":
          setRight((r) => (r > 110 ? r - 5 : r));
          break;
        case "s":
          setTop((t) => (t < 330 ? t + 5 : t));
          break;
        case "a":
          setRight((r) => (r < 430 ? r + 5 : r));
          break;
        default:
          break;
      }
    }
    document.addEventListener("keypress", keyfunction);
    return () => document.removeEventListener("keypress", keyfunction);
  }, []);
  if (!acceptable1)
    return (
      <div className="whole-screen-center">
        <div>
          <h1>PLEASE VIEW THIS PAGE ON DESKTOP SIZED SCREEN</h1>
          <p>
            If you're having issues, you can try zooming your browser out or in
          </p>
        </div>
      </div>
    );

  if (!acceptable2)
    return (
      <div className="whole-screen-center">
        <div>
          <h1>PLEASE VIEW THIS PAGE ON A SMALLER SCREEN</h1>
          <p>
            If you're having issues, you can try zooming your browser out or in
          </p>
        </div>
      </div>
    );

  return (
    <>
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
          <div className="details font-weight-bold mt-3">
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
          <div className="details font-weight-bold mt-3">
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
          <h2 className="font-weight-bold gyro-header text-center">
            Gyro Horizon Indicator (press ASDW to control!)
          </h2>
          <img
            src={Graph}
            alt="A graph"
            style={{ height: 380, width: 700 }}
          ></img>
          <div
            className="position-absolute d-flex justify-content-center align-items-center rounded-circle border-danger border"
            style={{
              height: "170px",
              width: "170px",
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
      <div className="whole-screen-center"></div>
    </>
  );
}
