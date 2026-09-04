# Every Receipt Matters — From Tax to Progress

A polished, visually engaging public-awareness web project about tax compliance, honest receipts, public revenue, and responsible use of collected taxes.

Built with **HTML5, CSS3, and vanilla JavaScript** — no frameworks, no build step, no external dependencies.

## Project Purpose

This is an **educational awareness website** that explains, in a respectful and non-accusatory way, the difference between:

- When a proper tax-inclusive transaction is recorded and applicable tax is paid
- When a transaction is deliberately under-reported or a proper receipt is avoided

The project encourages citizens, businesses, authorities, and government departments to support transparent taxation and responsible public spending.

## Features

- **Hero section** with animated flow visual (Purchase → Receipt → Tax → Services → Progress)
- **Interactive scenarios** — Restaurant, Gold Shop, Construction (expand/collapse with smooth animations)
- **Where Public Revenue Goes** — 8 animated revenue cards
- **Two Paths comparison** — split-screen visual with 13 real images (1-13)
- **Three Responsibility cards** — Citizens, Businesses, Government
- **Govt advice section** — 7-step process (Collect → Record → Audit → Protect → Invest → Report → Improve)
- **Think Beyond Today** — emotional, professional closing flow
- **Final awareness message** with downward flow
- **"Azmat Ali" calligraphy signature** at the end

## Visual Design

- Color palette: deep navy, royal blue, cyan, emerald green, warm gold, violet, coral/red, off-white
- Light backgrounds with colorful accents
- Glassmorphism, neon glows, rounded cards, soft shadows
- Floating dots, breathing animations, glowing borders
- Hover effects, smooth transitions
- Fully respects `prefers-reduced-motion`

## Responsive Design

The app works flawlessly from **270px width up to 4K+ displays**:

| Breakpoint | Target |
|-----------|--------|
| ≤ 359px | Tiny phones (270px - 359px) |
| 360px - 479px | Small phones |
| 480px - 767px | Large phones |
| 768px - 1023px | Tablets |
| 1024px+ | Desktop |

## Project Structure

```
tax-awareness/
│
├── index.html         # Semantic HTML5 structure
├── style.css          # All styling, animations, responsive rules
├── script.js          # Vanilla JS for interactivity
├── README.md          # This file
│
├── img1.jpg           # Deteriorating Infrastructure (bad path)
├── img2.jpg           # Poorly Maintained Roads
├── img3.jpg           # Limited Public Facilities
├── img4.jpg           # Neglected Public Spaces
├── img5.jpg           # Modern Hospitals (good path)
├── img6.jpg           # Maintained Roads
├── img7.jpg           # Railway Networks
├── img8.jpg           # Airports
├── img9.jpg           # Public Parks
├── img10.jpg          # Modern Buildings
├── img11.jpg          # Tourism Infrastructure
├── img12.jpg          # Clean Urban Environments
├── img13.jpg          # Underfunded Public Services (extra)
├── img14.jpg          # Additional image
├── img15.png          # Restaurant Scenario
├── img16.jpg          # Gold Jewellery Scenario
└── img17.png          # Construction Scenario
```

## Running the Project

Just open `index.html` in any modern browser. No build step, no installation, no server required.

```bash
# Optional: serve locally for testing
python -m http.server 8000
# Then visit http://localhost:8000
```

## Accessibility

- Semantic HTML5 elements
- ARIA labels and `aria-expanded` on interactive buttons
- Keyboard-friendly (Escape to close scenarios, Tab navigation)
- Focus outlines for keyboard users
- Reduced-motion media query support
- Meaningful alt text on all images
- High contrast colors meeting WCAG AA standards

## Ethical Guidelines

- No specific country, person, nationality, government, political party, or real business is mentioned
- No "I", "we", or "you" pronouns in the awareness content
- Educates rather than shames
- Emphasizes that **tax revenue alone does not guarantee development** — good governance, transparency, efficient spending, and accountability are also essential

## Author

**Azmat Ali**
