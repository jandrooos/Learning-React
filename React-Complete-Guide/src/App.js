import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Alex", age: 22 },
      { name: "Tate", age: 22 },
      { name: "Abril", age: 26 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 21 },
        { name: "Tatumn", age: 21 },
        { name: "Fernanda", age: 25 },
      ],
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Alex", age: 21 },
        { name: event.target.value, age: 21 },
        { name: "Fernanda", age: 25 },
      ],
    });
  };

  render() {
    const styling = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Jandro")} //This is the better way to pass an argument into switchNameHandler
            changed={this.nameChangedHandler}
          >
            My Hobbies: Watching Netflix and Running
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
        </div>
      );
    }

    //While it looks like HTML, it is not. It is instead JSX, made to look like HTML so you can write 'HTMLish' code.
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={styling} onClick={this.togglePersonsHandler}>
          Toggle Person
        </button>
        {persons}
      </div>
    );

    //This is another way to write the return function, but it is more work and not convention because you have to use nested React.createElement(...) calls
    /*return React.createElement(
      "div",
      { className: "App" },
      React.createElement("h1", null, "Does this work now")
    );*/
  }
}

export default App;
