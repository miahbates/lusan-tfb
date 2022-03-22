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
    subCategory: "Brocolli",
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
    subCategory: "Brocolli",
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
    subCategory: "Brocolli",
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
];

export default products;
