export interface MenuItem {
  label: string;
  icon: string;
  isActive: boolean;
}

export interface ProjectMenuItem extends MenuItem {
  id: string;
}

export interface SideNavData {
  menuItems: MenuItem[];
  footerLinks: { label: string }[];
}

export interface TopNavData {
  warning: string | null;
  actionButton: { label: string; icon: string } | null;
}

export interface Project {
  id: string;
  title: string;
  address?: string;
  state?: string;
  progress?: number;
  type?: string;
  stages?: { current: number; total: number };
  image?: string;
  isCreateButton?: boolean;
  sideNav?: {
    menuItems: { label: string; icon: string; isActive: boolean }[];
    footerLinks: { label: string }[];
  };
  topNav?: {
    warning: string | null;
    actionButton: { label: string; icon: string } | null;
  };
  journeySteps?: JourneyStep[]; // Added for project journey
}

export interface SidebarData {
  logo: { text: string };
  search: { label: string; placeholder: string };
  topNavTabs: { label: string; isActive: boolean }[];
  projectFilters: { label: string }[];
  states: { [key: string]: { color: string; bgColor: string } };
  projects: {
    activities: any[];
    journeySteps: any;
    id: string;
    title: string;
    address?: string;
    state?: string;
    progress?: number; // Added, optional due to "Create New Project"
    type?: string; // Added, optional due to "Create New Project"
    stages?: { current: number; total: number }; // Added, optional due to "Create New Project"
    image?: string;
    isCreateButton?: boolean;
    sideNav?: SideNavData;
    topNav?: TopNavData;
  }[];
  menuSections: {
    title?: string;
    items: { id?: string; label: string; icon: string; isActive: boolean }[];
  }[];
  footerLinks: { label: string }[];
}

export interface SideNavData {
  menuItems: { label: string; icon: string; isActive: boolean }[];
  footerLinks: { label: string }[];
}

export interface TopNavData {
  warning: string | null;
  actionButton: { label: string; icon: string } | null;
}

export interface EnhancedProject extends Project {
  stateColor: string;
  stateBgColor: string;
  progress: number;
  type: string;
  stages: { current: number; total: number };
}

export interface JourneyStep {
  title: string;
  description: string;
  status: "Completed" | "In Progress" | "Not Started";
  progress?: number; // Percentage (0-100)
  steps?: string; // e.g., "4/4"
  ctaText?: string; // Text for the CTA button
  icon: string; // Emoji or placeholder for the icon
}

export interface Message {
  sender: string; // e.g., "Argon Poorun (Solink)" or "You"
  content: string;
  timestamp: string; // e.g., "13:28"
  isOutgoing: boolean; // True for messages sent by the user
  readBy?: string; // e.g., "Read by Argon Poorun (Solink)"
}

export interface Conversation {
  userName: string; // e.g., "Argon Poorun (Solink)"
  userRole: string; // e.g., "Engineer"
  lastMessage: string; // e.g., "You: Hey Argon, hoping you might b..."
  timestamp: string; // e.g., "17:55"
  isUnread: boolean; // True if there are unread messages
  messages: Message[][]; // Array of message groups (e.g., [[yesterday messages], [today messages]])
  userImage?: string | null; // Add userImage property
}

export interface MessagesSidebarProps {
  conversations: Conversation[];
  selectedConversation: string | null;
  onSelectConversation: (userName: string) => void;
  className?: string;
}

export interface MessagesPanelProps {
  selectedConversation: Conversation | null;
  onSendMessage?: (content: string) => void;
  className?: string;
}
