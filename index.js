const Calculate = {
  factorial(inputNumber) {
    if (inputNumber === 0) {
      return 1;
    }
    for (let j = inputNumber - 1; j >= 1; j--) {
      inputNumber = inputNumber * j;
    }

    return inputNumber;
  }
};

module.exports = Calculate;


