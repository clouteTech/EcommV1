# Responsive Design Guide – E-commerceV1

This guide explains how the Flipkart-inspired home page adapts to phones, tablets and desktops.
Every code sample below is taken from the real project files.

---

## 0. The one idea behind everything: mobile-first Tailwind

Tailwind classes **without a prefix apply to every screen**, starting with the smallest phone.
A prefix such as `md:` means "from this width **and wider**".

| Prefix | Starts at | Device we think of | Used in this project for |
|---|---:|---|---|
| *(none)* | 0 px | Phones (360–430) | Base/mobile layout |
| `sm:` | 640 px | Large phones / small tablets | Slightly bigger page gutters, 2 banners |
| `md:` | 768 px | Tablets (768, 820) | Full header, tablet layout |
| `lg:` | 1024 px | Landscape tablet / small laptop | "Become a Seller", pincode, 3 banners |
| `xl:` | 1280 px | Desktop | Final desktop gutters and spacing |
| `2xl:` | 1536 px | Large desktop | Not needed – layout is already capped by `xl:` rules |

Read a class list from left to right: `grid-cols-2 md:grid-cols-3 xl:grid-cols-6` means
*"2 columns on phones, 3 from tablet up, 6 from desktop up"*.

There are **no custom media queries** in this project. The only "custom" responsive rule is
the `page-x` utility in `src/styles.css`, which sets the page side-padding:

```css
@utility page-x {
  padding-inline: 1rem;                      /* phones   */
  @media (min-width: 640px)  { padding-inline: 1.5rem; }   /* sm+      */
  @media (min-width: 1280px) { padding-left: 34px; padding-right: 70px; } /* desktop, from the reference screenshots */
}
```

The `<meta name="viewport" content="width=device-width, initial-scale=1">` tag in
`src/index.html` is what makes phones use their real width – do not remove it.

---

## 1. Desktop layout (≥ 1280 px)

* **Header** (`layouts/header/header.html`): two rows.
  Row 1 = yellow logo, the three service tabs (Minutes / Travel / Grocery) and the
  "Deliver to Bengaluru 560001" block. Row 2 = search bar + **Login**, **Become a Seller**,
  **More ▾**, **Cart**.
* **Search width** is fixed to 53.5 % of the row at desktop: `xl:w-[53.5%] xl:flex-none`.
* **Categories**: one horizontal row of 14 icons. On a 1440 px screen they all fit.
  On 1280/1366 px the row is wider than the screen, so it scrolls and **◀ ▶ arrow buttons**
  appear (`category-list.html`).
* **Banners**: three banners are visible side by side (`lg:w-[calc((100%-36px)/3)]`), 268 px tall.
* **Product sections**: "Suggested For You" is a horizontal scroller with arrows;
  "Recommended Products" is a 6-column grid (`xl:grid-cols-6`).
* **Footer**: columns in one row, with address blocks on the right.

## 2. Tablet layout (768 – 1023 px)

* **Header**: same two rows, but compacted so nothing overlaps:
  * "Become a Seller" and the delivery pincode are hidden (`hidden lg:flex`).
    "Become a Seller" is still reachable from the **More** dropdown.
  * Service tabs are narrower (`w-[100px]`) and their grey sub-labels are hidden.
  * Buttons have less padding (`px-2.5`).
  * The search bar takes all remaining space (`flex-1`).
* **Categories**: horizontal scrolling (swipe) with arrows for mouse users.
* **Banners**: 2 visible at a time (`sm:w-[calc((100%-18px)/2)]`), 250 px tall.
* **Product grids**: 3 columns (`md:grid-cols-3`), 4 at 1024 px (`lg:grid-cols-4`).

## 3. Mobile layout (< 768 px)

* **Header** is **sticky** (stays on screen while scrolling) and has a hamburger menu:
  * Row 1: ☰ button · compact logo · Login icon · Cart icon (with item-count badge).
  * Row 2: full-width search bar with a shorter placeholder so it is not cut off.
  * Tapping ☰ opens `layouts/mobile-menu` – a slide-in drawer with Login, Home, Cart,
    Services, **all categories**, and the More links.
