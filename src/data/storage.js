function loadLocal(key, fallback) {
  let obj = localStorage.getItem(key);
  if (obj) {
    try {
      return JSON.parse(obj);
    } catch (e) {
      localStorage.removeItem(key);
    }
  }
  return fallback;
}
function saveLocal(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export { loadLocal, saveLocal };
