import React from "react";

export default function Navbar(props) {
  let styleToolCity = {
    color: "Red",
    fontWeight: "bold",
    fontSize: "22px",
  };

  let styleTextAnalyzer = {
    fontWeight: "bold",
    fontSize: "15px",
  };

  let styleNumberTool = {
    fontWeight: "bold",
    fontSize: "15px",
  };

  let styleSwitch = {
    fontWeight: "bold",
    fontSize: "15px",
  };

  let styleNavbar = {
  }
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
        style={styleNavbar}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/" style={styleToolCity}>
            Tool City
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                  style={styleTextAnalyzer}
                >
                  Text Analyzer
                </a>
              </li>
            </ul>
            <div className="d-flex flex-row-reverse bd-highlight mb-1 my-1 mx-5">
              <div className="p-2 bd-highlight" style={styleSwitch}>
                <div
                  className={`form-check form-switch text-${
                    props.mode === "dark" ? "light" : "dark"
                  }`}
                  onClick={props.toggleMode}
                >
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckChecked"
                    aria-checked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckChecked"
                  >
                    Enable Dark Mode
                  </label>
                </div>
              </div>
            </div>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="e.g. text tool"
                aria-label="Search"
              />
              <button className="btn btn-outline-danger" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
