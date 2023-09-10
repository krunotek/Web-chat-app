import React from "react";
import "./Messages.css";

function Messages(props) {
  const { messages, currentMember } = props;

  function renderMessage(message, ind) {
    const { member, text } = message;
    const messageFromMe = member.clientData.id === currentMember.clientData.id;
    const className = messageFromMe
      ? "messages-message currentMember"
      : "messages-message";
    return (
      <li key={ind} className={className}>
        <div className="message-content">
          <div
            className="username"
            style={{
              color: member.clientData.color,
            }}
          >
            {member.clientData.username}
          </div>
          <div className="text">{text}</div>
        </div>
      </li>
    );
  }

  return (
    <ul className="messages-list">
      {messages.map((m, ind) => renderMessage(m, ind))}
    </ul>
  );
}

export default Messages;
