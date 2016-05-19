'use strict';

if (!global.hasOwnProperty('isRegExp')) global.isRegExp = isRegExp;
if (!global.hasOwnProperty('isNotRegExp')) global.isNotRegExp = isNotRegExp;

/**
 * Check does the given javascript object is a RegExp.
 *
 * @param {*} object - Javascript object (array, object, string, etc) to check the type from.
 * @returns {boolean}
 */
function isRegExp(object) {
    return toString.call(object) === '[object RegExp]';
}

/**
 * Check does the given javascript object is not a RegExp.
 *
 * @param {*} object - Javascript object (array, object, string, etc) to check the type from.
 * @returns {boolean}
 */
function isNotRegExp(object) {
    return !isRegExp(object);
}

module.exports = {isRegExp, isNotRegExp};
