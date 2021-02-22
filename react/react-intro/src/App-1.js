import React, { Component } from "react";
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Peter jr",
      todoValue: "",
      todoList: [
        {
          id: 1,
          todo: "Walk the dog",
        },
        {
          id: 2,
          todo: "Walk the cat",
        },
      ],
    };
    //this.clickButtonToChangeName = this.clickButtonToChangeName.bind(this);
    this.notArrowFunction = this.notArrowFunction.bind(this);
  }
  componentDidMount() {
    // this.setState({
    //   name: "Michael Johnson",
    // });
    setTimeout(() => {
      this.setState({
        name: "Michael Johnson",
      });
    }, 2000);
  }
  clickButtonToChangeName = () => {
    this.setState({ name: "Peter jr" });
  };
  handleInputChange = (event) => {
    this.setState({
      todoValue: event.target.value,
    });
  };
  handleInputSubmit = (event) => {
    // let newArray = [...this.state.todoList];
    // let newObj = {
    //   id: newArray.length + 1,
    //   todo: this.state.todoValue,
    // };
    // newArray.push(newObj);
    let newArray = [
      ...this.state.todoList,
      { id: this.state.todoList.length + 1, todo: this.state.todoValue },
    ];
    this.setState({
      todoList: newArray,
      todoValue: "",
    });
  };
  notArrowFunction() {
    this.setState({
      name: "Ginny",
    });
  }
  render() {
    return (
      <div style={{ textAlign: "center", marginTop: 50 }}>
        My name is {this.state.name}
        <div>
          <button onClick={this.clickButtonToChangeName}>click me</button>
          <button onClick={this.notArrowFunction}>No Arrow function</button>
        </div>
        <hr />
        <div>
          <p>This is my current Input: {this.state.todoValue}</p>
          <input
            type="text"
            name="todo"
            onChange={this.handleInputChange}
            value={this.state.todoValue}
          />
          <button onClick={this.handleInputSubmit}>Submit</button>
          <div>
            <ul>
              {this.state.todoList.map((item, index) => {
                return <li key={index}>{item.todo}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default App;