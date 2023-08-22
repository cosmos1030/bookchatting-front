import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useWebSocket from "react-use-websocket";
import "./ChatComponent.scss"; // CSS 파일을 임포트
import BookList from './BookList';

const ChatComponent = ({ bookId }) => {

  const [chatHistory, setChatHistory] = useState([]);
  const [userMessage, setUserMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const socketUrl = `ws://localhost:8000/ws/test/${bookId}/`;

  const { sendJsonMessage } = useWebSocket(socketUrl, {
    onOpen: () => {
      console.log("Connected!");
    },
    onClose: () => {
      console.log("Closed!");
    },
    onError: () => {
      console.log("Error!");
    },
    onMessage: (msg) => {
      const data = JSON.parse(msg.data);
      console.log(data.message);
      setChatHistory((prev_history) => [...prev_history, data]);
    },
  });

  const onButtonClicked = () => {
    const data = { message: userMessage, sender: "user" }
    setChatHistory((prev_history) => [...prev_history, data])
    sendJsonMessage(data);
  }

  const handleKeyUp = (e) => {
    if (e.key === 'Enter'){
      onButtonClicked()
    }
  }

  // onButtonClicked = (value) => {
  //   client.send(JSON.stringify({
  //     type: "message",
  //     msg: value
  //   }))
  // }

  // useEffect(() => {
  //   client.onmessage = (message) => {
  //     setLoading(false)
  //     const dataFromServer = JSON.parse(message.data)
  //     console.log('got reply', dataFromServer)
  //   }

  //   return () => {
  //     client.onclose()
  //   }
  // }, [bookId])

  // useEffect(() => {
  //   chatSocket.on('message', (data) => {
  //     setLoading(false);
  //     setChatMessages((prevMessages) => [...prevMessages, { sender: 'bot', message: data.message }]);
  //   });

  //   return () => {
  //     chatSocket.disconnect();
  //   };
  // }, [bookId]);

  // const sendMessage = () => {
  //   if (userMessage.trim() !== '') {
  //     setLoading(true);
  //     setChatMessages((prevMessages) => [...prevMessages, { sender: 'user', message: userMessage }]);

  //     client.send(JSON.stringify({
  //       type: "message",
  //       msg: userMessage,
  //     }));
  //     setUserMessage('');
  //   }
  // };

  return (
      <div className="chat-room">
        <div className="chat-room-name">{bookId}</div>
        <div className="chat-messages" id="chatMessages">
          {/* <!-- Messages will be displayed here --> */}
          {chatHistory.map((data, index) => (
            <div key={index} className={"message "+data.sender}>
              {data.message}
            </div>
          ))}
        </div>
        <div className="user-input">
          <input
            type="text"
            id="userMessage"
            placeholder="메시지를 입력하세요..."
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            onKeyUp={handleKeyUp}
          />
          <button onClick={onButtonClicked}>
            전송
          </button>
        </div>
      </div>
  );
};

export default ChatComponent;
