import React, { Component } from "react";
import fire from "../firebaseConfig";
import Cart from "./cart";

class NavBar extends Component {
  state = {
    showCart: false
  };
  logout = () => {
    fire.auth().signOut();
  };

  showCart = () => {
    this.setState({ showCart: true });
    console.log(this.state.showCart);
  };

  removeCart = () => {
    this.setState({ showCart: false });
    console.log(this.state.showCart);
  };

  render() {
    const classes =
      this.props.totalCounters >= 3 ? "badge-danger" : "badge-secondary";

    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          E-Commerce{" "}
          <span
            onMouseEnter={this.showCart}
            onMouseLeave={this.removeCart}
            className={"badge badge-pill " + classes}
          >
            {"Cart " + this.props.totalCounters}
          </span>
          {this.state.showCart ? <Cart counters={this.props.counters} /> : null}
        </a>
        <button
          style={{ float: "right" }}
          onClick={this.logout}
          className="btn btn-md btn-danger"
        >
          Sign Out
        </button>
      </nav>
    );
  }
}
export default NavBar;
