import { generateFilters, generateProviders } from "./database-functions";

const products = [
  {
    category: "Vegetables",
    subCategory: "Tomato",
    variety: "Juliet",
    description:
      "The Juliet tomato is a grape tomato variety that is sweet and delicious. It's often nicknamed the “mini Roma” because of its shape. These tomatoes are soft and juicy like cherry tomatoes and enjoy a long shelf life. The plants have vigorous vines, known for setting abundant fruits.",
    imgs: [
      "https://images.unsplash.com/photo-1627022534691-b703158d3024?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      "https://images.unsplash.com/photo-1508094427028-b1e27931dddb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1524593166156-312f362cada0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    ],
    ...generateFilters(),
    providers: generateProviders(),
  },
  {
    category: "Vegetables",
    subCategory: "Tomato",
    variety: "Roma",
    description:
      "A roma tomato is a paste tomato. Paste tomatoes, like roma tomatoes, generally have a thicker fruit wall, fewer seeds, and a denser but more grainy flesh. Roma tomatoes tend to be oblong in shape and heavy for their size. Roma tomatoes are determinate, which means that the fruit ripens at one time, rather than continually through the season. While they can be eaten raw, they are at their best when they are cooked.",
    imgs: [
      "https://images.unsplash.com/photo-1561155713-50f2a38fde2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1568581789190-ae90a7da930b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    ],
    ...generateFilters(),
    providers: generateProviders(),
  },
  {
    category: "Vegetables",
    subCategory: "Tomato",
    variety: "Early Girl",
    description:
      "Early Girl tomatoes have it all: a classic round shape about tennis-ball size, speedy growth and compatibility with low-watering methods. Moreover, Early Girl tomato care is easy, and you can grow them almost anywhere, including containers.",
    imgs: [
      "https://images.unsplash.com/photo-1598512752271-33f913a5af13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1594057687713-5fd14eed1c17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
      "https://images.unsplash.com/photo-1508913826512-066cf8127860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    ],
    ...generateFilters(),
    providers: generateProviders(),
  },
  {
    category: "Vegetables",
    subCategory: "Beet",
    variety: "Bull's Blood",
    description:
      "A dual purpose variety grow for both its salad leaves and blood ret beets. This beautiful beet has deep reddish-purple leaves, which are very sweet, tender and a very popular addition to salad.",
    imgs: [
      "https://images.unsplash.com/photo-1533231040102-5ec7a63e6d0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1593105544559-ecb03bf76f82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1627738668643-1c166aecbf3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    ],
    ...generateFilters(),
    providers: generateProviders(),
  },
  {
    category: "Vegetables",
    subCategory: "Beet",
    variety: "Cylindra",
    description:
      "Produces a long, slim, cylindrical shaped beetroot, with a dark red colour to both the outer smooth skin and the inner sweet tasting flesh. This is the variety to grow for slicing.",
    imgs: [
      "https://www.simplyseed.co.uk/user/products/Beetroot%20Cylindra.jpg",
      "https://www.mammothonion.co.uk/wp-content/uploads/2021/01/cylindra-beet14.jpg",
      "https://www.wilko.com/assets/bWFzdGVyfGltYWdlc3wzNDA3MDV8aW1hZ2UvanBlZ3xpbWFnZXMvaDZjL2hlMS84ODIzNjQ5Nzk2MTI2LmpwZ3xlZDVkYjgyY2E2NWYyOGNhMzRiYTU5NDhiYjQ4M2IyYmQ4ZDdkMDlhZDUxZTlkNGMzYjRkNDc5NTJkOGQ1NTRl/0339077-1.jpg",
    ],
    ...generateFilters(),
    providers: generateProviders(),
  },
  {
    category: "Vegetables",
    subCategory: "Beet",
    variety: "Golden Detroit",
    description:
      "A sweet beetroot that can be eaten finely sliced, grated raw or used in smoothies. It can also be roasted, steamed, boiled or pickled, just like purple beets. Use the leaves as a substitute for chard or spinach.",
    imgs: [
      "https://i.etsystatic.com/5423753/r/il/dac5ed/3628443516/il_794xN.3628443516_d7xe.jpg",
      "https://cdn.shopify.com/s/files/1/0955/4450/products/golden-detroit-beet-seeds-29933079396509_1024x1024.jpg?v=1628011967",
      "https://cdn.shopify.com/s/files/1/1766/2959/products/Golden_Detroit_2_600x.jpg?v=1535246570",
    ],
    ...generateFilters(),
    providers: generateProviders(),
  },
  {
    category: "Vegetables",
    subCategory: "Broccoli",
    variety: "Green Magic",
    description:
      "A hybrid variety of heading broccoli. This variety matures in as little as 60 days from transplant and produces large, densely-packed heads. It is especially prized for its ability to produce abundant harvests during warm spring temperatures.",
    imgs: [
      "https://images.unsplash.com/photo-1628773822990-202aed1e567e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1628773822503-930a7eaecf80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1587351177732-5b0739d1bd44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1227&q=80",
    ],
    ...generateFilters(),
    providers: generateProviders(),
  },
  {
    category: "Vegetables",
    subCategory: "Broccoli",
    variety: "Purple Sprouting",
    description:
      "Purple broccoli plants are extremely cold hardy withstanding temps below 10 degrees F. (-12 C.). This unique attribute is critical to success in growing the plant, as Purple Sprouting broccoli growing will require at least 180 days to mature.",
    imgs: [
      "https://www.australiantimes.co.uk/wp-content/uploads/2013/04/purple-brocoli-1200x854.jpg",
      "https://www.plantsofdistinction.co.uk/stock/mweb/img000066.jpg",
      "https://www.gardeningknowhow.com/wp-content/uploads/2019/12/purple-sprouting-broccoli-400x533.jpg",
    ],
    ...generateFilters(),
    providers: generateProviders(),
  },
  {
    category: "Vegetables",
    subCategory: "Broccoli",
    variety: "Calabrese",
    description:
      "Calabrese is a very easy, fast-growing crop, also known as American, Italian or green sprouting broccoli. Reaching 60cm (2ft) tall, it produces bluish-green heads up to 15cm (6in) across that are harvested in summer or autumn, depending on sowing time.",
    imgs: [
      "https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1628773822503-930a7eaecf80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    ],
    ...generateFilters(),
    providers: generateProviders(),
  },
  {
    category: "Vegetables",
    subCategory: "Cauliflower",
    variety: "Romanesco",
    description:
      "Cauliflower Romanesco has striking pale lime-green heads with florets that form unusual turrets. For all its striking appearance it does taste very good - a slightly milder taste than cauliflower with the nuttiness of broccoli.",
    imgs: [
      "https://images.unsplash.com/photo-1580346812366-33923f14ae99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80",
      "https://images.unsplash.com/photo-1643142232119-365fd82a4428?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1618009317215-a4034d797910?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
    ],
    ...generateFilters(),
    providers: generateProviders(),
  },
  {
    category: "Vegetables",
    subCategory: "Cauliflower",
    variety: "Graffiti",
    description:
      "Graffiti F1 has the deepest purple cauliflower curds which is perfect for adding colour to any summer or autumn dish, delicious and highly nutritious. Matures within 75 to 80 days with a good head weight. This variety has a good heat tolerance.",
    imgs: [
      "https://images.unsplash.com/photo-1593565288582-e7caf65c5a96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80",
      "https://images.unsplash.com/photo-1565205331035-583bfda722cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
      "https://images.unsplash.com/photo-1604060340947-7639e2a10c98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
    ],
    ...generateFilters(),
    providers: generateProviders(),
  },
  {
    category: "Vegetables",
    subCategory: "Cauliflower",
    variety: "Fioretto",
    description:
      "Fioretto 85 has 5 to 6 inches heads of loose, white florets with light green stems. However, it requires 45 to 85 days to mature, making it a good choice for fall. It, too, tops out at about 18 inches, is highly pest resistant, and has a nutty flavor and crunchy texture.",
    imgs: [
      "http://cdn.shopify.com/s/files/1/0548/8204/2028/products/FiorettoHero2_1200x1200.jpg?v=1617857990",
      "http://cdn.shopify.com/s/files/1/0548/8204/2028/products/ONPShop-27_1200x1200.jpg?v=1617857990",
      "https://i.pinimg.com/474x/c1/35/a8/c135a8623b8b44034b037d3574f964b7.jpg",
    ],
    ...generateFilters(),
    providers: generateProviders(),
  },
  {
    category: "Flowers",
    subCategory: "Sweetpeas",
    variety: "Prima Ballerina",
    description:
      "Sweet Peas are care free plants with a bubbly personality and are loved by gardeners the country over, and are a popular addition to our range of flower seeds. Whether scrambling over arches above an entrance to a path or planted around obelisks set in borders, these are beautiful plants.",
    imgs: [
      "https://images.unsplash.com/photo-1602749239939-a1cede030a2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1625344612160-f0f29a641617?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      "https://images.unsplash.com/photo-1601277264651-7c904284df62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    ],
    ...generateFilters(),
    providers: generateProviders(),
  },
  {
    category: "Flowers",
    subCategory: "Sweetpeas",
    variety: "Almost Black",
    description:
      "The flowers are small and plain of a Old Fashioned style, well-scented ,sweet scented, very very dark blue, but gives the appearance of being black. Looks stunning with white Sweet Peas.",
    imgs: [
      "https://cdn.shopify.com/s/files/1/0051/4205/2934/products/AlmostBlackSweetPea_1_1024x1024.jpg?v=1567561340",
      "https://cdn.shopify.com/s/files/1/0104/8100/8691/products/3021-0650_sweetpeacupani_170x170_crop_center.jpg?v=1611233999",
      "https://images.unsplash.com/photo-1518343265568-51eec52d40da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80",
    ],
    ...generateFilters(),
    providers: generateProviders(),
  },
  {
    category: "Flowers",
    subCategory: "Sweetpeas",
    variety: "St George",
    description:
      "Lathyrus odoratus 'St George' is a great mix of red and white Spencer-type sweet peas, the colour of the St George flag. The blooms last well in water, making them excellent for cutting. Lathyrus odoratus 'St George' is an ideal choice for the garden, and will quickly cover a trellis or obelisk.",
    imgs: [
      "https://images.immediate.co.uk/production/volatile/sites/10/2018/08/a6c7c920-a0fa-48d5-9b1b-f220def2b7ec-9886c04.jpg?quality=45&resize=620,413",
      "https://images.immediate.co.uk/production/volatile/sites/10/2018/08/7fd0f548-4536-42c3-ad0c-89ff185aebda-7fa73a6.jpg?quality=45&resize=768,574",
      "https://images.immediate.co.uk/production/volatile/sites/10/2018/08/c5fd38ba-343d-41be-b7a1-b612c351360d-8630057.jpg?quality=45&resize=620,413",
    ],
    ...generateFilters(),
    providers: generateProviders(),
  },
  {
    category: "Herbs",
    subCategory: "Rosemary",
    variety: "Benenden Blue",
    description:
      "Benenden Blue is a woody, perennial herb with fragrant evergreen needle-like leaves. It is native to the Mediterranean region, and as such, prefers a light, sandy soil, which will fully satisfy its meagre feeding needs.",
    imgs: [
      "https://images.unsplash.com/photo-1519966124849-e51203b261ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1586161665517-0325578c2784?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      "https://images.unsplash.com/photo-1617255326312-f07c95c0c858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=410&q=80",
    ],
    ...generateFilters(),
    providers: generateProviders(),
  },
  {
    category: "Herbs",
    subCategory: "Rosemary",
    variety: "Lady in White",
    description:
      "Lady in White is a compact, evergreen shrub with upright stems bearing linear, aromatic, dark green leaves and whorls of small, two-lipped, white flowers from late spring into summer.",
    imgs: [
      "https://images.unsplash.com/photo-1627795785435-8dc02e0fc5f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1582583642496-643df9792977?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      "https://images.unsplash.com/photo-1620173767088-57749ba1781b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=875&q=80",
    ],
    ...generateFilters(),
    providers: generateProviders(),
  },
  {
    category: "Herbs",
    subCategory: "Rosemary",
    variety: "Majorca Pink",
    description:
      "Majorca Pink is an upright aromatic, evergreen shrub with needle-like green leaves and small pale pink flowers, with a stripe on the lower lip. The flowers occur in the axils of the leaves in spring and summer.",
    imgs: [
      "https://images.unsplash.com/photo-1513025260-96589997f84c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1604453119896-7bd3eea44575?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1617977123446-551021b85584?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    ],
    ...generateFilters(),
    providers: generateProviders(),
  },
  {
    category: "Vegetables",
    subCategory: "Carrots",
    variety: "Danvers",
    description:
      "Danvers carrots are medium sized carrots, often called “half size.” They were once a choice carrot for their flavor, especially when young, because mature roots can become fibrous. Danvers were an early orange cultivar, as previous favored selections were white, red, yellow, and purple.",
    imgs: [
      "https://images.unsplash.com/photo-1582515073490-39981397c445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      "https://images.unsplash.com/photo-1447175008436-054170c2e979?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80",
      "https://images.unsplash.com/photo-1633380110125-f6e685676160?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    ],
    ...generateFilters(),
    providers: generateProviders(),
  },
  {
    category: "Vegetables",
    subCategory: "Carrots",
    variety: "Nantes",
    description:
      "Nantes carrots were first mentioned and described in the 1885 edition of the Henri Vilmorin family seed catalogue. He stated that this carrot variety has a nearly perfect cylindrical root and smooth, almost red, skin that is mild and sweet in flavor.",
    imgs: [
      "https://images.unsplash.com/photo-1589927986089-35812388d1f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1445282768818-728615cc910a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1626846661139-5c4fbd66cbd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    ],
    ...generateFilters(),
    providers: generateProviders(),
  },
  {
    category: "Vegetables",
    subCategory: "Carrots",
    variety: "Chantenay",
    description:
      "Chantenay carrots are short, stout carrots with light orange flesh and orange-red colored cores. They mature in 65-75 days to 4- to 5-inch (10-13 cm.) long and 2- to 2 ½-inch (5-6.5 cm.) thick roots.",
    imgs: [
      "https://images.unsplash.com/photo-1512310557339-4d41c55015f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80",
      "https://images.unsplash.com/photo-1590848791238-fb3596a2ba56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGNoYW50ZW5heSUyMGNhcnJvdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1579584828095-494884160804?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
    ],
    ...generateFilters(),
    providers: generateProviders(),
  },
  {
    category: "Herbs",
    subCategory: "Basil",
    variety: "Sweet Basil",
    description:
      "Sweet basil, annual herb of the mint family (Lamiaceae), grown for its aromatic leaves. Basil is likely native to India and is widely grown as a kitchen herb. The leaves are used fresh or dried to flavour meats, fish, salads, and sauces; basil tea is a stimulant",
    imgs: [
      "https://images.unsplash.com/photo-1629157247277-48f870757026?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1527964105263-1ac6265a569f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1619805640532-21cce5fe542b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    ],
    ...generateFilters(),
    providers: generateProviders(),
  },
  {
    category: "Herbs",
    subCategory: "Basil",
    variety: "Dark Opal",
    description:
      "Noted for its striking foliage and delicate licorice scent, Ocimum basilicum or Dark Opal Basil is an annual or biennial herb with stunning deep purple almost black leaves. In summer, attractive spikes of small, tubular cerise flowers arranged in whorls are borne above the foliage.",
    imgs: [
      "https://images.immediate.co.uk/production/volatile/sites/10/2018/08/7ac6818e-ae52-44ac-ac84-3eaed81798bc-34d31a5.jpg?quality=90&resize=768%2C574",
      "https://cdn11.bigcommerce.com/s-er6we2l3gw/images/stencil/1280x1280/products/26508/141993/190245_2__89296.1616089825.jpg?c=1",
      "https://cdn11.bigcommerce.com/s-er6we2l3gw/images/stencil/1280x1280/products/26313/146514/140079BC_3__27947.1620126004.jpg?c=1",
    ],
    ...generateFilters(),
    providers: generateProviders(),
  },
  {
    category: "Herbs",
    subCategory: "Basil",
    variety: "Tulsi",
    description:
      "Tulsi basil is an herb that grows in a shrub-like habit up to 60 centimeters or taller, depending on the variety, and develops clusters of fragrant pink or violet blossoms when mature.",
    imgs: [
      "https://images.unsplash.com/photo-1627738663093-d0779d56e3bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJhc2lsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1558070510-504a0db43997?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFzaWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1572978577745-245cde7e1da3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    ],
    ...generateFilters(),
    providers: generateProviders(),
  },
  {
    category: "Flowers",
    subCategory: "Petunia",
    variety: "Grandiflora",
    description:
      "Grandifloras are one of the oldest varieties. These petunias grow 8 to 12 inches high and have the large (4 to 5 inch), wavy-edged blossoms that petunias first became known for. The flowers can be single or the more ruffled doubles.",
    imgs: [
      "https://images.unsplash.com/photo-1558502187-68acb21ae9b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      "https://images.unsplash.com/photo-1629727538955-e65c0b6789fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1558502187-d883ac019745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    ],
    ...generateFilters(),
    providers: generateProviders(),
  },
  {
    category: "Flowers",
    subCategory: "Petunia",
    variety: "Multiflora",
    description:
      "Multiflora petunias are smaller plants with more numerous but smaller blooms. The stems are strong, which makes multiflora petunia varieties suitable for windy climates. The blooms tend to hold up a bit longer than Grandiflora petunia varieties, especially during rainy weather.",
    imgs: [
      "https://images.unsplash.com/photo-1557158805-537344b5b9ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1629728098687-e5005a6e54cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1629727434632-34d73efb9cb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    ],
    ...generateFilters(),
    providers: generateProviders(),
  },
  {
    category: "Flowers",
    subCategory: "Petunia",
    variety: "Milliflora",
    description:
      "Milliflora petunias are much smaller than any other petunias on the market. The flowers are only 1 to 1½ inches wide, but they are prolific and last all season! Spreading or Trailing Petunias: These are low-growing and can spread as much as 3 to 4 feet.",
    imgs: [
      "https://images.unsplash.com/photo-1629729666027-2fe25a1f0856?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1644316615426-25195b9f3e00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1630895101946-00dae2c50b8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    ],
    ...generateFilters(),
    providers: generateProviders(),
  },
];

export default products;
