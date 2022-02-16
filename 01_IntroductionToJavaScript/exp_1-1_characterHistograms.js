/*
This Node program reads text from standard input, computes the frequency
of each letter in that text, and displays a histogram of the most
frequently used characters. It requires Node 12 or higher to run.

In a Unix-type environment you can invoke the program like this:
node exp_1-1_characterHistograms.js < SOME_TEXT_FILE.txt
*/


// This class extends Map so that the get() method returns the specified
// value instead of null when the key is not in the map.
class DefaultMap extends Map {
  constructor(defaultValue) {
    // Invoke superclass constructor
    super();
    this.defaultValue = defaultValue;
  }

  get(key) {
    if (this.has(key)) {
      return super.get(key);
    } else {
      return this.defaultValue;
    }
  }
}

// This class computes and displays letter frequency histograms.
class Histogram {
  constructor() {
    this.letterCounts = new DefaultMap(0);
    this.totalLetters = 0;
  }

  // This function updates the histogram with the letters of text.
  add(text) {
    // Remove whitespace from the text, and convert to upper case.
    text = text.replace(/\s/g, "").toUpperCase();
    for (let character of text) {
      let count = this.letterCounts.get(character);
      this.letterCounts.set(character, count+1);
      this.totalLetters++;
    }
  }

  // Convert the histogram to a string that displays an ASCII graphic.
  toString() {
    // Convert the Map to an array of [key, value] arrays.
    let entries = [...this.letterCounts];

    // Sort the array by count, then alphabetically.
    entries.sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0] < b[0] ? -1 : 1;
      } else {
        return b[1] - a[1];
      }
    });

    // Convert the counts to percentages.
    for (let entry of entries) {
      entry[1] = (entry[1] / this.totalLetters) * 100
    }

    // Drop any entries less than 1%.
    entries = entries.filter(entry => entry[1] >= 1);

    // Convert each entry to a line of text.
    let lines = entries.map(
      ([l, n]) => `${l}: ${"#".repeat(Math.round(n))} ${n.toFixed(2)}%`
    );

    // Return the concatenated lines, separated by newline characters.
    return lines.join("\n");
  }
}


// This async (Promise-returning) function creates a Histogram object,
// asynchronously reads chunks of text from standard input, and adds those chunks to
// the histogram. When it reaches the end of the stream, it returns this histogram.
async function histogramFromStdin() {
  process.stdin.setEncoding("utf-8");
  let histogram = new Histogram();
  for await (let chunk of process.stdin) {
    histogram.add(chunk);
  }
  return histogram;
}


// This one final line of code is the main body of the program.
// It makes a Histogram object from standard input, then prints the histogram.
histogramFromStdin().then(histogram => {
  console.log(histogram.toString());
});
