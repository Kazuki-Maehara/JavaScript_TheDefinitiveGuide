let addr = "";
let customer = {
  "address0": "US",
  "address1": "France",
  "address2": "Japan",
  "address3": "UK",
  "address4": "Thai",
};
for (let i = 0; i < 5; i++) {
  addr += customer[`address${i}`] + "\n";
}

console.log(addr);


portfolio = {
      "US": 1,
      "France": 2,
      "Japan": 3,
      "UK": 4,
      "Thai": 5,
};

console.log(computeValue(portfolio));

function computeValue(portfolio) {
  let total = 0.0;
  for (let stock in portfolio) {      // For each stock in the portfolio:
    let shares = portfolio[stock];    // get the number of shares
    let price = getQuote(stock);      // look up share price
    total += shares * price;          // add stock value to total value
  }
  return total;                       // return total value.

  function getQuote(stock) {
    quotes = {
      "US": 10,
      "France": 15,
      "Japan": 20,
      "UK": 5,
      "Thai": 2,
    };
    return quotes[stock];
  }
}
