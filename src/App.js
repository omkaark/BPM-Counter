import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Slider from './components/slider';

let intv;
const audio = new Audio('./badrim.mp3');
audio.crossOrigin = 'anonymous';

class App extends Component {
  state = { 
    click: false,
    btext: "Start BPM"
  }

  playBPM = () => {
    this.state.click = !this.state.click;
    this.state.btext = (this.state.click ? "Stop BPM" : "Start BPM");
    this.setState({click: this.state.click, btext: this.state.btext })
    if (this.state.click){
      const bpm = parseInt(document.getElementById('bpm_slider').value);      
      const interval = parseInt(parseFloat(60/bpm)*1000);
      intv = setInterval(function(){ 
        audio.play();
      }, interval);
    }
  }

  stopBPM = () => {
    clearInterval(intv);
    intv = null;
    this.state.click = !this.state.click;
    this.state.btext = (this.state.click ? "Stop BPM" : "Start BPM");
    this.setState({click: this.state.click, btext: this.state.btext });
  }

  render() { 
    return ( 
      <React.Fragment>
        <label id="info">Slide the slider to choose the BPM</label>
        <Slider />
        <button onClick={!this.state.click ? this.playBPM : this.stopBPM} id="bpm-button">{this.state.btext}</button>
      </React.Fragment>
     );
  }
}
 
export default App;