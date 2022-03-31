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
    variety: "Early Girl",
    description:
      "Early Girl tomatoes have it all: a classic round shape about tennis-ball size, speedy growth and compatibility with low-watering methods. Moreover, Early Girl tomato care is easy, and you can grow them almost anywhere, including containers.",
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
    variety: "Golden Detroit",
    description:
      "A sweet beetroot that can be eaten finely sliced, grated raw or used in smoothies. It can also be roasted, steamed, boiled or pickled, just like purple beets. Use the leaves as a substitute for chard or spinach.",
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
    subCategory: "Broccoli",
    variety: "Green Magic",
    description:
      "A hybrid variety of heading broccoli. This variety matures in as little as 60 days from transplant and produces large, densely-packed heads. It is especially prized for its ability to produce abundant harvests during warm spring temperatures.",
    imgs: [
      "https://images.unsplash.com/photo-1628773822990-202aed1e567e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1628773822503-930a7eaecf80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://www.australiantimes.co.uk/wp-content/uploads/2013/04/purple-brocoli-1200x854.jpg",
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
      "https://images.unsplash.com/photo-1628773822990-202aed1e567e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1628773822503-930a7eaecf80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://www.australiantimes.co.uk/wp-content/uploads/2013/04/purple-brocoli-1200x854.jpg",
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
      "https://images.unsplash.com/photo-1628773822990-202aed1e567e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1628773822503-930a7eaecf80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://www.australiantimes.co.uk/wp-content/uploads/2013/04/purple-brocoli-1200x854.jpg",
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
    subCategory: "Sweet Peas",
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
    subCategory: "Sweet Peas",
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
    subCategory: "Sweet Peas",
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
      "hhttps://images.unsplash.com/photo-1617977123446-551021b85584?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    ],
    ...generateFilters(),
    providers: generateProviders(),
  },
];

export default products;
