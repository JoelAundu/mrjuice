import React, { useState } from "react";
import { Message, Conversation, MessagesSidebarProps } from "../../types";
import UserAvatar from "../avatar/UserAvatar";
import IconButton from "../buttons/IconButton";
import FilterButton from "../buttons/FilterButton";
import "./MessagesSidebar.css";

const getInitials = (name: string) => {
  const nameParts = name.split(" ");
  const initials = nameParts
    .map((part) => part.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return initials;
};

const MessagesSidebar: React.FC<MessagesSidebarProps> = ({
  conversations,
  selectedConversation,
  onSelectConversation,
  className = "",
}) => {
  const [filter, setFilter] = useState<"All" | "Unread">("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);

  // Filter conversations based on the selected filter and search query
  const filteredConversations = conversations
    .filter((conv) => (filter === "Unread" ? conv.isUnread : true))
    .filter((conv) =>
      searchQuery
        ? conv.userName.toLowerCase().includes(searchQuery.toLowerCase())
        : true
    );

  // Handle new chat (simulate with an alert for now)
  const handleNewChat = () => {
    alert("Open a modal to select a user and start a new chat!");
  };

  // Handle search toggle and input
  const handleSearchToggle = () => {
    setIsSearchActive(true);
  };

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Clear search when a conversation is selected
  const handleSelectConversation = (userName: string) => {
    onSelectConversation(userName);
    setSearchQuery("");
    setIsSearchActive(false);
  };

  // Arrow Down SVG
  const ArrowDownIcon = (
    <svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L5 5L9 1"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  // Plus SVG
  const PlusIcon = (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 4V16M4 10H16"
        stroke="#1F2A44"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  // Search SVG
  const SearchIcon = (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 17L13.2223 13.2223M15.5556 9.77778C15.5556 13.4364 12.6919 16.4444 9.11111 16.4444C5.53027 16.4444 2.66667 13.4364 2.66667 9.77778C2.66667 6.11914 5.53027 3.11111 9.11111 3.11111C12.6919 3.11111 15.5556 6.11914 15.5556 9.77778Z"
        stroke="#1F2A44"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className={`messages-sidebar ${className}`}>
      {/* Header and Filter Buttons */}
      <div className="messages-sidebar-header">
        <div className="messages-sidebar-header-row">
          <div className="messages-sidebar-title">Messages</div>
          <div className="messages-sidebar-buttons">
            <IconButton
              icon={PlusIcon}
              onClick={handleNewChat}
              ariaLabel="Start new chat"
            />
            <div className="messages-sidebar-search">
              <IconButton
                icon={SearchIcon}
                onClick={handleSearchToggle}
                ariaLabel="Search conversations"
              />
              {isSearchActive && (
                <div className="messages-sidebar-search-input">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchInput}
                    placeholder="Search users..."
                    className="messages-sidebar-input"
                    autoFocus
                    onBlur={() => {
                      if (!searchQuery) setIsSearchActive(false);
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="messages-sidebar-filters">
          <FilterButton
            label="All"
            isActive={filter === "All"}
            onClick={() => setFilter("All")}
            arrowIcon={ArrowDownIcon}
          />
          <FilterButton
            label="Unread"
            isActive={filter === "Unread"}
            onClick={() => setFilter("Unread")}
          />
        </div>
      </div>

      {/* Conversation List */}
      <div className="messages-sidebar-list">
        {filteredConversations.length > 0 ? (
          filteredConversations.map((conversation) => (
            <button
              key={conversation.userName}
              onClick={() => handleSelectConversation(conversation.userName)}
              className={`messages-sidebar-conversation ${
                selectedConversation === conversation.userName
                  ? "messages-sidebar-conversation-selected"
                  : "messages-sidebar-conversation-unselected"
              }`}
            >
              <UserAvatar
                imageSrc={conversation.userImage}
                initials={getInitials(conversation.userName)}
                userName={conversation.userName}
                size={42}
              />
              <div className="messages-sidebar-details">
                <div className="messages-sidebar-info">
                  <div className="messages-sidebar-user-row">
                    <div className="messages-sidebar-user-name">
                      {conversation.userName}
                    </div>
                    <div className="messages-sidebar-timestamp-container">
                      {conversation.isUnread && (
                        <div className="messages-sidebar-unread-indicator" />
                      )}
                      <div className="messages-sidebar-timestamp">
                        {conversation.timestamp}
                      </div>
                    </div>
                  </div>
                  <div className="messages-sidebar-user-role">
                    {conversation.userRole}
                  </div>
                </div>
                <div className="messages-sidebar-last-message">
                  {conversation.lastMessage}
                </div>
              </div>
            </button>
          ))
        ) : (
          <div className="messages-sidebar-empty">
            {searchQuery
              ? "No matching conversations found."
              : "No conversations yet. Start a new chat!"}
            <button
              onClick={handleNewChat}
              className="messages-sidebar-new-chat"
            >
              New Chat
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessagesSidebar;
