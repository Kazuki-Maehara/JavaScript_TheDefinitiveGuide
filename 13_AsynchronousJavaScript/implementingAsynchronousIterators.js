function clock(interval, max=Infinity) {
  // A Promise-ified version of setTimeout that we can use await with.
  // Note that this takes an absolute time instead of an interval.
  function until(time) {
    return new Promise(resolve => setTimeout(resolve, time - Date.now()));
  }

  // Return an asynchronously iterable object
  return {
    startTime: Date.now(),
    count: 1,
    async next() {
      if (this.count > max) {
        return { done: true };
      }
      // Figure out when the next iteration should begin,
      let targetTime = this.startTime + this.count * interval;
      // wait until that time,
      await until(targetTime);
      // and return the count value in an iteration result object.
      return { value: this.count++ };
    },
    // This method means that this iterator object is also an iterable.
    [Symbol.asyncIterator]() { return this; }
  };
}

// A test function that uses the async generator with for/await.
async function test() {
  for await (let tick of clock(300, 10)) {
    console.log(tick);
  }
}

test();
