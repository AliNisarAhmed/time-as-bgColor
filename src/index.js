import React from "react";
import ReactDOM from "react-dom";

import Display from "./Display";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeHex: "",
      timeRGB: "",
      timeHSL: "",
      hours: "",
      minutes: "",
      seconds: ""
    };
    setInterval(this.setTime, 1000);
  }

  componentDidMount() {
    this.setTime();
  }

  setTime = () => {
    let date = new Date();
    let seconds = this.formatTime(date.getSeconds());
    let minutes = this.formatTime(date.getMinutes());
    let hours = this.formatTime(date.getHours());
    console.log(typeof hours, minutes, seconds);
    this.setState({
      timeHex: `#${hours}${minutes}${seconds}`,
      timeRGB: `rgba(${hours}, ${minutes}, ${seconds})`,
      timeHSL: `hsl(${hours}, ${hours}%, ${hours}%)`,
      hours,
      minutes,
      seconds
    });
  };

  formatTime = time => {
    if (String(time).length < 2) {
      return "0" + String(time);
    }
    return String(time);
  };

  render() {
    // setInterval(this.setTime, 1000);
    return (
      <div className="App">
        <Display
          color={this.state.timeHex}
          hours={this.state.hours}
          minutes={this.state.minutes}
          seconds={this.state.seconds}
          formatTime={this.formatTime}
          colorFormat="hex"
        />
        <Display
          color={this.state.timeRGB}
          hours={this.state.hours}
          minutes={this.state.minutes}
          seconds={this.state.seconds}
          formatTime={this.formatTime}
          colorFormat="rgb"
        />
        <Display
          color={this.state.timeHSL}
          hours={this.state.hours}
          minutes={this.state.minutes}
          seconds={this.state.seconds}
          formatTime={this.formatTime}
          colorFormat="hsl"
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
