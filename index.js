const fs = require('fs');

/**
 * 
 * @param {string} collectionPath - Path to the collection from which the source code is obtained.
 */
const dissect = (collectionPath) => {
  const collection = JSON.parse(fs.readFileSync(collectionPath, { encoding: 'utf8', flag: 'r' }));
  console.log({ collection: JSON.stringify(collection) });
};

/**
 * 
 * @param {string} sourceCode - Code previously extracted from the original collection.
 * @param {string} collectionPath - Path to the collection to modify its internal source code.
 */
const reverseDissect = (sourceCode, collectionPath) => {
  console.log({ sourceCode, collectionPath });
};

module.exports = { dissect, reverseDissect };