# Promises

This repository provides examples and explanations of working with Promises in JavaScript. Promises are a powerful asynchronous programming feature that simplifies handling asynchronous operations and enables better control flow and error handling.

## Usage

To run the code examples, simply execute the corresponding JavaScript files using Node.js:

```bash
node filename.js
```

## Code Examples

### Example 1: Promises.all

This example demonstrates the usage of `Promise.all`, which takes an array of Promises and returns a new Promise that is fulfilled with an array of resolved values from the input Promises. If any of the Promises in the input array rejects, the `Promise.all` immediately rejects with the reason of that rejected Promise.

```javascript
// ...

Promise.all([askFirstDealer(), askSecondDealer(), askThirdDealer()])
    .then(prices => {
        console.log(prices);
    })
    .catch(error => {
        console.log(error);
    });

// ...
```

### Example 2: Promise.race

This example showcases `Promise.race`, which takes an array of Promises and returns a new Promise that is settled (fulfilled or rejected) as soon as any of the input Promises settles. The settled value or reason of the first resolved or rejected Promise will be the settled value or reason of the `Promise.race`.

```javascript
// ...

Promise.race([askFirstDealer(), askSecondDealer(), askThirdDealer()])
    .then(prices => {
        console.log(prices);
    })
    .catch(reason => {
        console.log(reason);
    });

// ...
```

Feel free to explore and modify the examples to deepen your understanding of Promises and their usage in JavaScript.

### Testing with Mocha

The repository also includes tests using the Mocha testing framework to ensure the correctness of Promise-related code. The tests utilize the Chai assertion library to make assertions on the behavior of Promises.

The tests cover aspects of Promise handling, including fulfilled Promises, rejected Promises, and assertions on resolved values.

Here's an example of a Mocha test case for Promises:

```javascript
const { expect } = require('chai');

describe('Promise Tests', () => {
  it('should resolve with the expected data', () => {
    return fetchData()
      .then(data => {
        expect(data).to.have.property('message', 'Data fetched successfully');
      });
  });

  it('should handle errors correctly', () => {
    return fetchData()
      .then(() => {
        throw new Error('Unexpected resolution');
      })
      .catch(error => {
        expect(error).to.be.an.instanceOf(Error);
        expect(error.message).to.equal('Unexpected resolution');
      });
  });
});
```

In this test, we assert that the Promise resolves with the expected data in the first test case. The second test case verifies that errors are handled correctly by asserting that an error is thrown and its message matches the expected value.

Feel free to explore and modify the examples and tests to deepen your understanding of Promises and their usage in JavaScript.

## License

This repository is licensed under the MIT License. You are free to use, modify, and distribute the code in accordance with the terms of the license.

## Contribution

Contributions to improve and expand this repository are welcome! If you have any suggestions, bug reports, or enhancements, please submit an issue or a pull request. Let's learn and grow together!

Happy coding with Promises!