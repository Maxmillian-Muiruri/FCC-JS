const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;

  if (responseFromServer === true) {
    resolve(" We got the data");
  } else {
    reject("Data not received");
  }
});
// Handle a Fulfilled Promise with then
makeServerRequest.then((result) => {
  console.log(result);
});
// Handle a Rejected Promise with catch

makeServerRequest.catch((error) => {
  console.log(error);
});
