(function() {
    'use strict';

    if (!window.hasOwnProperty('isRegExp')) window.isRegExp = isRegExp;
    if (!window.hasOwnProperty('isNotRegExp')) window.isNotRegExp = isNotRegExp;

    function isRegExp(object) {
        return toString.call(object) === '[object RegExp]';
    }

    function isNotRegExp(object) {
        return !isRegExp(object);
    }
})();
