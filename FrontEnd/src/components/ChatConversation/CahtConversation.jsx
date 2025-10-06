import React, { useState, useEffect } from "react";
import "./ChatConversation.css";

import CahtConversationHeader from "./CahtConversationHeader";
import ChatMessages from "./CahtMessages";
import MessgaeInput from "./MessageInput";

export default function CahtConversation() {
  const [messages, setMessages] = useState([]);
  const [currentUserId] = useState(1);

  useEffect(() => {
    import("../ChatsList/chatsTest.json").then((data) => {
      setMessages(data.default);
    });
  }, []);

  return (
    <div className="chat-conversation">
      <CahtConversationHeader />
      <ChatMessages messages={messages} currentUserId={currentUserId} />
      <MessgaeInput />
    </div>
  );
}
