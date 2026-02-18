import type { SidebarAction, SidebarActionType, SidebarVariantId } from "./types";

function normalizeText(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function titleCase(value: string): string {
  if (!value) return value;
  return value
    .split(" ")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(" ");
}

function makeSectionKey(raw: string): string {
  return raw
    .toLowerCase()
    .replace(/[_-]+/g, " ")
    .replace(/\b(header|section|title|icon|arrow|drop|down|right)\b/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\s/g, "_");
}

function inferType(targetName: string): SidebarActionType {
  const normalizedName = targetName.toLowerCase();

  if (
    /\b(item|menu item|submenu item|section item)\b/.test(normalizedName) &&
    !/\bitems\b/.test(normalizedName)
  ) {
    return "select_item";
  }

  if (
    /\b(header|arrow_drop_down|chevron_right|subsection)\b/.test(normalizedName) &&
    !/\bsearch header\b/.test(normalizedName)
  ) {
    return "toggle_section";
  }

  if (/\bsearch\b|search_line/.test(normalizedName)) {
    return "search";
  }

  if (normalizedName.includes("sun button")) {
    return "theme_toggle";
  }

  if (/\b(profile|memoji|user avatar|profile action)\b/.test(normalizedName)) {
    return "profile";
  }

  if (/\b(icon|button)\b/.test(normalizedName)) {
    return "icon_action";
  }

  return "fallback";
}

export function deriveSectionKey(targetName: string, textContent: string): string {
  const fromText = makeSectionKey(normalizeText(textContent));
  if (fromText.length > 0) {
    return fromText;
  }
  const fromName = makeSectionKey(normalizeText(targetName));
  return fromName.length > 0 ? fromName : "section";
}

export function mapTargetToAction(targetName: string, textContent: string, variantId: SidebarVariantId): SidebarAction {
  const normalizedTargetName = normalizeText(targetName);
  const normalizedText = normalizeText(textContent);
  const type = inferType(normalizedTargetName);
  const label = normalizedText || titleCase(normalizedTargetName.replace(/[_-]/g, " "));

  const action: SidebarAction = {
    variantId,
    type,
    targetName: normalizedTargetName || "unknown",
    label: label || "Untitled action",
    timestamp: Date.now(),
  };

  if (type === "toggle_section") {
    action.meta = {
      ...(action.meta ?? {}),
      sectionKey: deriveSectionKey(normalizedTargetName, normalizedText),
    };
  }

  return action;
}
