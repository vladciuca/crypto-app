function storage(operation, location, data) {
  if (operation === "set") {
    localStorage.setItem(location, JSON.stringify(data));
  } else if (operation === "get") {
    const foundData = localStorage.getItem(location);
    if (foundData) {
      return JSON.parse(foundData);
    } else {
      return null;
    }
  } else {
    localStorage.removeItem(location);
  }
}

export default storage;
