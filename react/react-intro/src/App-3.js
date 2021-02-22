import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      movieListArray: [],
      movieValue: "",
    };
  }
  handleOnChange = (event) => {
    this.setState({
      movieValue: event.target.value,
    });
  };
  handleOnSubmit = (event) => {
    let newMovieArray = [
      ...this.state.movieListArray,
      {
        id: this.state.movieListArray.length + 1,
        movie: this.state.movieValue,
      },
    ];
    this.setState({
      movieListArray: newMovieArray,
      movieValue: "",
    });
  };
  render() {
    return (
      <div style={style.divStyle}>
        <input
          type="text"
          name="movieValue"
          onChange={this.handleOnChange}
          value={this.state.movieValue}
        />
        <br />
        <button
          onClick={this.handleOnSubmit}
          type="submit"
          style={style.buttonStyle}
        >
          Submit
          </button>
        <br />
        <AppChild
          // item={"This is an item"}
          // isTrue={true}
          movieListArray={this.state.movieListArray}
          />
      </div>
    )
  }
}
function AppChild(props) {
  return (
    <div>
      movie Here.
      <br />
      {props.movieListArray.map((item, index) => {
        return <div key={index}>{item.movie}</div>
      })}
    </div>
  )
}
const style = {
  divStyle: {
    textAlign: "center",
    marginTop: 50,
  },
  buttonStyle: {
    width: 250,
    backgroundColor: "red",
  },
};
// 1. create a state
// 2. create an array called movieListArray 
// 3. create a state called movieValue 
// 4. create an input to capture user value 
// 5. create a submit button to submit user value 
// 6. create a child component and pass the movieListArray to the child component
// 7. render the movieArrayList in the child component

