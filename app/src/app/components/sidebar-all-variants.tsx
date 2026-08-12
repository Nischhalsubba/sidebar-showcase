import { InteractiveSidebar } from "./interactive-sidebar";
import type { SidebarAction, SidebarExternalState, SidebarVariantId } from "../sidebar/types";
import type { SidebarVariantDefinition } from "../sidebar/variants";

interface SidebarAllVariantsProps {
  variants: SidebarVariantDefinition[];
  activeVariantId: SidebarVariantId;
  selectedItemLabel: string | null;
  selectedTargetName: string | null;
  expandedSections: Record<string, boolean>;
  searchQueryByVariant: Record<SidebarVariantId, string>;
  themeMode: SidebarExternalState["themeMode"];
  onVariantSelect: (variantId: SidebarVariantId) => void;
  onAction: (action: SidebarAction) => void;
  onSearchChange: (variantId: SidebarVariantId, query: string) => void;
}

export function SidebarAllVariants({
  variants,
  activeVariantId,
  selectedItemLabel,
  selectedTargetName,
  expandedSections,
  searchQueryByVariant,
  themeMode,
  onVariantSelect,
  onAction,
  onSearchChange,
}: SidebarAllVariantsProps) {
  return (
    <section className="variants-grid" aria-label="All sidebar variants">
      {variants.map((variant) => {
        const VariantComponent = variant.component;
        const isActiveVariant = variant.id === activeVariantId;

        return (
          <article key={variant.id} className={`variant-card ${isActiveVariant ? "active" : ""}`}>
            <header className="variant-card-header">
              <div>
                <p className="variant-card-kicker">Variant {variant.id}</p>
                <h2 className="variant-card-title">{variant.name}</h2>
              </div>
              <button
                className="variant-card-button"
                onClick={() => onVariantSelect(variant.id)}
                style={{ borderColor: `${variant.accent}35`, color: variant.accent }}
                type="button"
              >
                {isActiveVariant ? "Active" : "Set Active"}
              </button>
            </header>

            <p className="variant-card-meta">
              Original width: <strong>{variant.width}px</strong>
            </p>

            <div className="variant-preview-shell">
              <div className="variant-preview-scroll">
                <div className="variant-preview-frame" style={{ width: variant.width }}>
                  <InteractiveSidebar
                    externalState={{
                      selectedItemLabel: isActiveVariant ? selectedItemLabel : null,
                      selectedTargetName: isActiveVariant ? selectedTargetName : null,
                      expandedSections,
                      searchQuery: searchQueryByVariant[variant.id],
                      themeMode,
                    }}
                    onAction={(action) => {
                      onVariantSelect(variant.id);
                      onAction(action);
                    }}
                    onSearchChange={(query) => onSearchChange(variant.id, query)}
                    searchQuery={searchQueryByVariant[variant.id]}
                    syncMode="global"
                    variantId={variant.id}
                  >
                    <VariantComponent />
                  </InteractiveSidebar>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
