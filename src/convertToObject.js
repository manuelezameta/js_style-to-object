'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  sourceString.trim().replace(/\s+/g, ' ');

  if (sourceString.length === 0) {
    return {};
  }

  const result = {};

  sourceString.split(';').forEach((s) => {
    const [key, value] = s.split(':');

    if (!key || !value) {
      return;
    } // Skip invalid lines

    result[key.trim()] = value.trim();
  });

  return result;
}

module.exports = convertToObject;
