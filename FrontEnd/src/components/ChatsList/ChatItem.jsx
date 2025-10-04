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
            <span className="chat-item-name">{name}</span>
            <span className="chat-item-time">{time}</span>
          </div>
          <div className="chat-item-message">{message}</div>
        </div>
      </div>
    );
  }
);

export default ChatItem;
