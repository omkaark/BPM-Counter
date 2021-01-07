import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../componentStyles/slider.css";

const MINIMUM_RANGE = 50;
const MAXIMUM_RANGE = 150;
const START_POS = 100;

class Slider extends Component {
  state = {
    min: MINIMUM_RANGE,
    max: MAXIMUM_RANGE,
    cur: START_POS,
    pos: 48,
  };

  handleSlide = () => {
    const posi = parseInt(document.getElementById("bpm_slider").value);
    this.setState({
      cur: posi,
      pos: 48 + 0.58 * (posi - START_POS),
    });
  };

  playBPM = () => {
    console.log("akjbdkja");
  };

  render() {
    return (
      <React.Fragment>
        <div class="slider-container">
          <input
            className="slider-range"
            onChange={this.handleSlide}
            type="range"
            id="bpm_slider"
            value={this.state.cur}
            min={this.state.min}
            max={this.state.max}
            step="1"
          />
          <label
            id="bubble"
            class="badge badge-primary"
            style={{ marginLeft: this.state.pos.toString().concat("%") }}
          >
            {this.state.cur}
          </label>
        </div>
      </React.Fragment>
    );
  }
}
//<label class="badge badge-primary">{this.state.cur}</label>
export default Slider;