* **All tap targets are at least 44 × 44 px** (`size-11`, `min-h-12`).
* **Search input is 16 px** (`text-base`) – smaller text makes iPhones zoom the page on focus.
* **Categories**: swipeable row; arrows are hidden (`hidden md:grid`).
* **Banners**: one banner at a time, with the next one peeking in (`w-[88%]`) to hint at swiping.
  The ◀ ▶ buttons are hidden on phones because they would cover the text.
* **Product grids**: 2 columns (`grid-cols-2`). "Suggested" cards scroll sideways.
* **Footer**: link columns wrap two-per-row (`w-1/2`) and the address blocks stack full-width.

---

## 4. Responsive classes used per component

| Component (file) | Key responsive classes | What they do |
|---|---|---|
| `Header` (`layouts/header/header.html`) | `md:hidden`, `hidden md:flex`, `hidden lg:flex`, `xl:w-[53.5%]`, `sticky … md:static` | Show/hide hamburger, tablet buttons, seller link; fix search width on desktop; sticky only on phones |
| `MobileMenu` (`layouts/mobile-menu/`) | `md:hidden`, `w-[85%] max-w-[320px]` | Drawer exists only on phones; never wider than 320 px |
| `CategoryList` (`…/category-list/`) | `overflow-x-auto`, `no-scrollbar`, `hidden md:grid` | Swipe on touch, arrows only on tablet+ |
| `PromotionalBanner` (`…/promotional-banner/`) | `w-[88%] sm:w-[calc((100%-18px)/2)] lg:w-[calc((100%-36px)/3)]`, `h-[210px] sm:h-[250px] lg:h-[268px]` | 1 → 2 → 3 banners visible, taller as space grows |
| `ProductSection` (`…/product-section/`) | `grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6` | Grid column count |
| `ProductCard` (`…/product-card/`) | `aspect-[3/4]`, `object-cover` / `object-contain` | Keeps image proportions on every width |
| `ProductQuickView` (`…/product-quick-view/`) | `items-end sm:items-center`, `rounded-t-2xl sm:rounded-2xl`, `sm:grid-cols-2` | Bottom sheet on phones, centred 2-column dialog on tablets+ |
| `Footer` (`shared/components/footer/`) | `w-1/2 sm:w-[154px]`, `w-full sm:w-[338px]`, `pl-4 sm:pl-8 xl:pl-[66px]` | Columns wrap on phones, fixed widths on tablets+ |

---

## 5. How the header changes (with real code)

One header file, three layouts. The trick is that each block says *who can see it*:

```html
<!-- Hamburger: phones only -->
<button class="… md:hidden" (click)="menuOpen.set(true)">☰</button>

<!-- Service tabs: hidden on phones, shown from md -->
<nav class="ml-3 hidden items-center md:flex lg:ml-[18px]">…</nav>

<!-- Delivery pincode: hidden until lg -->
<div class="ml-auto mr-5 hidden items-center gap-3 py-1 lg:flex">…</div>

<!-- Login + Cart icons: phones only -->
<div class="ml-auto flex items-center md:hidden">…</div>

<!-- Become a Seller: hidden until lg -->
<a routerLink="/dashboard" class="hidden … lg:flex">Become a Seller</a>
```

`hidden` = `display:none`. `md:flex` = "from 768 px, switch to `display:flex`".

The search bar: `flex-1` makes it stretch into whatever space is left; on desktop
`xl:w-[53.5%] xl:flex-none` pins it to the Flipkart proportion.

The header is sticky on phones only. It is set on the component host in `header.ts`:

```ts
host: { class: 'sticky top-0 z-40 block md:static', … }
```

## 6. How category navigation changes

`category-list.html` is always one horizontal `<ul>`:

```html
<ul #scroller class="no-scrollbar flex items-stretch overflow-x-auto …" (scroll)="update()">
```

* `overflow-x-auto` lets the row scroll sideways **inside itself**, so the page never scrolls sideways.
* `no-scrollbar` (a small utility in `styles.css`) hides the ugly scrollbar.
* On tablet+ two arrow buttons (`hidden md:grid`) appear **only if there is more to scroll**.
  `category-list.ts` uses a `ResizeObserver` and two signals (`canLeft`, `canRight`) to decide.
* On phones the same categories are also listed in the ☰ drawer.

## 7. How product grids change column count

