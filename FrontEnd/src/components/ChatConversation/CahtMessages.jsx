import React, { useEffect } from "react";
import Message from "./Message";
import "./ChatMessages.css";

export default function ChatMessages({ messages = [], currentUserId = null }) {
  useEffect(() => {}, [messages]);

  if (messages.length === 0) {
    return (
      <div className="chat-messages chat-messages--empty">
        <div className="empty-state">
          <p>No messages yet. Start a conversation!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="messages-container">
      {messages.map((message) => (
        <Message
          key={message.id}
          message={message}
          isOwn={currentUserId === message.userId}
        />
      ))}
    </div>
  );
}
