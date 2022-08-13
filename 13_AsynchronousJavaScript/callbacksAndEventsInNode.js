const http = require('https');


function callback(arg1, arg2){
  console.log(arg1, arg2);
}

getText("http://localhost:8000/", callback);

// Read the text content of the URL and asynchronously pass it to the callback.
function getText(url, callback) {
  // Start an HTTP GET request for the URL.
  let request = http.get(url);

  // Register a function to handle the "response" event.
  request.on("response", response => {
    // The response event means that response headers have been received.
    let httpStatus = response.statusCode;

    // The body of the HTTP response has not been received yet.
    // So we register more event handlers to be called when it arrives.
    response.setEncoding("utf-8");
    let body = "";

    // This event handler is called when a chunk of the body is ready.
    response.on("data", chunk => {
      body += chunk;
    });

    // This event handler is called when the response is complete.
    response.on("end", () => {
      if (httpStatus === 200) {
        callback(null, body);
      } else {
        callback(httpStatus, null);
      }

    });
  });

  // We also register an event handler for lower-level network errors.
  request.on("error", (err) => {
    callback(err, null);
  });


}
