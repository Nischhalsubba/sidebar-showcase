# Repository Instructions

## Setup

Sidebar Showcase is a Vite, React, Tailwind CSS, Figma-import, and reducer-driven interaction project.

```bash
pnpm install
pnpm dev
```

Use Node.js 22 or newer and pnpm 9 or newer, matching `package.json`.

## Commands

| Task | Command |
|---|---|
| Start development server | `pnpm dev` |
| Build production bundle | `pnpm build` |
| Run repository check | `pnpm check` |
| Preview production bundle | `pnpm preview` |

## Key files

- `src/app/App.tsx`: workspace view, active variant, and reducer integration.
- `src/app/sidebar/variants.ts`: six sidebar registrations, widths, labels, and accents.
- `src/app/sidebar/reducer.ts`: central workspace and interaction state.
- `src/app/sidebar/action-map.ts`: generated target-name to semantic-action mapping.
- `src/app/sidebar/types.ts`: shared sidebar state and action contracts.
- `src/app/components/interactive-sidebar.tsx`: adapter for search, selection, collapse, tooltips, theme, and event handling.
- `src/app/components/sidebar-all-variants.tsx`: six-variant comparison grid.
- `src/app/components/sidebar-dashboard-playground.tsx`: active sidebar and dashboard composition.
- `src/app/components/sidebar-dashboard-panel.tsx`: contextual information and recent event log.
- `src/imports/`: Figma-generated visual variants.
- `src/styles/`: theme tokens and adapter styles.
- `docs/PRODUCT_AND_ENGINEERING_CASE_STUDY.md`: product and engineering reference.

## Architecture rules

- Keep reducer state serializable and predictable.
- Add new variants through `variants.ts` rather than branching throughout the app.
- Preserve the distinction between generated visual components and the shared interaction adapter.
- Treat `data-name` values as an integration contract until generated markup is replaced with semantic components.
- Keep action mapping centralized.
- Keep search queries isolated per variant.
- Keep the event log bounded.
- Do not directly mutate reducer state.

## Figma import rules

- Do not casually edit generated imports if the same variant may be re-exported.
- Prefer adapter-level fixes for shared behavior.
- When editing generated components, document why the change cannot live in the adapter.
- Preserve imported widths until a deliberate responsive redesign is performed.
- Re-test search, active state, collapse, and tooltips after any re-export.

## Accessibility

- Verify imported icon controls have accessible names.
- Ensure all important actions work by keyboard.
- Do not rely on hover tooltips as the only label source.
- Confirm focus visibility in both light and dark themes.
- Verify collapsed sections communicate state.
- Ensure the comparison grid remains navigable at narrow widths.

## Testing and verification

Before committing meaningful changes:

1. Run `pnpm check`.
2. Run `pnpm preview` and inspect the production build.
3. Test all six variants.
4. Test both workspace views.
5. Test item selection and active-state synchronization.
6. Test per-variant search and Escape behavior.
7. Test section collapse and expansion.
8. Test theme toggling.
9. Confirm contextual actions update.
10. Confirm the event log remains capped at 50 events.
11. Test keyboard navigation.
12. Inspect desktop, tablet, and mobile layouts.

## Do not

- Do not claim generated Figma markup is production-ready without review.
- Do not remove or rename `data-name` attributes without updating adapter logic.
- Do not add another UI library before auditing current dependencies.
- Do not present the generated repository thumbnail as a browser screenshot.
- Do not describe unverified dependencies as active product features.
- Do not publish a live-demo link until the deployment is tested.
