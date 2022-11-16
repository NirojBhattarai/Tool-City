import React, { useState } from "react";

export default function Formcontrol(props) {
  const handle_Upclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!!", "info");
  };

  const handle_Lowclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!!", "info");
  };

  const handle_Onclear = () => {
    setText("");
    props.showAlert("Content has been cleared!!", "warning");
  };

  const handle_OnCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Content copied!!", "success");
  };

  const handle_OnExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space has been removed!!", "success");
  };

  const handle_Onchange = (event) => {
    setText(event.target.value);
  };

  const handle_Oncapitalization = () => {
    setText(text.charAt(0).toUpperCase() + text.slice(1).toLowerCase());
  }

  const [text, setText] = useState("");

  let styleTextArea = {
    border: "2px solid black",
  };

  let styleFooter = {
    textAlign: "center",
    fontWeight: "bolder",
    fontSize: "13px",
  };

  let styleTextAnalysis = {
    fontWeight:"bold"
  }

  let styleAccordion = {
    border:"2px solid black",
    borderRadius:"5px"
  }

  
  return (
    <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
      <h2 className="my-1">Enter your text here :</h2>
      <div className="mb-3">
        <textarea
          className="form-control my-3"
          id="TextArea"
          onChange={handle_Onchange}
          value={text}
          rows="8"
          style={styleTextArea}
        ></textarea>
      </div>

      <button
        className="btn btn-primary mx- my-1"
        onClick={handle_Upclick}
        id="touppercase"
        disabled = {text.replace(/\s/g,"").length < 1}
      >
        Convert to Uppercase
      </button>
      <button
        className="btn btn-primary mx-1 my-1"
        onClick={handle_Lowclick}
        id="tolowercase"
        disabled = {text.replace(/\s/g,"").length < 1}
      >
        Convert to Lowercase
      </button>
      <button
        className="btn btn-success mx-1 my-1"
        onClick={handle_OnCopy}
        id="Copy"
        disabled = {text.replace(/\s/g,"").length < 1}
      >
        Copy
      </button>

      <button
        className="btn btn-warning mx-1 my-1"
        onClick={handle_OnExtraSpace}
        id="Extraspace"
        disabled = {text.replace(/\s/g,"").length < 1}
      >
        Remove Extra Space
      </button>

      <button
        className="btn btn-danger mx-1 my-1"
        onClick={handle_Onclear}
        id="Clear"
        disabled = {text.replace(/\s/g,"").length < 1}
      >
        Clear
      </button>

      <button
        className="btn btn-dark mx-1 my-1"
        onClick={handle_Oncapitalization}
        id="Clear"
        disabled = {text.replace(/\s/g,"").length < 1}
      >
        Capitilization
      </button>

      <div className="container my-3" style={styleTextAnalysis}>
        <h2>Text Analysis :</h2>
        <p>
          {text.replace(/\s/g,"").length} Characters and {text.split(/\s+/).filter((element)=>
          {return element.length!==0}).length} Words can be read in about {0.08 * text.length} minutes (not approximately)
        </p>
      </div>

      <div className="container my-4">
        <h2>Text Summary :</h2>
      </div>
      <div
        className="accordion accordion-flush"
        id="accordionFlushExample"
        style={styleAccordion}
      >
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Click here to Preview
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">{text}</div>
          </div>
        </div>
      </div>
      <div className="footer my-4" style={styleFooter}>
        <p> &copy; 2022 <strong>Neeraj Bhattarai</strong></p>
      </div>
    </div>
  );
}
