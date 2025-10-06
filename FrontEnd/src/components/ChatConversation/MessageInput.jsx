import React from "react";
import "./MessageInput.css";

export default function MessgaeInput() {
  return (
    <div className="message-input">
      <div className="message-input__container">
        <input
          type="text"
          placeholder="Type your message"
          className="message-input__field"
        />
        <button className="message-input__send-button" type="button">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22,2 15,22 11,13 2,9"></polygon>
          </svg>
        </button>
      </div>
    </div>
  );
}
