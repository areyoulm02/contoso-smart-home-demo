export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  brand: string;
  description: string;
  slug: string;
  manual: string;
  images: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "TrailMaster X4 Tent",
    price: 250.0,
    category: "Tents",
    brand: "OutdoorLiving",
    description:
      "Unveiling the TrailMaster X4 Tent from OutdoorLiving, your home away from home for your next camping adventure. Crafted from durable polyester, this tent boasts a spacious interior perfect for four occupants. It ensures your dryness under drizzly skies thanks to its water-resistant construction, and the accompanying rainfly adds an extra layer of weather protection. It offers refreshing airflow and bug defence, courtesy of its mesh panels. Accessibility is not an issue with its multiple doors and interior pockets that keep small items tidy. Reflective guy lines grant better visibility at night, and the freestanding design simplifies setup and relocation. With the included carry bag, transporting this convenient abode becomes a breeze. Be it an overnight getaway or a week-long nature escapade, the TrailMaster X4 Tent provides comfort, convenience, and concord with the great outdoors. Comes with a two-year limited warranty to ensure customer satisfaction.",
    slug: "trailmaster-x4-tent",
    manual: "/manuals/product_info_1.md",
    images: [
      "/images/1/image_1.jpg",
      "/images/1/image_2.jpg",
      "/images/1/image_3.jpg",
      "/images/1/image_4.jpg"
    ],
  },
  {
    id: 2,
    name: "Adventurer Pro Backpack",
    price: 90.0,
    category: "Backpacks",
    brand: "HikeMate",
    description:
      "Venture into the wilderness with the HikeMate's Adventurer Pro Backpack! Uniquely designed with ergonomic comfort in mind, this backpack ensures a steadfast journey no matter the mileage. It boasts a generous 40L capacity wrapped up in durable nylon fabric ensuring its long-lasting performance on even the most rugged pursuits. It's meticulously fashioned with multiple compartments and pockets for organized storage, hydration system compatibility, and adjustable padded shoulder straps all in a lightweight construction. The added features of a sternum strap and hip belt enhance stability without compromising on comfort. The Adventurer Pro Backpack also prioritizes your safety with its reflective accents for when night falls. This buoyant beauty does more than carry your essentials; it carries the promise of a stress-free adventure!",
    slug: "adventurer-pro-backpack",
    manual: "/manuals/product_info_2.md",
    images: [
      "/images/2/image_1.jpg",
      "/images/2/image_2.jpg",
      "/images/2/image_3.jpg",
      "/images/2/image_4.jpg"
    ],
  },
  {
    id: 3,
    name: "Summit Breeze Jacket",
    price: 120.0,
    category: "Hiking Clothing",
    brand: "MountainStyle",
    description:
      "Discover the joy of hiking with MountainStyle's Summit Breeze Jacket. This lightweight jacket is your perfect companion for outdoor adventures. Sporting a trail-ready, windproof design and a water-resistant fabric, it's ready to withstand any weather. The breathable polyester material and adjustable cuffs keep you comfortable, whether you're ascending a mountain or strolling through a park. And its sleek black color adds style to function. The jacket features a full-zip front closure, adjustable hood, and secure zippered pockets. Experience the comfort of its inner lining and the convenience of its packable design. Crafted for night trekkers too, the jacket has reflective accents for enhanced visibility. Rugged yet chic, the Summit Breeze Jacket is more than a hiking essential, it's the gear that inspires you to reach new heights. Choose adventure, choose the Summit Breeze Jacket.",
    slug: "summit-breeze-jacket",
    manual: "/manuals/product_info_3.md",
    images: [
      "/images/3/image_1.jpg",
      "/images/3/image_2.jpg",
      "/images/3/image_3.jpg",
      "/images/3/image_4.jpg"
    ],
  },
  {
    id: 4,
    name: "TrekReady Hiking Boots",
    price: 140.0,
    category: "Hiking Footwear",
    brand: "TrekReady",
    description:
      "Introducing the TrekReady Hiking Boots - stepping up your hiking game, one footprint at a time! Crafted from leather, these stylistic Trailmates are made to last. TrekReady infuses durability with its reinforced stitching and toe protection, making sure your journey is never stopped short. Comfort? They have that covered too! The boots are a haven with their breathable materials, cushioned insole, with padded collar and tongue; all nestled neatly within their lightweight design. As they say, it's what's inside that counts - so inside you'll find a moisture-wicking lining that quarantines stank and keeps your feet fresh as that mountaintop breeze. Remember the fear of slippery surfaces? With these boots, you can finally tell it to 'take a hike'! Their shock-absorbing midsoles and excellent traction capabilities promise stability at your every step. Beautifully finished in a traditional lace-up system, every adventurer deserves a pair of TrekReady Hiking Boots. Hike more, worry less!",
    slug: "trekready-hiking-boots",
    manual: "/manuals/product_info_4.md",
    images: [
      "/images/4/image_1.jpg",
      "/images/4/image_2.jpg",
      "/images/4/image_3.jpg",
      "/images/4/image_4.jpg"
    ],
  },
  {
    id: 5,
    name: "BaseCamp Folding Table",
    price: 60.0,
    category: "Camping Tables",
    brand: "CampBuddy",
    description:
      "CampBuddy's BaseCamp Folding Table is an adventurer's best friend. Lightweight yet powerful, the table is a testament to fun-meets-function and will elevate any outing to new heights. Crafted from resilient, rust-resistant aluminum, the table boasts a generously sized 48 x 24 inches tabletop, perfect for meal times, games and more. The foldable design is a godsend for on-the-go explorers. Adjustable legs rise to the occasion to conquer uneven terrains and offer height versatility, while the built-in handle simplifies transportation. Additional features like non-slip feet, integrated cup holders and mesh pockets add a pinch of finesse. Quick to set up without the need for extra tools, this table is a silent yet indispensable sidekick during camping, picnics, and other outdoor events. Don't miss out on the opportunity to take your outdoor experiences to a new level with the BaseCamp Folding Table. Get yours today and embark on new adventures tomorrow! ",
    slug: "basecamp-folding-table",
    manual: "/manuals/product_info_5.md",
    images: [
      "/images/5/image_1.jpg",
      "/images/5/image_2.jpg",
      "/images/5/image_3.jpg",
      "/images/5/image_4.jpg"
    ],
  },
  {
    id: 6,
    name: "EcoFire Camping Stove",
    price: 80.0,
    category: "Camping Stoves",
    brand: "EcoFire",
    description:
      "Introducing EcoFire's Camping Stove, your ultimate companion for every outdoor adventure! This portable wonder is precision-engineered with a lightweight and compact design, perfect for capturing that spirit of wanderlust. Made from high-quality stainless steel, it promises durability and steadfast performance. This stove is not only fuel-efficient but also offers an easy, intuitive operation that ensures hassle-free cooking. Plus, it's flexible, accommodating a variety of cooking methods whether you're boiling, grilling, or simmering under the starry sky. Its stable construction, quick setup, and adjustable flame control make cooking a breeze, while safety features protect you from any potential mishaps. And did we mention it also includes an effective wind protector and a carry case for easy transportation? But that's not all! The EcoFire Camping Stove is eco-friendly, designed to minimize environmental impact. So get ready to enhance your camping experience and enjoy delicious outdoor feasts with this unique, versatile stove!",
    slug: "ecofire-camping-stove",
    manual: "/manuals/product_info_6.md",
    images: [
      "/images/6/image_1.jpg",
      "/images/6/image_2.jpg",
      "/images/6/image_3.jpg",
      "/images/6/image_4.jpg"
    ],
  },
  {
    id: 7,
    name: "CozyNights Sleeping Bag",
    price: 100.0,
    category: "Sleeping Bags",
    brand: "CozyNights",
    description:
      "Embrace the great outdoors in any season with the lightweight CozyNights Sleeping Bag! This durable three-season bag is superbly designed to give hikers, campers, and backpackers comfort and warmth during spring, summer, and fall. With a compact design that folds down into a convenient stuff sack, you can whisk it away on any adventure without a hitch. The sleeping bag takes comfort seriously, featuring a handy hood, ample room and padding, and a reliable temperature rating. Crafted from high-quality polyester, it ensures long-lasting use and can even be zipped together with another bag for shared comfort. Whether you're gazing at stars or catching a quick nap between trails, the CozyNights Sleeping Bag makes it a treat. Don't just sleep\u2014 dream with CozyNights.",
    slug: "cozynights-sleeping-bag",
    manual: "/manuals/product_info_7.md",
    images: [
      "/images/7/image_1.jpg",
      "/images/7/image_2.jpg",
      "/images/7/image_3.jpg",
      "/images/7/image_4.jpg"
    ],
  },
  {
    id: 8,
    name: "Alpine Explorer Tent",
    price: 350.0,
    category: "Tents",
    brand: "AlpineGear",
    description:
      "Welcome to the joy of camping with the Alpine Explorer Tent! This robust, 8-person, 3-season marvel is from the responsible hands of the AlpineGear brand. Promising an enviable setup that is as straightforward as counting sheep, your camping experience is transformed into a breezy pastime. Looking for privacy? The detachable divider provides separate spaces at a moment's notice. Love a tent that breathes? The numerous mesh windows and adjustable vents fend off any condensation dragon trying to dampen your adventure fun. The waterproof assurance keeps you worry-free during unexpected rain dances. With a built-in gear loft to stash away your outdoor essentials, the Alpine Explorer Tent emerges as a smooth balance of privacy, comfort, and convenience. Simply put, this tent isn't just a shelter - it's your second home in the heart of nature! Whether you're a seasoned camper or a nature-loving novice, this tent makes exploring the outdoors a joyous journey.",
    slug: "alpine-explorer-tent",
    manual: "/manuals/product_info_8.md",
    images: [
      "/images/8/image_1.jpg",
      "/images/8/image_2.jpg",
      "/images/8/image_3.jpg",
      "/images/8/image_4.jpg"
    ],
  },
  {
    id: 9,
    name: "SummitClimber Backpack",
    price: 120.0,
    category: "Backpacks",
    brand: "HikeMate",
    description:
      "Adventure waits for no one! Introducing the HikeMate SummitClimber Backpack, your reliable partner for every exhilarating journey. With a generous 60-liter capacity and multiple compartments and pockets, packing is a breeze. Every feature points to comfort and convenience; the ergonomic design and adjustable hip belt ensure a pleasantly personalized fit, while padded shoulder straps protect you from the burden of carrying. Venturing into wet weather? Fear not! The integrated rain cover has your back, literally. Stay hydrated thanks to the backpack's hydration system compatibility. Travelling during twilight? Reflective accents keep you visible in low-light conditions. The SummitClimber Backpack isn't merely a carrier; it's a wearable base camp constructed from ruggedly durable nylon and thoughtfully designed for the great outdoors adventurer, promising to withstand tough conditions and provide years of service. So, set off on that quest - the wild beckons! The SummitClimber Backpack - your hearty companion on every expedition!",
    slug: "summitclimber-backpack",
    manual: "/manuals/product_info_9.md",
    images: [
      "/images/9/image_1.jpg",
      "/images/9/image_2.jpg",
      "/images/9/image_3.jpg",
      "/images/9/image_4.jpg"
    ],
  },
  {
    id: 10,
    name: "TrailBlaze Hiking Pants",
    price: 75.0,
    category: "Hiking Clothing",
    brand: "MountainStyle",
    description:
      "Meet the TrailBlaze Hiking Pants from MountainStyle, the stylish khaki champions of the trails. These are not just pants; they're your passport to outdoor adventure. Crafted from high-quality nylon fabric, these dapper troopers are lightweight and fast-drying, with a water-resistant armor that laughs off light rain. Their breathable design whisks away sweat while their articulated knees grant you the flexibility of a mountain goat. Zippered pockets guard your essentials, making them a hiker's best ally. Designed with durability for all your trekking trials, these pants come with a comfortable, ergonomic fit that will make you forget you're wearing them. Sneak a peek, and you are sure to be tempted by the sleek allure that is the TrailBlaze Hiking Pants. Your outdoors wardrobe wouldn't be quite complete without them.",
    slug: "trailblaze-hiking-pants",
    manual: "/manuals/product_info_10.md",
    images: [
      "/images/10/image_1.jpg",
      "/images/10/image_2.jpg",
      "/images/10/image_3.jpg",
      "/images/10/image_4.jpg"
    ],
  },
  {
    id: 11,
    name: "TrailWalker Hiking Shoes",
    price: 110.0,
    category: "Hiking Footwear",
    brand: "TrekReady",
    description:
      "Meet the TrekReady TrailWalker Hiking Shoes, the ideal companion for all your outdoor adventures. Constructed with synthetic leather and breathable mesh, these shoes are tough as nails yet surprisingly airy. Their cushioned insoles offer fabulous comfort for long hikes, while the supportive midsoles and traction outsoles with multidirectional lugs ensure stability and excellent grip. A quick-lace system, padded collar and tongue, and reflective accents make these shoes a dream to wear. From combating rough terrain with the reinforced toe cap and heel, to keeping off trail debris with the protective mudguard, the TrailWalker Hiking Shoes have you covered. These waterproof warriors are made to endure all weather conditions. But they're not just about being rugged, they're light as a feather too, minimizing fatigue during epic hikes. Each pair can be customized for a perfect fit with removable insoles and availability in multiple sizes and widths. Navigate hikes comfortably and confidently with the TrailWalker Hiking Shoes. Adventure, here you come!",
    slug: "trailwalker-hiking-shoes",
    manual: "/manuals/product_info_11.md",
    images: [
      "/images/11/image_1.jpg",
      "/images/11/image_2.jpg",
      "/images/11/image_3.jpg",
      "/images/11/image_4.jpg"
    ],
  },
  {
    id: 12,
    name: "TrekMaster Camping Chair",
    price: 50.0,
    category: "Camping Tables",
    brand: "CampBuddy",
    description:
      "Gravitate towards comfort with the TrekMaster Camping Chair from CampBuddy. This trusty outdoor companion boasts sturdy construction using high-quality materials that promise durability and enjoyment for seasons to come. Impeccably lightweight and portable, it's designed to be your go-to seat whether you're camping, at a picnic, cheering at a sporting event, or simply relishing in your backyard pleasures. Beyond its foldable design ensuring compact storage and easy transportation, its ergonomic magic is in the details. An adjustable recline, padded seat and backrest, integrated cup holder, and side pockets ensure the greatest outdoor comfort. Weather resistant, easy to clean, and capable of supporting diverse body types, this versatile chair also comes with a carry bag, ready for your next adventure.",
    slug: "trekmaster-camping-chair",
    manual: "/manuals/product_info_12.md",
    images: [
      "/images/12/image_1.jpg",
      "/images/12/image_2.jpg",
      "/images/12/image_3.jpg",
      "/images/12/image_4.jpg"
    ],
  },
  {
    id: 13,
    name: "PowerBurner Camping Stove",
    price: 100.0,
    category: "Camping Stoves",
    brand: "PowerBurner",
    description:
      "Unleash your inner explorer with the PowerBurner Dual Burner Camping Stove. It's designed for the adventurous heart, with sturdy construction and a high heat output that makes boiling and cooking a breeze. This stove isn't just about strength\u2014it's got finesse too. With adjustable flame control, you can simmer, saut\u00e9, or sizzle with absolute precision. Its compact design and integrated carrying handle make transportation effortless. Moreover, it's crafted to defy the elements, boasting a wind-resistant exterior and piezo ignition system for quick, reliable starts. And when the cooking's done, its removable grates make cleanup swift and easy. Rugged, versatile and reliable, the PowerBurner marks a perfect blend of practicality and performance. So, why wait? Let's turn up the heat on your outdoor culinary adventures today.",
    slug: "powerburner-camping-stove",
    manual: "/manuals/product_info_13.md",
    images: [
      "/images/13/image_1.jpg",
      "/images/13/image_2.jpg",
      "/images/13/image_3.jpg",
      "/images/13/image_4.jpg"
    ],
  },
  {
    id: 14,
    name: "MountainDream Sleeping Bag",
    price: 130.0,
    category: "Sleeping Bags",
    brand: "MountainDream",
    description:
      "Meet the MountainDream Sleeping Bag: your new must-have companion for every outdoor adventure. Designed to handle 3-season camping with ease, it comes equipped with a premium synthetic insulation that will keep you cozy even when temperatures fall down to 15\u00b0F! Sporting a durable water-resistant nylon shell and soft breathable polyester lining, this bag doesn't sacrifice comfort for toughness. The star of the show is the contoured mummy shape that not only provides optimal heat retention but also cuts down on the weight. A smooth, snag-free YKK zipper with a unique anti-snag design allows for hassle-free operation, while the adjustable hood and full-length zipper baffle work together to ensure you stay warm all night long. Need to bring along some essentials? Not to worry! There's an interior pocket just for that. And when it's time to pack up? Just slip it into the included compression sack for easy storage and transport. Whether you're a backpacking pro or a camping novice, the MountainDream Sleeping Bag is the perfect blend of durability, warmth, and comfort that you've been looking for.",
    slug: "mountaindream-sleeping-bag",
    manual: "/manuals/product_info_14.md",
    images: [
      "/images/14/image_1.jpg",
      "/images/14/image_2.jpg",
      "/images/14/image_3.jpg",
      "/images/14/image_4.jpg"
    ],
  },
  {
    id: 15,
    name: "SkyView 2-Person Tent",
    price: 200.0,
    category: "Tents",
    brand: "OutdoorLiving",
    description:
      "Introducing the OutdoorLiving SkyView 2-Person Tent, a perfect companion for your camping and hiking adventures. This tent offers a spacious interior that houses two people comfortably, with room to spare. Crafted from durable waterproof materials to shield you from the elements, it is the fortress you need in the wild. Setup is a breeze thanks to its intuitive design and color-coded poles, while two large doors allow for easy access. Stay organized with interior pockets, and store additional gear in its two vestibules. The tent also features mesh panels for effective ventilation, and it comes with a rainfly for extra weather protection. Light enough for on-the-go adventurers, it packs compactly into a carrying bag for seamless transportation. Reflective guy lines ensure visibility at night for added safety, and the tent stands freely for versatile placement. Experience the reliability of double-stitched seams that guarantee increased durability, and rest easy under the stars with OutdoorLiving's SkyView 2-Person Tent. It's not just a tent; it's your home away from home.",
    slug: "skyview-2-person-tent",
    manual: "/manuals/product_info_15.md",
    images: [
      "/images/15/image_1.jpg",
      "/images/15/image_2.jpg",
      "/images/15/image_3.jpg",
      "/images/15/image_4.jpg"
    ],
  },
  {
    id: 16,
    name: "TrailLite Daypack",
    price: 60.0,
    category: "Backpacks",
    brand: "HikeMate",
    description:
      "Step up your hiking game with HikeMate's TrailLite Daypack. Built for comfort and efficiency, this lightweight and durable backpack offers a spacious main compartment, multiple pockets, and organization-friendly features all in one sleek package. The adjustable shoulder straps and padded back panel ensure optimal comfort during those long exhilarating treks. Course through nature without worry as the daypack's water-resistant fabric protects your essentials from unexpected showers. Plus, never run dry with the integrated hydration system. And did we mention it comes in a plethora of colors and designs? So you can choose one that truly speaks to your outdoorsy soul! Keeping your visibility in mind, we've added reflective accents that light up in low-light conditions. Don't just carry a backpack, adorn a companion that takes you a step ahead in your adventures. Trust the TrailLite Daypack for a hassle-free, enjoyable hiking experience.",
    slug: "traillite-daypack",
    manual: "/manuals/product_info_16.md",
    images: [
      "/images/16/image_1.jpg",
      "/images/16/image_2.jpg",
      "/images/16/image_3.jpg",
      "/images/16/image_4.jpg"
    ],
  },
  {
    id: 17,
    name: "RainGuard Hiking Jacket",
    price: 110.0,
    category: "Hiking Clothing",
    brand: "MountainStyle",
    description:
      "Introducing the MountainStyle RainGuard Hiking Jacket - the ultimate solution for weatherproof comfort during your outdoor undertakings! Designed with waterproof, breathable fabric, this jacket promises an outdoor experience that's as dry as it is comfortable. The rugged construction assures durability, while the adjustable hood provides a customizable fit against wind and rain. Featuring multiple pockets for safe, convenient storage and adjustable cuffs and hem, you can tailor the jacket to suit your needs on-the-go. And, don't worry about overheating during intense activities - it's equipped with ventilation zippers for increased airflow. Reflective details ensure visibility even during low-light conditions, making it perfect for evening treks. With its lightweight, packable design, carrying it inside your backpack requires minimal effort. With options for men and women, the RainGuard Hiking Jacket is perfect for hiking, camping, trekking and countless other outdoor adventures. Don't let the weather stand in your way - embrace the outdoors with MountainStyle RainGuard Hiking Jacket!",
    slug: "rainguard-hiking-jacket",
    manual: "/manuals/product_info_17.md",
    images: [
      "/images/17/image_1.jpg",
      "/images/17/image_2.jpg",
      "/images/17/image_3.jpg",
      "/images/17/image_4.jpg"
    ],
  },
  {
    id: 18,
    name: "TrekStar Hiking Sandals",
    price: 70.0,
    category: "Hiking Footwear",
    brand: "TrekReady",
    description:
      "Meet the TrekStar Hiking Sandals from TrekReady \u2013 the ultimate trail companion for your feet. Designed for comfort and durability, these lightweight sandals are perfect for those who prefer to see the world from a hiking trail. They feature adjustable straps for a snug, secure fit, perfect for adapting to the contours of your feet. With a breathable design, your feet will stay cool and dry, escaping the discomfort of sweaty hiking boots on long summer treks. The deep tread rubber outsole ensures excellent traction on any terrain, while the cushioned footbed promises enhanced comfort with every step. For those wild and unpredictable trails, the added toe protection and shock-absorbing midsole protect your feet from rocky surprises. Ingeniously, the removable insole makes for easy cleaning and maintenance, extending the lifespan of your sandals. Available in various sizes and a handsome brown color, the versatile TrekStar Hiking Sandals are just as comfortable on a casual walk in the park as they are navigating rocky slopes. Explore more with TrekReady!",
    slug: "trekstar-hiking-sandals",
    manual: "/manuals/product_info_18.md",
    images: [
      "/images/18/image_1.jpg",
      "/images/18/image_2.jpg",
      "/images/18/image_3.jpg",
      "/images/18/image_4.jpg"
    ],
  },
  {
    id: 19,
    name: "Adventure Dining Table",
    price: 90.0,
    category: "Camping Tables",
    brand: "CampBuddy",
    description:
      "Discover the joy of outdoor adventures with the CampBuddy Adventure Dining Table. This feature-packed camping essential brings both comfort and convenience to your memorable trips. Made from high-quality aluminum, it promises long-lasting performance, weather resistance, and easy maintenance - all key for the great outdoors! It's light, portable, and comes with adjustable height settings to suit various seating arrangements and the spacious surface comfortably accommodates meals, drinks, and other essentials. The sturdy yet lightweight frame holds food, dishes, and utensils with ease. When it's time to pack up, it fold and stows away with no fuss, ready for the next adventure!  Perfect for camping, picnics, barbecues, and beach outings - its versatility shines as brightly as the summer sun! Durable, sturdy and a breeze to set up, the Adventure Dining Table will be a loyal companion on every trip. Embark on your next adventure and make lifetime memories with CampBuddy. As with all good experiences, it'll leave you wanting more! ",
    slug: "adventure-dining-table",
    manual: "/manuals/product_info_19.md",
    images: [
      "/images/19/image_1.jpg",
      "/images/19/image_2.jpg",
      "/images/19/image_3.jpg",
      "/images/19/image_4.jpg"
    ],
  },
  {
    id: 20,
    name: "CompactCook Camping Stove",
    price: 60.0,
    category: "Camping Stoves",
    brand: "CompactCook",
    description:
      "Step into the great outdoors with the CompactCook Camping Stove, a convenient, lightweight companion perfect for all your culinary camping needs. Boasting a robust design built for harsh environments, you can whip up meals anytime, anywhere. Its wind-resistant and fuel-versatile features coupled with an efficient cooking performance, ensures you won't have to worry about the elements or helpless taste buds while on adventures. The easy ignition technology and adjustable flame control make cooking as easy as a walk in the park, while its compact, foldable design makes packing a breeze. Whether you're camping with family or hiking solo, this reliable, portable stove is an essential addition to your gear. With its sturdy construction and safety-focused design, the CompactCook Camping Stove is a step above the rest, providing durability, quality, and peace of mind. Be wild, be free, be cooked for with the CompactCook Camping Stove!",
    slug: "compactcook-camping-stove",
    manual: "/manuals/product_info_20.md",
    images: [
      "/images/20/image_1.jpg",
      "/images/20/image_2.jpg",
      "/images/20/image_3.jpg",
      "/images/20/image_4.jpg"
    ],
  },
];

