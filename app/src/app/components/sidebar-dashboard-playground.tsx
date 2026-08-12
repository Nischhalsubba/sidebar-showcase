import { InteractiveSidebar } from "./interactive-sidebar";
import { SidebarDashboardPanel } from "./sidebar-dashboard-panel";
import type { SidebarAction, SidebarVariantId } from "../sidebar/types";
import type { SidebarVariantDefinition } from "../sidebar/variants";
import type { SidebarState } from "../sidebar/types";

interface SidebarDashboardPlaygroundProps {
  variant: SidebarVariantDefinition;
  state: SidebarState;
  onAction: (action: SidebarAction) => void;
  onSearchChange: (variantId: SidebarVariantId, query: string) => void;
}

function countCollapsedSections(
  expandedSections: Record<string, boolean>,
  variantId: SidebarVariantId,
): number {
  const prefix = `${variantId}:`;
  return Object.entries(expandedSections).reduce((count, [key, expanded]) => {
    if (!key.startsWith(prefix)) return count;
    return expanded ? count : count + 1;
  }, 0);
}

export function SidebarDashboardPlayground({
  variant,
  state,
  onAction,
  onSearchChange,
}: SidebarDashboardPlaygroundProps) {
  const VariantComponent = variant.component;
  const collapsedSectionCount = countCollapsedSections(state.expandedSections, variant.id);

  return (
    <section className="playground-layout" aria-label="Dashboard playground">
      <div className="playground-sidebar-column">
        <header className="playground-sidebar-header">
          <p className="playground-sidebar-kicker">Interactive Sidebar</p>
          <h2 className="playground-sidebar-title">{variant.name}</h2>
        </header>
        <div className="playground-sidebar-frame" style={{ width: variant.width }}>
          <InteractiveSidebar
            externalState={{
              selectedItemLabel: state.selectedItemLabel,
              selectedTargetName: state.selectedTargetName,
              expandedSections: state.expandedSections,
              searchQuery: state.searchQueryByVariant[variant.id],
              themeMode: state.themeMode,
            }}
            onAction={onAction}
            onSearchChange={(query) => onSearchChange(variant.id, query)}
            searchQuery={state.searchQueryByVariant[variant.id]}
            syncMode="global"
            variantId={variant.id}
          >
            <VariantComponent />
          </InteractiveSidebar>
        </div>
      </div>

      <SidebarDashboardPanel
        activeVariantName={variant.name}
        collapsedSectionCount={collapsedSectionCount}
        eventLog={state.eventLog}
        searchQuery={state.searchQueryByVariant[variant.id]}
        selectedActionType={state.selectedActionType}
        selectedItemLabel={state.selectedItemLabel}
      />
    </section>
  );
}
