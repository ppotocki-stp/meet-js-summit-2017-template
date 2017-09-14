module.exports = function task(array) {
    const reversedArray = array.reverse();
    return {
      originalArray: array,
      reversedArray: reversedArray
    }
};