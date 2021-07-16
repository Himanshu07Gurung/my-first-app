import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import notify from "../shared/notify";
import "react-toastify/dist/ReactToastify.css";

class Header extends Component {
  componentDidMount() {
    notify("success", "Welcome On Board People !");
  }

  render() {
    return (
      <div className="w3-top">
        <ToastContainer />
        <div className="w3-bar w3-blue">
          <NavLink className="w3-bar-item w3-button" exact={true} activeClassName="active" to="/">Posts</NavLink>
          <NavLink className="w3-bar-item w3-button" activeClassName="active" to="/users">Users</NavLink>
          <NavLink className="w3-bar-item w3-button" activeClassName="active" to="/sample">Sample</NavLink>
          <NavLink className="w3-bar-item w3-button" activeClassName="active" to="/about">About</NavLink>
        </div>
      </div>
    )
  }
}

export default Header;