`product-section.ts` picks the class string; `product-section.html` applies it.

```ts
// "listing" cards (Recommended Products)
'grid-cols-2 gap-y-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 xl:gap-x-8 xl:gap-y-16'
// "feature" cards (filtered category results)
'grid-cols-1 gap-y-[18px] min-[480px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-6'
```

| Width | Recommended grid | Feature grid (only if a feature-style section is set to `layout: 'grid'`) |
|---|---:|---:|
| 360 – 479 | 2 | 1 |
| 480 – 767 | 2 | 2 |
| 768 – 1023 | 3 | 3 |
| 1024 – 1279 | 4 | 3 |
| ≥ 1280 | 6 | 6 |

Horizontal scrollers (e.g. "Suggested For You") keep a fixed card width
(`w-[238px]`) and scroll sideways with `snap-x` so cards stop neatly.

## 8. How promotional banners resize

In `promotional-banner.html` each slide's width and height change with the breakpoint:

```html
<li class="relative flex h-[210px] w-[88%] shrink-0 snap-start overflow-hidden rounded-2xl
           sm:h-[250px] sm:w-[calc((100%-18px)/2)]
           lg:h-[268px] lg:w-[calc((100%-36px)/3)]">
```

* `w-[88%]` – on a phone the slide is 88 % wide, so the next banner peeks in.
* `sm:w-[calc((100%-18px)/2)]` – exactly two slides fit (18 px = the gap).
* `lg:w-[calc((100%-36px)/3)]` – exactly three slides fit (2 gaps × 18 px).
* The text uses `text-[22px] sm:text-[26px] lg:text-[28px]`, so headlines scale too.
* The picture is `absolute … h-full w-auto object-cover`, so it always fills the slide height
  without squashing.
* Carousel behaviour is plain CSS scroll-snapping (`snap-x snap-mandatory`) – swipe on touch,
  arrow buttons on tablet+, dots below. It **auto-advances every 5 s** and pauses while you
  hover/focus it or if your device is set to "reduce motion".
* "Shop now" opens the matching category (the `category` field of each banner in `home-data.ts`).

---

## 9. Testing with Chrome DevTools

1. Run `npm start` and open `http://localhost:4200`.
2. Press **F12** (or `Ctrl/Cmd + Shift + I`).
3. Click the **device toolbar** icon (📱) or press `Ctrl/Cmd + Shift + M`.
4. In the dropdown choose **Responsive**, then type a size in the width/height boxes:
   `360×800`, `390×844`, `430×932`, `768×1024`, `820×1180`, `1024×768`, `1280×720`, `1440×900`, `1920×1080`.
   You can also drag the edge of the preview to watch the layout change at 640 / 768 / 1024 / 1280 px.
5. Check, at each size:
   * no horizontal scrollbar at the bottom of the page;
   * header items do not overlap;
   * banners look un-stretched; product images are not broken;
   * the **Console** tab shows no red errors.
6. On phone sizes tap ☰, pick a category and confirm the drawer closes.

Tip: the **Rotate** button in the device toolbar swaps width and height – handy for 1024×768 vs 768×1024.

---

## 10. Adding to the project later – quick rules

* Write the **phone** layout first with no prefixes, then add `md:` / `lg:` / `xl:` only for what changes.
* Avoid fixed widths like `w-[500px]`; use `w-full`, `max-w-*`, `flex-1` or percentages.
* Wide rows (categories, scrollers) should scroll **inside** their own `overflow-x-auto` container.
* Images: give the box an `aspect-*` or fixed height, then use `object-cover` (fill) or `object-contain` (never crop).
* All image paths are listed once in `src/app/core/constants/image-assets.ts` and start with
  `/images/…` (the `public/` folder is served at the site root).


## Product images in the responsive grids
- Every product picture uses `object-contain`, so it is always shown whole (no crop, no stretch) at every width.
- Image boxes keep a fixed ratio (3:4 in listing cards, 184 px tall in feature cards), so cards line up in
  2 / 3 / 4 / 6 columns from mobile to desktop.
- Verified at 360×800, 375×812, 390×844, 430×932, 768×1024, 820×1180, 1024×768, 1280×720, 1366×768,
  1440×900 and 1920×1080: no horizontal page scroll, no broken images, no overlapping text.
