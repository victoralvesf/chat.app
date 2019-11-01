import React, { Component } from 'react';

import './style.css';

export default class ChatField extends Component {
  render() {
    return(
      <div className="text-field">
        <textarea rows="0" cols="60" name="message" required></textarea>
        <label htmlFor="message">
          <span className="content-label">Mensagem</span>
        </label>
      </div>
    );
  }
}
