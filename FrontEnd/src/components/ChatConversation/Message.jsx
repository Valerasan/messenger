import React from "react";
import "./Message.css";

export default function Message({ message, isOwn = false }) {
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className={`message ${isOwn ? "message--own" : ""}`}>
      <div className="message__content">
        <div className="message__text">{message.message}</div>
      </div>
      <div className="message__time">{formatTime(message.time)}</div>
    </div>
  );
}
