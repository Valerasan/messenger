import "./App.css";
import UserIcon from "./components/UserIcon/UserIcon";
import LogInButton from "./components/LogInButton/LogInButton";
import SearchBar from "./components/SearchBar/SearchBar";
import ChatListItem from "./components/ChatsList/ChatListItem";

function App() {
  return (
    <div className="chat-app">
      <aside className="sidebar">
        <div className="sidebar-header">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <UserIcon />
            <LogInButton />
          </div>
          <SearchBar />
        </div>

        <ChatListItem />
      </aside>
      <main className="conversation">Conversation</main>
    </div>
  );
}

export default App;
