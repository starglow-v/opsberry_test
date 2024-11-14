const { parse } = require('json2csv');
const fs = require('fs');

exports.generateCSV = async (resources) => {
  const csv = parse(resources);
  fs.writeFileSync('iam_resources.csv', csv);
  console.log('CSV file generated');
};