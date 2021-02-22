import React, { Component } from "react";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      favoriteFoodList: [],
      favoriteFood: "",
    };
  }
  handleOnChange = (event) => {
    this.setState({
      favoriteFood: event.target.value,
    });
  };
  handleOnSubmit = (event) => {
    let newFavoriteFoodListArray = [
      ...this.state.favoriteFoodList,
      {
        id: this.state.favoriteFoodList.length + 1,
        food: this.state.favoriteFood, //this what we captured from the input
      },
    ];
    this.setState({
      favoriteFoodList: newFavoriteFoodListArray,
      favoriteFood: "",
    });
  };
  render() {
    return (
      // <div style={{ textAlign: "center", marginTop: 50 }}>
      <div style={style.divStyle}>
        <input
          type="text"
          name="favoriteFood"
          onChange={this.handleOnChange}
          value={this.state.favoriteFood}
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
        {/* {this.state.favoriteFoodList.map((item, index) => {
          return <div key={index}>{item.food}</div>;
        })} */}

        <br />
        <AppChild
          item={"i am item 1"}
          isTrue={true}
          favoriteFoodList={this.state.favoriteFoodList}
            />
      </div>
    );
  }
}

function AppChild(props) {
  console.log(props)
  return (
    <div>
    This is from a Child component
    <br />
          Load data from the parent component
    <br />
    {props.favoriteFoodList.map((item, index) => {
      return <div key={index}>{item.food}</div>;
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
    backgroundColor: "red",
  },
};
// 1. create a state
// 2. inside state create an array called favoriteFoodList.
// 3.create a state variable called favoriteFoodList.
// 4. create an Input.
// 5. create a button.
// 6. a user can type a favorite food and add it to the favoriteFoodList.
// 7. after the user clicked submit it should clear out the input.