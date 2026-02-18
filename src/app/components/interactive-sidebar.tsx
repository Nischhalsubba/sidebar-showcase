import {
  useState,
  useCallback,
  useRef,
  useEffect,
  type ReactNode,
  type MouseEvent,
  type ChangeEvent,
  type KeyboardEvent,
} from "react";
import { deriveSectionKey, mapTargetToAction } from "../sidebar/action-map";
import type { SidebarAction, SidebarExternalState, SidebarVariantId } from "../sidebar/types";

interface InteractiveSidebarProps {
  children: ReactNode;
  variantId: SidebarVariantId;
  onAction: (action: SidebarAction) => void;
  onSearchChange?: (value: string) => void;
  searchQuery?: string;
  externalState: SidebarExternalState;
  syncMode: "global" | "local";
}

const TOOLTIP_MAP: Record<string, string> = {
  "search_line": "Search",
  "grid_2_line": "Dashboard",
  "wallet_4_line": "Wallet",
  "package_line": "Packages",
  "group_2_line": "Customers",
  "vector_group_fill": "Groups",
  "Settings button": "Settings",
  "Sun button": "Toggle Theme",
  "User avatar": "Profile",
  "Analytics icon": "Analytics",
  "Apps icon": "Applications",
  "Article Shortcut icon": "Articles",
  "Auto Awesome Mosaic icon": "Mosaic View",
  "Card Travel icon": "Travel",
  "Sidebar Icon 1": "Home",
  "Sidebar Icon 2": "Analytics",
  "Sidebar Icon 3": "Applications",
  "Sidebar Icon 4": "Articles",
  "Sidebar Icon 5": "Mosaic View",
  "Sidebar Icon 6": "Travel",
  "Side menu icon": "Menu",
  "Logo container": "Home",
  "Logo Container": "Home",
  "dock_to_left": "Toggle Sidebar",
  "more_vert": "More Options",
  "Profile Action": "Account Options",
  "memoji": "Profile",
};

interface SearchBounds {
  top: number;
  left: number;
  width: number;
  height: number;
}

