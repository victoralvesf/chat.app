import React, { Component } from 'react';

import './style.css';

export default class MessageBalloon extends Component {
  constructor(props) {
    super(props);
    this.message = String;
    this.type = String;
    this.tail = String;
    this.state = {
      date: ''
    }
  }

  componentDidMount() {
    this.setDate();
  }

  setDate = () => {
    const date = new Date();
    this.setState({ date: `${date.getHours()}:${date.getMinutes()}` });
  }

  render() {
    const { date } = this.state;
    const firstMessageSequence = this.props.tail ? 'first' : '';

    return(
      <div className={`message-line ${firstMessageSequence}`}>
        <div className={`message-balloon ${this.props.type}`}>
          <span className={`message-balloon-${this.props.tail}`}></span>
          <div className="text">
            {this.props.message}
          </div>
          <div className="date">
            <small>
              {date}
            </small>
          </div>
        </div>
      </div>
    );
  }
}
