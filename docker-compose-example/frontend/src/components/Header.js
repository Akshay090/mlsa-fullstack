import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          src="mlsa.png"
          width="300"
          className="img-thumbnail"
          style={{ marginTop: "20px", maxWidth: "120px" }}
          alt="mlsa logo"
        />
        <hr />
        <h5>
          <i>presents</i>
        </h5>
        <h1>App with React + Django</h1>
      </div>
    );
  }
}

export default Header;
