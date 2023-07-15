const { expect } = require('chai');

// Assume we have a function that returns a Promise
function fetchUser() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      const user = { name: 'John', age: 30 };
      resolve(user);
    }, 1000);
  });
}

describe('Async Tests', () => {
  // Testing a fulfilled Promise
  it('should fulfill the promise', () => {
    return expect(fetchUser()).to.be.fulfilled;
  });

  // Testing the resolved value of a Promise
  it('should eventually have the expected user', () => {
    return expect(fetchUser()).to.eventually.deep.equal({ name: 'John', age: 30 });
  });

  // Testing a rejected Promise
  it('should reject the promise', () => {
    return expect(Promise.reject('Error')).to.be.rejected;
  });

  // Testing a rejected Promise with a specific error message
  it('should reject the promise with a specific error', () => {
    return expect(Promise.reject('Error')).to.be.rejectedWith('Error');
  });

  // Testing multiple assertions
  it('should fulfill the promise and have the expected user', () => {
    return fetchUser().then(user => {
      expect(user).to.have.property('name', 'John');
      expect(user).to.have.property('age').that.is.a('number');
    });
  });
});