function normalizeText(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function matchesItemName(value: string): boolean {
  return /\b(item|menu item|submenu item|section item)\b/i.test(value) && !/\bitems\b/i.test(value);
}

function findTargetWithDataName(target: HTMLElement, container: HTMLElement): HTMLElement | null {
  let node: HTMLElement | null = target;
  while (node && node !== container) {
    if (node.hasAttribute("data-name")) {
      return node;
    }
    node = node.parentElement;
  }
  return null;
}

function findHeaderContext(target: HTMLElement, container: HTMLElement): { name: string; text: string } | null {
  let node: HTMLElement | null = target;
  while (node && node !== container) {
    const dataName = node.getAttribute("data-name") ?? "";
    if (/header/i.test(dataName)) {
      return {
        name: dataName,
        text: normalizeText(node.textContent ?? ""),
      };
    }
    node = node.parentElement;
  }
  return null;
}

function extractLabel(target: HTMLElement, container: HTMLElement): string {
  const ownText = normalizeText(target.textContent ?? "");
  if (ownText.length > 0) {
    return ownText;
  }

  const textNode = target.querySelector<HTMLElement>("p, span");
  const nestedText = normalizeText(textNode?.textContent ?? "");
  if (nestedText.length > 0) {
    return nestedText;
  }

  const headerContext = findHeaderContext(target, container);
  if (headerContext?.text) {
    return headerContext.text;
  }

  return normalizeText(target.getAttribute("data-name") ?? "Untitled action");
}

function getDataNameNodes(container: HTMLElement): HTMLElement[] {
  return Array.from(container.querySelectorAll<HTMLElement>("[data-name]"));
}

function getSectionRoot(header: HTMLElement): HTMLElement | null {
  return (
    header.closest<HTMLElement>('[data-name*="Section"], [data-name*="section"], [data-name*="Subsection"], [data-name*="subsection"]') ??
    header.parentElement
  );
}

export function InteractiveSidebar({
  children,
  variantId,
  onAction,
  onSearchChange,
  searchQuery = "",
  externalState,
  syncMode,
}: InteractiveSidebarProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchBounds, setSearchBounds] = useState<SearchBounds | null>(null);
  const [tooltip, setTooltip] = useState<{ text: string; x: number; y: number; visible: boolean }>({
    text: "",
    x: 0,
    y: 0,
    visible: false,
  });

  const isSearchVisible = searchOpen || searchQuery.trim().length > 0;

  const updateSearchBounds = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const searchNode =
      container.querySelector<HTMLElement>('[data-name="Search"]') ??
      container.querySelector<HTMLElement>('[data-name*="Search"]');

    if (!searchNode) {
      setSearchBounds(null);
      return;
    }

    const containerRect = container.getBoundingClientRect();
    const rect = searchNode.getBoundingClientRect();
    setSearchBounds({
      top: rect.top - containerRect.top,
      left: rect.left - containerRect.left,
      width: rect.width,
      height: rect.height,
    });
  }, []);

  useEffect(() => {
    updateSearchBounds();
    window.addEventListener("resize", updateSearchBounds);
    return () => window.removeEventListener("resize", updateSearchBounds);
  }, [updateSearchBounds, variantId]);

  useEffect(() => {
    if (!isSearchVisible) return;
    searchInputRef.current?.focus();
  }, [isSearchVisible]);

  const handleMouseMove = useCallback((event: MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;
    const target = findTargetWithDataName(event.target as HTMLElement, container);
    const targetName = target?.getAttribute("data-name");
    if (targetName && TOOLTIP_MAP[targetName]) {
      setTooltip({
        text: TOOLTIP_MAP[targetName],
        x: event.clientX + 14,
        y: event.clientY - 10,
        visible: true,
      });
      return;
    }
    setTooltip((prev) => (prev.visible ? { ...prev, visible: false } : prev));
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTooltip((prev) => (prev.visible ? { ...prev, visible: false } : prev));
  }, []);

  const handleClick = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      const container = containerRef.current;
      if (!container) return;

      const target = findTargetWithDataName(event.target as HTMLElement, container);
      if (!target) return;

      const targetName = normalizeText(target.getAttribute("data-name") ?? "");
      if (!targetName) return;

      const label = extractLabel(target, container);
      const headerContext = findHeaderContext(target, container);
      const action = mapTargetToAction(
        targetName,
        headerContext?.text || label,
        variantId,
      );

      if (action.type === "toggle_section") {
        action.meta = {
          ...(action.meta ?? {}),
          sectionKey: deriveSectionKey(
            headerContext?.name || targetName,
            headerContext?.text || label,
          ),
        };
      }

      if (action.type === "search") {
        setSearchOpen(true);
        updateSearchBounds();
      }

      onAction(action);
    },
    [onAction, updateSearchBounds, variantId],
  );

  const handleSearchInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const query = event.target.value;
      onSearchChange?.(query);
      onAction({
        variantId,
        type: "search",
        targetName: "Search",
        label: query.length > 0 ? query : "Search",
        timestamp: Date.now(),
        meta: { query },
      });
    },
    [onAction, onSearchChange, variantId],
  );

  const handleSearchInputKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Escape" && searchQuery.trim().length === 0) {
        setSearchOpen(false);
      }
    },
    [searchQuery],
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const nodes = getDataNameNodes(container);
    nodes.forEach((node) => node.classList.remove("sidebar-active-external"));

    const selectedLabel = normalizeText(externalState.selectedItemLabel ?? "");
    const selectedTargetName = normalizeText(externalState.selectedTargetName ?? "");

    if (!selectedLabel && !selectedTargetName) return;

    const itemNodes = nodes.filter((node) => {
      const dataName = node.getAttribute("data-name") ?? "";
      return matchesItemName(dataName);
    });

    let hasLabelMatch = false;
    if (selectedLabel) {
      const selectedLabelLower = selectedLabel.toLowerCase();
      itemNodes.forEach((node) => {
        const text = normalizeText(node.textContent ?? "").toLowerCase();
        if (text.includes(selectedLabelLower)) {
          node.classList.add("sidebar-active-external");
          hasLabelMatch = true;
        }
      });
    }

    if (!hasLabelMatch && selectedTargetName) {
      const targetNode = nodes.find((node) => normalizeText(node.getAttribute("data-name") ?? "") === selectedTargetName);
      if (targetNode) {
        targetNode.classList.add("sidebar-active-external");
      }
    }
  }, [externalState.selectedItemLabel, externalState.selectedTargetName, variantId]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const nodes = getDataNameNodes(container);
    nodes.forEach((node) => {
      node.classList.remove("is-collapsed", "sidebar-collapsed-content");
      if (node.dataset.autoCollapsed === "true") {
        node.style.removeProperty("display");
        node.dataset.autoCollapsed = "false";
      }
    });

    const headerNodes = nodes.filter((node) => {
      const dataName = node.getAttribute("data-name") ?? "";
      return /header/i.test(dataName);
    });

    headerNodes.forEach((header) => {
      const name = header.getAttribute("data-name") ?? "";
      const text = normalizeText(header.textContent ?? "");
      const sectionKey = deriveSectionKey(name, text);
      const expanded = externalState.expandedSections[`${variantId}:${sectionKey}`] ?? true;
      if (expanded) return;

      const sectionRoot = getSectionRoot(header);
      if (!sectionRoot) return;

      const contentNodes = Array.from(sectionRoot.querySelectorAll<HTMLElement>("[data-name]")).filter((node) => {
        if (node === header) return false;
        const dataName = node.getAttribute("data-name") ?? "";
        return /(items|content|subitems)\b/i.test(dataName) && !/header/i.test(dataName);
      });

      sectionRoot.classList.add("is-collapsed");
      header.classList.add("is-collapsed");
      contentNodes.forEach((contentNode) => {
        contentNode.classList.add("sidebar-collapsed-content");
        contentNode.style.display = "none";
        contentNode.dataset.autoCollapsed = "true";
      });
    });
  }, [externalState.expandedSections, variantId]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const query = normalizeText(searchQuery).toLowerCase();
    const nodes = getDataNameNodes(container);

    const itemNodes = nodes.filter((node) => matchesItemName(node.getAttribute("data-name") ?? ""));
    const sectionNodes = nodes.filter((node) => /section/i.test(node.getAttribute("data-name") ?? ""));

    itemNodes.forEach((node) => node.classList.remove("sidebar-search-hidden"));
    sectionNodes.forEach((node) => node.classList.remove("sidebar-section-empty"));

    if (!query) return;

    itemNodes.forEach((node) => {
      const text = normalizeText(node.textContent ?? "").toLowerCase();
      if (text.length > 0 && !text.includes(query)) {
        node.classList.add("sidebar-search-hidden");
      }
    });

    sectionNodes.forEach((sectionNode) => {
      const visibleItems = Array.from(sectionNode.querySelectorAll<HTMLElement>("[data-name]")).filter((itemNode) => {
        const name = itemNode.getAttribute("data-name") ?? "";
        if (!matchesItemName(name)) return false;
        if (itemNode.classList.contains("sidebar-search-hidden")) return false;
        return getComputedStyle(itemNode).display !== "none";
      });

      if (visibleItems.length === 0) {
        sectionNode.classList.add("sidebar-section-empty");
      }
    });
  }, [searchQuery, variantId]);

  return (
    <>
      <div className={`sidebar-preview-host ${externalState.themeMode === "dark" ? "sidebar-theme-dark" : ""}`}>
        <div
          ref={containerRef}
          className={`sidebar-preview variant-${variantId}`}
          data-sync-mode={syncMode}
          style={{ height: 1024, position: "relative" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
          {children}
        </div>
        {isSearchVisible && searchBounds && (
          <div
            className="sidebar-search-overlay"
            style={{
              left: searchBounds.left,
              top: searchBounds.top,
              width: searchBounds.width,
              minHeight: searchBounds.height,
            }}
          >
            <input
              ref={searchInputRef}
              aria-label="Filter sidebar items"
              className="sidebar-search-input"
              onChange={handleSearchInputChange}
              onKeyDown={handleSearchInputKeyDown}
              placeholder="Filter items..."
              value={searchQuery}
            />
          </div>
        )}
      </div>
      <div
        className={`sidebar-tooltip ${tooltip.visible ? "visible" : ""}`}
        style={{ left: tooltip.x, top: tooltip.y }}
      >
        {tooltip.text}
      </div>
    </>
  );
}
