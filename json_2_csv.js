// this module is made for converting json to csv
// not for converting csv to json

fetch("./data.json")
  .then((response) => response.json())
  .then((json) => console.log(json));

// const replacer = (key, value) => (value === null ? "" : value); // specify how you want to handle null values here
// const header = Object.keys(items[0]);
// const csv = [
//   header.join(","), // header row first
//   ...items.map((row) =>
//     header
//       .map((fieldName) => JSON.stringify(row[fieldName], replacer))
//       .join(",")
//   ),
// ].join("\r\n");

// console.log(csv);
