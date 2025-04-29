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
    states: Record<string, { color: string; bgColor: string }>;
    projects: Project[];
    menuSections: Array<{
      title?: string;
      items: MenuItem[] | ProjectMenuItem[];
    }>;
    footerLinks: { label: string }[];
  }