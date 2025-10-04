import React from "react";
import { List, AutoSizer } from "react-virtualized";

import ChatItem from "./ChatItem";
import "./ChatListItem.css";

import chatsData from "./chatsTest.json";

export default function ChatListItem() {
  console.log("render List");

  const [chats, setChats] = React.useState(chatsData);

  const sortedChats = React.useMemo(() => {
    return [...chats].sort((a, b) => new Date(b.time) - new Date(a.time));
  }, [chats]);

  const rowRenderer = ({ key, index, style }) => {
    const chat = sortedChats[index];
    return (
      <div key={key} style={style}>
        <ChatItem
          name={chat.name}
          message={chat.message}
          time={new Date(chat.time).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        />
      </div>
    );
  };

  return (
    <>
      <div className="chats-header">
        <h1>Chats</h1>
      </div>

      <div className="chats-container">
        <AutoSizer>
          {({ height, width }) => (
            <List
              className="my-virtualized-list"
              width={width}
              height={height}
              rowCount={sortedChats.length}
              rowHeight={70}
              rowRenderer={rowRenderer}
              overscanRowCount={5}
            />
          )}
        </AutoSizer>
      </div>
    </>
  );
}
