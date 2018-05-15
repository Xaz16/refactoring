/**
 * Refactored function for get index
 * @param s {String}
 * @param a {String}
 * @param b {String}
 * @returns {number}
 */

function func(s, a, b) {
  if (!s) {
    return -1;
  }
  var i = s.length - 1;
  var aIndex = s.indexOf(a, i);
  var bIndex = s.indexOf(b, i);

  while (aIndex === -1 && bIndex === -1 && i > 0) {
    aIndex = s.indexOf(a, i);
    bIndex = s.indexOf(b, i);
    i -= 1;
  }

  return aIndex !== -1 ? aIndex : bIndex;
}

module.exports = func;
