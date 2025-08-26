# Design System Guide

## Typography
- **Scale (1.25 ratio):** 12px, 15px, 18px, 24px, 30px, 37px, 46px
- **Weights:** 300 (light), 400 (regular), 600 (semibold), 700 (bold)
- **Line Heights:** 1.2 (headings), 1.5 (body), 1.4 (UI elements)
- **Letter Spacing:** -0.02em (large text), 0 (body), +0.05em (small caps)

## Color Palette
| Role | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Primary** | #eff6ff | #dbeafe | #bfdbfe | #93c5fd | #60a5fa | #3b82f6 | #2563eb | #1d4ed8 | #1e40af | #1e3a8a |
| **Secondary** | #f9fafb | #f3f4f6 | #e5e7eb | #d1d5db | #9ca3af | #6b7280 | #4b5563 | #374151 | #1f2937 | #111827 |
| **Success** | #f0fdf4 | #dcfce7 | #bbf7d0 | #86efac | #4ade80 | #22c55e | #16a34a | #15803d | #166534 | #14532d |
| **Warning** | #fefce8 | #fef9c3 | #fef08a | #fde047 | #facc15 | #eab308 | #ca8a04 | #a16207 | #854d0e | #713f12 |
| **Danger** | #fef2f2 | #fee2e2 | #fecaca | #fca5a5 | #f87171 | #ef4444 | #dc2626 | #b91c1c | #991b1b | #7f1d1d |
| **Info** | #f0f9ff | #e0f2fe | #bae6fd | #7dd3fc | #38bdf8 | #0ea5e9 | #0284c7 | #0369a1 | #075985 | #0c4a6e |

- **Usage:** primary for actions, secondary for informational elements, semantic colors for status messaging.
- All color combinations meet WCAG AA contrast (≥4.5:1) against background and foreground.
- Dark mode inverts foreground/background and shifts base colors for optimal contrast.

## Spacing
Base unit of **4px** with steps: 4, 8, 12, 16, 24, 32, 48, 64px.

## Border Radius
Standard radii: 2px, 4px, 8px, 12px, 16px.

## Components
- **Buttons:** heights of 32px, 40px, 48px with equal horizontal padding and distinct hover/active/disabled states using primary palette.
- **Form Inputs:** consistent padding and spacing, focus states using ring color, shared sizes with buttons.
- **Icons:** sizes 16px, 20px, 24px, 32px centered optically.
- **Cards/Containers:** utilize defined border radius, muted backgrounds, and unified shadow.
- **States:** loading spinners, empty placeholders, and error messages use semantic colors and spacing rules.

## Information Hierarchy
Use size, color, and spacing to guide attention—larger, bolder type and primary colors indicate prominence; muted tones and smaller text denote secondary information.

