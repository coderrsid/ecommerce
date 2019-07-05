import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import Login from "./components/login";
import fire from "./firebaseConfig";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { name: "Item 1", id: 1, value: 0 },
      { name: "Item 2", id: 2, value: 0 },
      { name: "Item 3", id: 3, value: 0 },
      { name: "Item 4", id: 4, value: 0 }
    ],
    user: null
  };

  componentDidMount() {
    this.authListener();
  }

  authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    const totalCounters = this.state.counters.filter(c => c.value > 0).length;
    return (
      <React.Fragment>
        <main className="container">
          {!this.state.user ? (
            <Login />
          ) : (
            <React.Fragment>
              <NavBar
                totalCounters={totalCounters}
                counters={this.state.counters}
              />
              <Counters
                counters={this.state.counters}
                onReset={this.handleReset}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
                totalCounters={totalCounters}
              />
            </React.Fragment>
          )}
        </main>
      </React.Fragment>
    );
  }
}

export default App;
