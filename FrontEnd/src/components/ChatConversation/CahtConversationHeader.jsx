import React from "react";
import "./CahtConversationHeader.css";
import UserIcon from "../UserIcon/UserIcon";

export default function CahtConversationHeader() {
  return (
    <>
      <div className="conversation-header">
        <UserIcon />
        <div className="conversation-header__text">Name Surname</div>
      </div>
    </>
  );
}
