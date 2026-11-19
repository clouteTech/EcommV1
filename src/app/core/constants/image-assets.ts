/**
 * ONE place for every image path used by the app.
 *
 * - The image files live in:  public/images/   (banners/, icons/, products/)
 * - Angular serves the `public` folder at the site root, so the browser path
 *   starts with /images/...  (never write "public" in the path).
 * - To change an image: replace the file inside public/images/ (same name),
 *   or point the entry below at a different file name.
 * - All pictures are PNG files.
 */
export const IMAGES = {
  /** Category row icons – public/images/icons/ */
  icons: {
    appliances: '/images/icons/appliances.png',
    auto: '/images/icons/auto.png',
    beauty: '/images/icons/beauty.png',
    books: '/images/icons/books.png',
    electronics: '/images/icons/electronics.png',
    fashion: '/images/icons/fashion.png',
    food: '/images/icons/food.png',
    forYou: '/images/icons/for-you.png',
    furniture: '/images/icons/furniture.png',
    home: '/images/icons/home.png',
    mobiles: '/images/icons/mobiles.png',
    sports: '/images/icons/sports.png',
    toys: '/images/icons/toys.png',
    wheelers: '/images/icons/wheelers.png',
  },

  /** Promotional banner pictures – public/images/banners/ */
  banners: {
    beauty: '/images/banners/beauty.png',
    grocery: '/images/banners/grocery.png',
    scent: '/images/banners/scent.png',
    electronics: '/images/banners/electronics.png',
    fashion: '/images/banners/fashion.png',
  },

  /**
   * Product photographs – public/images/products/<category>/
   * One file per product. Files that do not exist yet are listed in `pending-images.ts`; their cards show the
   * neutral "Photo coming soon" picture until you drop the photo in (same file name) and run `npm run images:sync`.
   */
  products: {
    /** public/images/products/electronics/ */
    wirelessHeadphones: '/images/products/electronics/wireless-headphones.png',
    smartwatch: '/images/products/electronics/smartwatch.png',
    soundbar: '/images/products/electronics/soundbar.png',
    soundbarSubwoofer: '/images/products/electronics/soundbar-subwoofer.jpg',
    laptop: '/images/products/electronics/laptop.jpg',
    camera: '/images/products/electronics/camera.jpg',
    overEarHeadphones: '/images/products/electronics/over-ear-headphones.jpg',
    roundSmartwatch: '/images/products/electronics/round-smartwatch.jpg',
    earbuds: '/images/products/electronics/earbuds.jpg',
    bluetoothSpeaker: '/images/products/electronics/bluetooth-speaker.jpg',
    powerBank: '/images/products/electronics/power-bank.jpg',
    /** public/images/products/mobiles/ */
    aiPlusPulsePhone: '/images/products/mobiles/ai-plus-pulse-phone.png',
    redmiPhone: '/images/products/mobiles/redmi-phone.jpg',
    realmePhone: '/images/products/mobiles/realme-phone.jpg',
    pocoPhone: '/images/products/mobiles/poco-phone.jpg',
    motorolaPhone: '/images/products/mobiles/motorola-phone.jpg',
    infinixPhone: '/images/products/mobiles/infinix-phone.jpg',
    samsungPhone: '/images/products/mobiles/samsung-phone.jpg',
    /** public/images/products/fashion/ */
    watchRose: '/images/products/fashion/watch-rose.png',
    watchWhite: '/images/products/fashion/watch-white.png',
    handbagWhite: '/images/products/fashion/handbag-white.png',
    toteBag: '/images/products/fashion/tote-bag.jpg',
    sunglasses: '/images/products/fashion/sunglasses.png',
    tshirt: '/images/products/fashion/tshirt.jpg',
    sneakers: '/images/products/fashion/sneakers.png',
    jeans: '/images/products/fashion/jeans.jpg',
    kurta: '/images/products/fashion/kurta.jpg',
    sandals: '/images/products/fashion/sandals.jpg',
    /** public/images/products/beauty/ */
    perfume: '/images/products/beauty/perfume.png',
    skincareKit: '/images/products/beauty/skincare-kit.png',
    washBag: '/images/products/beauty/wash-bag.png',
    lipstick: '/images/products/beauty/lipstick.jpg',
    faceWash: '/images/products/beauty/face-wash.jpg',
    sunscreen: '/images/products/beauty/sunscreen.jpg',
    shampoo: '/images/products/beauty/shampoo.jpg',
    /** public/images/products/home/ */
    plateRack: '/images/products/home/plate-rack.png',
    spiceShelf: '/images/products/home/spice-shelf.png',
    coupleMugs: '/images/products/home/couple-mugs.png',
    kitchenTrolley: '/images/products/home/kitchen-trolley.png',
    wallClock: '/images/products/home/wall-clock.jpg',
    tableLamp: '/images/products/home/table-lamp.jpg',
    planter: '/images/products/home/planter.jpg',
    /** public/images/products/appliances/ */
    pressureCooker: '/images/products/appliances/pressure-cooker.jpg',
    electricKettle: '/images/products/appliances/electric-kettle.jpg',
    mixerGrinder: '/images/products/appliances/mixer-grinder.jpg',
    steamIron: '/images/products/appliances/steam-iron.jpg',
    airFryer: '/images/products/appliances/air-fryer.jpg',
    ceilingFan: '/images/products/appliances/ceiling-fan.jpg',
    microwave: '/images/products/appliances/microwave.jpg',
    /** public/images/products/toys/ */
    remoteControlRobot: '/images/products/toys/remote-control-robot.jpg',
    buildingBlocks: '/images/products/toys/building-blocks.jpg',
    teddyBear: '/images/products/toys/teddy-bear.jpg',
    rcCar: '/images/products/toys/rc-car.jpg',
    crayons: '/images/products/toys/crayons.jpg',
    /** public/images/products/food/ */
    groceryBag: '/images/products/food/grocery-bag.png',
    snackHamper: '/images/products/food/snack-hamper.jpg',
    healthyMunch: '/images/products/food/healthy-munch.jpg',
    honey: '/images/products/food/honey.jpg',
    basmatiRice: '/images/products/food/basmati-rice.jpg',
    oliveOil: '/images/products/food/olive-oil.jpg',
    tea: '/images/products/food/tea.jpg',
    /** public/images/products/automotive/ */
    carPhoneHolder: '/images/products/automotive/car-phone-holder.jpg',
    dashCam: '/images/products/automotive/dash-cam.jpg',
    tyreInflator: '/images/products/automotive/tyre-inflator.jpg',
    steeringWheelCover: '/images/products/automotive/steering-wheel-cover.jpg',
    carVacuum: '/images/products/automotive/car-vacuum.jpg',
    carAirFreshener: '/images/products/automotive/car-air-freshener.jpg',
    motorcycle: '/images/products/automotive/motorcycle.jpg',
    electricScooter: '/images/products/automotive/electric-scooter.jpg',
    helmet: '/images/products/automotive/helmet.jpg',
    ridingGloves: '/images/products/automotive/riding-gloves.jpg',
    bikeCover: '/images/products/automotive/bike-cover.jpg',
    discBrakeLock: '/images/products/automotive/disc-brake-lock.jpg',
    /** public/images/products/sports/ */
    football: '/images/products/sports/football.png',
    cricketBat: '/images/products/sports/cricket-bat.jpg',
    badmintonRacket: '/images/products/sports/badminton-racket.jpg',
    yogaMat: '/images/products/sports/yoga-mat.jpg',
    dumbbells: '/images/products/sports/dumbbells.jpg',
    sportsBottle: '/images/products/sports/sports-bottle.jpg',
    /** public/images/products/furniture/ */
    bookcase: '/images/products/furniture/bookcase.jpg',
    studyDesk: '/images/products/furniture/study-desk.jpg',
    officeChair: '/images/products/furniture/office-chair.jpg',
    sofa: '/images/products/furniture/sofa.jpg',
    bed: '/images/products/furniture/bed.jpg',
    coffeeTable: '/images/products/furniture/coffee-table.jpg',
    /** public/images/products/books/ */
    novel: '/images/products/books/novel.jpg',
    webDevelopment: '/images/products/books/web-development.jpg',
    indianCooking: '/images/products/books/indian-cooking.jpg',
    historyOfIndia: '/images/products/books/history-of-india.jpg',
    moneyHabits: '/images/products/books/money-habits.jpg',
    kidsStories: '/images/products/books/kids-stories.jpg',
  },

  /** Shown automatically when a product picture fails to load – public/images/placeholder-product.png */
  fallback: '/images/placeholder-product.png',

  /** Footer payment-methods strip – public/images/payments.png */
  payments: '/images/payments.png',
} as const;
