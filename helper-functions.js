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

// get from local storage
function getFromLocalStorage(key) {
  const saved = JSON.parse(localStorage.getItem(key));
  return saved || [];
}
export { saveToLocalStorage, removeFromLocalStorage, getFromLocalStorage };
