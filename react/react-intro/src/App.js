import React, { Component } from "react";
import PropTypes from "prop-types";
export default class App extends Component {
  render() {
    return (
      <div>
        <ParentMovie />
      </div>
    );
  }
}
class ParentMovie extends Component {
  state = {
    movieListArray: [],
    movieValue: "",
  };
  handleOnChange = (event) => {
    this.setState({
      movieValue: event.target.value,
    });
  };
  handleOnClick = (event) => {
    let movieListArray = [
      ...this.state.movieListArray,
      {
        id: this.state.movieListArray.length + 1,
        movie: this.state.movieValue, //this what we captured from the input
      },
    ];
    this.setState({
      movieListArray: movieListArray,
      movieValue: "",
    });
  };
  render() {
    return (
      <div style={style.divStyle}>
        <input
          type="text"
          name="movieValue"
          value={this.state.movieValue}
          onChange={this.handleOnChange}
        />
        <br />
        <button onClick={this.handleOnClick}>Submit</button>
        <ChildMovie
          name={"Child 1"}
          movieListArray={this.state.movieListArray}
        />
      </div>
    );
  }
}
function ChildMovie(props) {
  return (
    <div>
      {" "}
      {props.movieListArray.map((item, index) => {
        return <div key={index}>{item.movie}</div>;
      })}
    </div>
  );
}
ChildMovie.propTypes = {
  movieListArray: PropTypes.array,
};
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
// 6. create a child component and pass the movieListArray to the child componenet
// 7. render the movieArrayList in the child component