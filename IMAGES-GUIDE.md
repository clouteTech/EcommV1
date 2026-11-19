# Product images – where they are and how to add the photographs

## Rule: product pictures are real photographs only
No drawings, vectors or illustrations are used for products. A product whose photograph has not been added yet shows a neutral
**"Photo coming soon"** picture (`public/images/placeholder-product.png`) – never a cartoon and never a broken-image icon.

## Folder structure
```
public/images/
├── banners/            promotional banners
├── icons/              category icons (kept as icons)
├── placeholder-product.png    "Photo coming soon" picture
├── payments.png
└── products/
    ├── electronics/  appliances/  mobiles/  fashion/  home/  beauty/
    └── sports/  toys/  food/  furniture/  books/  automotive/
```
Angular serves `public/` at the site root, so the browser path is `/images/products/electronics/laptop.jpg`.

## Status
- **18 real photographs are in place** (kept from the original project).
- **73 photographs are still needed.** The exact file names are listed in `PRODUCT_IMAGE_VERIFICATION.md`
  under "Pending photographs" (tick-list), e.g. `public/images/products/appliances/pressure-cooker.jpg`.

## How to add a photograph (3 steps)
1. Save the photo (white or light-grey studio background, product centred, 800×800 px or larger) with the **exact file name and folder** from the list.
2. Run `npm run images:sync` – it checks the files, rewrites `src/app/core/constants/pending-images.ts` and refreshes `PRODUCT_IMAGE_VERIFICATION.md`.
3. Restart `ng serve` (new files in `public/` need a restart) – the product now shows its photo everywhere (home, categories, search, quick view, cart).

If your photo is a `.png` or `.webp`, either save it as `.jpg`, or change the extension in that one line of
`src/app/core/constants/image-assets.ts`, then run `npm run images:sync`.

## Where paths are set
- **`src/app/core/constants/image-assets.ts`** – ONE place for every path (`IMAGES.products.laptop` → `/images/products/electronics/laptop.jpg`).
- **`src/app/features/home/data/catalog/*.ts`** – each product uses `image: I.<key>` (one picture per product, never shared).
- **`src/app/core/utils/product-image.ts`** – picks the photo, or the placeholder while the photo is pending. Used by cards, quick view and cart.
- **`src/app/shared/directives/img-fallback.ts`** – if a file ever fails to load, swaps in the placeholder once.

## Checks
- `npm run check:assets` – every referenced file exists (exact upper/lower-case), is a valid PNG/JPEG, and no product shares a picture.
- `npm run images:sync` – same, plus refreshes the pending list and the verification report.
