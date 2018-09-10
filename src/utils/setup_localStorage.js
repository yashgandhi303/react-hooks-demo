if (!window.localStorage) {
  window.localStorage = {};
  Object.assign(window.localStorage, {
    removeItem: function removeItem(key) {
      delete this[key]
    }.bind(window.localStorage),
    setItem: function setItem(key, val) {
      this[key] = String(val)
    }.bind(window.localStorage),
    getItem: function getItem(key) {
      return this[key]
    }.bind(window.localStorage),
  })
}
