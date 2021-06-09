import React from "react";
import "./app.css";
import dashboard from './Dashboard.png'


function App() {
  return (
    <>
      <div className="whole-screen-center">
        <img src={dashboard} alt="This is the dashboard" style={{objectFit:'fill'}}/>
      </div>
    </>
  );
}

export default App;
