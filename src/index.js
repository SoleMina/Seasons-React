//Import the React and ReactDom ibraries
import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

//Create React components
class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  //we did not!!
  //this.state.lat = position.coords.latitude;
  //for render div {this.state.lat !== null ? this.state.lat : this.state.errorMessage}
  //},
  //(err) => {
  //this.setState({ errorMessage: err.message });
  //}
  //);
  //}

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept location access..." />;
  }

  //Main
  render() {
    return <div className="border-red">{this.renderContent()}</div>;
  }
}

//Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
