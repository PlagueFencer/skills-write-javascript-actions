
const fetch = require("node-fetch");


const url = "https://icanhazdadjoke.com/";
const headers = {
  Accept: "application/json",
  "User-Agent": "Writing JavaScript action GitHub Skills exercise."
};


async function getJoke() {
  // Always use the imported fetch, not global
  const res = await fetch(url, { method: "GET", headers });
  const data = await res.json();
  return data.joke;
}

module.exports = getJoke;