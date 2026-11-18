# Sidebar state, responsive and accessibility test matrix

## Purpose
The repository showcases navigation patterns under `app/`. A successful sidebar is not only visually compact: it must keep destinations discoverable, active location clear, content usable and focus predictable as the viewport changes. This matrix gives designers, frontend developers and QA reviewers one shared behavior contract.

## Responsive and interaction states
| Situation | Expected review outcome |
| --- | --- |
| Desktop expanded | Labels visible; nested groups and current destination discernible |
| Desktop collapsed | Every icon-only action retains an accessible name and useful tooltip |
| Narrow/mobile overlay | Overlay opens intentionally, provides close control and doesn't hide the main task forever |
| Keyboard navigation | All links/toggles reachable with logical Tab order and visible focus |
| Escape while overlay open | Overlay closes and focus returns to its trigger |
| Focus at end of overlay | Focus stays in modal overlay if implemented as modal; avoids background interaction |
| Route change | Active location represented visually *and* with programmatic current state |
| Nested navigation | Expanded state communicated via appropriate semantics, and focus does not jump unexpectedly |
| Resize across breakpoint | Focus, selected route and layout recover without duplicate navigation or horizontal scroll |
| Page zoom / large text | Navigation labels and controls remain usable at 200% zoom |
| Reduced-motion preference | Sidebar transitions do not block navigation or trigger unwanted motion |
| Very long nav labels | Wrapping, truncation or tooltips preserve meaning and accessible name |

## Semantic and visual criteria
- Prefer native `nav`, `a`, and `button` elements. Toggle buttons need a name, expanded/collapsed state and a controlled target where applicable.
- Use `aria-current="page"` for the selected route. Do not rely on color alone.
- If using an overlay dialog, document focus containment and return; if using a nonmodal drawer, do not apply modal behavior blindly.
- Maintain minimum practical target size, readable contrast, tooltip visibility and meaningful content-area landmark structure.
- Do not use hover-only disclosure for essential navigation; all actions need touch and keyboard access.
- Test empty, loading, long-list and permission-restricted navigation conditions if the implementation supports them.

## Test protocol
1. Start with a clean browser state, record viewport and browser version.
2. Perform the primary route journey in expanded, collapsed and mobile configurations.
3. Repeat without mouse input; record keyboard order and Escape behavior.
4. Increase browser text zoom; test scroll position and mobile overscroll.
5. Enable reduced motion and compare the duration/visibility of transitions.
6. Inspect accessibility tree for the sidebar's name, selected item and toggle state.
7. Recheck the content region before and after route and breakpoint changes.

## Reviewer record
```text
PR / implementation variant:
Viewport, zoom, browser and input type:
Expanded/collapsed/mobile results:
Keyboard and focus return:
ARIA current/expanded inspection:
Reduced motion / truncation / long labels:
Defects by severity and assigned owner:
Evidence screenshots or recording:
Rollback reference:
```

## Definition of done
A reviewer can navigate the component across viewport and input modes, identify current location, recover from overlays and reproduce any focus defects. This is an acceptance specification, not evidence that a particular implementation already satisfies it.
