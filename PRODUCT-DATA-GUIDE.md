# Product data, categories and search

## Where products live
```
src/app/features/home/data/
├── catalog/
│   ├── fashion.ts  mobiles.ts  electronics.ts  beauty.ts  home.ts  appliances.ts  toys.ts
│   ├── food.ts  auto.ts  sports.ts  furniture.ts  books.ts  wheelers.ts   (one array per category)
│   ├── index.ts           PRODUCT_CATALOG (all products, once) + productById()
│   └── catalog.spec.ts    automated data checks (npm test)
└── home-data.ts           CATEGORIES, BANNERS, and the two home sections (they only list product ids)
```

## Rules for every product
- `id` is a unique, stable slug such as `elec-boat-rockerz-450`. Never renumber or reuse ids (the cart uses them).
- `category` is one of the 13 shopping categories. A product belongs to exactly one category.
- `image` is its own photograph (see IMAGES-GUIDE.md). Different products never share a picture.
- `bg` is the tint behind the picture; set it to the photo's background colour.
- `keywords` are extra search words (synonyms such as `smartwatch`, `earphones`, `kurti`).
- Home sections ("Suggested For You", "Recommended Products") list product **ids** in `home-data.ts`;
  they never hold copies of products, so a product can not appear twice by accident.

## How filtering works (`src/app/core/utils/product-search.ts`)
- **Category tab** → only that category's products. "For You" shows the home page.
- **Search** → searches the whole catalogue. Every typed word must match the brand, name, category or keywords
  (plurals are understood: "watches" finds watch). Name matches are ranked first.
- Results are de-duplicated by id and the "N items found" counter is the length of the displayed list.

## Adding a product
1. Put its photo in `public/images/products/<category>/` and add one line to `image-assets.ts`.
2. Add one object to the right file in `catalog/` with a new unique `id`.
3. Run `npm run images:sync` and `npm test`.
