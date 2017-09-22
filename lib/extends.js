function extend(destination, source) {
  for (var i in source) {
    if (source.hasOwnProperty(i)) {
      destination[i] = source[i];
    }
  }
}

module.exports = extend;