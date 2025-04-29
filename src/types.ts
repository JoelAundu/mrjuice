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
    image?: string;
    isCreateButton?: boolean;
    sideNav?: SideNavData;
    topNav?: TopNavData;
  }
  
  export interface SidebarData {
    logo: { text: string };
    search: { label: string; placeholder: string };
    topNavTabs: { label: string; isActive: boolean }[];
    projectFilters: { label: string }[];
    states: { [key: string]: { color: string; bgColor: string } };
    projects: {
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