"use strict;";
const request = require("request");

const fetchBreedDescription = function (breedName, callback) {
  url = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;
  ///console.log(url);
  request(url, (error, resp, body) => {
    if (error) {
      //console.log(`Error occured in fetching, details:- ${error}`);
      callback(`Error occured in fetching, details:- ${error}`, null);
    }
    //console.log(typeof body);
    //console.log(resp);
    const data = JSON.parse(body);
    // console.log(data);
    //console.log(typeof data);
    const breed = data[0];
    //console.log(`Description: ${breed.description}`);
    if (breed) {
      // console.log(`Description: ${breed.description}`);
      callback(null, breed.description);
    } else {
      //console.log(`Failed to find breed ${breedName}`, null)
      callback(`Failed to find breed ${breedName}`, null);
    }
  });
};
//fetchBreedDescription("Chartreux");

module.exports = { fetchBreedDescription };
