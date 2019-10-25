import React, { Component } from 'react';

import './style.css';

export default class ChatField extends Component {
  render() {
    return(
      <div className="text-field">
        <textarea rows="2" cols="60" placeholder="Enviar uma mensagem"></textarea>
      </div>
    );
  }
}
