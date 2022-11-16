import "./App.css";
import React, { useState } from "react";
import Navbar from "./my_Components/Navbar";
import Form from "./my_Components/Formcontrol";
import Alert from "./my_Components/Alert";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode has been enabled !!", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fffc99";
      showAlert("Light Mode has been enabled !!", "success");
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Form mode={mode} showAlert={showAlert} />
        </div>
       
    </>
  );
}

export default App;
