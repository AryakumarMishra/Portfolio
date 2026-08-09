You are a senior front-end engineer and designer building a personal portfolio 
website for Aryakumar Mishra, an AI/ML and full-stack engineer. This is a 
premium, modern, boutique-studio-quality build. Avoid anything that reads as a 
generic AI-generated template: no gradient blobs, no floating 3D robots, no 
purple-to-blue AI gradient, no glassmorphism-for-its-own-sake, no infinite 
marquees, no particle backgrounds, no emoji, no oversized/cropped background 
watermark text (if using the serif accent word, it must sit inline inside a 
real sentence, never floating alone as an ambiguous background element).

SITE ARCHITECTURE
- Next.js App Router with three routes: / (Home), /about, /projects
- Home: Hero -> Featured Projects (exactly 2, newest/most impressive first) 
  -> Tech Stack ("Toolkit") -> Contact
- /projects: all projects (~6) in a straightforward scrollable grid/list — 
  no scroll-pinning here, this page is for fast scanning
- /about: a story-driven page using the same stacking scroll system as Home, 
  with sections in order: Intro -> Experience -> Education -> Close + Resume 
  download

STACK
- Next.js (App Router) + TypeScript, Tailwind CSS
- Lenis for smooth momentum scrolling, site-wide
- GSAP + ScrollTrigger for the pinned section-stacking scroll effect on Home 
  and /about — sync GSAP's ticker with Lenis's scroll event per the current 
  documented integration pattern for these two libraries, don't guess at the 
  API from memory
- Framer Motion for everything else: hero micro-entrance details, navbar 
  morph transition, project card magnetic hover, toast enter/exit
- next/font for General Sans, Instrument Serif, IBM Plex Mono
- Fully static/client-rendered, deployable to Vercel with zero backend

SCROLL-STACKING BEHAVIOR (Home and About)
- Each section is a full-viewport panel. On scroll down, the next section 
  rises and slides over the current one, pinning once fully covered. On 
  scroll up, this reverses exactly (scrubbed to scroll position, not a 
  fixed-duration one-shot animation)
- Keep transitions to 3 on Home, 4 on About
- Under prefers-reduced-motion: disable pinning entirely, fall back to plain 
  stacked sections with simple opacity fades on scroll-into-view

NAVBAR MORPH
- On Hero / scroll position 0: nav links (About, Projects, Contact) centered 
  in the header, no name visible in header yet
- As the user scrolls into the first section transition: nav links animate 
  to the right side of the header, "Aryakumar Mishra" fades/slides in on the 
  left in a smaller weight than the hero headline
- Drive this off the same scroll-progress value as the first pinned 
  transition so it reads as one coordinated motion

DESIGN TOKENS — follow exactly
- Colors as CSS variables: Obsidian #101114, Bone #EDEAE2, Brass #C9A24B, 
  Ember #8C3A2E, Graphite #4B4E55, Bone White #F6F4EF. Both accents stay 
  desaturated/muted, never a saturated "brand" color.
- Type: General Sans (headings + body), Instrument Serif italic (exactly one 
  inline word per page as an accent, never a standalone background element), 
  IBM Plex Mono (labels, status tags, data). No fourth typeface.
- Subtle grain overlay (2-3% opacity) on Obsidian sections, implemented as a 
  small tiling SVG/CSS pattern, not an external image
- Generous spacing: desktop section padding 140-200px vertically where 
  sections aren't pinned; a constrained max-width content column

PROJECT CARDS
- Each card: name, status tag pill (Ember/Brass on hairline border), 
  one-line description, 2-3 bullet highlights, tech stack as small mono 
  chips, and two links: "GitHub" and "Live"
- If a project's live URL is missing or "#", clicking "Live" does not 
  navigate — it triggers a small toast/snackbar reading "This project is not 
  yet hosted", auto-dismissing after a few seconds. Style the toast with the 
  same token system (Obsidian background, Bone White text, Brass border), 
  animated in/out with Framer Motion, not a browser alert()

MOTION RULES (outside the stacking system)
- Project cards: subtle magnetic hover (card/border shifts a few px toward 
  cursor) plus a status-tag color shift on hover
- No hover animation elsewhere beyond simple color/opacity transitions
- No parallax beyond the described stacking effect, no scroll-jacking outside 
  the intentional pinned transitions, no auto-playing carousels
- Wrap everything in a prefers-reduced-motion check

QUALITY BAR
- Fully responsive to 375px — note that scroll-pinning effects often need a 
  simplified or disabled treatment on mobile if they cause jank; test on an 
  actual phone and fall back to simple scrolling there if the pinned effect 
  doesn't perform well
- Visible Brass keyboard focus states on every interactive element
- Real semantic HTML, correct heading hierarchy, alt text on every image
- No lorem ipsum — use the real content in the build prompt
- Review your own output against the "avoid" list before finishing

Ask before structural changes not specified here. Otherwise use your 
judgment within these constraints.