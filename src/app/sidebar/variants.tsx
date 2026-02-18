import type { ComponentType } from "react";
import Variant1 from "../../imports/1-3-949";
import Variant2 from "../../imports/2-3-937";
import Variant3 from "../../imports/3-3-933";
import Variant4 from "../../imports/4-3-926";
import Variant5 from "../../imports/5-3-919";
import Variant6 from "../../imports/6-3-912";
import type { SidebarVariantId } from "./types";

export interface SidebarVariantDefinition {
  id: SidebarVariantId;
  name: string;
  width: number;
  accent: string;
  component: ComponentType;
}

export const SIDEBAR_VARIANTS: SidebarVariantDefinition[] = [
  { id: 1, name: "Customer Panel", accent: "#EA580C", width: 284, component: Variant1 },
  { id: 2, name: "Dark Navigation", accent: "#3B82F6", width: 277, component: Variant2 },
  { id: 3, name: "Grouped Cards", accent: "#F97316", width: 277, component: Variant3 },
  { id: 4, name: "Dual Panel", accent: "#6366F1", width: 476, component: Variant4 },
  { id: 5, name: "Green Minimal", accent: "#10B981", width: 277, component: Variant5 },
  { id: 6, name: "Dashboard Nav", accent: "#3B82F6", width: 277, component: Variant6 },
];
