// update an object state
function updateObjState(obj, event) {
  return {
    ...obj,
    [event.target.value]: event.target.checked,
  };
}

export { updateObjState };
