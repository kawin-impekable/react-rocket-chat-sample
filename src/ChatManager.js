import React, { Component } from 'react';
import { RealTimeAPI } from './lib';

const CHAT_HOST_SOCKET_URI = 'wss://open.rocket.chat/websocket';

class ChatManager extends Component {
  constructor(props) {
    super(props);

    this.chatSocket = null;
  }

  componentDidMount() {
    this.chatSocket = new RealTimeAPI(CHAT_HOST_SOCKET_URI);
    this.chatSocket.connectToServer().subscribe(result => {
      if (result.msg === 'connected') {
        this.chatSocket.login('kawin.test.account@test.com', '12341234').subscribe(() => {
          console.log('login completed!');
        });

        // Suddenly terminate the chatSocket after we send the login package to server
        // This will cause an error to show up
        this.chatSocket.disconnect();
      }
    });

    this.chatSocket.subscribe(
      (result) => console.log('Incoming data:', result),
      (err) => console.log('ChatSocket Error:', err),
      () => console.log('ChatSocket: Terminated.')
    );
  }

  componentWillUnmount() {
    if (this.chatSocket) this.chatSocket.disconnect();
  }

  render() {
    return <p>Chat Instance is running!</p>;
  }
}

export default ChatManager;
