<div align="center">

# Sidebar Showcase

**A UI showcase for exploring sidebar navigation patterns, responsive states, interaction behavior, and reusable layout ideas.**

![Top language](https://img.shields.io/github/languages/top/Nischhalsubba/sidebar-showcase?style=flat-square)
![Last commit](https://img.shields.io/github/last-commit/Nischhalsubba/sidebar-showcase?style=flat-square)
![Repo size](https://img.shields.io/github/repo-size/Nischhalsubba/sidebar-showcase?style=flat-square)

[Browse source](https://github.com/Nischhalsubba/sidebar-showcase/tree/main) · [Issues](https://github.com/Nischhalsubba/sidebar-showcase/issues)

</div>

## Overview

**Sidebar Showcase** is a focused interface repository for studying navigation rather than pretending a sidebar is just a rectangle attached to the left edge of existence. The useful questions are hierarchy, responsive behavior, current-state feedback, keyboard access, and how content reacts when navigation expands or collapses.

<details open>
<summary><strong>🏗️ Interactive UI architecture</strong></summary>

```mermaid
flowchart LR
    USER["User"] --> SIDEBAR["Sidebar navigation"]
    SIDEBAR --> ITEMS["Navigation items"]
    SIDEBAR --> STATE["Expanded / collapsed / mobile state"]
    ITEMS --> ROUTE["Destination / content"]
    STATE --> LAYOUT["Responsive layout"]
    ROUTE --> LAYOUT
    LAYOUT --> USER
```

</details>

## Interaction flow

```mermaid
flowchart TD
    OPEN["Open interface"] --> NAV["Inspect sidebar"] --> ACTION{"Choose action"}
    ACTION -->|Navigate| PAGE["Open destination"]
    ACTION -->|Collapse| COMPACT["Compact state"]
    ACTION -->|Mobile| DRAWER["Open / close drawer"]
    PAGE --> ACTIVE["Show current item"]
```

## Audience guide

| Audience | Focus |
|---|---|
| Developers | Component structure, state and responsive logic |
| Designers | Navigation hierarchy, density, motion and selected states |
| Accessibility reviewers | Keyboard order, focus, labels and mobile drawer behavior |
| Product teams | Whether navigation matches real information architecture |

## Getting started

```bash
git clone https://github.com/Nischhalsubba/sidebar-showcase.git
cd sidebar-showcase
```

Use the repository manifests/lockfiles to determine current development commands.

## Design & accessibility

Use real buttons for toggles, communicate expanded state, trap/focus mobile overlays appropriately, support Escape when relevant, keep active navigation distinguishable without color alone, and ensure collapsed icon-only controls retain accessible names.

## SEO & discoverability

Use accurate terms such as **sidebar UI, sidebar navigation, responsive sidebar, dashboard navigation, navigation component, and sidebar design patterns** in repository documentation. Demo pages should still use useful titles, descriptions and semantic headings.

## Contribution flow

```mermaid
flowchart LR
    PATTERN["Pattern / behavior change"] --> STATES["Review desktop + mobile states"] --> ACCESS["Keyboard / accessibility check"] --> VISUAL["Responsive visual review"] --> PR["Pull request"]
```
