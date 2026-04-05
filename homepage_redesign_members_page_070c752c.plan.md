---
name: Homepage Redesign Members Page
overview: Move the interactive member selection grid from the homepage to a dedicated `/members` route with its own navbar link, then replace the homepage main section with a hero landing experience and navigation hub cards that guide visitors into the site's sections.
todos:
  - id: members-page
    content: Create src/pages/members/index.astro wrapping <MemberSelection /> in the Layout with proper SEO props
    status: pending
  - id: navbar-members
    content: "Simplify navbar: remove Home/Videos/Fandom links, keep only Members + Albums centered around the logo (which acts as Home link)"
    status: pending
  - id: hero-section
    content: Create src/components/HeroSection.astro with large logo, headline, subtitle, and two CTA buttons (Members + Discography)
    status: pending
  - id: section-cards
    content: Create src/components/SectionCards.astro with 2 preview cards (Members with member avatars, Discography with album covers) -- no coming-soon placeholders
    status: pending
  - id: update-index
    content: Rewrite src/pages/index.astro to use HeroSection + SectionCards + ComeBack instead of MemberSelection
    status: pending
  - id: update-tests
    content: Update e2e tests (homepage.spec.ts, members.spec.ts) to reflect the member grid now living at /members
    status: pending
isProject: false
---

# Homepage Redesign: Move Members Grid to Dedicated Page

## Current State

The homepage ([src/pages/index.astro](src/pages/index.astro)) currently renders two sections:

- `<MemberSelection />` -- full-screen interactive grid of 9 member cards with hover-to-reveal full images and a centered bouncing logo
- `<ComeBack />` -- "Last Comeback" YouTube video embed

The navbar ([src/components/NavBar.astro](src/components/NavBar.astro)) has: **Home** | **Albums** (links to `/albums`, badge "new") | **Videos** (badge "soon") | **Fandom** (badge "soon"). There is no "Members" link even though `/members/[id]` pages already exist.

---

## Part 1: Create `/members` Index Page

Create a new page at `src/pages/members/index.astro` that takes the `<MemberSelection />` component currently on the homepage and places it in its own dedicated page.

- Use the existing `Layout` component wrapping `<MemberSelection />`
- Set appropriate `title`, `description`, and `canonical` props (similar pattern to the discography index at [src/pages/discography/index.astro](src/pages/discography/index.astro))
- The `MemberSelection` component, `MemberCard`, `CenteredLogo`, and `MemberImages` components remain **unchanged** -- they just move to being rendered at `/members` instead of `/`

---

## Part 2: Simplify the Navbar

Update [src/components/NavBar.astro](src/components/NavBar.astro) to only show the two sections that actually exist, with the **logo acting as the Home link** (it already links to `/`):

- **Remove** the "Home" text link (the center logo serves this purpose)
- **Remove** "Videos" and "Fandom" links (they have no pages yet -- add them back when implemented)
- **Remove** the broken "Albums" link pointing to `/albums`
- **Add** "Members" linking to `/members` on one side of the logo
- **Add** "Albums" linking to `/discography` (the actual working route) on the other side

Proposed navbar layout:

```
[Members]    [LOGO -> /]    [Albums]
```

This is clean, symmetrical, and only advertises pages that exist. The logo remains clickable to `/` as the implicit Home link. No badges needed since both sections are fully working.

---

## Part 3: Redesign the Homepage Main Section

Replace the `<MemberSelection />` on the homepage with a new landing experience. The homepage becomes a **welcome hub** rather than a single-purpose member grid. Two new sections are proposed:

### Section A: Hero Section (new component `HeroSection.astro`)

A visually striking full-viewport landing area that introduces the site:

- **Large centered TWICE logo** (reuse the existing `/images/logo.webp` asset, larger than the navbar version)
- **Headline text**: "Know TWICE" in bold display font with a magenta gradient
- **Subtitle**: "Your complete guide to the K-pop girl group TWICE" (pulled from existing site description)
- **Two CTA buttons** using the existing magenta/apricot palette:
  - "Meet the Members" --> links to `/members`
  - "Explore Discography" --> links to `/discography`
- **Background**: keep the existing cream/apricot/pink gradient from `global.css` -- add subtle floating decorative elements or keep it clean
- **Animations**: use the existing `fade-in-up` and `scale-in` keyframes already defined in [src/styles/global.css](src/styles/global.css)
- Occupies roughly the full viewport height (`min-h-screen`) so it feels like a proper landing

### Section B: Section Navigation Cards (new component `SectionCards.astro`)

A row of two cards that visually preview the two available sections, acting as a discovery hub:

- **Members card** -- a row of small circular member avatars (pulled from `MEMBERS` data, using the existing card images) with label "Members" and a short description like "Get to know each member." Links to `/members`
- **Discography card** -- show 2-3 album cover thumbnails (pulled from `DISCOGRAPHY` data, using the existing album images) with label "Discography" and description like "Explore albums, singles, and tracks." Links to `/discography`

Use a 2-column grid on desktop, stacked on mobile. Cards should use the existing glass morphism (`.glass` utility) and shadow (`.shadow-card` / `.shadow-card-hover`) design tokens for consistency with the rest of the site.

### Section C: Keep `<ComeBack />` as-is

The "Last Comeback" YouTube section stays at the bottom, unchanged.

### Updated `index.astro`

```astro
---
import Layout from '../layouts/Layout.astro';
import HeroSection from '../components/HeroSection.astro';
import SectionCards from '../components/SectionCards.astro';
import ComeBack from '../components/ComeBack.astro';
---

<Layout
  title="Know TWICE - Complete TWICE Member Profiles, Facts & Information"
  description="Discover everything about TWICE members..."
  canonical="https://www.knowtwice.com"
>
  <HeroSection />
  <SectionCards />
  <ComeBack />
</Layout>
```

---

## Part 4: Update Tests and SEO

- Update the homepage e2e test at `src/tests/e2e/homepage.spec.ts` to reflect that the member grid is no longer on `/` but on `/members`
- Update the member-specific e2e test at `src/tests/e2e/members.spec.ts` if it navigates from the homepage
- Update the `title`, `description`, and `canonical` on the homepage `Layout` if needed (may stay the same since it's still the main entry)

---

## Files Changed Summary

| Action     | File                                         |
| ---------- | -------------------------------------------- |
| **Create** | `src/pages/members/index.astro`              |
| **Create** | `src/components/HeroSection.astro`           |
| **Create** | `src/components/SectionCards.astro`          |
| **Edit**   | `src/pages/index.astro`                      |
| **Edit**   | `src/components/NavBar.astro`                |
| **Edit**   | `src/tests/e2e/homepage.spec.ts` (if needed) |
| **Edit**   | `src/tests/e2e/members.spec.ts` (if needed)  |

No existing components are modified or deleted -- `MemberSelection`, `MemberCard`, `CenteredLogo`, `MemberImages`, and `ComeBack` all remain intact.
