import React, { Component } from 'react'
// import PropTypes from "prop-types";
export default class App extends Component {
  render() {
    return (
      <div>
        <BookLibrary />
      </div>
    );
  }
}
class BookLibrary extends Component {
  state = {
    bookListArray: [],
    bookValue: "",
  };
  handleOnChange = (e) => {
    this.setState({
      bookValue: e.target.value,
    })
  };
  handleOnClick = (e) => {
    let bookListArray = [
      ...this.state.bookListArray,
      {
        // id: this.state.bookValue.length + 1,
        book: this.state.bookValue,
      },
    ];
    this.setState({
      bookListArray: bookListArray,
      bookValue: "",
    });
  };
  render() {
    return (
      <div style={style.divStyle}>
        <input
          type="text"
          name="bookValue"
          value={this.state.bookValue}
          onChange={this.handleOnChange}
        />
        <br/>
        <button onClick={this.handleOnClick}>
          submit
        </button>
        <BookChild
          name={"child 1"}
          bookListArray={this.state.bookListArray}
        />
      </div>
    )
  }
}
function BookChild(props) {
  console.log(props)
  return (
    <div>
      {props.bookListArray.map((i, x) => {
        let t = i.book.trim()
        if (t === "") {
          // console.log(i)
          return <div key={x}>{alert("Enter something")}</div>
          // return <div key={x}>{console.log("Enter something")}</div>
        } else {
          // console.log(i)
          return (
            <div key={x}>
              {t}
            </div>
          )
        }
      })}
    </div>
  );
}
const style = {
  divStyle: {
    textAlign: "center",
    marginTop: 50,
  },
  buttonStyle: {
    width: 250,
    backgroundColor: "orange",
  },
};


// React- Review Props, Child Component Intro
// To show understanding of creating different components and passing down props and prevent click when input is empty

// 1. create a state
// 2. create an array called bookListArray
// 3. create a state called bookValue
// 4. create an input to capture user value
// 5. create a submit button to submit user value
// 6. create a child component and pass the movieListArray to the child component
// 7. render the movieArrayList in the child component

// **EXTRA CREDIT: Do not allow user to submit an empty input**

// * Submit code in Essay 