function saveToLocalStorage(key, value) {
  // get what is currently in local storage
  const currentLocalStorage = JSON.parse(localStorage.getItem(key)) || [];
  // add a value to the current storage
  currentLocalStorage.push(value);
  // set storage to include new value
  localStorage.setItem(key, JSON.stringify(currentLocalStorage));
}

export { saveToLocalStorage };
