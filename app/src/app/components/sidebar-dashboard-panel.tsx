import type { SidebarActionType, SidebarEvent } from "../sidebar/types";

interface SidebarDashboardPanelProps {
  activeVariantName: string;
  selectedItemLabel: string | null;
  selectedActionType: SidebarActionType | null;
  collapsedSectionCount: number;
  searchQuery: string;
  eventLog: SidebarEvent[];
}

const ACTION_LABELS: Record<SidebarActionType, string> = {
  select_item: "Item Selected",
  toggle_section: "Section Toggled",
  icon_action: "Icon Triggered",
  search: "Search Updated",
  profile: "Profile Action",
  theme_toggle: "Theme Toggled",
  fallback: "Fallback Action",
};

function getContextActions(selectedItemLabel: string | null): string[] {
  if (!selectedItemLabel) {
    return ["Select a sidebar item to see context actions."];
  }

  const lower = selectedItemLabel.toLowerCase();
  if (lower.includes("dashboard")) {
    return ["View KPI summary", "Open activity feed", "Pin to quick access"];
  }
  if (lower.includes("team") || lower.includes("profile")) {
    return ["Open member list", "Review assignments", "Send status update"];
  }
  if (lower.includes("report") || lower.includes("analysis")) {
    return ["Run latest report", "Export snapshot", "Schedule weekly digest"];
  }
  if (lower.includes("forecast") || lower.includes("planning")) {
    return ["Open forecast model", "Compare scenarios", "Share assumptions"];
  }

  return ["Open details", "Add to favorites", "Create quick note"];
}

function formatEventTime(timestamp: number): string {
  return new Date(timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
}

export function SidebarDashboardPanel({
  activeVariantName,
  selectedItemLabel,
  selectedActionType,
  collapsedSectionCount,
  searchQuery,
  eventLog,
}: SidebarDashboardPanelProps) {
  const contextActions = getContextActions(selectedItemLabel);
  const recentEvents = eventLog.slice(0, 8);

  return (
    <aside className="dashboard-panel">
      <div className="dashboard-panel-grid">
        <section className="dashboard-card">
          <p className="dashboard-card-label">Active Variant</p>
          <h2 className="dashboard-card-title">{activeVariantName}</h2>
        </section>

        <section className="dashboard-card">
          <p className="dashboard-card-label">Current Selection</p>
          <h2 className="dashboard-card-title">{selectedItemLabel ?? "Nothing selected"}</h2>
          <p className="dashboard-card-subtitle">
            {selectedActionType ? ACTION_LABELS[selectedActionType] : "Waiting for interaction"}
          </p>
        </section>

        <section className="dashboard-card">
          <p className="dashboard-card-label">Section State</p>
          <h2 className="dashboard-card-title">{collapsedSectionCount} collapsed section(s)</h2>
          <p className="dashboard-card-subtitle">Toggle any header or arrow icon to update this.</p>
        </section>

        <section className="dashboard-card">
          <p className="dashboard-card-label">Search State</p>
          <h2 className="dashboard-card-title">{searchQuery ? `"${searchQuery}"` : "No active filter"}</h2>
          <p className="dashboard-card-subtitle">Sidebar filtering is applied live per variant.</p>
        </section>

        <section className="dashboard-card dashboard-card-wide">
          <p className="dashboard-card-label">Context Actions</p>
          <ul className="dashboard-list">
            {contextActions.map((action) => (
              <li key={action} className="dashboard-list-item">
                {action}
              </li>
            ))}
          </ul>
        </section>

        <section className="dashboard-card dashboard-card-wide">
          <p className="dashboard-card-label">Activity Timeline</p>
          {recentEvents.length === 0 ? (
            <p className="dashboard-empty">No interactions yet.</p>
          ) : (
            <ul className="dashboard-timeline">
              {recentEvents.map((event) => (
                <li key={event.id} className="dashboard-timeline-item">
                  <span className="dashboard-timeline-time">{formatEventTime(event.timestamp)}</span>
                  <span className="dashboard-timeline-main">{ACTION_LABELS[event.type]}</span>
                  <span className="dashboard-timeline-detail">{event.label}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </aside>
  );
}