export interface Category {
    name: string;
    slug: string;
    description: string;
    products: Product[];
};

export const categories: Category[] = [
  {
    name: "智能照明系统",
    slug: "tents",
    description:
      "点亮智慧生活，感受温暖氛围。Contoso智能照明系统不仅提供多种灯光模式，还能根据你的需求自动调节亮度和色温。无论是工作、休闲还是聚会，智能照明都能为你营造最适合的环境。通过手机或语音控制，轻松掌握每一盏灯的状态，让你的家居生活更加便捷和舒适。",
    products: [
      {
        id: 1,
        name: "光影魔法智能灯泡 A100",
        price: 250.0,
        category: "Tents",
        brand: "OutdoorLiving",
        description:
          "Unveiling the TrailMaster X4 Tent from OutdoorLiving, your home away from home for your next camping adventure. Crafted from durable polyester, this tent boasts a spacious interior perfect for four occupants. It ensures your dryness under drizzly skies thanks to its water-resistant construction, and the accompanying rainfly adds an extra layer of weather protection. It offers refreshing airflow and bug defence, courtesy of its mesh panels. Accessibility is not an issue with its multiple doors and interior pockets that keep small items tidy. Reflective guy lines grant better visibility at night, and the freestanding design simplifies setup and relocation. With the included carry bag, transporting this convenient abode becomes a breeze. Be it an overnight getaway or a week-long nature escapade, the TrailMaster X4 Tent provides comfort, convenience, and concord with the great outdoors. Comes with a two-year limited warranty to ensure customer satisfaction.",
        slug: "trailmaster-x4-tent",
        manual: "/manuals/product_info_8.md",
        images: [
          "/images/3/image_3.jpg",
          // "/images/1/image_2.jpg",
          // "/images/1/image_3.jpg",
          // "/images/1/image_4.jpg"
        ],
      },
      {
        id: 8,
        name: "幻彩调光器 B200",
        price: 350.0,
        category: "Tents",
        brand: "AlpineGear",
        description:
          "Welcome to the joy of camping with the Alpine Explorer Tent! This robust, 8-person, 3-season marvel is from the responsible hands of the AlpineGear brand. Promising an enviable setup that is as straightforward as counting sheep, your camping experience is transformed into a breezy pastime. Looking for privacy? The detachable divider provides separate spaces at a moment's notice. Love a tent that breathes? The numerous mesh windows and adjustable vents fend off any condensation dragon trying to dampen your adventure fun. The waterproof assurance keeps you worry-free during unexpected rain dances. With a built-in gear loft to stash away your outdoor essentials, the Alpine Explorer Tent emerges as a smooth balance of privacy, comfort, and convenience. Simply put, this tent isn't just a shelter - it's your second home in the heart of nature! Whether you're a seasoned camper or a nature-loving novice, this tent makes exploring the outdoors a joyous journey.",
        slug: "alpine-explorer-tent",
        manual: "/manuals/product_info_8.md",
        images: [
          "/images/3/image_2.jpg",
        ],
      },
      {
        id: 15,
        name: "智慧开关 C300",
        price: 200.0,
        category: "Tents",
        brand: "OutdoorLiving",
        description:
          "Introducing the OutdoorLiving SkyView 2-Person Tent, a perfect companion for your camping and hiking adventures. This tent offers a spacious interior that houses two people comfortably, with room to spare. Crafted from durable waterproof materials to shield you from the elements, it is the fortress you need in the wild. Setup is a breeze thanks to its intuitive design and color-coded poles, while two large doors allow for easy access. Stay organized with interior pockets, and store additional gear in its two vestibules. The tent also features mesh panels for effective ventilation, and it comes with a rainfly for extra weather protection. Light enough for on-the-go adventurers, it packs compactly into a carrying bag for seamless transportation. Reflective guy lines ensure visibility at night for added safety, and the tent stands freely for versatile placement. Experience the reliability of double-stitched seams that guarantee increased durability, and rest easy under the stars with OutdoorLiving's SkyView 2-Person Tent. It's not just a tent; it's your home away from home.",
        slug: "skyview-2-person-tent",
        manual: "/manuals/product_info_8.md",
        images: [
          "/images/3/image_1.jpg",
        ],
      },
    ],
  },
  {
    name: "智能安防系统",
    slug: "backpacks",
    description:
      "安心守护，从未如此简单。Contoso智能安防系统包括智能门锁、监控摄像头、烟雾探测器等多种设备，提供全方位的家庭安全保障。实时监控家中动态，异常情况及时报警，让你无论身处何地都能安心无忧。智能安防系统不仅保护你的财产，更守护你的家人安全。",
    products: [
      {
        id: 2,
        name: "守护者智能门锁 D400",
        price: 90.0,
        category: "Backpacks",
        brand: "HikeMate",
        description:
          "Venture into the wilderness with the HikeMate's Adventurer Pro Backpack! Uniquely designed with ergonomic comfort in mind, this backpack ensures a steadfast journey no matter the mileage. It boasts a generous 40L capacity wrapped up in durable nylon fabric ensuring its long-lasting performance on even the most rugged pursuits. It's meticulously fashioned with multiple compartments and pockets for organized storage, hydration system compatibility, and adjustable padded shoulder straps all in a lightweight construction. The added features of a sternum strap and hip belt enhance stability without compromising on comfort. The Adventurer Pro Backpack also prioritizes your safety with its reflective accents for when night falls. This buoyant beauty does more than carry your essentials; it carries the promise of a stress-free adventure!",
        slug: "adventurer-pro-backpack",
        manual: "/manuals/product_info_8.md",
        images: [
          "/images/2/image_1.jpg",
          "/images/2/image_2.jpg",
          "/images/2/image_3.jpg",
          "/images/2/image_4.jpg"
        ],
      },
      {
        id: 9,
        name: "鹰眼监控摄像头 E500",
        price: 120.0,
        category: "Backpacks",
        brand: "HikeMate",
        description:
          "Adventure waits for no one! Introducing the HikeMate SummitClimber Backpack, your reliable partner for every exhilarating journey. With a generous 60-liter capacity and multiple compartments and pockets, packing is a breeze. Every feature points to comfort and convenience; the ergonomic design and adjustable hip belt ensure a pleasantly personalized fit, while padded shoulder straps protect you from the burden of carrying. Venturing into wet weather? Fear not! The integrated rain cover has your back, literally. Stay hydrated thanks to the backpack's hydration system compatibility. Travelling during twilight? Reflective accents keep you visible in low-light conditions. The SummitClimber Backpack isn't merely a carrier; it's a wearable base camp constructed from ruggedly durable nylon and thoughtfully designed for the great outdoors adventurer, promising to withstand tough conditions and provide years of service. So, set off on that quest - the wild beckons! The SummitClimber Backpack - your hearty companion on every expedition!",
        slug: "summitclimber-backpack",
        manual: "/manuals/product_info_8.md",
        images: [
          "/images/21/image_1.jpg"
        ],
      },
      {
        id: 16,
        name: "安心烟雾探测器 F600",
        price: 60.0,
        category: "Backpacks",
        brand: "HikeMate",
        description:
          "Step up your hiking game with HikeMate's TrailLite Daypack. Built for comfort and efficiency, this lightweight and durable backpack offers a spacious main compartment, multiple pockets, and organization-friendly features all in one sleek package. The adjustable shoulder straps and padded back panel ensure optimal comfort during those long exhilarating treks. Course through nature without worry as the daypack's water-resistant fabric protects your essentials from unexpected showers. Plus, never run dry with the integrated hydration system. And did we mention it comes in a plethora of colors and designs? So you can choose one that truly speaks to your outdoorsy soul! Keeping your visibility in mind, we've added reflective accents that light up in low-light conditions. Don't just carry a backpack, adorn a companion that takes you a step ahead in your adventures. Trust the TrailLite Daypack for a hassle-free, enjoyable hiking experience.",
        slug: "traillite-daypack",
        manual: "/manuals/product_info_8.md",
        images: [
          "/images/21/image_2.jpg"
        ],
      },
    ],
  },
  {
    name: "智能娱乐系统",
    slug: "hiking-clothing",
    description:
      "娱乐升级，畅享视听盛宴。Contoso智能娱乐系统提供家庭影院、背景音乐和智能音响等设备，带来影院级的视听享受。无论是观看电影、听音乐还是玩游戏，智能娱乐系统都能为你提供最震撼的体验。让每一个家庭时光都充满欢乐与精彩，尽享娱乐的无限可能。",
    products: [
      {
        id: 3,
        name: "家庭影院梦幻版 M1300",
        price: 120.0,
        category: "Hiking Clothing",
        brand: "MountainStyle",
        description:
          "Discover the joy of hiking with MountainStyle's Summit Breeze Jacket. This lightweight jacket is your perfect companion for outdoor adventures. Sporting a trail-ready, windproof design and a water-resistant fabric, it's ready to withstand any weather. The breathable polyester material and adjustable cuffs keep you comfortable, whether you're ascending a mountain or strolling through a park. And its sleek black color adds style to function. The jacket features a full-zip front closure, adjustable hood, and secure zippered pockets. Experience the comfort of its inner lining and the convenience of its packable design. Crafted for night trekkers too, the jacket has reflective accents for enhanced visibility. Rugged yet chic, the Summit Breeze Jacket is more than a hiking essential, it's the gear that inspires you to reach new heights. Choose adventure, choose the Summit Breeze Jacket.",
        slug: "summit-breeze-jacket",
        manual: "/manuals/product_info_8.md",
        images: [
          "/images/15/image_2.jpg",
        ],
      },
      {
        id: 10,
        name: "音乐魔盒背景音乐系统 N1400",
        price: 75.0,
        category: "Hiking Clothing",
        brand: "MountainStyle",
        description:
          "Meet the TrailBlaze Hiking Pants from MountainStyle, the stylish khaki champions of the trails. These are not just pants; they're your passport to outdoor adventure. Crafted from high-quality nylon fabric, these dapper troopers are lightweight and fast-drying, with a water-resistant armor that laughs off light rain. Their breathable design whisks away sweat while their articulated knees grant you the flexibility of a mountain goat. Zippered pockets guard your essentials, making them a hiker's best ally. Designed with durability for all your trekking trials, these pants come with a comfortable, ergonomic fit that will make you forget you're wearing them. Sneak a peek, and you are sure to be tempted by the sleek allure that is the TrailBlaze Hiking Pants. Your outdoors wardrobe wouldn't be quite complete without them.",
        slug: "trailblaze-hiking-pants",
        manual: "/manuals/product_info_8.md",
        images: [
          "/images/1/image_2.jpg",
        ],
      },
      {
        id: 17,
        name: "震撼音效智能音响 O1500",
        price: 110.0,
        category: "Hiking Clothing",
        brand: "MountainStyle",
        description:
          "Introducing the MountainStyle RainGuard Hiking Jacket - the ultimate solution for weatherproof comfort during your outdoor undertakings! Designed with waterproof, breathable fabric, this jacket promises an outdoor experience that's as dry as it is comfortable. The rugged construction assures durability, while the adjustable hood provides a customizable fit against wind and rain. Featuring multiple pockets for safe, convenient storage and adjustable cuffs and hem, you can tailor the jacket to suit your needs on-the-go. And, don't worry about overheating during intense activities - it's equipped with ventilation zippers for increased airflow. Reflective details ensure visibility even during low-light conditions, making it perfect for evening treks. With its lightweight, packable design, carrying it inside your backpack requires minimal effort. With options for men and women, the RainGuard Hiking Jacket is perfect for hiking, camping, trekking and countless other outdoor adventures. Don't let the weather stand in your way - embrace the outdoors with MountainStyle RainGuard Hiking Jacket!",
        slug: "rainguard-hiking-jacket",
        manual: "/manuals/product_info_8.md",
        images: [
          "/images/1/image_1.jpg"
        ],
      },
    ],
  },
  {
    name: "智能家电",
    slug: "hiking-footwear",
    description:
      "智能家电，解放双手，享受生活。Contoso智能家电系列涵盖智能冰箱、洗衣机、空调等多种设备，通过智能控制实现远程操作和自动化管理。无论是调节室内温度还是安排洗衣时间，智能家电都能为你提供最便捷的解决方案，让你有更多时间享受生活中的美好时刻。",
    products: [
      {
        id: 4,
        name: "智能冰箱 G700",
        price: 140.0,
        category: "Hiking Footwear",
        brand: "TrekReady",
        description:
          "Introducing the TrekReady Hiking Boots - stepping up your hiking game, one footprint at a time! Crafted from leather, these stylistic Trailmates are made to last. TrekReady infuses durability with its reinforced stitching and toe protection, making sure your journey is never stopped short. Comfort? They have that covered too! The boots are a haven with their breathable materials, cushioned insole, with padded collar and tongue; all nestled neatly within their lightweight design. As they say, it's what's inside that counts - so inside you'll find a moisture-wicking lining that quarantines stank and keeps your feet fresh as that mountaintop breeze. Remember the fear of slippery surfaces? With these boots, you can finally tell it to 'take a hike'! Their shock-absorbing midsoles and excellent traction capabilities promise stability at your every step. Beautifully finished in a traditional lace-up system, every adventurer deserves a pair of TrekReady Hiking Boots. Hike more, worry less!",
        slug: "trekready-hiking-boots",
        manual: "/manuals/product_info_8.md",
        images: [
          "/images/10/image_1.jpg",
        ],
      },
      {
        id: 11,
        name: "洁净大师智能洗衣机 H800",
        price: 110.0,
        category: "Hiking Footwear",
        brand: "TrekReady",
        description:
          "Meet the TrekReady TrailWalker Hiking Shoes, the ideal companion for all your outdoor adventures. Constructed with synthetic leather and breathable mesh, these shoes are tough as nails yet surprisingly airy. Their cushioned insoles offer fabulous comfort for long hikes, while the supportive midsoles and traction outsoles with multidirectional lugs ensure stability and excellent grip. A quick-lace system, padded collar and tongue, and reflective accents make these shoes a dream to wear. From combating rough terrain with the reinforced toe cap and heel, to keeping off trail debris with the protective mudguard, the TrailWalker Hiking Shoes have you covered. These waterproof warriors are made to endure all weather conditions. But they're not just about being rugged, they're light as a feather too, minimizing fatigue during epic hikes. Each pair can be customized for a perfect fit with removable insoles and availability in multiple sizes and widths. Navigate hikes comfortably and confidently with the TrailWalker Hiking Shoes. Adventure, here you come!",
        slug: "trailwalker-hiking-shoes",
        manual: "/manuals/product_info_8.md",
        images: [
          "/images/21/image_3.jpg",
        ],
      },
      {
        id: 18,
        name: "清凉智享智能空调 I900",
        price: 70.0,
        category: "Hiking Footwear",
        brand: "TrekReady",
        description:
          "Meet the TrekStar Hiking Sandals from TrekReady \u2013 the ultimate trail companion for your feet. Designed for comfort and durability, these lightweight sandals are perfect for those who prefer to see the world from a hiking trail. They feature adjustable straps for a snug, secure fit, perfect for adapting to the contours of your feet. With a breathable design, your feet will stay cool and dry, escaping the discomfort of sweaty hiking boots on long summer treks. The deep tread rubber outsole ensures excellent traction on any terrain, while the cushioned footbed promises enhanced comfort with every step. For those wild and unpredictable trails, the added toe protection and shock-absorbing midsole protect your feet from rocky surprises. Ingeniously, the removable insole makes for easy cleaning and maintenance, extending the lifespan of your sandals. Available in various sizes and a handsome brown color, the versatile TrekStar Hiking Sandals are just as comfortable on a casual walk in the park as they are navigating rocky slopes. Explore more with TrekReady!",
        slug: "trekstar-hiking-sandals",
        manual: "/manuals/product_info_8.md",
        images: [
          "/images/21/image_4.jpg",
        ],
      },
    ],
  },
  {
    name: "智能控制系统",
    slug: "camping-tables",
    description:
      "一键掌控，尽在指尖。Contoso智能控制系统集成智能音箱、遥控器和网关等设备，实现家庭设备的集中控制。通过语音指令或手机应用，你可以轻松控制家中的灯光、温度、音乐等，享受智能化带来的便捷与高效。让你的家居生活更加智能化，尽享科技带来的便利。",
    products: [
      {
        id: 5,
        name: "超强信号路由器 J1000",
        price: 60.0,
        category: "Camping Tables",
        brand: "CampBuddy",
        description:
          "CampBuddy's BaseCamp Folding Table is an adventurer's best friend. Lightweight yet powerful, the table is a testament to fun-meets-function and will elevate any outing to new heights. Crafted from resilient, rust-resistant aluminum, the table boasts a generously sized 48 x 24 inches tabletop, perfect for meal times, games and more. The foldable design is a godsend for on-the-go explorers. Adjustable legs rise to the occasion to conquer uneven terrains and offer height versatility, while the built-in handle simplifies transportation. Additional features like non-slip feet, integrated cup holders and mesh pockets add a pinch of finesse. Quick to set up without the need for extra tools, this table is a silent yet indispensable sidekick during camping, picnics, and other outdoor events. Don't miss out on the opportunity to take your outdoor experiences to a new level with the BaseCamp Folding Table. Get yours today and embark on new adventures tomorrow! ",
        slug: "basecamp-folding-table",
        manual: "/manuals/product_info_8.md",
        images: [
          "/images/21/image_5.jpg",
        ],
      },
      {
        id: 12,
        name: "万能掌控智能遥控器 K1100",
        price: 50.0,
        category: "Camping Tables",
        brand: "CampBuddy",
        description:
          "Gravitate towards comfort with the TrekMaster Camping Chair from CampBuddy. This trusty outdoor companion boasts sturdy construction using high-quality materials that promise durability and enjoyment for seasons to come. Impeccably lightweight and portable, it's designed to be your go-to seat whether you're camping, at a picnic, cheering at a sporting event, or simply relishing in your backyard pleasures. Beyond its foldable design ensuring compact storage and easy transportation, its ergonomic magic is in the details. An adjustable recline, padded seat and backrest, integrated cup holder, and side pockets ensure the greatest outdoor comfort. Weather resistant, easy to clean, and capable of supporting diverse body types, this versatile chair also comes with a carry bag, ready for your next adventure.",
        slug: "trekmaster-camping-chair",
        manual: "/manuals/product_info_8.md",
        images: [
          "/images/21/image_6.jpg",

        ],
      },
      {
        id: 19,
        name: "智能网关 L1200",
        price: 90.0,
        category: "Camping Tables",
        brand: "CampBuddy",
        description:
          "Discover the joy of outdoor adventures with the CampBuddy Adventure Dining Table. This feature-packed camping essential brings both comfort and convenience to your memorable trips. Made from high-quality aluminum, it promises long-lasting performance, weather resistance, and easy maintenance - all key for the great outdoors! It's light, portable, and comes with adjustable height settings to suit various seating arrangements and the spacious surface comfortably accommodates meals, drinks, and other essentials. The sturdy yet lightweight frame holds food, dishes, and utensils with ease. When it's time to pack up, it fold and stows away with no fuss, ready for the next adventure!  Perfect for camping, picnics, barbecues, and beach outings - its versatility shines as brightly as the summer sun! Durable, sturdy and a breeze to set up, the Adventure Dining Table will be a loyal companion on every trip. Embark on your next adventure and make lifetime memories with CampBuddy. As with all good experiences, it'll leave you wanting more! ",
        slug: "adventure-dining-table",
        manual: "/manuals/product_info_8.md",
        images: [
          "/images/21/image_7.jpg",

        ],
      },
    ],
  },
  // {
  //   name: "Camping Stoves",
  //   slug: "camping-stoves",
  //   description:
  //     "Experience the joy of cooking under the open sky with our range of Camping Stoves. Perfect for the mountaineer foodie or the lakeside lounger, these stoves will turn your outdoor adventure into a gourmet getaway!",
  //   products: [
  //     {
  //       id: 6,
  //       name: "EcoFire Camping Stove",
  //       price: 80.0,
  //       category: "Camping Stoves",
  //       brand: "EcoFire",
  //       description:
  //         "Introducing EcoFire's Camping Stove, your ultimate companion for every outdoor adventure! This portable wonder is precision-engineered with a lightweight and compact design, perfect for capturing that spirit of wanderlust. Made from high-quality stainless steel, it promises durability and steadfast performance. This stove is not only fuel-efficient but also offers an easy, intuitive operation that ensures hassle-free cooking. Plus, it's flexible, accommodating a variety of cooking methods whether you're boiling, grilling, or simmering under the starry sky. Its stable construction, quick setup, and adjustable flame control make cooking a breeze, while safety features protect you from any potential mishaps. And did we mention it also includes an effective wind protector and a carry case for easy transportation? But that's not all! The EcoFire Camping Stove is eco-friendly, designed to minimize environmental impact. So get ready to enhance your camping experience and enjoy delicious outdoor feasts with this unique, versatile stove!",
  //       slug: "ecofire-camping-stove",
  //       manual: "/manuals/product_info_8.md",
  //       images: [
  //         "/images/6/image_1.jpg",
  //         "/images/6/image_2.jpg",
  //         "/images/6/image_3.jpg",
  //         "/images/6/image_4.jpg"
  //       ],
  //     },
  //     {
  //       id: 13,
  //       name: "PowerBurner Camping Stove",
  //       price: 100.0,
  //       category: "Camping Stoves",
  //       brand: "PowerBurner",
  //       description:
  //         "Unleash your inner explorer with the PowerBurner Dual Burner Camping Stove. It's designed for the adventurous heart, with sturdy construction and a high heat output that makes boiling and cooking a breeze. This stove isn't just about strength\u2014it's got finesse too. With adjustable flame control, you can simmer, saut\u00e9, or sizzle with absolute precision. Its compact design and integrated carrying handle make transportation effortless. Moreover, it's crafted to defy the elements, boasting a wind-resistant exterior and piezo ignition system for quick, reliable starts. And when the cooking's done, its removable grates make cleanup swift and easy. Rugged, versatile and reliable, the PowerBurner marks a perfect blend of practicality and performance. So, why wait? Let's turn up the heat on your outdoor culinary adventures today.",
  //       slug: "powerburner-camping-stove",
  //       manual: "/manuals/product_info_8.md",
  //       images: [
  //         "/images/13/image_1.jpg",
  //         "/images/13/image_2.jpg",
  //         "/images/13/image_3.jpg",
  //         "/images/13/image_4.jpg"
  //       ],
  //     },
  //     {
  //       id: 20,
  //       name: "CompactCook Camping Stove",
  //       price: 60.0,
  //       category: "Camping Stoves",
  //       brand: "CompactCook",
  //       description:
  //         "Step into the great outdoors with the CompactCook Camping Stove, a convenient, lightweight companion perfect for all your culinary camping needs. Boasting a robust design built for harsh environments, you can whip up meals anytime, anywhere. Its wind-resistant and fuel-versatile features coupled with an efficient cooking performance, ensures you won't have to worry about the elements or helpless taste buds while on adventures. The easy ignition technology and adjustable flame control make cooking as easy as a walk in the park, while its compact, foldable design makes packing a breeze. Whether you're camping with family or hiking solo, this reliable, portable stove is an essential addition to your gear. With its sturdy construction and safety-focused design, the CompactCook Camping Stove is a step above the rest, providing durability, quality, and peace of mind. Be wild, be free, be cooked for with the CompactCook Camping Stove!",
  //       slug: "compactcook-camping-stove",
  //       manual: "/manuals/product_info_8.md",
  //       images: [
  //         "/images/20/image_1.jpg",
  //         "/images/20/image_2.jpg",
  //         "/images/20/image_3.jpg",
  //         "/images/20/image_4.jpg"
  //       ],
  //     },
  //   ],
  // },
  // {
  //   name: "Sleeping Bags",
  //   slug: "sleeping-bags",
  //   description:
  //     "Absolutely, snuggle into comfort after a day's adventure with Contoso Outdoors' Sleeping Bags! Whether cozying up under the stars or hibernating in your camping breaks, these sleeping bags offer a warm and inviting retreat from the wild outdoors. Specially designed for the wandering souls, it's outdoor slumber comfort, redefined!",
  //   products: [
  //     {
  //       id: 7,
  //       name: "CozyNights Sleeping Bag",
  //       price: 100.0,
  //       category: "Sleeping Bags",
  //       brand: "CozyNights",
  //       description:
  //         "Embrace the great outdoors in any season with the lightweight CozyNights Sleeping Bag! This durable three-season bag is superbly designed to give hikers, campers, and backpackers comfort and warmth during spring, summer, and fall. With a compact design that folds down into a convenient stuff sack, you can whisk it away on any adventure without a hitch. The sleeping bag takes comfort seriously, featuring a handy hood, ample room and padding, and a reliable temperature rating. Crafted from high-quality polyester, it ensures long-lasting use and can even be zipped together with another bag for shared comfort. Whether you're gazing at stars or catching a quick nap between trails, the CozyNights Sleeping Bag makes it a treat. Don't just sleep\u2014 dream with CozyNights.",
  //       slug: "cozynights-sleeping-bag",
  //       manual: "/manuals/product_info_8.md",
  //       images: [
  //         "/images/7/image_1.jpg",
  //         "/images/7/image_2.jpg",
  //         "/images/7/image_3.jpg",
  //         "/images/7/image_4.jpg"
  //       ],
  //     },
  //     {
  //       id: 14,
  //       name: "MountainDream Sleeping Bag",
  //       price: 130.0,
  //       category: "Sleeping Bags",
  //       brand: "MountainDream",
  //       description:
  //         "Meet the MountainDream Sleeping Bag: your new must-have companion for every outdoor adventure. Designed to handle 3-season camping with ease, it comes equipped with a premium synthetic insulation that will keep you cozy even when temperatures fall down to 15\u00b0F! Sporting a durable water-resistant nylon shell and soft breathable polyester lining, this bag doesn't sacrifice comfort for toughness. The star of the show is the contoured mummy shape that not only provides optimal heat retention but also cuts down on the weight. A smooth, snag-free YKK zipper with a unique anti-snag design allows for hassle-free operation, while the adjustable hood and full-length zipper baffle work together to ensure you stay warm all night long. Need to bring along some essentials? Not to worry! There's an interior pocket just for that. And when it's time to pack up? Just slip it into the included compression sack for easy storage and transport. Whether you're a backpacking pro or a camping novice, the MountainDream Sleeping Bag is the perfect blend of durability, warmth, and comfort that you've been looking for.",
  //       slug: "mountaindream-sleeping-bag",
  //       manual: "/manuals/product_info_8.md",
  //       images: [
  //         "/images/14/image_1.jpg",
  //         "/images/14/image_2.jpg",
  //         "/images/14/image_3.jpg",
  //         "/images/14/image_4.jpg"
  //       ],
  //     },
  //   ],
  // },
];

export const getCategories = (): Category[] => {
  return categories;
};