
exports.min = function min(array = []) {
  if (!array.length) {
    return 0;
  }
  let minElement = Infinity;
  array.forEach(element => {
    if (element < minElement) {
      minElement = element;
    }
  });
  if (minElement == Infinity) {
    return 0;
  }
  return minElement;
}

exports.max = function max(array = []) {
  if (!array.length) {
    return 0;
  }
  let maxElement = -Infinity;
  array.forEach(element => {
    if (element > maxElement) {
      maxElement = element;
    }
  });
  if (maxElement == -Infinity) {
    return 0;
  }
  return maxElement;
}

exports.avg = function avg(array = []) {
  if (!array.length) {
    return 0;
  }
  let sum = 0;
  array.forEach(element => {
    sum += element;
  })
  if (sum == 0) {
    return 0;
  }
  let mean = sum / array.length;
  return mean;
}
