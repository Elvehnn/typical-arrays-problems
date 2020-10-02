
exports.min = function min (array) {
  if (!Array.isArray(array) || !array.length) {
    return 0;
   } else {
      let minElement = array[0];
      for (let i = 1; i < array.length; i++) {
        if (array[i] < minElement) {
          minElement = array[i];
          }
      }
      return minElement;
  }
}


exports.max = function max (array) {
  if (!Array.isArray(array) || !array.length) {
    return 0;
   } else {
      let maxElement = array[0];
      for (let i = 1; i < array.length; i++) {
        if (array[i] > maxElement) {
          maxElement = array[i];
          }
      }
      return maxElement;
  }
}

exports.avg = function avg (array) {
  if (!Array.isArray(array) || !array.length) {
    return 0;
   } else {
      let averageArray = 0;
      for (let i = 0; i < array.length; i++) {
        averageArray += array[i];
         
      }
      return (averageArray/array.length);
  }
}
