import React, { Component } from "react";
import classes from "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "am123", name: "Alex", age: 22 },
      { id: "tg123", name: "Tate", age: 22 },
      { id: "fm123", name: "Abril", age: 26 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons]; //ES7, the more modern way to copy the initial array
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  render() {
    let persons = null;
    let btnClass = [classes.Button];
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      btnClass.push(classes.Red);
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    //While it looks like HTML, it is not. It is instead JSX, made to look like HTML so you can write 'HTMLish' code.
    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(" ")}>This is really working!</p>
        <button
          className={btnClass.join(" ")}
          onClick={this.togglePersonsHandler}
        >
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
