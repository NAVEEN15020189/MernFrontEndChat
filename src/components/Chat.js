import { useEffect, useState } from "react";
import Message from "./Message";
import MessageInput from "./MessageInput";
import "./Chat.css";

function Chat({ socket, username, room }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const handleMessageReceive = (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    };

    socket.on("receive_message", handleMessageReceive);

    // Cleanup the event listener to prevent duplication
    return () => {
      socket.off("receive_message", handleMessageReceive);
    };
  }, [socket]);

  return (
    <div className="chat-window">
      <div className="chat-header">
        <p>Live Chat</p>
      </div>
      <div className="chat-body">
        {messages.map((msg, index) => (
          <Message key={index} message={msg} username={username} socket={socket} />
        ))}
      </div>
      <MessageInput socket={socket} username={username} room={room} />
    </div>
  );
}

export default Chat;
