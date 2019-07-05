import React, { Component } from "react";
import "./styles.css";

class Cart extends Component {
  render() {
    return (
      <div className="cart-container">
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Item Name</th>
              <th scope="col">ID</th>
              <th scope="col">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {this.props.counters.map(item => {
              return (
                <tr key={item}>
                  <td>{item.name}</td>
                  <td>{item.id}</td>
                  <td>{item.value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Cart;
