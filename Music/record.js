import React, { Component } from "react";
import microphone from './../imgs/microphone.svg';
import stopIcon from './../imgs/stop.png';
import pauseIcons from './../imgs/pause.png';
import playIcons from './../imgs/play-button.png';
import closeIcons from './../imgs/close.png';
import styles from '../styles.module.css';
const audioType = "audio/*";

class Recorder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: {},
      seconds: 0,
      recording: false,
      medianotFound: false,
      audios: [],
      audioBlob: null
    };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  handleAudioPause(e) {
    e.preventDefault();
    clearInterval(this.timer);
    this.mediaRecorder.pause();
    this.setState({ pauseRecord: true });
  }
  handleAudioStart(e) {
    e.preventDefault();
    this.startTimer();
    this.mediaRecorder.resume();
    this.setState({ pauseRecord: false });
  }

  startTimer() {
    //if (this.timer === 0 && this.state.seconds > 0) {
    this.timer = setInterval(this.countDown, 1000);
    //}
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds + 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds
    });
  }

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes
