import { useMemo, useReducer } from "react";
import { SidebarAllVariants } from "./components/sidebar-all-variants";
import { SidebarDashboardPlayground } from "./components/sidebar-dashboard-playground";
import { sidebarReducer, createInitialSidebarState } from "./sidebar/reducer";
import { SIDEBAR_VARIANTS } from "./sidebar/variants";
import type { SidebarAction, SidebarVariantId, SidebarView } from "./sidebar/types";

export default function App() {
  const [state, dispatch] = useReducer(sidebarReducer, undefined, createInitialSidebarState);

  const activeVariant = useMemo(
    () => SIDEBAR_VARIANTS.find((variant) => variant.id === state.activeVariantId) ?? SIDEBAR_VARIANTS[0],
    [state.activeVariantId],
  );

  const handleVariantSelect = (variantId: SidebarVariantId) => {
    dispatch({ type: "set_variant", variantId });
  };

  const handleViewSelect = (view: SidebarView) => {
    dispatch({ type: "set_view", view });
  };

  const handleSidebarAction = (action: SidebarAction) => {
    dispatch({ type: "sidebar_action", action });
  };

  const handleSearchChange = (variantId: SidebarVariantId, query: string) => {
    dispatch({ type: "set_search_query", variantId, query });
  };

  return (
    <main className="workspace-root">
      <header className="workspace-toolbar">
        <div className="workspace-toolbar-row">
          <p className="workspace-label">Sidebar</p>
          <div className="workspace-chip-row">
            {SIDEBAR_VARIANTS.map((variant) => {
              const isActive = variant.id === state.activeVariantId;
              return (
                <button
                  key={variant.id}
                  className={`workspace-chip ${isActive ? "active" : ""}`}
                  onClick={() => handleVariantSelect(variant.id)}
                  style={{
                    borderColor: isActive ? `${variant.accent}45` : "transparent",
                    backgroundColor: isActive ? `${variant.accent}10` : "transparent",
                    color: isActive ? variant.accent : "#6b7280",
                  }}
                  type="button"
                >
                  <span
                    aria-hidden="true"
                    className="workspace-chip-dot"
                    style={{ backgroundColor: isActive ? variant.accent : `${variant.accent}66` }}
                  />
                  {variant.name}
                </button>
              );
            })}
          </div>
        </div>

        <div className="workspace-tab-row">
          <button
            className={`workspace-tab ${state.activeView === "all_variants" ? "active" : ""}`}
            onClick={() => handleViewSelect("all_variants")}
            type="button"
          >
            All Variants
          </button>
          <button
            className={`workspace-tab ${state.activeView === "dashboard_playground" ? "active" : ""}`}
            onClick={() => handleViewSelect("dashboard_playground")}
            type="button"
          >
            Dashboard Playground
          </button>
        </div>
      </header>

      <section className="workspace-content">
        {state.activeView === "all_variants" ? (
          <SidebarAllVariants
            activeVariantId={state.activeVariantId}
            expandedSections={state.expandedSections}
            onAction={handleSidebarAction}
            onSearchChange={handleSearchChange}
            onVariantSelect={handleVariantSelect}
            searchQueryByVariant={state.searchQueryByVariant}
            selectedItemLabel={state.selectedItemLabel}
            selectedTargetName={state.selectedTargetName}
            themeMode={state.themeMode}
            variants={SIDEBAR_VARIANTS}
          />
        ) : (
          <SidebarDashboardPlayground
            onAction={handleSidebarAction}
            onSearchChange={handleSearchChange}
            state={state}
            variant={activeVariant}
          />
        )}
      </section>
    </main>
  );
}
