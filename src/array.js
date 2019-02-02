/**
 * @description zip two array
 * @param array -> Array
 * @usage [1,2,3].zip([2,3,4]) -> [[1,2], [2,3], [3,4]]
 */

Array.prototype.zip = function(array) {
  return this.map((element, index) => [element, array[index]])
}

/**
 * @description return first item form array
 */
Array.prototype.first = function() {
  return this[0]
}

/**
 * @description return last item form array
 */
Array.prototype.last = function() {
  return this[this.length - 1]
}
