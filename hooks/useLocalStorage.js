import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
  /**
   * initialise the state as either:
   * 1. the value saved in localStorage, or
   * 2. the initialValue
   */
  const [state, setState] = useState(() => {
    const saved = JSON.parse(localStorage.getItem(key));
    return saved || initialValue;
  });

  // whenever we update the state we also update localStorage
  function setAndSave(value) {
    localStorage.setItem(key, value);
    setState(value);
  }

  return [state, setAndSave];
}
