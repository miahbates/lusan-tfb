// load chance and create new instance
const Chance = require("chance");
const chance = new Chance();

// assign random booleans to an object's properties
function assignBoolean(obj) {
  const keys = Object.keys(obj);
  keys.forEach((key) => (obj[key] = chance.bool()));
}

function generateFilters() {
  let filtersObj = {
    type: { organic: null, openPollinated: null, hybrid: null },
    climate: { sunny: null, dry: null, shady: null },
    water: { water: null, humid: null, dry: null },
    soil: { clay: null, drained: null, chalky: null, peaty: null, sandy: null },
  };

  // get keys [type, climate, water, soil]
  const keys = Object.keys(filtersObj);
  // access nested objects by key and pass into assignBoolean function
  keys.forEach((key) => assignBoolean(filtersObj[key]));
  return filtersObj;
}

// return an array of provider objects
function generateProviders() {
  // lookup object of providers and their websites
  const allProviders = {
    "Real Seeds": "https://www.realseeds.co.uk/",
    "Seed Cooperative": "https://seedcooperative.org.uk/",
    "West Coast Seeds": "https://www.westcoastseeds.com/",
    "Vital Seeds": "https://vitalseeds.co.uk/",
    "Eden Brothers": "https://www.edenbrothers.com/",
  };

  // generate array of unique provider names (between 1-5)
  const randomProviders = chance.pickset(
    Object.keys(allProviders),
    chance.integer({ min: 1, max: 5 })
  );

  // build array of provider objects
  return randomProviders.map((provider) => {
    const obj = {
      name: provider,
      price: chance.integer({ min: 2, max: 10 }),
      spp: chance.integer({ min: 20, max: 50 }),
      inStock: chance.bool(),
      url: allProviders[provider],
    };
    return obj;
  });
}

module.exports = { generateFilters, generateProviders };
