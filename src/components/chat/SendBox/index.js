import React, { Component } from 'react';

import send from '../../../assets/send.svg';
import './style.css';

export default class SendBox extends Component {
  render() {
    return(
        <div className="send-button">
            
            <img src={send} alt="Send" />
        </div>
    );
  }
}
