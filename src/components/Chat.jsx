import React, { useState } from "react";
import "../Styles/Chatbox.css"; // CSS file for styling
import { MessagesSquare, X } from "lucide-react"; // Using Lucide Icons

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");

    // Simulating a bot response (You can replace this with an API call)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "Thanks for reaching out! We'll get back to you soon.", sender: "bot" },
      ]);
    }, 1000);
  };

  return (
    <div>
      {/* Chat Icon Button */}
      <button className="chat-icon" onClick={toggleChat}>
        {isOpen ? <X size={28} /> : <MessagesSquare size={28} />}
      </button>

      {/* Chatbox Popup */}
      {isOpen && (
        <div className="chatbox">
          <div className="chat-header">
            <h3>Chat Support</h3>
            <button onClick={toggleChat}><X size={20} /></button>
          </div>

          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
