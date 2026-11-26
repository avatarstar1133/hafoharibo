# Hafo-Haribo

**Personal Social Hub & Digital Identity Page**

Hafo-Haribo is a lightweight personal landing page that brings my social platforms, portfolio, store, music profiles, and online presence together in one place.

Rather than using a third-party link-in-bio service, this project provides a fully customizable personal link hub built from scratch with HTML, CSS, and vanilla JavaScript.

## Overview

The website serves as a central entry point to my online identity.

It provides quick access to:

- Personal Portfolio
- Personal Store
- Facebook
- Instagram
- TikTok
- Snapchat
- Locket
- Discord
- GitHub
- Spotify
- SoundCloud

The interface is designed primarily for mobile use while remaining responsive on desktop browsers.

## Features

### Personal Link Hub

All major social and personal platforms are presented as simple interactive link cards.

Each card opens the corresponding external profile in a new browser tab.

### Four Visual Themes

Hafo-Haribo includes four independently designed themes:

**Midnight Glass**  
Dark purple glass-inspired interface and the default visual theme.

**Original Luxury**  
Minimal black luxury-inspired appearance.

**Quiet Luxury**  
Warm, light and understated visual style.

**High Fashion**  
Clean white interface inspired by editorial and fashion-oriented layouts.

Users can switch between themes directly from the footer.

### Persistent Theme Preference

The selected theme is saved locally using browser `localStorage`.

```javascript
localStorage.setItem('hafo_portfolio_theme', newTheme);
```

When the visitor returns, the website automatically restores the previously selected theme.

### Responsive Design

The interface is designed to work across:

- Smartphones
- Tablets
- Laptops
- Desktop displays

Touch interactions are also handled separately to provide visual feedback on mobile devices.

### URL Cleanup

The JavaScript automatically removes Facebook's `fbclid` tracking parameter from the displayed URL when present.

This keeps shared URLs cleaner after visitors arrive from Facebook.

### Entry Animation

The main interface uses a subtle delayed entrance transition when the page loads.

## Tech Stack

```text
HTML5
CSS3
Vanilla JavaScript
LocalStorage
Google Fonts
Font Awesome
```

No JavaScript framework, backend server, database, package manager, or build process is required.

## Project Structure

```text
hafoharibo/
├── index.html
├── style.css
├── script.js
├── pict/
│   ├── hafo.jpg
│   ├── HafoDraw.jpg
│   ├── FPTZero.jpg
│   ├── TNT.jpg
│   └── pict ava.jpg
└── README.md
```

### `index.html`

Contains the main page structure, profile information, navigation, social links, and theme selector.

### `style.css`

Defines the complete visual system for all four themes, responsive behavior, typography, cards, animations, and interactive states.

### `script.js`

Handles:

- Theme switching
- Theme persistence with `localStorage`
- Active theme state
- Entry animation
- Mobile touch feedback
- Facebook `fbclid` URL cleanup

### `pict/`

Contains profile and visual assets used by the website.

## Run Locally

Clone the repository:

```bash
git clone <repository-url>
cd hafoharibo
```

Open:

```text
index.html
```

in any modern web browser.

No installation or dependency setup is required.

For development, the project can also be opened using VS Code Live Server or another static HTTP server.

## Deployment

Because Hafo-Haribo is a completely static website, it can be deployed directly using:

- GitHub Pages
- Vercel
- Netlify
- Cloudflare Pages
- Any static web hosting provider

No server-side configuration is required.

## Design Concept

Hafo-Haribo is designed as a personal digital identity rather than a traditional portfolio.

The project focuses on three principles:

**Minimal interaction** — visitors should reach any platform with a single click.

**Visual identity** — multiple themes allow the page to express different visual styles without changing its content.

**Independence** — the page does not depend on a commercial link-in-bio platform and remains fully customizable at the source-code level.

The default **Midnight Glass** theme represents the primary Hafo-Haribo visual identity.

## Related Projects

### Personal Portfolio

A more detailed presentation of my software engineering background, research, projects, technical skills, and achievements.

### HafoStore

Personal store linked directly from the Hafo-Haribo navigation.

## Author

**Huynh Gia Hao**

**Hafo-Haribo**

Software Engineering Student  
FPT University HCMC

GitHub: `avatarstar1133`

## License

This project is intended as a personal website and digital identity page.

The source code may be referenced for educational purposes. Personal images, branding, profile information, and other personal content remain the property of their respective owner.

---

© 2026 Designed by **Hafo-Haribo**
