import { useState } from "react";
import "./MessageInput.css";

function MessageInput({ socket, username, room }) {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    const time = new Date(Date.now()).toLocaleTimeString();
    socket.emit("send_message", { room, author: username, message, time });
    setMessage("");
  };

  return (
    <div className="chat-footer">
      <input
        type="text"
        placeholder="Message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && sendMessage()}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default MessageInput;
