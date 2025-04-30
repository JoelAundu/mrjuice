import React, { useState } from "react";
import { Message, Conversation, MessagesPanelProps } from "../../types";
import UserAvatar from "../avatar/UserAvatar";
import { SendIcon } from "../icons/Icons";

const MessagesPanel: React.FC<MessagesPanelProps> = ({
  selectedConversation,
  onSendMessage,
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
    <div className="w-[1249px] h-[892px] pb-[30px] bg-white flex flex-col justify-between items-center">
      {selectedConversation ? (
        <>
          {/* Chat Header */}
          <div className="self-stretch flex flex-col justify-start items-end gap-[52px]">
            <div className="self-stretch px-[50px] py-2.5 border-b border-slate-200 inline-flex justify-start items-center gap-3">
              <UserAvatar
                imageSrc={selectedConversation.userImage}
                userName={selectedConversation.userName}
                size={46}
                initials={""}
              />
              <div className="w-[189px] inline-flex flex-col justify-start items-start gap-0.5">
                <div className="self-stretch justify-center text-slate-900 text-lg font-medium font-['Inter']">
                  {selectedConversation.userName}
                </div>
                <div className="self-stretch justify-center text-slate-500 text-sm font-medium font-['Inter']">
                  {selectedConversation.userRole}
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="self-stretch px-[50px] flex flex-col justify-start items-start gap-[50px]">
              {selectedConversation.messages.length > 0 ? (
                selectedConversation.messages.map(
                  (messageGroup, groupIndex) => (
                    <div
                      key={groupIndex}
                      className="self-stretch flex flex-col justify-center items-start gap-[71px]"
                    >
                      <div className="self-stretch flex flex-col justify-start items-center gap-[18px]">
                        <div className="self-stretch text-center justify-center text-slate-900 text-xs font-medium font-['Inter']">
                          {groupLabels[groupIndex] || `Day ${groupIndex + 1}`}
                        </div>
                        {groupIndex === 0 && (
                          <div className="self-stretch text-center justify-center">
                            <span className="text-slate-500 text-xs font-normal font-['Inter']">
                              Messages are subject to monitoring and analysis to
                              ensure security and compliance with our privacy
                              policy.
                            </span>
                            <span className="text-slate-500 text-xs font-medium font-['Inter'] underline">
                              {" Learn more"}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="self-stretch flex flex-col justify-start items-end gap-7">
                        {messageGroup.map((message, messageIndex) => (
                          <div
                            key={messageIndex}
                            className={`w-[400px] flex flex-col justify-start gap-1.5 ${
                              message.isOutgoing ? "items-end" : "items-start"
                            }`}
                          >
                            <div
                              className={`self-stretch justify-center text-slate-500 text-xs font-normal font-['Inter'] ${
                                message.isOutgoing ? "text-right" : ""
                              }`}
                            >
                              {message.isOutgoing
                                ? message.timestamp
                                : `${message.sender} ${message.timestamp}`}
                            </div>
                            <div
                              className={`max-w-[650px] p-3 inline-flex justify-center items-center gap-2.5 ${
                                message.isOutgoing
                                  ? "bg-[#2c313f] rounded-tl-lg rounded-tr-lg rounded-bl-lg text-white"
                                  : "bg-[#f0f3f7] rounded-tl-lg rounded-tr-lg rounded-br-lg text-slate-900"
                              }`}
                            >
                              <div
                                className={`flex-1 justify-start text-sm font-['Inter'] ${
                                  message.isOutgoing
                                    ? "font-medium"
                                    : "font-normal"
                                }`}
                                dangerouslySetInnerHTML={{
                                  __html: message.content,
                                }}
                              />
                            </div>
                            {message.readBy && (
                              <div className="self-stretch text-right justify-center text-slate-500 text-xs font-normal font-['Inter']">
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
                <div className="self-stretch text-center text-slate-500 text-sm font-normal font-['Inter']">
                  No messages yet. Start the conversation!
                </div>
              )}
            </div>
          </div>

          {/* Message Input */}
          <div className="self-stretch px-[100px] flex flex-col justify-start items-start gap-2.5">
            <div className="self-stretch px-[15px] py-2.5 bg-white rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-300 inline-flex justify-between items-center">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type a message"
                className="flex-1 justify-center text-slate-500 text-sm font-normal font-['Inter'] outline-none"
              />
              <button onClick={handleSendMessage} className="p-1">
                <SendIcon
                  strokeColor="#fff" // Black stroke for visibility
                  width="24" // Match the icon size
                  height="24"
                  className="send-icon" // Custom class for styling
                />
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="self-stretch h-full flex flex-col justify-center items-center text-slate-500 text-sm font-normal font-['Inter']">
          Select a conversation to start chatting
        </div>
      )}
    </div>
  );
};

export default MessagesPanel;
