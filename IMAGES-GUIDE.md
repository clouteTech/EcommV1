# Where the images are and how to change them

## 1. The image files
All pictures are in the project folder **`public/images/`**:

```
public/
└── images/
    ├── banners/     beauty.png  scent.png  grocery.png  (+ .svg versions)
    ├── icons/       for-you.png fashion.png mobiles.png electronics.png beauty.png home.png
    │                appliances.png toys.png food.png auto.png sports.png furniture.png
    │                books.png wheelers.png  (+ .svg versions)
    ├── products/    sug-*.png (Suggested For You photos), watch-rose.png, satchel.png,
    │                soundbar.png, phone.png, football.png ... (+ .svg illustrations)
    └── payments.png footer payment-cards strip
```
Angular serves `public/` at the site root, so in the browser the path is
`/images/...` (never write `public` in a path).

## 2. The ONE file where image paths are set
**`src/app/core/constants/image-assets.ts`**

```ts
IMAGES.icons.fashion              -> '/images/icons/fashion.png'
IMAGES.banners.beauty             -> '/images/banners/beauty.png'
IMAGES.products.watchRose         -> '/images/products/watch-rose.png'
IMAGES.payments                   -> '/images/payments.png'
```
- Replace a picture: overwrite the file in `public/images/...` using the SAME file name.
- Use a different file: change the path string for that key in `image-assets.ts`.
- Add a new picture: copy it into the right folder, add one line in `image-assets.ts`.

## 3. Where the keys are used
- Categories, banners, products: `src/app/features/home/data/home-data.ts`
  (e.g. `icon: IMAGES.icons.fashion`, `image: IMAGES.banners.beauty`, `IMAGES.products.soundbar`)
- Footer payment strip: `src/app/shared/components/footer/footer.ts`
- Empty-state icon: `src/app/features/home/home.ts` and `src/app/features/cart/cart.ts`
- The components `category-list`, `promotional-banner`, `product-card`, `product-section`
  only display the path they receive – they contain no hard-coded image paths.

Keys ending in `Svg` are drawn illustrations; all other product keys are photos (PNG).
