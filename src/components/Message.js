function Message({ message, username, socket }) {
    const isOwnMessage = message.id === socket.id;
  
    return (
      <div className={`message ${isOwnMessage ? "own" : ""}`}>
        <div className="message-content">
          <p>{message.message}</p>
        </div>
        <div className="message-meta">
          <p>{message.author}</p>
          <p>{message.time}</p>
        </div>
      </div>
    );
  }
  
  export default Message;
  