import React, { useState, useEffect } from "react";
import MessagesSidebar from "../messages/MessageSideBar";
import MessagesPanel from "../messages/MessagesPanel";
import { Message, Conversation } from "../../types";
import "./MessagesWrapper.css";

interface MessagesWrapperProps {
  title: string;
  description: string;
}

export const MessagesWrapper: React.FC<MessagesWrapperProps> = ({
  title,
  description,
}) => {
  const initialConversations: Conversation[] = [
    {
      userName: "David Raphael",
      userRole: "Team Member",
      lastMessage: "David: Can you believe how awesom...",
      timestamp: "10:14",
      isUnread: true,
      messages: [],
      userImage: "/assets/David.png",
    },
    {
      userName: "Argon Poorun (Solink)",
      userRole: "Engineer",
      lastMessage: "You: Hey Argon, hoping you might b...",
      timestamp: "17:55",
      isUnread: false,
      messages: [
        [
          {
            sender: "Argon Poorun (Solink)",
            content:
              "Hello Patrick, good afternoon!<br/><br/>You have noted down that your operational hours are 9am to 5:30pm Monday to Thursday. Could you confirm whether there is anyone on site on Fridays? And if not, would it be a possibility to open on a Friday in order to aid this project?",
            timestamp: "13:28",
            isOutgoing: false,
          },
        ],
        [
          {
            sender: "You",
            content:
              "Hi Argon, good question! Yes I suppose we would be open to being on site on a Friday to support the project.",
            timestamp: "13:42",
            isOutgoing: true,
            readBy: "Read by Argon Poorun (Solink)",
          },
          {
            sender: "You",
            content:
              "Hey Argon, hoping you might be able to help, any updates? Got any time?",
            timestamp: "13:42",
            isOutgoing: true,
            readBy: "Read by Argon Poorun (Solink)",
          },
        ],
      ],
      userImage: "/assets/Argon.png",
    },
  ];

  const [conversations, setConversations] =
    useState<Conversation[]>(initialConversations);
  const [selectedConversation, setSelectedConversation] = useState<
    string | null
  >("Argon Poorun (Solink)");
  const [isPanelActive, setIsPanelActive] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 639);

  // Handle window resizing to toggle mobile state
  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth <= 639;
      setIsMobile(newIsMobile);
      if (!newIsMobile) {
        setIsPanelActive(false); // Reset panel state on larger screens
      } else if (selectedConversation) {
        setIsPanelActive(true); // Ensure panel is active if a conversation is selected on mobile
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [selectedConversation]);

  const handleSelectConversation = (userName: string) => {
    setSelectedConversation(userName);
    if (isMobile) {
      setIsPanelActive(true);
    }
  };

  const handleBackToSidebar = () => {
    setIsPanelActive(false);
    setSelectedConversation(null);
  };

  const handleSendMessage = (content: string) => {
    if (!selectedConversation) return;

    const updatedConversations = conversations.map((conv) => {
      if (conv.userName === selectedConversation) {
        const updatedMessages = [...conv.messages];
        const todayMessages = updatedMessages[updatedMessages.length - 1] || [];
        updatedMessages[updatedMessages.length - 1] = [
          ...todayMessages,
          {
            sender: "You",
            content,
            timestamp: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
            isOutgoing: true,
            readBy: "Read by " + selectedConversation,
          },
        ];
        return {
          ...conv,
          lastMessage: `You: ${content.slice(0, 20)}${
            content.length > 20 ? "..." : ""
          }`,
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          messages: updatedMessages,
        };
      }
      return conv;
    });

    setConversations(updatedConversations);
  };

  const selectedConv =
    conversations.find((conv) => conv.userName === selectedConversation) ||
    null;

  return (
    <div className="messages-wrapper">
      <div className="messages-wrapper-content">
        <MessagesSidebar
          conversations={conversations}
          selectedConversation={selectedConversation}
          onSelectConversation={handleSelectConversation}
          className={isPanelActive ? "active" : ""}
        />
        <MessagesPanel
          selectedConversation={selectedConv}
          onSendMessage={handleSendMessage}
          className={isPanelActive ? "active" : ""}
        />
        {isPanelActive && isMobile && (
          <button
            className="messages-panel-back"
            onClick={handleBackToSidebar}
            aria-label="Back to conversations"
          >
            <svg
              className="back-arrow"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back
          </button>
        )}
      </div>
    </div>
  );
};

export default MessagesWrapper;
