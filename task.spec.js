const task = require('./task');

describe('Task', () => {

  it('Should return object with original array and reversed', () => {
    const testArray = [1, "2", 3, "a"];
    const expectedResult = {
      originalArray: [1, "2", 3, "a"],
      reversedArray: ["a", 3, "2", 1]
    };
    const result = task(testArray);

    expect(result).toEqual(expectedResult);

  });

});
