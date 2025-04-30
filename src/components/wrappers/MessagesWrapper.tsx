import React, { useState } from "react";
import MessagesSidebar from "../messages/MessageSideBar";
import MessagesPanel from "../messages/MessagesPanel";
import { Message, Conversation } from "../../types";
import "./MessagesWrapper.css";

interface MessagesWrapperProps {
  title: string;
  description: string;
}

const MessagesWrapper: React.FC<MessagesWrapperProps> = ({
  title,
  description,
}) => {
  // Sample data with Unsplash images
  const initialConversations: Conversation[] = [
    {
      userName: "David Raphael",
      userRole: "Team Member",
      lastMessage: "David: Can you believe how awesom...",
      timestamp: "10:14",
      isUnread: true,
      messages: [],
      userImage:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=42&h=42&q=80",
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
      userImage:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=46&h=46&q=80",
    },
  ];

  const [conversations, setConversations] =
    useState<Conversation[]>(initialConversations);
  const [selectedConversation, setSelectedConversation] = useState<
    string | null
  >("Argon Poorun (Solink)");

  const handleSelectConversation = (userName: string) => {
    setSelectedConversation(userName);
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
        />
        <MessagesPanel
          selectedConversation={selectedConv}
          onSendMessage={handleSendMessage}
        />
      </div>
    </div>
  );
};

export default MessagesWrapper;
