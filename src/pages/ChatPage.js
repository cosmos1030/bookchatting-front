import React from "react";
import { useParams } from "react-router-dom";
import ChatComponent from "../components/ChatComponent";
import Upload from '../components/Upload';
import BookList from '../components/BookList';
import "./ChatPage.scss";

const ChatPage = () => {
  let {id} = useParams();
  let content = null
  if (id === 'upload'){
    content = <Upload></Upload>
  } else {
    content = <ChatComponent bookId={id}></ChatComponent>
  }

  return (
    <div>
    <div className="chat-container">
      <div className="chat-selection">
        <div className="logo">Chat App</div>
        <BookList></BookList>
      </div>
      {content}
    </div>
    </div>
  );
};

export default ChatPage;
