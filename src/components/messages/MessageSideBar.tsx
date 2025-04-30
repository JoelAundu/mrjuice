import React, { useState } from "react";
import { Message, Conversation, MessagesSidebarProps } from "../../types";
import UserAvatar from "../avatar/UserAvatar";
import IconButton from "../buttons/IconButton";
import FilterButton from "../buttons/FilterButton";

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
    // In a real app, this would open a modal to select a user and create a new conversation
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
    <div className="w-[391px] h-full p-6 bg-white border-r border-slate-200 flex flex-col justify-start items-start gap-12">
      {/* Header and Filter Buttons */}
      <div className="self-stretch flex flex-col justify-start items-start gap-4">
        <div className="self-stretch inline-flex justify-between items-center">
          <div className="justify-center text-slate-900 text-[22px] font-medium font-['Inter']">
            Messages
          </div>
          <div className="flex justify-start items-center gap-3">
            <IconButton
              icon={PlusIcon}
              onClick={handleNewChat}
              ariaLabel="Start new chat"
            />
            <div className="relative">
              <IconButton
                icon={SearchIcon}
                onClick={handleSearchToggle}
                ariaLabel="Search conversations"
              />
              {isSearchActive && (
                <div className="absolute top-10 right-0 z-10">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchInput}
                    placeholder="Search users..."
                    className="w-[200px] px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm font-['Inter'] outline-none focus:ring-2 focus:ring-slate-900"
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
        <div className="inline-flex justify-start items-center gap-3">
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
      <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
        {filteredConversations.length > 0 ? (
          filteredConversations.map((conversation) => (
            <button
              key={conversation.userName}
              onClick={() => handleSelectConversation(conversation.userName)}
              className={`self-stretch p-4 rounded-[10px] inline-flex justify-start items-start gap-3 ${
                selectedConversation === conversation.userName
                  ? "bg-[#f0f3f7]"
                  : "bg-transparent hover:bg-[#f0f3f7]/50"
              }`}
            >
              <UserAvatar
                imageSrc={conversation.userImage}
                initials={getInitials(conversation.userName)}
                userName={conversation.userName}
                size={42}
              />
              <div className="w-[257px] inline-flex flex-col justify-start items-start gap-1.5">
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="self-stretch inline-flex justify-between items-center">
                    <div className="justify-center text-slate-900 text-sm font-medium font-['Inter']">
                      {conversation.userName}
                    </div>
                    <div className="flex justify-start items-center gap-1.5">
                      {conversation.isUnread && (
                        <div className="w-2 h-2 bg-[#ff4757] rounded-full" />
                      )}
                      <div className="text-right justify-center text-slate-500 text-xs font-normal font-['Inter']">
                        {conversation.timestamp}
                      </div>
                    </div>
                  </div>
                  <div className="text-left text-slate-500 text-sm font-medium font-['Inter']">
                    {conversation.userRole}
                  </div>
                </div>
                <div className="text-left text-slate-500 text-sm font-normal font-['Inter'] truncate">
                  {conversation.lastMessage}
                </div>
              </div>
            </button>
          ))
        ) : (
          <div className="self-stretch p-4 text-center text-slate-500 text-sm font-normal font-['Inter']">
            {searchQuery
              ? "No matching conversations found."
              : "No conversations yet. Start a new chat!"}
            <button
              onClick={handleNewChat}
              className="mt-2 px-3.5 py-2 bg-slate-900 text-white rounded-[100px] text-sm font-medium font-['Inter']"
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
