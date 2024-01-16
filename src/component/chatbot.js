import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import configg from './config.js';
import ActionProvider from './ActionProvider.js';
import MessageParser from './MessageParser.js';
import imgblack from '../img/empowermendlogo.png'
import './chatbot.css'

function ChatBot(){
    const [showBot, toggleBot] = useState(false);

  const saveMessages = (messages, HTMLString) => {
    localStorage.setItem('chat_messages', JSON.stringify(messages));
  };

  const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem('chat_messages'));
    return messages;
  };

  return (
    <div className='App'>
      {showBot && (
        <Chatbot className='abbo'
          config={configg}
          actionProvider={ActionProvider}
          messageHistory={loadMessages()}
          messageParser={MessageParser}
          saveMessages={saveMessages}
        />
      )}
      <button className='bot' onClick={() => toggleBot((prev) => !prev)}><img className='abbo bot-logo shadow rounded-circle' src={imgblack}></img></button>
    </div>
  )
}


export default ChatBot