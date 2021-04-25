function storage(operation, location, data) {
  if (typeof data !== "undefined") {
    localStorage[operation](location, data);
  }
  localStorage[operation](location);
}

export default storage;
