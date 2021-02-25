import React, { Component } from "react";
import axios from "axios";
//`https://api.giphy.com/v1/gifs/search?api_key=kUOV7JObAWL2CGRIBtTxqYp6q0uvgroU&q=hamster`;
export default class App extends Component {
  state = {
    isLoading: true,
    giphyArray: [],
  };
  async componentDidMount() {
    try {
      let result = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=olyfhHZuXEHElc8wBW5ORaJbF2JGa4Ij&q=hamster`);
      this.setState({
        giphyArray: result.data.data,
        isLoading: false,
      });
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <div>....Loading</div>
        ) : (
          <div className="container">
            <div className="row">
              {this.state.giphyArray.map((item) => {
                return (
                  <div className="col-sm-4" key={item.id}>
                    <div className="card">
                      <div className="card-body">
                        <div>
                          <img src={item.images.fixed_width_still.url} />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}
