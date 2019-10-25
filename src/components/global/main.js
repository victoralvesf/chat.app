import React, { Component } from 'react';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

import './style.css';

import MessageBalloon from '../message/index';
import ChatField from '../chat/chatField';

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
              <div className="text-box">
                <Picker 
                  set='facebook'
                  style={{ position: 'absolute', bottom: '70px', left: '400px' }}
                  showPreview={false}
                  title={false}
                  perLine='7'
                  showSkinTones={false}
                />
                <ChatField />
              </div>
            </div>
          </div>
        </div>
    );
  }
}
