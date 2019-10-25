import React, { Component } from 'react';
import './style.css';

import MessageBalloon from '../message/index';

export default class Main extends Component {
  render() {
    return(
        <div className="main-box">
          <div className="navbar">
            <p>Chat.APP</p>
          </div>
          <div className="chat-box">
            <div className="contact-list">
            </div>
            <div className="conversation-list">
              <div className="chat-list">
                <MessageBalloon message="Teste de mensagem" type="received" tail="tail" />
                <MessageBalloon message="Teste de mensagem" type="send" tail="tail" />
                <MessageBalloon message="Teste de mensagem" type="send" />
                <MessageBalloon message="Teste de mensagem" type="send" />
                <MessageBalloon message="Teste de mensagem" type="send" />
                <MessageBalloon message="Teste de mensagem" type="received" tail="tail" />
                <MessageBalloon message="Teste de mensagem" type="send" tail="tail" />
                <MessageBalloon message="Teste de mensagem" type="send" />
                <MessageBalloon message="Teste de mensagem" type="send" />
                <MessageBalloon message="Teste de mensagem" type="send" />
                <MessageBalloon message="Teste de mensagem" type="received" tail="tail" />
                <MessageBalloon message="Teste de mensagem" type="send" tail="tail" />
                <MessageBalloon message="Teste de mensagem" type="send" />
                <MessageBalloon message="Teste de mensagem" type="send" />
                <MessageBalloon message="Teste de mensagem" type="send" />
                <MessageBalloon message="Teste de mensagem" type="received" tail="tail" />
                <MessageBalloon message="Teste de mensagem" type="send" tail="tail" />
                <MessageBalloon message="Teste de mensagem" type="send" />
                <MessageBalloon message="Teste de mensagem" type="send" />
                <MessageBalloon message="Teste de mensagem" type="send" />
              </div>
              <div className="text-box"></div>
            </div>
          </div>
        </div>
    );
  }
}
