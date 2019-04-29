import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 0
    };
  }

  addNumber = () => {
    this.setState({
      number: this.state.number + 1
    });
  };

  decreaseNumber = () => {
    this.setState({
      number: this.state.number - 1
    });
    if (this.state.number < 0) {
      this.setState({
        number: 0
      });
      alert("Error! Number is negative!");
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Project React Counter</h1>
        {this.state.number}
        <div>
          <button onClick={this.decreaseNumber}>-</button>
          <button onClick={this.addNumber}>+</button>
        </div>
      </div>
    );
  }
}

export default App;
