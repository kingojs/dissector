const fs = require('fs');

/**
 * 
 * @param {string} collectionPath - Path to the collection from which the source code is obtained.
 */
const dissect = (collectionPath) => {
  const collection = JSON.parse(fs.readFileSync(collectionPath, { encoding: 'utf8', flag: 'r' }));
  console.log(collection);
};

/**
 * 
 * @param {string} sourceCode - Code previously extracted from the original collection.
 * @param {string} collectionPath - Path to the collection to modify its internal source code.
 */
const undissect = (sourceCode, collectionPath) => {
  console.log('undissect');
};

module.exports = { dissect, undissect };