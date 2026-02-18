export type SidebarVariantId = 1 | 2 | 3 | 4 | 5 | 6;

export type SidebarView = "all_variants" | "dashboard_playground";

export type ThemeMode = "light" | "dark";

export type SidebarActionType =
  | "select_item"
  | "toggle_section"
  | "icon_action"
  | "search"
  | "profile"
  | "theme_toggle"
  | "fallback";

export interface SidebarAction {
  variantId: SidebarVariantId;
  type: SidebarActionType;
  targetName: string;
  label: string;
  timestamp: number;
  meta?: Record<string, string | number | boolean | null>;
}

export interface SidebarEvent extends SidebarAction {
  id: string;
}

export interface SidebarState {
  activeView: SidebarView;
  activeVariantId: SidebarVariantId;
  selectedItemLabel: string | null;
  selectedTargetName: string | null;
  selectedActionType: SidebarActionType | null;
  expandedSections: Record<string, boolean>;
  searchQueryByVariant: Record<SidebarVariantId, string>;
  eventLog: SidebarEvent[];
  themeMode: ThemeMode;
}

export interface SidebarExternalState {
  selectedItemLabel: string | null;
  selectedTargetName: string | null;
  expandedSections: Record<string, boolean>;
  searchQuery: string;
  themeMode: ThemeMode;
}
