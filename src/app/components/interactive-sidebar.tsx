import { useState, useCallback, useRef, type ReactNode, type MouseEvent } from "react";

interface InteractiveSidebarProps {
  children: ReactNode;
  variant: number;
}

// Map of data-name patterns to tooltip labels for icon-only elements
const TOOLTIP_MAP: Record<string, string> = {
  // Variant 1 icon rail
  "search_line": "Search",
  "grid_2_line": "Dashboard",
  "wallet_4_line": "Wallet",
  "package_line": "Packages",
  "group_2_line": "Customers",
  "vector_group_fill": "Groups",
  "Settings button": "Settings",
  "Sun button": "Toggle Theme",
  "User avatar": "Profile",
  // Variant 2 icon rail
  "Analytics icon": "Analytics",
  "Apps icon": "Applications",
  "Article Shortcut icon": "Articles",
  "Auto Awesome Mosaic icon": "Mosaic View",
  "Card Travel icon": "Travel",
  // Variant 6 icon rail
  "Sidebar Icon 1": "Home",
  "Sidebar Icon 2": "Analytics",
  "Sidebar Icon 3": "Applications",
  "Sidebar Icon 4": "Articles",
  "Sidebar Icon 5": "Mosaic View",
  "Sidebar Icon 6": "Travel",
  // Utility buttons
  "Side menu icon": "Menu",
  "Logo container": "Home",
  "Logo Container": "Home",
  "dock_to_left": "Toggle Sidebar",
  "more_vert": "More Options",
  "Profile Action": "Account Options",
  "memoji": "Profile",
};

// Elements that are clickable interactive targets
const INTERACTIVE_NAMES = [
  "item", "Item", "Menu Item", "Section Item", "Submenu Item",
  "icon", "Icon", "button", "Button", "Search", "Profile", "avatar", "memoji",
  "Logo", "header", "Header",
];

export function InteractiveSidebar({ children, variant }: InteractiveSidebarProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<{ text: string; x: number; y: number; visible: boolean }>({
    text: "",
    x: 0,
    y: 0,
    visible: false,
  });

  const findTooltipTarget = useCallback((target: HTMLElement, container: HTMLElement): string | null => {
    let el: HTMLElement | null = target;
    while (el && el !== container) {
      const dataName = el.getAttribute("data-name");
      if (dataName && TOOLTIP_MAP[dataName]) {
        return dataName;
      }
      el = el.parentElement;
    }
    return null;
  }, []);

  const findClickTarget = useCallback((target: HTMLElement, container: HTMLElement): HTMLElement | null => {
    let el: HTMLElement | null = target;
    while (el && el !== container) {
      const dataName = el.getAttribute("data-name");
      if (dataName && INTERACTIVE_NAMES.some((n) => dataName.includes(n))) {
        return el;
      }
      el = el.parentElement;
    }
    return null;
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const targetName = findTooltipTarget(e.target as HTMLElement, containerRef.current);
    if (targetName) {
      setTooltip({
        text: TOOLTIP_MAP[targetName],
        x: e.clientX + 14,
        y: e.clientY - 10,
        visible: true,
      });
    } else {
      setTooltip((prev) => (prev.visible ? { ...prev, visible: false } : prev));
    }
  }, [findTooltipTarget]);

  const handleMouseLeave = useCallback(() => {
    setTooltip((prev) => (prev.visible ? { ...prev, visible: false } : prev));
  }, []);

  const handleClick = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const target = findClickTarget(e.target as HTMLElement, containerRef.current);
    if (target) {
      // Remove previous active
      if (activeItem) {
        const prev = containerRef.current.querySelector(".sidebar-active");
        if (prev) prev.classList.remove("sidebar-active");
      }
      // Toggle active state
      const dataName = target.getAttribute("data-name") || "";
      if (activeItem === dataName) {
        setActiveItem(null);
      } else {
        target.classList.add("sidebar-active");
        setActiveItem(dataName);
      }
    }
  }, [activeItem, findClickTarget]);

  return (
    <>
      <div
        ref={containerRef}
        className={`sidebar-preview variant-${variant}`}
        style={{ height: 1024, position: "relative" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {children}
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
