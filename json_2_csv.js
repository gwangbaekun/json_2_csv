// this module is made for converting json to csv
// not for converting csv to json

// custom field----------------------------------------------------
const fieldToConvert = "id";
const fileToRead = "./data.json";

json = require(fileToRead);
const items = json.customers;
// ----------------------------------------------------------------

const replacer = (key, value) => (value === null ? "" : value); // specify how you want to handle null values here
const header = Object.keys(items[0]);
const csv = [
  header.join(","), // header row first
  ...items.map((row) =>
    header
      .map((fieldName) => JSON.stringify(row[fieldName], replacer))
      .join(",")
  ),
].join("\r\n");

const specificField = items.map((row) => row[fieldToConvert]);

console.log(csv);
console.log("specificField", specificField);
