import React, { useState } from "react";
import { Message, Conversation, MessagesPanelProps } from "../../types";
import UserAvatar from "../avatar/UserAvatar";
import { SendIcon } from "../icons/Icons";
import "./MessagesPanel.css";

export const MessagesPanel: React.FC<MessagesPanelProps> = ({
  selectedConversation,
  onSendMessage,
  className = "",
}) => {
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() && onSendMessage) {
      onSendMessage(newMessage);
      setNewMessage("");
    }
  };

  const groupLabels = ["Yesterday", "Today"];

  return (
    <div className={`messages-panel ${className}`}>
      {selectedConversation ? (
        <>
          {/* Chat Header */}
          <div className="messages-panel-header">
            <div className="messages-panel-header-content">
              <UserAvatar
                imageSrc={selectedConversation.userImage}
                userName={selectedConversation.userName}
                size={46}
                initials={""}
              />
              <div className="messages-panel-user-info">
                <div className="messages-panel-user-name">
                  {selectedConversation.userName}
                </div>
                <div className="messages-panel-user-role">
                  {selectedConversation.userRole}
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="messages-panel-messages">
              {selectedConversation.messages.length > 0 ? (
                selectedConversation.messages.map(
                  (messageGroup, groupIndex) => (
                    <div
                      key={groupIndex}
                      className="messages-panel-message-group"
                    >
                      <div className="messages-panel-group-header">
                        <div className="messages-panel-group-label">
                          {groupLabels[groupIndex] || `Day ${groupIndex + 1}`}
                        </div>
                        {groupIndex === 0 && (
                          <div className="messages-panel-notice">
                            <span className="messages-panel-notice-text">
                              Messages are subject to monitoring and analysis to
                              ensure security and compliance with our privacy
                              policy.
                            </span>
                            <span className="messages-panel-notice-link">
                              {" Learn more"}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="messages-panel-message-list">
                        {messageGroup.map((message, messageIndex) => (
                          <div
                            key={messageIndex}
                            className={`messages-panel-message ${
                              message.isOutgoing
                                ? "messages-panel-message-outgoing"
                                : "messages-panel-message-incoming"
                            }`}
                          >
                            <div
                              className={`messages-panel-timestamp ${
                                message.isOutgoing
                                  ? "messages-panel-timestamp-outgoing"
                                  : ""
                              }`}
                            >
                              {message.isOutgoing
                                ? message.timestamp
                                : `${message.sender} ${message.timestamp}`}
                            </div>
                            <div
                              className={`messages-panel-message-content ${
                                message.isOutgoing
                                  ? "messages-panel-message-content-outgoing"
                                  : "messages-panel-message-content-incoming"
                              }`}
                            >
                              <div
                                className={`messages-panel-message-text ${
                                  message.isOutgoing
                                    ? "messages-panel-message-text-outgoing"
                                    : "messages-panel-message-text-incoming"
                                }`}
                                dangerouslySetInnerHTML={{
                                  __html: message.content,
                                }}
                              />
                            </div>
                            {message.readBy && (
                              <div className="messages-panel-read-receipt">
                                {message.readBy}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                )
              ) : (
                <div className="messages-panel-empty">
                  No messages yet. Start the conversation!
                </div>
              )}
            </div>
          </div>

          {/* Message Input */}
          <div className="messages-panel-input-container">
            <div className="messages-panel-input-wrapper">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type a message"
                className="messages-panel-input"
              />
              <button
                onClick={handleSendMessage}
                className="messages-panel-send-button"
              >
                <SendIcon
                  strokeColor="#fff"
                  width="24"
                  height="24"
                  className="send-icon"
                />
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="messages-panel-placeholder">
          Select a conversation to start chatting
        </div>
      )}
    </div>
  );
};

export default MessagesPanel;