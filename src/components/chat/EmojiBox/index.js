import React, { Component } from 'react';

import './style.css';
import emoji from '../../../assets/smile.svg';

export default class EmojiBox extends Component {
  render() {
    return(
        <div className="emoji-face">
            <button>
                <img src={emoji} alt="Emoji"/>
            </button>
        </div>
    );
  }
}
