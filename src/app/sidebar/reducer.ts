import type { SidebarAction, SidebarEvent, SidebarState, SidebarVariantId, SidebarView } from "./types";

export type SidebarStateAction =
  | { type: "set_view"; view: SidebarView }
  | { type: "set_variant"; variantId: SidebarVariantId }
  | { type: "set_search_query"; variantId: SidebarVariantId; query: string }
  | { type: "sidebar_action"; action: SidebarAction };

function createEvent(action: SidebarAction): SidebarEvent {
  return {
    ...action,
    id: `${action.timestamp}-${Math.random().toString(36).slice(2, 8)}`,
  };
}

function withBoundedLog(log: SidebarEvent[], action: SidebarAction): SidebarEvent[] {
  const next = [createEvent(action), ...log];
  return next.slice(0, 50);
}

function sectionKeyForAction(action: SidebarAction): string | null {
  const raw = action.meta?.sectionKey;
  if (typeof raw !== "string" || raw.length === 0) {
    return null;
  }
  return `${action.variantId}:${raw}`;
}

export function createInitialSidebarState(): SidebarState {
  return {
    activeView: "all_variants",
    activeVariantId: 1,
    selectedItemLabel: null,
    selectedTargetName: null,
    selectedActionType: null,
    expandedSections: {},
    searchQueryByVariant: {
      1: "",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "",
    },
    eventLog: [],
    themeMode: "light",
  };
}

export function sidebarReducer(state: SidebarState, action: SidebarStateAction): SidebarState {
  switch (action.type) {
    case "set_view":
      return { ...state, activeView: action.view };
    case "set_variant":
      return { ...state, activeVariantId: action.variantId };
    case "set_search_query":
      return {
        ...state,
        searchQueryByVariant: {
          ...state.searchQueryByVariant,
          [action.variantId]: action.query,
        },
      };
    case "sidebar_action": {
      const nextAction = action.action;
      const next: SidebarState = {
        ...state,
        activeVariantId: nextAction.variantId,
        selectedItemLabel: nextAction.label || state.selectedItemLabel,
        selectedTargetName: nextAction.targetName || state.selectedTargetName,
        selectedActionType: nextAction.type,
        eventLog: withBoundedLog(state.eventLog, nextAction),
      };

      if (nextAction.type === "theme_toggle") {
        next.themeMode = state.themeMode === "light" ? "dark" : "light";
      }

      if (nextAction.type === "search") {
        const rawQuery = nextAction.meta?.query;
        if (typeof rawQuery === "string") {
          next.searchQueryByVariant = {
            ...state.searchQueryByVariant,
            [nextAction.variantId]: rawQuery,
          };
        }
      }

      if (nextAction.type === "toggle_section") {
        const key = sectionKeyForAction(nextAction);
        if (key) {
          const currentlyExpanded = state.expandedSections[key] ?? true;
          next.expandedSections = {
            ...state.expandedSections,
            [key]: !currentlyExpanded,
          };
        }
      }

      return next;
    }
    default:
      return state;
  }
}
