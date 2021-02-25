import React, { Component } from 'react'
import ChildMovie from "./ChildMovie";

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
        movie: this.state.movieValue,
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
        <br />
        <ChildMovie
          name={"child"}
          movieListArray={this.state.movieListArray}
        />
      </div>
    );
  }
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

export default ParentMovie;