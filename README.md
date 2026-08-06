<!-- interactive-readme-standard:start -->

<div align="center">

# sidebar-showcase

**Branch-aware technical guide for [`main`](https://github.com/Nischhalsubba/sidebar-showcase/tree/main)**

<p><img alt="branch: main" src="https://img.shields.io/static/v1?label=&message=branch%3A%20main&color=5965F2&style=flat-square"> <img alt="Vite" src="https://img.shields.io/static/v1?label=&message=Vite&color=24292F&style=flat-square"> <img alt="Tailwind CSS" src="https://img.shields.io/static/v1?label=&message=Tailwind%20CSS&color=24292F&style=flat-square"> <img alt="TypeScript" src="https://img.shields.io/static/v1?label=&message=TypeScript&color=24292F&style=flat-square"> <img alt="CSS" src="https://img.shields.io/static/v1?label=&message=CSS&color=24292F&style=flat-square"> <img alt="HTML" src="https://img.shields.io/static/v1?label=&message=HTML&color=24292F&style=flat-square"> <img alt="JavaScript" src="https://img.shields.io/static/v1?label=&message=JavaScript&color=24292F&style=flat-square"> <img alt="docs: branch-aware" src="https://img.shields.io/static/v1?label=&message=docs%3A%20branch-aware&color=8250DF&style=flat-square"></p>

<p>
  <a href="https://github.com/Nischhalsubba/sidebar-showcase/tree/main"><strong>Browse source</strong></a> ·
  <a href="https://github.com/Nischhalsubba/sidebar-showcase/issues"><strong>Issues</strong></a> ·
  <a href="https://github.com/Nischhalsubba/sidebar-showcase/codespaces/new?ref=main"><strong>Open in Codespaces</strong></a>
</p>

</div>

> [!IMPORTANT]
> This guide is generated from the files actually present on `main`. It links to detected source paths, preserves project-authored notes, and avoids claiming components that were not found.

## At a glance

| Item | Detected value |
|---|---|
| Purpose | An interactive React sidebar pattern laboratory with six Figma-derived variants, reducer-driven state, per-variant search, collapsible sections, theme switching, contextual actions, and an activity timeline. |
| Branch role | Default branch |
| Stack | Vite, Tailwind CSS, TypeScript, CSS, HTML, JavaScript |
| Manifests | package.json |
| Prerequisites | Node.js |
| Delivery | GitHub Actions |
| License | No license file detected |

## Branch scope

This is the repository's default branch.



## Quick start

```bash
npm install
npm run dev
npm run build
npm run preview
```

### Configuration surface

- No committed environment example file was detected.

> Never commit secrets, private keys, production credentials, customer data, or unredacted infrastructure details.

## Repository map

```mermaid
flowchart TD
    ROOT["sidebar-showcase / main"]
    ROOT --> P0[".github/"]
    ROOT --> P1["docs/"]
    ROOT --> P2["guidelines/"]
    ROOT --> P3["src/"]
    ROOT --> P4[".gitignore"]
    ROOT --> P5["AGENTS.md"]
    ROOT --> P6["ATTRIBUTIONS.md"]
    ROOT --> P7["index.html"]
    ROOT --> P8["package-lock.json"]
    ROOT --> P9["package.json"]
    ROOT --> P10["postcss.config.mjs"]
    ROOT --> P11["vite.config.ts"]
```

| Responsibility | Detected source paths |
|---|---|
| Interface | [`src`](https://github.com/Nischhalsubba/sidebar-showcase/tree/main/src) |
| Documentation | [`docs`](https://github.com/Nischhalsubba/sidebar-showcase/tree/main/docs) |
| Delivery | [`.github`](https://github.com/Nischhalsubba/sidebar-showcase/tree/main/.github) |

## Website or application map

```mermaid
flowchart TD
    APP["sidebar-showcase"]
    APP --> R0["src/app"]
    R0 --> F0["src/app/App.tsx"]
    R0 --> F1["src/app/sidebar/variants.tsx"]
    R0 --> F2["src/app/components/sidebar-dashboard-playground.tsx"]
    R0 --> F3["src/app/components/sidebar-all-variants.tsx"]
    R0 --> F4["src/app/components/interactive-sidebar.tsx"]
    R0 --> F5["src/app/components/sidebar-dashboard-panel.tsx"]
    R0 --> F6["src/app/components/ui/input.tsx"]
    R0 --> F7["src/app/components/ui/sheet.tsx"]
    R0 --> F8["src/app/components/ui/accordion.tsx"]
    R0 --> F9["src/app/components/ui/navigation-menu.tsx"]
    R0 --> F10["src/app/components/ui/input-otp.tsx"]
    R0 --> F11["src/app/components/ui/progress.tsx"]
```

## Architecture and responsibility flow

```mermaid
flowchart LR
    USER["User / contributor"]
    USER --> A0["Interface: src"]
    A0 --> A1["Documentation: docs"]
    A1 --> A2["Delivery: .github"]
    A2 --> DELIVERY["Delivery: GitHub Actions"]
```



## Quality, security, and operations

<table>
<tr>
<td width="33%" valign="top">

### Quality

- No conventional test directory was detected automatically.

Detected commands:
- `npm run dev`
- `npm run build`
- `npm run preview`

</td>
<td width="33%" valign="top">

### Security

- No dedicated security policy or automated dependency configuration was detected.

Review authentication, authorization, input validation, dependency updates, secret handling, and failure recovery before release.

</td>
<td width="34%" valign="top">

### Observability

- No dedicated observability integration was detected automatically.

Define useful logs, metrics, traces, alerts, and rollback signals for production-facing branches.

</td>
</tr>
</table>

## Delivery flow

```mermaid
flowchart LR
    CHANGE["Change on main"] --> CHECK["Tests and quality checks"]
    CHECK --> REVIEW["Review architecture and documentation impact"]
    REVIEW --> BUILD["Build or package"]
    BUILD --> DEPLOY["Deploy or release"]
    DEPLOY --> VERIFY["Verify health and rollback readiness"]
```

### Automation detected

- [`.github/workflows/apply-interactive-readme.yml`](https://github.com/Nischhalsubba/sidebar-showcase/blob/main/.github/workflows/apply-interactive-readme.yml)

## Contribution flow

```mermaid
flowchart LR
    FORK["Create branch"] --> CHANGE["Make focused change"]
    CHANGE --> TEST["Run relevant checks"]
    TEST --> DOCS["Update README and diagrams"]
    DOCS --> PR["Open pull request"]
    PR --> REVIEW["Review and iterate"]
    REVIEW --> MERGE["Merge when ready"]
```

- Keep changes focused and explain architectural consequences.
- Run the checks relevant to the changed area.
- Update diagrams whenever routes, modules, data models, authentication, jobs, or delivery paths change.
- Add screenshots or recordings for visual behavior changes when useful.
- Use issues for reproducible defects and pull requests for reviewable changes.

## Ownership and support

| Topic | Source |
|---|---|
| Repository | [`Nischhalsubba/sidebar-showcase`](https://github.com/Nischhalsubba/sidebar-showcase) |
| Branch | [`main`](https://github.com/Nischhalsubba/sidebar-showcase/tree/main) |
| Ownership | No CODEOWNERS file detected |
| Contributing | Use the contribution flow above |
| Support | [Open or review issues](https://github.com/Nischhalsubba/sidebar-showcase/issues) |
| License | No license file detected |

<details>
<summary><strong>Documentation maintenance checklist</strong></summary>

- [ ] Purpose and branch scope are accurate.
- [ ] Setup and configuration commands still work.
- [ ] Repository, application, API, data, authentication, job, and deployment diagrams match the code.
- [ ] Tests, security controls, observability, and rollback behavior are documented.
- [ ] Links point to real files on this branch.
- [ ] No secrets or private operational details are exposed.

</details>

<!-- interactive-readme-standard:end -->

<!-- project-authored-notes:start -->
<details>
<summary><strong>Project-authored notes preserved from this branch</strong></summary>

<div align="center">

<img src="./docs/assets/sidebar-showcase-thumbnail.svg" width="100%" alt="Sidebar Showcase branded repository thumbnail" />

# Sidebar Showcase

### Six Figma-derived sidebar systems connected through one interactive React playground

A focused design-to-code laboratory for comparing sidebar patterns, testing navigation behavior, and turning generated Figma output into a reusable interface system.

[Engineering case study](./docs/PRODUCT_AND_ENGINEERING_CASE_STUDY.md) · [Repository instructions](./AGENTS.md)

![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react&logoColor=111111)
![Vite](https://img.shields.io/badge/Vite-6.3-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-4.1-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-9.15-F69220?style=flat-square&logo=pnpm&logoColor=white)

![Stars](https://img.shields.io/github/stars/Nischhalsubba/sidebar-showcase?style=flat-square)
![Forks](https://img.shields.io/github/forks/Nischhalsubba/sidebar-showcase?style=flat-square)
![Issues](https://img.shields.io/github/issues/Nischhalsubba/sidebar-showcase?style=flat-square)
![Last commit](https://img.shields.io/github/last-commit/Nischhalsubba/sidebar-showcase?style=flat-square)

</div>

## Product concept

Sidebar Showcase is not a generic component dump. It is an interactive comparison environment for six sidebar directions imported from Figma and normalized through one shared state and interaction layer.

The workspace lets a reviewer:

- compare six visual variants
- activate one variant at a time
- switch between a gallery and dashboard playground
- search within each variant
- collapse and expand detected groups
- select items and synchronize active states
- toggle theme state
- inspect contextual actions
- review a bounded activity timeline

## Sidebar variants

| ID | Variant | Accent | Original width |
|---:|---|---|---:|
| 1 | Customer Panel | Orange | 284px |
| 2 | Dark Navigation | Blue | 277px |
| 3 | Grouped Cards | Orange | 277px |
| 4 | Dual Panel | Indigo | 476px |
| 5 | Green Minimal | Emerald | 277px |
| 6 | Dashboard Nav | Blue | 277px |

## Architecture

```text
src/
├── app/
│   ├── App.tsx
│   ├── components/
│   │   ├── interactive-sidebar.tsx
│   │   ├── sidebar-all-variants.tsx
│   │   ├── sidebar-dashboard-playground.tsx
│   │   └── sidebar-dashboard-panel.tsx
│   └── sidebar/
│       ├── action-map.ts
│       ├── reducer.ts
│       ├── types.ts
│       └── variants.ts
├── imports/            Figma-generated sidebar implementations
├── styles/             theme, Tailwind, fonts, and interaction CSS
└── main.tsx             React entry point
```

`App.tsx` owns the workspace view and reducer. `variants.ts` registers the six imported implementations. `InteractiveSidebar` adapts generated `data-name` nodes into reusable actions, search, tooltips, collapse behavior, active selection, and theme state.

## State model

The reducer tracks:

- active workspace view
- active sidebar variant
- selected item and target
- selected action type
- expanded and collapsed sections
- per-variant search queries
- light or dark theme state
- a maximum of 50 recent interaction events

This keeps generated components visually intact while moving product behavior into a predictable shared layer.

## Interaction adapter

The interaction wrapper adds behavior that raw Figma exports do not provide consistently:

- target detection through `data-name`
- action mapping
- labels derived from visible text or nearby headers
- search overlays positioned over imported search fields
- per-variant filtering
- collapse synchronization
- active-item styling
- hover tooltips for icon-only controls
- theme state forwarding
- activity logging

## Current status

| Area | Status |
|---|---|
| Six sidebar variants | Implemented |
| Variant comparison grid | Implemented |
| Dashboard playground | Implemented |
| Reducer-driven state | Implemented |
| Per-variant search | Implemented |
| Collapsible sections | Implemented |
| Theme toggling | Implemented |
| Contextual dashboard actions | Implemented |
| Activity timeline | Implemented |
| Automated tests | Not confirmed |
| Public live deployment | Not documented |
| Browser screenshot in this pass | Not captured |

The repository thumbnail is a branded presentation asset derived from the real workspace and variant system. It is not presented as a browser screenshot.

## Technology

The repository includes React, Vite, Tailwind CSS, Radix UI, Material UI, Motion, Recharts, React DnD, React Resizable Panels, `cmdk`, Sonner, Vaul, and related component utilities.

The actual app currently uses a smaller focused subset than the full dependency list suggests. Dependency pruning should be based on verified imports, not optimism with a delete key.

## Run locally

Requirements:

- Node.js 22 or newer
- pnpm 9 or newer

```bash
pnpm install
pnpm dev
```

Production verification:

```bash
pnpm check
pnpm preview
```

## Important risks

- Imported Figma components use generated names that are difficult to maintain.
- Behavior depends on `data-name` attributes remaining stable.
- The interaction adapter uses DOM inspection and mutation to bridge generated markup.
- Accessibility of imported visual components is not automatically guaranteed.
- The dependency list is much larger than the proven runtime surface.
- Search and collapse behavior should be tested after any Figma re-export.
- The repository has no documented public deployment in the inspected files.

## Recommended next work

1. Add unit coverage for reducer and action mapping.
2. Add browser tests for search, collapse, selection, and theme state.
3. Create a stable semantic contract for imported variants.
4. Replace generated file names gradually with meaningful names.
5. Audit and remove unused dependencies.
6. Test keyboard and screen-reader behavior.
7. Publish a verified deployment and capture real desktop and mobile screenshots.

## Documentation

- [Product and engineering case study](./docs/PRODUCT_AND_ENGINEERING_CASE_STUDY.md)
- [Repository instructions](./AGENTS.md)
- [Branded repository thumbnail](./docs/assets/sidebar-showcase-thumbnail.svg)

## Author

Designed and maintained by [Nischhal Raj Subba](https://github.com/Nischhalsubba).

</details>
<!-- project-authored-notes:end -->
