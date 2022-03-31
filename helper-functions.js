import products from "./database/products";

// local storage
function saveToLocalStorage(key, product) {
  // get what is currently in local storage
  const currentLocalStorage = JSON.parse(localStorage.getItem(key)) || [];
  // add a value to the current storage
  currentLocalStorage.push(product);
  // set storage to include new value
  localStorage.setItem(key, JSON.stringify(currentLocalStorage));
}

function removeFromLocalStorage(key, variety) {
  // exclude the product of current variety
  const filteredLocalStorage = JSON.parse(localStorage.getItem(key)).filter(
    (product) => product.variety !== variety
  );
  // set local storage to the filtered array
  localStorage.setItem(key, JSON.stringify(filteredLocalStorage));
  return filteredLocalStorage;
}

function getFromLocalStorage(key) {
  const saved = JSON.parse(localStorage.getItem(key));
  return saved || [];
}

// database tags
// returns an array of product tags containing the keys which have a 'true' value
function generateTags(obj) {
  const keys = Object.keys(obj);
  return keys.filter((key) => {
    if (obj[key]) {
      return key;
    }
  });
}

// find product by variety
function findContent(capitalisedVariety) {
  const foundObject = products.find((productObject) => {
    return productObject.variety === capitalisedVariety;
  });
  return foundObject;
}

export {
  saveToLocalStorage,
  removeFromLocalStorage,
  getFromLocalStorage,
  generateTags,
  findContent,
};
