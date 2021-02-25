import React, { Component } from 'react'

export default class App extends Component {
  state = {
    isTrue: false,
    name: "hamster",
  };

  toggleButton = () => {
    // this.setState({
    //   isTrue: !this.state.isTrue,
    // });
    
    this.setState((prevState) => {
      //prevState = previousState
      console.log(prevState);
      return {
        isTrue: !prevState.isTrue,
        name: !prevState.isTrue ? "Mighty Hamster" : "not Mighty Hamster",
      };
    });
  };


  render() {

    // let tempVar = "I am a FALSE tempVar"
    // if (this.state.isTrue) {
    //   tempVar = "i am a TRUE tempVar"
    // }

    // return (
    //   <div>
    //     {tempVar}
    //   </div>
    // )

    return (
      <div style={{background: this.state.isTrue ? "red" : "orange"}}>
        {/* { this.state.isTrue ? "I am a TRUE tempVar" : "I am a FALSE tempVar"} */}
        {/* { this.state.isTrue ? this.state.name : "I am a FALSE tempVar"} */}
        <div>The toggle value is: { this.state.isTrue.toString() }</div>

        <div>
          <button onClick={this.toggleButton}>Toggle Me</button>
        </div>
        <div>
          {this.state.isTrue ? (
            <span>{this.state.name}</span>
          ) : (
              <span>{this.state.name}</span>
          )}
        </div>

      </div>)

  }
}
