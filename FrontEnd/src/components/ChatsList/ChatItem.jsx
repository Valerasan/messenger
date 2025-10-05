// ChatItem.jsx
import React from "react";
import "./ChatItem.css";
import UserIcon from "../UserIcon/UserIcon";

const ChatItem = React.memo(
  ({ name = "Unknown", message = "No messages yet", time = "00:00" }) => {
    console.log("Render:", name);

    return (
      <div className="chat-item">
        <UserIcon />
        <div className="chat-item-content">
          <div className="chat-item-header">
            <div className="chat-item-name">{name}</div>
            <div className="chat-item-time">{time}</div>
          </div>
          <div className="chat-item-message">{message}</div>
        </div>
      </div>
    );
  }
);

export default ChatItem;
